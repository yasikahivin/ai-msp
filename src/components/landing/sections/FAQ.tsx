'use client';

import { Accordion } from '../../ui/Accordion';
import { SectionHeader } from '../../ui/SectionHeader';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs: FAQItem[];
};

export function FAQ({ faqs }: FAQProps) {
  const midpoint = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, midpoint), faqs.slice(midpoint)];
  const scrollToBooking = () => {
    const section = document.querySelector('#book-session');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about booking us for your event"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {columns.map((items, index) => (
            <Accordion key={`faq-column-${index}`} items={items} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-slate-950 p-8 transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(56,189,248,0.18)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white font-[var(--font-poppins)]">
                Still Have Questions?
              </h3>
              <p className="mt-3 text-sm text-white/70">
                We&apos;re happy to jump on a quick call to discuss your
                specific needs and answer any questions.
              </p>
            </div>
            <button
              className="rounded-lg bg-sky-600 px-5 py-2 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
              onClick={scrollToBooking}
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
