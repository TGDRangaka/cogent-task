import React from "react";
import clsx from "clsx";

export const Select = ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    className={clsx(
      "block w-full rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-blue-600 focus:ring-2 focus:ring-blue-200 appearance-none",
      props.className
    )}
    {...props}
  >
    {children}
  </select>
);

export const SelectTrigger = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        "flex items-center justify-between rounded-lg border border-gray-300 px-4 py-2 bg-white cursor-pointer",
        className
      )}
      {...props}
    />
  )
);
SelectTrigger.displayName = "SelectTrigger";

export const SelectValue = ({ placeholder }: { placeholder?: string }) => (
  <span className="text-gray-400">{placeholder}</span>
);

export const SelectContent = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export const SelectItem = ({ value, children }: { value: string; children: React.ReactNode }) => (
  <option value={value}>{children}</option>
);
