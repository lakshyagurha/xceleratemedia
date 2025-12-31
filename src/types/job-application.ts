export interface JobApplication {
  id: string;
  full_name: string;
  email: string;
  skills?: string;
  role_preference?: string;
  description?: string;
  resume_url: string;
  resume_filename: string;
  source_page: string;
  created_at: string;
  updated_at: string;
}

export interface JobApplicationFormData {
  full_name: string;
  email: string;
  skills?: string;
  role_preference?: string;
  description?: string;
  resume: File;
}

export interface JobApplicationSubmission {
  full_name: string;
  email: string;
  skills?: string;
  role_preference?: string;
  description?: string;
  resume_url: string;
  resume_filename: string;
}

