import { SectionHeader } from '../../ui/SectionHeader';

type Speaker = {
  name: string;
  title: string;
  image: string;
  bio: string;
  highlights: string[];
};

type SpeakersProps = {
  speakers: Speaker[];
};

export function Speakers({ speakers }: SpeakersProps) {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Introducing Speakers"
          subtitle="The MSP landscape is evolving rapidly. Without AI and automation, you risk being left behind."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {speakers.map((speaker, index) => (
            <article
              key={speaker.name}
              className={`flex flex-col gap-8 rounded-2xl bg-gradient-to-br from-slate-950 to-gray-950 p-8 lg:flex-row ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold text-white font-[var(--font-poppins)]">
                  {speaker.name}
                </h3>
                <p className="text-lg text-white/90">{speaker.title}</p>
                <p className="text-sm text-white/70">{speaker.bio}</p>
                <ul className="space-y-2 text-sm text-white/70">
                  {speaker.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src={speaker.image}
                  alt={`${speaker.name} portrait`}
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
