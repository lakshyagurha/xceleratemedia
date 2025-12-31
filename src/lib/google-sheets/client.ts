import { google } from 'googleapis';

let authClient: any = null;

function getAuthClient() {
  if (authClient) {
    return authClient;
  }

  const serviceAccountEmail = process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
    throw new Error('Missing Google Sheets environment variables');
  }

  authClient = new google.auth.JWT({
    email: serviceAccountEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return authClient;
}

/**
 * Check if webhook method is preferred (simpler setup)
 */
export function shouldUseWebhook(): boolean {
  return !!process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK;
}

export async function appendToSheet(data: {
  timestamp: string;
  fullName: string;
  email: string;
  skills?: string;
  rolePreference?: string;
  description?: string;
  resumeUrl: string;
  resumeFilename: string;
}): Promise<void> {
  try {
    const auth = getAuthClient();
    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Missing GOOGLE_SHEETS_SPREADSHEET_ID');
    }

    const values = [[
      data.timestamp,
      data.fullName,
      data.email,
      data.skills || '',
      data.rolePreference || '',
      data.description || '',
      data.resumeUrl,
      data.resumeFilename,
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:H', // Adjust range if needed
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values,
      },
    });
  } catch (error) {
    console.error('Error syncing to Google Sheets:', error);
    // Don't throw - we want to continue even if Sheets sync fails
    // The error is logged, but we don't throw to allow the request to succeed
    // since the data is already stored in Supabase
  }
}

