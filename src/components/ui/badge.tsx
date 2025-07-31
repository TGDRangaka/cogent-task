import React from "react";
import clsx from "clsx";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "outline" | "solid";
  className?: string;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "solid", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(
          "inline-block rounded-full px-3 py-1 text-xs font-semibold",
          variant === "outline"
            ? "border border-current bg-transparent"
            : "bg-blue-600 text-white",
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";
