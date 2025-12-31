# Google Sheets Setup - Quick Reference

## What You Need (3 Things)

1. **Service Account Email** - From the JSON file (`client_email`)
2. **Private Key** - From the JSON file (`private_key`) 
3. **Spreadsheet ID** - From the Google Sheet URL

## Step-by-Step Summary

### 1. Google Cloud Setup (5 minutes)
- Go to [console.cloud.google.com](https://console.cloud.google.com)
- Create new project
- Enable "Google Sheets API"
- Create Service Account
- Download JSON key file

### 2. Extract Credentials (2 minutes)
- Open JSON file
- Copy `client_email` → Service Account Email
- Copy `private_key` → Private Key (entire thing with BEGIN/END)

### 3. Create Google Sheet (2 minutes)
- Create new spreadsheet
- Add header row: `Timestamp | Full Name | Email | Skills | Role Preference | Description | Resume URL | Resume Filename`
- Copy Spreadsheet ID from URL

### 4. Share Sheet (1 minute)
- Click Share button
- Add service account email
- Give **Editor** access
- Uncheck "Notify people"

### 5. Add to `.env.local` (2 minutes)
```env
GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL=your-email@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id
```

### 6. Test (1 minute)
- Restart dev server
- Submit test application
- Check Google Sheet for new row

**Total Time: ~15 minutes**

---

## Common Issues

| Issue | Solution |
|-------|----------|
| "Missing environment variables" | Restart dev server after adding to `.env.local` |
| "Permission denied" | Share sheet with service account email (Editor access) |
| "Invalid credentials" | Check private key format (with quotes and `\n`) |
| Data not appearing | Check sheet has correct header row, verify spreadsheet ID |

---

## Your Google Sheet Header Row

Make sure Row 1 has these exact columns (A through H):

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Full Name | Email | Skills | Role Preference | Description | Resume URL | Resume Filename |

---

## Environment Variables Format

```env
# ✅ CORRECT
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"

# ❌ WRONG (missing quotes)
GOOGLE_SHEETS_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----...

# ❌ WRONG (actual line breaks instead of \n)
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...
-----END PRIVATE KEY-----"
```

---

## Where to Find Things

### Service Account Email
- Google Cloud Console → IAM & Admin → Service Accounts
- Or from the JSON file: `client_email` field

### Private Key
- From the downloaded JSON file: `private_key` field
- Copy the ENTIRE value including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`

### Spreadsheet ID
- Google Sheet URL: `https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`
- Copy the long string between `/d/` and `/edit`

---

## Testing Checklist

- [ ] Service account created
- [ ] JSON key downloaded
- [ ] Google Sheet created with header row
- [ ] Sheet shared with service account (Editor)
- [ ] All 3 env variables added
- [ ] Dev server restarted
- [ ] Test submission works
- [ ] Data appears in sheet

---

## Need Detailed Instructions?

See `GOOGLE_SHEETS_SETUP_GUIDE.md` for complete step-by-step instructions with screenshots guidance.

