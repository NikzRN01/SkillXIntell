import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  error?: string;
  rightSlot?: React.ReactNode;
};

export function Input({ label, helperText, error, rightSlot, className, id, ...props }: InputProps) {
  const inputId = id || React.useId();
  const base = "flex h-12 w-full rounded-xl border-2 bg-slate-50/50 px-4 py-2 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all";
  const border = error
    ? "border-red-300 focus-visible:border-red-500 focus-visible:ring-red-500"
    : "border-slate-200 focus-visible:border-purple-500 focus-visible:ring-purple-500 focus-visible:bg-white";

  return (
    <div className={className}>
      {label && (
        <label htmlFor={inputId} className="mb-2 block text-sm font-bold text-slate-900">
          {label}
        </label>
      )}
      <div className="relative">
        <input id={inputId} className={`${base} ${border} pr-12`} {...props} />
        {rightSlot && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center">
            {rightSlot}
          </div>
        )}
      </div>
      {error ? (
        <p className="mt-1 text-xs font-semibold text-red-600">{error}</p>
      ) : helperText ? (
        <p className="mt-1 text-xs text-slate-600">{helperText}</p>
      ) : null}
    </div>
  );
}

export default Input;
