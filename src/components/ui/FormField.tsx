import React from "react";

type FormFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
};

export function FormField({
  label,
  name,
  placeholder,
  type = "text",
  multiline = false,
}: FormFieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm text-white/80">
      <span>{label}</span>
      {multiline ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={4}
          className="w-full rounded-md border border-white/20 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-md border border-white/20 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      )}
    </label>
  );
}
