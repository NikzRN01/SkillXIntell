import React from "react";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={["bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl shadow-2xl", className || ""].join(" ")}>{children}</div>
  );
}

export function CardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="p-6 border-b border-slate-200/60">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
    </div>
  );
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={["p-6", className || ""].join(" ")}>{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="p-6 border-t border-slate-200/60">{children}</div>;
}

export default Card;
