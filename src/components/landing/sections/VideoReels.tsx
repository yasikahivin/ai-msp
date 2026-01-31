import { SectionHeader } from '../../ui/SectionHeader';

type VideoReelsProps = {
  poster: string;
  reels: string[];
};

export function VideoReels({ poster, reels }: VideoReelsProps) {
  return (
    <section id="previous-gigs" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="See Us in Action"
          subtitle="Watch highlights from our recent keynote at the 2025 MSP Summit"
        />

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-black/60 transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_25px_70px_rgba(56,189,248,0.2)]">
          <div className="relative">
            <img
              src={poster}
              alt="Keynote highlight"
              className="h-72 w-full object-cover transition duration-300 hover:scale-[1.01] sm:h-96"
            />
          </div>
        </div>

        <p className="mt-10 text-center text-2xl text-white font-[var(--font-poppins)]">
          More Speaker Reels
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reels.map((reel, index) => (
            <div
              key={reel}
              className="relative overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(14,165,233,0.2)]"
            >
              <img
                src={reel}
                alt={`Speaker reel ${index + 1}`}
                className="h-48 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
