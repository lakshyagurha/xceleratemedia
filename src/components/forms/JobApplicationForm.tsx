"use client";

import React, { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { FileUpload } from "./FileUpload";
import { CheckCircle2, AlertCircle } from "lucide-react";

const applicationSchema = z.object({
  full_name: z.string().min(1, "Full name is required").max(200),
  email: z.string().email("Invalid email address"),
  skills: z.string().max(500).optional(),
  role_preference: z.string().max(200).optional(),
  description: z.string().max(5000).optional(),
  resume: z.instanceof(File, { message: "Resume is required" }),
});

type FormData = z.infer<typeof applicationSchema>;

interface FormErrors {
  full_name?: string;
  email?: string;
  skills?: string;
  role_preference?: string;
  description?: string;
  resume?: string;
  submit?: string;
}

export const JobApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<Partial<FormData>>({
    full_name: "",
    email: "",
    skills: "",
    role_preference: "",
    description: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleResumeChange = (file: File | null) => {
    setResume(file);
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: undefined }));
    }
  };

  const validateForm = (): boolean => {
    try {
      applicationSchema.parse({
        ...formData,
        resume: resume || undefined,
      });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.issues.forEach((err) => {
          const path = err.path[0] as string;
          newErrors[path as keyof FormErrors] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("full_name", formData.full_name || "");
      formDataToSend.append("email", formData.email || "");
      if (formData.skills) {
        formDataToSend.append("skills", formData.skills);
      }
      if (formData.role_preference) {
        formDataToSend.append("role_preference", formData.role_preference);
      }
      if (formData.description) {
        formDataToSend.append("description", formData.description);
      }
      if (resume) {
        formDataToSend.append("resume", resume);
      }

      const response = await fetch("/api/job-applications", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setIsSubmitted(true);
      // Reset form
      setFormData({
        full_name: "",
        email: "",
        skills: "",
        role_preference: "",
        description: "",
      });
      setResume(null);
      setErrors({});
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full py-12 text-center">
        <CheckCircle2 className="h-16 w-16 text-white mx-auto mb-6" />
        <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
          Application Submitted Successfully!
        </h3>
        <p className="text-base text-white/80 max-w-2xl mx-auto">
          Thank you for your interest. We'll review your application and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
        {/* Full Name */}
        <div>
          <label
            htmlFor="full_name"
            className="block text-sm font-semibold text-white mb-3 tracking-wide uppercase text-xs"
          >
            Full Name <span className="text-white/60">*</span>
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-transparent border-b-2 border-white/20 text-white text-base focus:outline-none focus:border-white transition-colors duration-200 disabled:opacity-50 placeholder:text-white/40"
            placeholder="John Doe"
          />
          {errors.full_name && (
            <p className="mt-2 text-sm text-white/70">
              {errors.full_name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-white mb-3 tracking-wide uppercase text-xs"
          >
            Email <span className="text-white/60">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-transparent border-b-2 border-white/20 text-white text-base focus:outline-none focus:border-white transition-colors duration-200 disabled:opacity-50 placeholder:text-white/40"
            placeholder="john.doe@example.com"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-white/70">
              {errors.email}
            </p>
          )}
        </div>

        {/* Skills */}
        <div>
          <label
            htmlFor="skills"
            className="block text-sm font-semibold text-white mb-3 tracking-wide uppercase text-xs"
          >
            Skills
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-transparent border-b-2 border-white/20 text-white text-base focus:outline-none focus:border-white transition-colors duration-200 disabled:opacity-50 placeholder:text-white/40"
            placeholder="e.g., Marketing, Content Creation, Social Media"
          />
          {errors.skills && (
            <p className="mt-2 text-sm text-white/70">
              {errors.skills}
            </p>
          )}
        </div>

        {/* Role Preference */}
        <div>
          <label
            htmlFor="role_preference"
            className="block text-sm font-semibold text-white mb-3 tracking-wide uppercase text-xs"
          >
            Role / Job Type
          </label>
          <input
            type="text"
            id="role_preference"
            name="role_preference"
            value={formData.role_preference}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-transparent border-b-2 border-white/20 text-white text-base focus:outline-none focus:border-white transition-colors duration-200 disabled:opacity-50 placeholder:text-white/40"
            placeholder="e.g., Content Creator, Marketing Manager"
          />
          {errors.role_preference && (
            <p className="mt-2 text-sm text-white/70">
              {errors.role_preference}
            </p>
          )}
        </div>
      </div>

      {/* Description - Full Width */}
      <div className="mb-8">
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-white mb-3 tracking-wide uppercase text-xs"
        >
          Short Description / Introduction
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          disabled={isSubmitting}
          rows={6}
          className="w-full px-6 py-4 bg-transparent border-b-2 border-white/20 text-white text-base focus:outline-none focus:border-white transition-colors duration-200 disabled:opacity-50 resize-none placeholder:text-white/40"
          placeholder="Tell us a bit about yourself and why you're interested in joining our team..."
        />
        {errors.description && (
          <p className="mt-2 text-sm text-white/70">
            {errors.description}
          </p>
        )}
      </div>

      {/* Resume Upload */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-white mb-3 tracking-wide uppercase text-xs">
          Resume <span className="text-white/60">*</span>
        </label>
        <FileUpload
          value={resume}
          onChange={handleResumeChange}
          error={errors.resume}
          disabled={isSubmitting}
        />
      </div>

      {/* Submit Error */}
      {submitError && (
        <div className="mb-8 p-4 flex items-start gap-3 bg-white/10 rounded-lg border border-white/20">
          <AlertCircle className="h-5 w-5 text-white/80 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-white/90">{submitError}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-start mt-12">
        <Button
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          className="px-12 py-4 text-base font-semibold tracking-wide"
          size="lg"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  );
};

