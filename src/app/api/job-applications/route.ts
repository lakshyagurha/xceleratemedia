import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerClient } from '@/lib/supabase/client';
import { uploadResume } from '@/lib/supabase/storage';
import { appendToSheet, shouldUseWebhook } from '@/lib/google-sheets/client';
import { appendToSheetViaWebhook } from '@/lib/google-sheets/webhook';
import { JobApplicationSubmission } from '@/types/job-application';

const MAX_TEXT_LENGTH = 5000;

const applicationSchema = z.object({
  full_name: z.string().min(1, 'Full name is required').max(200),
  email: z.string().email('Invalid email address'),
  skills: z.string().max(500).optional(),
  role_preference: z.string().max(200).optional(),
  description: z.string().max(MAX_TEXT_LENGTH).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const full_name = formData.get('full_name') as string;
    const email = formData.get('email') as string;
    const skills = formData.get('skills') as string | null;
    const role_preference = formData.get('role_preference') as string | null;
    const description = formData.get('description') as string | null;
    const resume = formData.get('resume') as File | null;

    // Validate required fields
    if (!resume) {
      return NextResponse.json(
        { error: 'Resume file is required' },
        { status: 400 }
      );
    }

    // Validate form data
    const validationResult = applicationSchema.safeParse({
      full_name,
      email,
      skills: skills || undefined,
      role_preference: role_preference || undefined,
      description: description || undefined,
    });

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.issues[0].message },
        { status: 400 }
      );
    }

    // Upload resume to Supabase Storage
    let uploadResult;
    try {
      uploadResult = await uploadResume(resume);
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : 'Failed to upload resume' },
        { status: 400 }
      );
    }

    // Prepare data for database
    const applicationData: JobApplicationSubmission = {
      full_name: validationResult.data.full_name,
      email: validationResult.data.email,
      skills: validationResult.data.skills,
      role_preference: validationResult.data.role_preference,
      description: validationResult.data.description,
      resume_url: uploadResult.url,
      resume_filename: resume.name,
    };

    // Insert into Supabase database
    const supabase = createServerClient();
    const { data: dbData, error: dbError } = await supabase
      .from('job_applications')
      .insert([applicationData])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save application' },
        { status: 500 }
      );
    }

    // Sync to Google Sheets (non-blocking)
    // Use webhook if available (simpler), otherwise use service account
    const timestamp = new Date().toISOString();
    const sheetData = {
      timestamp,
      fullName: applicationData.full_name,
      email: applicationData.email,
      skills: applicationData.skills,
      rolePreference: applicationData.role_preference,
      description: applicationData.description,
      resumeUrl: applicationData.resume_url,
      resumeFilename: applicationData.resume_filename,
    };

    if (shouldUseWebhook()) {
      // Use webhook method (simpler - just needs webhook URL)
      appendToSheetViaWebhook(sheetData).catch((error) => {
        console.error('Google Sheets webhook sync failed:', error);
      });
    } else {
      // Use service account method (requires full setup)
      appendToSheet(sheetData).catch((error) => {
        console.error('Google Sheets API sync failed:', error);
      });
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully',
        id: dbData.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

