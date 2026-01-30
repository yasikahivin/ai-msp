const socialLinks = [
  { label: "Twitter", symbol: "X" },
  { label: "LinkedIn", symbol: "in" },
  { label: "YouTube", symbol: "▶" },
];

type FooterProps = {
  navItems: string[];
};

export function Footer({ navItems }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8">
          <nav className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-full px-3 py-1 text-white/90 transition hover:bg-white/10"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                aria-label={link.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-950 text-xs text-white"
              >
                {link.symbol}
              </a>
            ))}
          </div>

          <div className="h-px w-full max-w-4xl bg-white/20" />

          <p className="text-xs text-white/60">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
