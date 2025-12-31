# Quick Supabase Connection Test

Use this to quickly verify your Supabase setup is working.

## Test 1: Environment Variables Check

1. Make sure `.env.local` exists in your project root
2. Run this command in your terminal (from project root):

```bash
node -e "require('dotenv').config({path:'.env.local'}); console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing'); console.log('Anon Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'); console.log('Service Role:', process.env.SUPABASE_SERVICE_ROLE_KEY ? '✅ Set' : '❌ Missing');"
```

Or manually check your `.env.local` file contains:
- `NEXT_PUBLIC_SUPABASE_URL=`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY=`
- `SUPABASE_SERVICE_ROLE_KEY=`

## Test 2: Database Connection Test

1. Start your dev server: `npm run dev`
2. Open browser to: `http://localhost:3000/join-us`
3. Open browser DevTools (F12) > Console
4. Look for any red errors
5. If you see "Missing Supabase environment variables" → Your `.env.local` is not loaded (restart server)

## Test 3: Database Table Test

In Supabase Dashboard:
1. Go to **SQL Editor**
2. Run this query:
```sql
SELECT COUNT(*) FROM job_applications;
```
3. Should return: `0` (or number of existing records)
4. If error: Table doesn't exist → Run the SQL from Step 4 of the setup guide

## Test 4: Storage Bucket Test

In Supabase Dashboard:
1. Go to **Storage** > **Buckets**
2. You should see `resumes` bucket
3. Click on it
4. Check it shows **"Public"** badge
5. If missing: Create it following Step 5 of the setup guide

## Test 5: Full Form Submission Test

1. Go to `http://localhost:3000/join-us`
2. Fill out the form completely:
   - Name: `Test User`
   - Email: `test@test.com`
   - Upload a PDF file (any PDF under 10MB)
3. Click Submit
4. Should see: ✅ "Application Submitted Successfully!"
5. Check Supabase:
   - **Table Editor** > `job_applications` → Should see your test entry
   - **Storage** > `resumes` → Should see your uploaded file

## Common Issues & Quick Fixes

| Error | Fix |
|-------|-----|
| "Missing Supabase environment variables" | Restart dev server after creating `.env.local` |
| "Failed to upload resume" | Check bucket is Public and policies are set |
| "Failed to save application" | Check RLS policy allows anonymous inserts |
| Table not found | Run the SQL from setup guide Step 4 |
| Bucket not found | Create `resumes` bucket (Step 5) |

