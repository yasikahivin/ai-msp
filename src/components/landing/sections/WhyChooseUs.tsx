import { SectionHeader } from '../../ui/SectionHeader';

type WhyCard = {
  title: string;
  description: string;
};

type WhyChooseUsProps = {
  cards: WhyCard[];
};

export function WhyChooseUs({ cards }: WhyChooseUsProps) {
  return (
    <section id="resources" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Why Choose Us"
          subtitle="The MSP landscape is evolving rapidly. Without AI and automation, you risk being left behind."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-white/20 bg-gradient-to-br from-slate-950 to-indigo-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(56,189,248,0.12)]"
            >
              <h3 className="text-xl font-semibold text-white font-[var(--font-poppins)]">
                {card.title}
              </h3>
              <p className="mt-4 text-sm text-white/70 sm:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
