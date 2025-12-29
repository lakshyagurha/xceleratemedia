import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12", className)}
      {...props}
    >
      {children}
    </div>
  );
};

