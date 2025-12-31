# Join Us Job Application System - Setup Guide

This guide will help you set up the job application system with Supabase and Google Sheets integration.

## Prerequisites

- A Supabase account and project
- A Google Cloud project with Sheets API enabled
- A Google Service Account with access to your target spreadsheet

## Step 1: Supabase Setup

### 1.1 Create the Database Table

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  skills TEXT,
  role_preference TEXT,
  description TEXT,
  resume_url TEXT NOT NULL,
  resume_filename TEXT NOT NULL,
  source_page TEXT DEFAULT 'join-us',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for admin queries
CREATE INDEX idx_job_applications_created_at ON job_applications(created_at DESC);
CREATE INDEX idx_job_applications_email ON job_applications(email);
```

### 1.2 Create Storage Bucket

1. Go to Storage in your Supabase dashboard
2. Create a new bucket named `resumes`
3. Make it **public** (toggle "Public bucket")
4. Set up the following storage policy for uploads:

```sql
-- Allow anonymous uploads
CREATE POLICY "Allow anonymous uploads"
ON storage.objects FOR INSERT
TO anon
WITH CHECK (bucket_id = 'resumes');

-- Allow public reads
CREATE POLICY "Allow public reads"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'resumes');
```

### 1.3 Set Row Level Security (RLS)

Enable RLS and allow anonymous inserts:

```sql
-- Enable RLS
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts"
ON job_applications FOR INSERT
TO anon
WITH CHECK (true);
```

### 1.4 Get Your Supabase Credentials

1. Go to Project Settings > API
2. Copy your `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
3. Copy your `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Copy your `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

## Step 2: Google Sheets Setup

### 2.1 Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

### 2.2 Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

### 2.3 Generate Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON" format
5. Download the JSON file

### 2.4 Set Up Your Google Sheet

1. Create a new Google Sheet or use an existing one
2. Set up the header row (first row) with these columns:
   - A: Timestamp
   - B: Full Name
   - C: Email
   - D: Skills
   - E: Role Preference
   - F: Description
   - G: Resume URL
   - H: Resume Filename

3. Share the sheet with your service account email:
   - Click "Share" button
   - Add the service account email (from the JSON file, field: `client_email`)
   - Give it **Editor** access
   - Click "Send"

### 2.5 Get Your Google Sheets Credentials

From the downloaded JSON file:
- `client_email` → `GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL`
- `private_key` → `GOOGLE_SHEETS_PRIVATE_KEY` (copy the entire key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`)
- Get the Spreadsheet ID from the Google Sheet URL:
  - URL format: `https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`
  - Copy the `{SPREADSHEET_ID}` part → `GOOGLE_SHEETS_SPREADSHEET_ID`

## Step 3: Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in all the environment variables in `.env.local` with your actual values

3. **Important**: Never commit `.env.local` to version control (it's already in `.gitignore`)

## Step 4: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/join-us`

3. Fill out the form and submit a test application

4. Verify:
   - The application appears in your Supabase `job_applications` table
   - The resume file appears in your Supabase Storage `resumes` bucket
   - A new row appears in your Google Sheet

## Troubleshooting

### Supabase Issues

- **Storage upload fails**: Check that the bucket is public and policies are set correctly
- **Database insert fails**: Verify RLS policies allow anonymous inserts
- **File not accessible**: Ensure the storage bucket is public and the file path is correct

### Google Sheets Issues

- **Authentication fails**: Verify the service account email has Editor access to the sheet
- **API quota exceeded**: Google Sheets API has rate limits; check your usage
- **Wrong sheet range**: Ensure the sheet has the correct header row and adjust the range in `src/lib/google-sheets/client.ts` if needed

### General Issues

- **Environment variables not loading**: Restart your development server after adding new variables
- **File upload size errors**: Check that files are under 10 MB
- **Form validation errors**: Ensure all required fields are filled and email format is correct

## Security Notes

- Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client
- Keep your Google Service Account JSON file secure
- Use environment variables for all sensitive credentials
- Regularly rotate your service account keys
- Monitor your Supabase and Google Cloud usage for unusual activity

