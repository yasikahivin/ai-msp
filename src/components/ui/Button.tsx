import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-sky-600 text-white shadow-[0_12px_30px_rgba(14,165,233,0.25)]",
  secondary:
    "border border-white/30 bg-white/5 text-white shadow-[5px_5px_35px_rgba(255,255,255,0.13)]",
  ghost: "border border-cyan-500/60 text-white",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
}
