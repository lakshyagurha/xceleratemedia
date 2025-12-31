-- ============================================
-- SUPABASE SETUP SQL - FIXED VERSION
-- Copy and paste this entire script into Supabase SQL Editor
-- ============================================

-- Step 1: Create the job_applications table
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

-- Step 2: Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON job_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_job_applications_email ON job_applications(email);

-- Step 3: Enable Row Level Security (RLS)
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Step 4: Create policy for anonymous inserts
-- Note: We drop first to avoid errors if policy already exists
DROP POLICY IF EXISTS "Allow anonymous inserts" ON job_applications;
CREATE POLICY "Allow anonymous inserts"
ON job_applications FOR INSERT
TO anon
WITH CHECK (true);

-- ============================================
-- STORAGE POLICIES
-- Run these AFTER creating the 'resumes' bucket in Storage
-- ============================================

-- Step 5: Allow anonymous uploads to resumes bucket
DROP POLICY IF EXISTS "Allow anonymous uploads" ON storage.objects;
CREATE POLICY "Allow anonymous uploads"
ON storage.objects FOR INSERT
TO anon
WITH CHECK (bucket_id = 'resumes');

-- Step 6: Allow public reads from resumes bucket
DROP POLICY IF EXISTS "Allow public reads" ON storage.objects;
CREATE POLICY "Allow public reads"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'resumes');

