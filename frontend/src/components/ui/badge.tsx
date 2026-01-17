import React from "react";

export type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "blue" | "purple" | "green" | "red";
  className?: string;
};

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-slate-100 text-slate-700",
  blue: "bg-blue-100 text-blue-700",
  purple: "bg-purple-100 text-purple-700",
  green: "bg-green-100 text-green-700",
  red: "bg-red-100 text-red-700",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span className={["px-3 py-1 rounded-full text-xs font-semibold", variants[variant], className || ""].join(" ")}>{children}</span>
  );
}

export default Badge;
