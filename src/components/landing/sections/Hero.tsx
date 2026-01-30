import { Button } from "../../ui/Button";

const gradientOverlay =
  "bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.9)_0%,_rgba(0,0,0,0.9)_70%)]";

type HeroProps = {
  navItems: string[];
  assets: {
    heroBg: string;
    heroGrid: string;
    heroGridOverlay: string;
  };
  trustLogos: string[];
};

export function Hero({ navItems, assets, trustLogos }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={assets.heroBg}
          alt="Conference audience"
          className="h-full w-full object-cover"
        />
        <div className={`absolute inset-0 ${gradientOverlay}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/60 to-slate-950" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col px-6 pb-24 pt-10">
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

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              Trusted by Leading MSPs & Tech Conferences
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl font-[var(--font-poppins)]">
              AI + MSP Growth Speeches to Ignite Transformation
            </h1>
            <p className="text-base text-white/80 sm:text-lg">
              Help your teams adopt AI, automate workflows, and lead innovation in the
              evolving MSP landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button variant="primary">Book Us For Your Event</Button>
              <Button variant="secondary">Watch Our Intros (60s)</Button>
            </div>
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

          <div className="relative mx-auto flex max-w-md justify-center">
            <div className="absolute -left-16 -top-10 h-64 w-64 rounded-full bg-blue-800/30 blur-[120px]" />
            <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-blue-800/40 blur-[120px]" />
            <div className="relative">
              <img
                src={assets.heroGrid}
                alt="Speaker on stage"
                className="rounded-3xl"
              />
              <img
                src={assets.heroGridOverlay}
                alt="Audience reaction"
                className="absolute right-6 top-6 w-40 rounded-2xl border border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
