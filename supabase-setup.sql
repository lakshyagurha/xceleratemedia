-- Job Applications Table
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

-- Indexes for admin queries
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON job_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_job_applications_email ON job_applications(email);

-- Enable Row Level Security
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for job applications)
-- Drop policy if it exists, then create it
DROP POLICY IF EXISTS "Allow anonymous inserts" ON job_applications;
CREATE POLICY "Allow anonymous inserts"
ON job_applications FOR INSERT
TO anon
WITH CHECK (true);

-- Storage Policies (run these after creating the 'resumes' bucket in Supabase Storage)
-- Allow anonymous uploads
DROP POLICY IF EXISTS "Allow anonymous uploads" ON storage.objects;
CREATE POLICY "Allow anonymous uploads"
ON storage.objects FOR INSERT
TO anon
WITH CHECK (bucket_id = 'resumes');

-- Allow public reads
DROP POLICY IF EXISTS "Allow public reads" ON storage.objects;
CREATE POLICY "Allow public reads"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'resumes');

