import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn("py-12 sm:py-16 md:py-20 lg:py-24", className)}
      {...props}
    >
      {children}
    </section>
  );
};

