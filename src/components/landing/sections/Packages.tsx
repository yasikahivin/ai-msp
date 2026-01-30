import { Button } from '../../ui/Button';
import { SectionHeader } from '../../ui/SectionHeader';

type PackageCard = {
  name: string;
  duration: string;
  description: string;
  bestFor: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

type PackagesProps = {
  packages: PackageCard[];
};

export function Packages({ packages }: PackagesProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Speaking Packages"
          subtitle="Choose the format that best fits your event and goals"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`flex h-full flex-col rounded-2xl border border-white/20 p-8 ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-sky-600 to-sky-900'
                  : 'bg-gradient-to-b from-slate-900 to-blue-950'
              }`}
            >
              <h3 className="text-2xl font-semibold text-white font-[var(--font-poppins)]">
                {pkg.name}
              </h3>
              <p className="mt-6 text-sm font-medium text-white/80">
                {pkg.duration}
              </p>
              <p className="mt-4 text-sm text-white/80">{pkg.description}</p>
              <p className="mt-4 text-xs text-white/70">
                Best for: {pkg.bestFor}
              </p>
              <div className="my-6 h-px w-full bg-white/20" />
              <ul className="space-y-2 text-sm text-white/80">
                {pkg.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <p className="mt-8 text-2xl font-semibold text-white">
                {pkg.price}
              </p>
              <Button
                variant={pkg.highlight ? 'secondary' : 'primary'}
                className="mt-6 w-full"
              >
                Inquire about this package
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-slate-950 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white font-[var(--font-poppins)]">
                Need a Custom Package?
              </h3>
              <p className="mt-3 text-sm text-white/70">
                We can create a tailored speaking engagement that perfectly fits
                your event format, audience size, and objectives.
              </p>
            </div>
            <Button className="w-full lg:w-auto">
              Inquire about this package
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
