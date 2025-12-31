/**
 * Google Apps Script Code for Job Applications Webhook
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code
 * 4. Paste this entire code
 * 5. Click "Deploy" > "New deployment"
 * 6. Select type: "Web app"
 * 7. Execute as: "Me"
 * 8. Who has access: "Anyone"
 * 9. Click "Deploy"
 * 10. Copy the Web App URL - this is your webhook URL
 * 11. Add it to your .env.local as NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the JSON data from the POST request
    const data = JSON.parse(e.postData.contents);
    
    // Extract values (in the order they should appear in the sheet)
    const timestamp = data.timestamp || new Date().toISOString();
    const fullName = data.fullName || '';
    const email = data.email || '';
    const skills = data.skills || '';
    const rolePreference = data.rolePreference || '';
    const description = data.description || '';
    const resumeUrl = data.resumeUrl || '';
    const resumeFilename = data.resumeFilename || '';
    
    // Prepare the row data (must match your header row order)
    const rowData = [
      timestamp,
      fullName,
      email,
      skills,
      rolePreference,
      description,
      resumeUrl,
      resumeFilename
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Optional: Test function to verify the script works
 * Run this from the Apps Script editor to test
 */
function testWebhook() {
  const testData = {
    timestamp: new Date().toISOString(),
    fullName: 'Test User',
    email: 'test@example.com',
    skills: 'Testing',
    rolePreference: 'Developer',
    description: 'This is a test',
    resumeUrl: 'https://example.com/resume.pdf',
    resumeFilename: 'test-resume.pdf'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

