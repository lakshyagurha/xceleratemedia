# Complete Supabase Setup Guide - Step by Step

This guide will walk you through connecting your app to Supabase from scratch.

## Step 1: Create a Supabase Account and Project

### 1.1 Sign Up / Sign In
1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project" or "Sign In" if you already have an account
3. Sign up with GitHub, Google, or email

### 1.2 Create a New Project
1. Once logged in, click **"New Project"** (or the "+" button)
2. Fill in the project details:
   - **Name**: `xcelerate-media` (or any name you prefer)
   - **Database Password**: Create a strong password (save this somewhere safe!)
   - **Region**: Choose the closest region to your users
   - **Pricing Plan**: Free tier is fine for development
3. Click **"Create new project"**
4. Wait 2-3 minutes for the project to be set up

---

## Step 2: Get Your Supabase Credentials

### 2.1 Access Project Settings
1. In your Supabase dashboard, click on the **gear icon** (⚙️) in the left sidebar
2. Click **"API"** under Project Settings

### 2.2 Copy Your Credentials
You'll see three important values:

1. **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - This is your `NEXT_PUBLIC_SUPABASE_URL`

2. **anon public** key (a long string starting with `eyJ...`)
   - This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. **service_role** key (another long string starting with `eyJ...`)
   - This is your `SUPABASE_SERVICE_ROLE_KEY`
   - ⚠️ **IMPORTANT**: Keep this secret! Never expose it to the client side.

---

## Step 3: Set Up Environment Variables

### 3.1 Create `.env.local` File
1. In your project root directory (`/Users/lakshyagurha/Desktop/Main projects/Nitinjoshi/`), create a file named `.env.local`
2. If the file already exists, open it

### 3.2 Add Your Supabase Credentials
Copy and paste this template, then replace with YOUR actual values:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Google Sheets Configuration (we'll set this up later)
GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL=
GOOGLE_SHEETS_PRIVATE_KEY=
GOOGLE_SHEETS_SPREADSHEET_ID=
```

**Example:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjE2MjM5MDIyLCJleHAiOjE5MzE4MTUwMjJ9.yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
```

### 3.3 Save the File
- Make sure `.env.local` is saved in your project root
- ⚠️ **Never commit this file to Git** (it's already in `.gitignore`)

---

## Step 4: Create the Database Table

### 4.1 Open SQL Editor
1. In your Supabase dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New query"**

### 4.2 Run the Table Creation SQL
Copy and paste this entire SQL script:

```sql
-- Create the job_applications table
CREATE TABLE IF NOT EXISTS job_applications (
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

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON job_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_job_applications_email ON job_applications(email);

-- Enable Row Level Security (RLS)
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert job applications
-- Drop policy if it exists, then create it
DROP POLICY IF EXISTS "Allow anonymous inserts" ON job_applications;
CREATE POLICY "Allow anonymous inserts"
ON job_applications FOR INSERT
TO anon
WITH CHECK (true);
```

### 4.3 Execute the SQL
1. Click **"Run"** (or press `Ctrl+Enter` / `Cmd+Enter`)
2. You should see: ✅ "Success. No rows returned"

### 4.4 Verify Table Creation
1. Click **"Table Editor"** in the left sidebar
2. You should see `job_applications` table listed
3. Click on it to see the columns

---

## Step 5: Create Storage Bucket for Resumes

### 5.1 Create the Bucket
1. In Supabase dashboard, click **"Storage"** in the left sidebar
2. Click **"New bucket"**
3. Fill in:
   - **Name**: `resumes` (exactly this name, lowercase)
   - **Public bucket**: Toggle this to **ON** (very important!)
   - **File size limit**: Leave default or set to 10 MB
   - **Allowed MIME types**: Leave empty (we'll validate in code)
4. Click **"Create bucket"**

### 5.2 Set Storage Policies
1. Click on the `resumes` bucket you just created
2. Click the **"Policies"** tab
3. Click **"New Policy"**

#### Policy 1: Allow Anonymous Uploads
1. Click **"Create policy from scratch"**
2. Name: `Allow anonymous uploads`
3. Allowed operation: **INSERT**
4. Target roles: **anon**
5. Policy definition: Use this SQL:
```sql
bucket_id = 'resumes'
```
6. Click **"Review"** then **"Save policy"**

#### Policy 2: Allow Public Reads
1. Click **"New Policy"** again
2. Click **"Create policy from scratch"**
3. Name: `Allow public reads`
4. Allowed operation: **SELECT**
5. Target roles: **public**
6. Policy definition: Use this SQL:
```sql
bucket_id = 'resumes'
```
7. Click **"Review"** then **"Save policy"**

### 5.3 Verify Storage Setup
1. Go back to **"Storage"** > **"Buckets"**
2. You should see `resumes` bucket with a green "Public" badge

---

## Step 6: Test the Connection

### 6.1 Restart Your Development Server
1. Stop your current dev server (if running) with `Ctrl+C`
2. Start it again:
```bash
npm run dev
```

### 6.2 Test Database Connection
1. Open your browser to `http://localhost:3000/join-us`
2. Open browser DevTools (F12) > Console tab
3. You should NOT see any Supabase connection errors

### 6.3 Test with a Sample Submission
1. Fill out the form on `/join-us`:
   - Full Name: `Test User`
   - Email: `test@example.com`
   - Skills: `Testing, Development`
   - Role Preference: `Developer`
   - Description: `This is a test submission`
   - Resume: Upload any PDF file (under 10 MB)
2. Click **"Submit Application"**
3. You should see: ✅ "Application Submitted Successfully!"

### 6.4 Verify Data in Supabase

#### Check Database:
1. Go to Supabase dashboard > **"Table Editor"**
2. Click on `job_applications` table
3. You should see your test submission with all the data

#### Check Storage:
1. Go to Supabase dashboard > **"Storage"** > **"resumes"** bucket
2. You should see your uploaded resume file in a folder structure like `2024/12/filename.pdf`

---

## Step 7: Troubleshooting

### Problem: "Missing Supabase environment variables" error
**Solution:**
- Make sure `.env.local` exists in project root
- Check that variable names are exactly correct (no typos)
- Restart your dev server after adding/changing `.env.local`

### Problem: "Failed to upload resume" error
**Solution:**
- Check that `resumes` bucket exists and is **public**
- Verify storage policies are set correctly
- Check file size is under 10 MB
- Check file type is PDF, DOC, or DOCX

### Problem: "Failed to save application" error
**Solution:**
- Go to Supabase > SQL Editor
- Run: `SELECT * FROM job_applications;` to check if table exists
- Verify RLS policy allows anonymous inserts
- Check browser console for specific error messages

### Problem: Can't see uploaded files
**Solution:**
- Make sure bucket is set to **Public**
- Check storage policies allow public reads
- Verify the file was actually uploaded (check Storage in Supabase dashboard)

---

## Step 8: Verify Everything Works

### Checklist:
- [ ] `.env.local` file created with all 3 Supabase variables
- [ ] `job_applications` table created and visible in Table Editor
- [ ] Storage bucket `resumes` created and marked as Public
- [ ] Storage policies created (INSERT for anon, SELECT for public)
- [ ] Dev server restarted after adding environment variables
- [ ] Can access `/join-us` page without errors
- [ ] Can submit a test application successfully
- [ ] Test data appears in `job_applications` table
- [ ] Test resume file appears in `resumes` storage bucket

---

## Next Steps

Once Supabase is working, you can:
1. Set up Google Sheets integration (see `SETUP.md`)
2. Customize the form styling
3. Add email notifications (optional)
4. Set up admin dashboard (optional)

---

## Quick Reference: Your Environment Variables

Your `.env.local` should look like this:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Where to find these:**
- Supabase Dashboard > Settings (⚙️) > API

---

## Need Help?

If you're stuck:
1. Check the browser console for error messages
2. Check the terminal where `npm run dev` is running for errors
3. Verify all steps above were completed
4. Make sure you restarted the dev server after adding `.env.local`

