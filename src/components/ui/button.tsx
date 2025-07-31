import React from "react";
import clsx from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
          size === "lg" ? "px-6 py-3 text-lg" : size === "sm" ? "px-3 py-1 text-sm" : "px-4 py-2 text-base",
          variant === "outline"
            ? "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50"
            : "bg-blue-600 text-white hover:bg-blue-700",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
