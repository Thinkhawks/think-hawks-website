"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "gradient-bg text-white shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-secondary text-white hover:bg-secondary/85 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white hover:-translate-y-0.5",
        ghost:
          "text-primary hover:bg-primary/10 hover:-translate-y-0.5",
        white:
          "bg-white text-secondary hover:bg-gray-50 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        "outline-white":
          "border-2 border-white text-white hover:bg-white hover:text-secondary hover:-translate-y-0.5",
        danger:
          "bg-red-500 text-white hover:bg-red-600 shadow-md hover:-translate-y-0.5",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-lg",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-9 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
