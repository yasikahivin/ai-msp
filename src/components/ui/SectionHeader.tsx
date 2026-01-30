import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = "center",
}: SectionHeaderProps) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <p className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold uppercase tracking-wide text-white sm:text-4xl font-[var(--font-poppins)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-3xl text-base text-white/80 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
