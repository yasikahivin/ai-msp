import { SectionHeader } from "../../ui/SectionHeader";

type VideoReelsProps = {
  poster: string;
  reels: string[];
};

export function VideoReels({ poster, reels }: VideoReelsProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="See Us in Action"
          title="See Us in Action"
          subtitle="Watch highlights from our recent keynote at the 2025 MSP Summit"
        />

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-black/60">
          <div className="relative">
            <img src={poster} alt="Keynote highlight" className="h-72 w-full object-cover sm:h-96" />
            <button
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black"
              aria-label="Play keynote video"
            >
              ▶
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-2xl text-white font-[var(--font-poppins)]">
          More Speaker Reels
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reels.map((reel, index) => (
            <div key={reel} className="relative overflow-hidden rounded-2xl">
              <img src={reel} alt={`Speaker reel ${index + 1}`} className="h-48 w-full object-cover" />
              <button
                className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black"
                aria-label={`Play speaker reel ${index + 1}`}
              >
                ▶
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
