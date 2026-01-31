import React from 'react';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
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
