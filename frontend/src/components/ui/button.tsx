import React from "react";
import { Loader2 } from "lucide-react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
};

const base =
  "inline-flex items-center justify-center rounded-xl font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-800",
  outline:
    "border-2 border-slate-300 bg-white text-slate-900 hover:border-purple-500",
  ghost:
    "text-slate-900 hover:bg-slate-100",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-12 px-4 text-sm",
  lg: "h-14 px-6 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  loading,
  leftIcon,
  rightIcon,
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        base,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className || "",
      ].join(" ")}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
    </button>
  );
}

export default Button;
