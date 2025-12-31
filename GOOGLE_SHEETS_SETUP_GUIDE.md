# Complete Google Sheets Setup Guide - Step by Step

This guide will walk you through connecting your app to Google Sheets for automatic syncing of job applications.

## Step 1: Create a Google Cloud Project

### 1.1 Go to Google Cloud Console
1. Go to [https://console.cloud.google.com](https://console.cloud.google.com)
2. Sign in with your Google account (use the account where you want the sheet to be)

### 1.2 Create a New Project
1. Click the project dropdown at the top (next to "Google Cloud")
2. Click **"New Project"**
3. Fill in:
   - **Project name**: `Xcelerate Media` (or any name you prefer)
   - **Organization**: Leave as default (if applicable)
   - **Location**: Leave as default
4. Click **"Create"**
5. Wait a few seconds for the project to be created
6. Select your new project from the dropdown (if not already selected)

---

## Step 2: Enable Google Sheets API

### 2.1 Navigate to APIs & Services
1. In the left sidebar, click **"APIs & Services"**
2. Click **"Library"** (or "Enabled APIs and services")

### 2.2 Enable Google Sheets API
1. In the search bar, type: `Google Sheets API`
2. Click on **"Google Sheets API"** from the results
3. Click the blue **"Enable"** button
4. Wait a few seconds for it to enable
5. You should see a green checkmark and "API enabled" message

---

## Step 3: Create a Service Account

### 3.1 Navigate to Service Accounts
1. In the left sidebar, click **"APIs & Services"**
2. Click **"Credentials"**
3. Click **"+ CREATE CREDENTIALS"** at the top
4. Select **"Service account"** from the dropdown

### 3.2 Fill in Service Account Details
1. **Service account name**: `xcelerate-sheets-service` (or any name)
2. **Service account ID**: Will auto-fill (you can change it)
3. **Description**: `Service account for syncing job applications to Google Sheets` (optional)
4. Click **"Create and Continue"**

### 3.3 Skip Optional Steps
1. **Grant this service account access to project**: Skip this (click **"Continue"**)
2. **Grant users access to this service account**: Skip this (click **"Done"**)

You should now see your service account in the list!

---

## Step 4: Create and Download Service Account Key

### 4.1 Open Service Account
1. Click on the service account you just created (the name you gave it)
2. You'll see details like **Service account ID** and **Email**

### 4.2 Create Key
1. Click the **"Keys"** tab at the top
2. Click **"Add Key"** dropdown
3. Select **"Create new key"**
4. Select **"JSON"** format
5. Click **"Create"**

### 4.3 Download JSON File
1. A JSON file will automatically download to your computer
2. **IMPORTANT**: Save this file somewhere safe! You'll need it in the next steps
3. The file will be named something like: `xcelerate-media-xxxxx-xxxxx.json`

---

## Step 5: Extract Credentials from JSON File

### 5.1 Open the JSON File
1. Open the downloaded JSON file in a text editor (VS Code, Notepad, etc.)
2. You'll see something like this:

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "xxxxx",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n",
  "client_email": "xcelerate-sheets-service@your-project-id.iam.gserviceaccount.com",
  "client_id": "xxxxx",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "xxxxx"
}
```

### 5.2 Find These Values
You need to extract **2 values** from this JSON:

1. **`client_email`** - This is your service account email
   - Example: `xcelerate-sheets-service@your-project-id.iam.gserviceaccount.com`
   - Copy this entire email address

2. **`private_key`** - This is the private key (the long string)
   - It starts with `-----BEGIN PRIVATE KEY-----` and ends with `-----END PRIVATE KEY-----`
   - Copy the ENTIRE key including the BEGIN and END lines
   - Keep all the `\n` characters (they're important!)

---

## Step 6: Create Your Google Sheet

### 6.1 Create New Sheet
1. Go to [https://sheets.google.com](https://sheets.google.com)
2. Click **"Blank"** to create a new spreadsheet
3. Or click the **"+"** icon

### 6.2 Set Up Header Row
1. In **Row 1**, add these column headers (one per cell):

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Full Name | Email | Skills | Role Preference | Description | Resume URL | Resume Filename |

2. **Important**: Make sure these are in Row 1, columns A through H exactly as shown above

### 6.3 Name Your Sheet
1. Click on "Untitled spreadsheet" at the top
2. Rename it to something like: `Job Applications - Xcelerate Media`
3. Press Enter

### 6.4 Get the Spreadsheet ID
1. Look at your browser's address bar
2. The URL will look like:
   ```
   https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
   ```
3. Copy the long string between `/d/` and `/edit`
   - In the example above, it's: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`
4. This is your **Spreadsheet ID** - save it!

---

## Step 7: Share Sheet with Service Account

### 7.1 Open Share Settings
1. In your Google Sheet, click the **"Share"** button (top right, blue button)
2. A dialog box will open

### 7.2 Add Service Account Email
1. In the "Add people and groups" field, paste your **service account email** (the `client_email` from Step 5.2)
2. Click the dropdown next to the email and select **"Editor"** (not Viewer!)
3. **Uncheck** "Notify people" (you don't need to notify a service account)
4. Click **"Share"**

### 7.3 Verify Access
1. You should see a confirmation message
2. The service account email should appear in the "People with access" list with "Editor" role

---

## Step 8: Add Environment Variables

### 8.1 Open Your `.env.local` File
1. In your project root, open `.env.local`
2. You should already have Supabase variables there

### 8.2 Add Google Sheets Variables
Add these three lines to your `.env.local` file:

```env
# Google Sheets Configuration
GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL=your-service-account-email@project-id.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nPrivate\nKey\nHere\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id-here
```

### 8.3 Replace with Your Actual Values

**Example:**

```env
GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL=xcelerate-sheets-service@my-project-123456.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

**Important Notes:**
- The `private_key` must be wrapped in **double quotes** (`"`)
- Keep all the `\n` characters in the private key (they represent newlines)
- The private key should be on one line with `\n` characters, not actual line breaks
- Copy the ENTIRE key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`

### 8.4 Save the File
1. Save `.env.local`
2. Make sure it's in your project root directory

---

## Step 9: Restart Your Development Server

### 9.1 Stop Current Server
1. In your terminal where `npm run dev` is running, press `Ctrl+C` to stop it

### 9.2 Start Server Again
```bash
npm run dev
```

This ensures the new environment variables are loaded.

---

## Step 10: Test the Integration

### 10.1 Submit a Test Application
1. Go to `http://localhost:3000/join-us`
2. Fill out the form:
   - Full Name: `Test User`
   - Email: `test@example.com`
   - Skills: `Testing`
   - Role Preference: `Developer`
   - Description: `Testing Google Sheets integration`
   - Resume: Upload any PDF file
3. Click **"Submit Application"**
4. You should see: ✅ "Application Submitted Successfully!"

### 10.2 Check Google Sheet
1. Go back to your Google Sheet
2. Refresh the page (F5 or Cmd+R)
3. You should see a **new row** (Row 2) with:
   - Timestamp
   - Full Name: Test User
   - Email: test@example.com
   - Skills: Testing
   - Role Preference: Developer
   - Description: Testing Google Sheets integration
   - Resume URL: (a clickable link)
   - Resume Filename: (the file name you uploaded)

### 10.3 Verify Resume URL
1. Click on the Resume URL in the sheet
2. It should open your resume file from Supabase Storage

---

## Troubleshooting

### Problem: "Missing Google Sheets environment variables" error
**Solution:**
- Check that `.env.local` has all 3 Google Sheets variables
- Make sure variable names are exactly correct (case-sensitive)
- Restart your dev server after adding variables
- Check that the private key is wrapped in double quotes

### Problem: "Error syncing to Google Sheets" in console
**Solution:**
- Check that the service account email has **Editor** access to the sheet
- Verify the spreadsheet ID is correct (check the URL)
- Make sure Google Sheets API is enabled in Google Cloud Console
- Check that the private key is correctly formatted (with `\n` characters)

### Problem: Data saves to Supabase but not to Google Sheets
**Solution:**
- This is expected behavior! The app still works even if Sheets sync fails
- Check the terminal/console for error messages
- Verify the service account has Editor access
- Check that the sheet has the correct header row (A1-H1)

### Problem: "Invalid credentials" error
**Solution:**
- Verify the private key is copied correctly (including BEGIN/END lines)
- Make sure the private key is wrapped in double quotes in `.env.local`
- Check that `\n` characters are preserved in the private key
- Try regenerating the service account key if needed

### Problem: "Permission denied" error
**Solution:**
- Make sure you shared the sheet with the service account email
- Verify the service account has **Editor** (not Viewer) access
- Check that you used the correct service account email (`client_email` from JSON)

---

## Quick Checklist

- [ ] Google Cloud project created
- [ ] Google Sheets API enabled
- [ ] Service account created
- [ ] Service account key (JSON) downloaded
- [ ] `client_email` copied from JSON
- [ ] `private_key` copied from JSON (with BEGIN/END lines)
- [ ] Google Sheet created with header row (A1-H1)
- [ ] Spreadsheet ID copied from URL
- [ ] Sheet shared with service account email (Editor access)
- [ ] All 3 environment variables added to `.env.local`
- [ ] Dev server restarted
- [ ] Test submission successful
- [ ] Data appears in Google Sheet

---

## Your Final `.env.local` Should Look Like:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Google Sheets Configuration
GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL=xcelerate-sheets-service@your-project-id.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

---

## Security Notes

- ⚠️ **Never commit `.env.local` to Git** (it's already in `.gitignore`)
- ⚠️ **Keep your service account JSON file secure** - don't share it publicly
- ⚠️ **The private key is sensitive** - treat it like a password
- ✅ The service account only has access to the specific sheet you shared
- ✅ You can revoke access anytime by removing the service account from the sheet's share settings

---

## Need Help?

If you're stuck:
1. Check the browser console (F12) for error messages
2. Check the terminal where `npm run dev` is running for errors
3. Verify all steps above were completed
4. Make sure you restarted the dev server after adding environment variables
5. Double-check that the service account email has Editor access to the sheet

