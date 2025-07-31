import React from "react";
import clsx from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        "rounded-2xl bg-white shadow-md border border-gray-200",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx("p-6", className)}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";
