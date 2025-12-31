"use client";

import React, { useRef, useState, useCallback } from "react";
import { Upload, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_TYPES = [".pdf", ".doc", ".docx"];
const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

interface FileUploadProps {
  value?: File | null;
  onChange: (file: File | null) => void;
  error?: string;
  disabled?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  value,
  onChange,
  error,
  disabled,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return "File size exceeds 10 MB limit";
    }

    // Check file type by extension
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ALLOWED_TYPES.includes(fileExtension)) {
      return "Invalid file type. Only PDF, DOC, and DOCX files are allowed";
    }

    // Check MIME type
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return "Invalid file type. Only PDF, DOC, and DOCX files are allowed";
    }

    return null;
  };

  const handleFileSelect = useCallback(
    (file: File) => {
      const validationError = validateFile(file);
      if (validationError) {
        setLocalError(validationError);
        onChange(null);
        return;
      }

      setLocalError(null);
      onChange(file);
    },
    [onChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);

      if (disabled) return;

      const file = e.dataTransfer.files[0];
      if (file) {
        handleFileSelect(file);
      }
    },
    [handleFileSelect, disabled]
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFileSelect(file);
      }
    },
    [handleFileSelect]
  );

  const handleRemove = useCallback(() => {
    onChange(null);
    setLocalError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [onChange]);

  const displayError = error || localError;

  return (
    <div className="w-full">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
          "relative border-b-2 border-dashed py-4 transition-colors",
          isDragging && !disabled
            ? "border-white"
            : "border-white/20",
          displayError && "border-white/40",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        {value ? (
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <FileText className="h-5 w-5 text-white/80 flex-shrink-0" />
              <span className="text-base font-medium text-white truncate">
                {value.name}
              </span>
              <span className="text-sm text-white/60 flex-shrink-0">
                ({(value.size / 1024 / 1024).toFixed(2)} MB)
              </span>
            </div>
            {!disabled && (
              <button
                type="button"
                onClick={handleRemove}
                className="p-1 text-white/60 hover:text-white transition-colors"
                aria-label="Remove file"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Upload className="h-5 w-5 text-white/60 flex-shrink-0" />
            <div className="flex-1">
              <label
                htmlFor="resume-upload"
                className={cn(
                  "cursor-pointer text-base font-medium text-white hover:text-white/80 transition-colors",
                  disabled && "cursor-not-allowed opacity-50"
                )}
              >
                Click to upload
              </label>
              <span className="text-base text-white/60 mx-2">
                or drag and drop
              </span>
              <p className="text-sm text-white/50 mt-1">
                PDF, DOC, DOCX (max 10 MB)
              </p>
            </div>
            <input
              ref={fileInputRef}
              id="resume-upload"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleInputChange}
              disabled={disabled}
              className="hidden"
            />
          </div>
        )}
      </div>
      {displayError && (
        <p className="mt-2 text-sm text-white/70">
          {displayError}
        </p>
      )}
    </div>
  );
};

