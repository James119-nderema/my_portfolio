import { ReactNode } from 'react';

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative py-14 md:py-20 border-b border-white/5">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="gradient-text">{title}</span>
        </h1>
        {subtitle && (
          <p className="mt-4 text-slate-400 max-w-2xl text-base md:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}
