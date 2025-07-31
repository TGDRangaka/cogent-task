import React from "react";
import clsx from "clsx";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(
        "block w-full rounded-lg border text-gray-700 border-gray-300 px-4 py-2 text-base focus:border-blue-600 focus:ring-2 focus:ring-blue-200",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
