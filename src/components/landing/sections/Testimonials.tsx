type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Proven Results
          </p>
          <h2 className="mt-4 text-3xl font-semibold uppercase text-white sm:text-4xl font-[var(--font-poppins)]">
            Proven Results That Speak for Themselves
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Don&apos;t just take our word for it – hear from MSP leaders who&apos;ve transformed their
            businesses.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.location}`}
              className="rounded-xl border border-slate-900 bg-slate-950 p-6"
            >
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium text-white font-[var(--font-manrope)]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-white/50 font-[var(--font-manrope)]">
                  {testimonial.location}
                </p>
              </div>
              <p className="mt-4 text-sm text-white/80 font-[var(--font-manrope)]">
                “{testimonial.quote}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
