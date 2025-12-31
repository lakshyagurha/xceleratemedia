/**
 * Google Sheets Webhook Integration
 * Uses Google Apps Script webhook instead of service account
 * Simpler setup - just need the webhook URL
 */

export async function appendToSheetViaWebhook(data: {
  timestamp: string;
  fullName: string;
  email: string;
  skills?: string;
  rolePreference?: string;
  description?: string;
  resumeUrl: string;
  resumeFilename: string;
}): Promise<void> {
  const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK;

  if (!webhookUrl) {
    throw new Error('Missing NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK environment variable');
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: data.timestamp,
        fullName: data.fullName,
        email: data.email,
        skills: data.skills || '',
        rolePreference: data.rolePreference || '',
        description: data.description || '',
        resumeUrl: data.resumeUrl,
        resumeFilename: data.resumeFilename,
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook request failed: ${response.status} ${response.statusText}`);
    }

    // Apps Script webhooks typically return text, not JSON
    const result = await response.text();
    console.log('Google Sheets webhook response:', result);
  } catch (error) {
    console.error('Error syncing to Google Sheets via webhook:', error);
    // Don't throw - we want to continue even if Sheets sync fails
    // The error is logged, but we don't throw to allow the request to succeed
    // since the data is already stored in Supabase
  }
}

