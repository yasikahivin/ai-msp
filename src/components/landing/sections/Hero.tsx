import { Button } from '../../ui/Button';

type HeroProps = {
  navItems: string[];
  assets: {
    heroBg: string;
    heroGrid: string; // <-- use as the centered portrait image
    heroGridOverlay: string; // (unused for this layout)
  };
  trustLogos: string[];
};

export function Hero({ navItems, assets, trustLogos }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col px-6 pb-24 pt-10">
        {/* Nav pill */}
        <nav className="mx-auto inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm">
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

        {/* Hero content (centered like screenshot) */}
        <div className="relative mt-80 flex flex-1 flex-col items-center justify-center text-center">
          {/* Center portrait behind text */}
          <img
            src={assets.heroGrid}
            alt="Speaker portrait"
            className="pointer-events-none absolute left-1/2 top-[64%] w-[520px] max-w-[85vw] -translate-x-1/2 -translate-y-1/2 select-none opacity-95"
          />
        </div>
        <div className="relative mt-20 flex flex-1 flex-col items-center justify-center text-center">
          {/* Text + CTAs */}
          <p className="relative z-10 text-sm uppercase tracking-[0.4em] text-white/70">
            Trusted by Leading MSPs &amp; Tech Conferences
          </p>

          <h1 className="relative z-10 mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl font-[var(--font-poppins)]">
            AI + MSP Growth Speeches <br className="hidden sm:block" />
            to Ignite Transformation
          </h1>

          <p className="relative z-10 mt-5 max-w-3xl text-base text-white/70 sm:text-lg">
            Help your teams adopt AI, automate workflows, and lead innovation in
            the evolving MSP landscape.
          </p>

          <div className="relative z-10 mt-7 flex flex-wrap justify-center gap-4">
            <Button variant="primary">Book Us For Your Event →</Button>
            <Button variant="secondary">Watch Our Intros (60s)</Button>
          </div>

          {/* Floating round logos (left/right) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            {trustLogos.map((logo, index) => (
              <img
                key={`${logo}-${index}`}
                src={logo}
                alt={`Trusted brand ${index + 1}`}
                className="h-10 w-auto opacity-80"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
