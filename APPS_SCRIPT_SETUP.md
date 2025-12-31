# Google Apps Script Webhook Setup - Simple Method

This is the **simpler alternative** to service accounts. You just need to create a Google Apps Script and get the webhook URL.

## Why Use Webhook Instead of Service Account?

✅ **Simpler** - No service account setup needed  
✅ **No credentials** - Just a webhook URL  
✅ **Faster setup** - 5 minutes vs 15 minutes  
✅ **Easier to maintain** - No private keys to manage  

⚠️ **Note**: Webhook URL is public, but Apps Script can validate requests if needed

---

## Step-by-Step Setup

### Step 1: Create Your Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Add header row in **Row 1** (columns A through H):

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Full Name | Email | Skills | Role Preference | Description | Resume URL | Resume Filename |

4. Name your sheet (e.g., "Job Applications")

---

### Step 2: Create Apps Script

1. In your Google Sheet, click **"Extensions"** in the menu
2. Click **"Apps Script"**
3. A new tab will open with the Apps Script editor

---

### Step 3: Add the Code

1. Delete any existing code in the editor
2. Copy the entire code from `google-apps-script-code.js` file
3. Paste it into the Apps Script editor
4. Click **"Save"** (💾 icon) or press `Ctrl+S` / `Cmd+S`
5. Give it a name like: `Job Applications Webhook`

---

### Step 4: Deploy as Web App

1. Click **"Deploy"** button (top right)
2. Click **"New deployment"**
3. Click the **⚙️ gear icon** next to "Select type"
4. Select **"Web app"**
5. Fill in the deployment settings:
   - **Description**: `Job Applications Webhook` (optional)
   - **Execute as**: **"Me"** (your Google account)
   - **Who has access**: **"Anyone"** (important!)
6. Click **"Deploy"**
7. **Authorize** the script when prompted:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to [Project Name] (unsafe)"
   - Click "Allow"
8. Copy the **Web App URL** - this is your webhook URL!

---

### Step 5: Add Webhook URL to Environment Variables

1. Open your `.env.local` file
2. Add this line:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK=https://script.google.com/macros/s/YOUR_WEBHOOK_ID/exec
```

**Example:**
```env
NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK=https://script.google.com/macros/s/AKfycbz_RbL09dX5us3OeiNTh8t88PI2q9hcLclDIiBWgQlrH4d2AljcIYgdWsbANAzljdxwgg/exec
```

3. Save the file

---

### Step 6: Restart Dev Server

1. Stop your dev server (`Ctrl+C`)
2. Start it again: `npm run dev`

---

### Step 7: Test It!

1. Go to `http://localhost:3000/join-us`
2. Fill out and submit a test application
3. Check your Google Sheet - you should see a new row!

---

## Your Webhook URL Format

Your webhook URL should look like:
```
https://script.google.com/macros/s/AKfycbz_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec
```

**Important**: Make sure it ends with `/exec` (not `/dev`)

---

## Troubleshooting

### Problem: "Missing webhook URL" error
**Solution:**
- Check that `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK` is in `.env.local`
- Restart your dev server after adding it
- Make sure the URL is correct (ends with `/exec`)

### Problem: Data not appearing in sheet
**Solution:**
- Check Apps Script execution log: Apps Script editor → "Executions" tab
- Verify the sheet has the correct header row (A1-H1)
- Make sure "Who has access" is set to "Anyone"
- Check that you authorized the script properly

### Problem: "Authorization required" error
**Solution:**
- Go back to Apps Script editor
- Click "Deploy" → "Manage deployments"
- Click the pencil icon (edit)
- Re-authorize when prompted

### Problem: "Script execution failed"
**Solution:**
- Check the Apps Script execution log for error details
- Verify your sheet has the header row
- Make sure the sheet is not protected/read-only
- Try running the `testWebhook()` function from the Apps Script editor

---

## Testing the Script

You can test the script directly in Apps Script:

1. In Apps Script editor, select the `testWebhook` function from the dropdown
2. Click the "Run" button (▶️)
3. Authorize if prompted
4. Check your sheet - you should see a test row
5. Check the "Executions" tab to see if it ran successfully

---

## Security Considerations

### Option 1: Keep it Simple (Current)
- Webhook URL is public but only writes to your sheet
- Apps Script runs as "you" so it has access to your sheet
- Good for low-volume applications

### Option 2: Add Validation (Optional)
If you want to add security, you can modify the Apps Script to:
- Check for a secret token in the request
- Validate the request origin
- Rate limit requests

**Example with token validation:**
```javascript
function doPost(e) {
  // Add your secret token
  const SECRET_TOKEN = 'your-secret-token-here';
  
  // Check token if provided in headers or body
  const token = e.parameter.token || JSON.parse(e.postData.contents).token;
  
  if (token !== SECRET_TOKEN) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: 'Unauthorized'
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  // ... rest of the code
}
```

Then add token to your webhook URL:
```
https://script.google.com/macros/s/.../exec?token=your-secret-token-here
```

---

## Quick Checklist

- [ ] Google Sheet created with header row (A1-H1)
- [ ] Apps Script created and code pasted
- [ ] Script deployed as Web App
- [ ] "Who has access" set to "Anyone"
- [ ] Webhook URL copied
- [ ] `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK` added to `.env.local`
- [ ] Dev server restarted
- [ ] Test submission successful
- [ ] Data appears in Google Sheet

---

## Comparison: Webhook vs Service Account

| Feature | Webhook (Apps Script) | Service Account |
|--------|----------------------|-----------------|
| Setup Time | ~5 minutes | ~15 minutes |
| Complexity | Simple | Complex |
| Credentials Needed | None | Service account JSON |
| Security | Good (can add validation) | Excellent |
| Best For | Small to medium volume | High volume, production |

**Recommendation**: Use webhook for simplicity, especially if you're already familiar with it!

---

## Need Help?

- Check Apps Script execution logs for errors
- Verify your webhook URL is correct
- Make sure the sheet has the right header row
- Test the script using the `testWebhook()` function

