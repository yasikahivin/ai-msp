'use client';

import { Button } from '../../ui/Button';
import { FormField } from '../../ui/FormField';
import { SectionHeader } from '../../ui/SectionHeader';

const nextSteps = [
  {
    title: 'We&apos;ll Review Your Request',
    description: 'Our team will review your event details within 24 hours.',
  },
  {
    title: 'We&apos;ll Schedule a Call',
    description:
      'We&apos;ll align on goals, audience, and the right speaking format.',
  },
  {
    title: 'We&apos;ll Deliver a Proposal',
    description:
      'Receive a tailored plan, pricing, and next steps for your event.',
  },
];

export function FinalCTA() {
  const scrollToForm = () => {
    const form = document.querySelector('#booking-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openInquiryEmail = (subject: string, body: string) => {
    const mailto = `mailto:hello@ai-msp.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="book-session" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Ready to Elevate Your Next Event?"
          subtitle="Let's discuss how we can create an unforgettable experience for your audience."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div className="rounded-3xl bg-indigo-700 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(99,102,241,0.4)]">
              <h3 className="text-2xl font-semibold text-white font-[var(--font-poppins)]">
                What Happens Next?
              </h3>
              <div className="mt-6 space-y-5">
                {nextSteps.map((step) => (
                  <div key={step.title} className="space-y-2">
                    <p className="text-lg font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="text-sm text-white/80">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-400 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(124,58,237,0.4)]">
              <h3 className="text-2xl font-semibold text-white font-[var(--font-poppins)]">
                Download Speaker Kit
              </h3>
              <p className="mt-4 text-sm text-white/90">
                Want more information before reaching out? Download our complete
                speaking kit with:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                <li>• Full speaker bios &amp; headshots</li>
                <li>• Topic descriptions &amp; learning outcomes</li>
                <li>• Video clips &amp; testimonials</li>
                <li>• Pricing guide</li>
              </ul>
              <button
                className="mt-6 w-full rounded-lg bg-white px-4 py-2 text-sm font-semibold text-indigo-500 transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
                onClick={() =>
                  openInquiryEmail(
                    'Speaker Kit Request',
                    'Hi AI MSP team,\n\nI would like to request the speaker kit for our upcoming event.\n\nThanks!',
                  )
                }
              >
                Download Speaker Kit
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)]">
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                className="w-full"
                variant="primary"
                onClick={scrollToForm}
              >
                Book a Session
              </Button>
              <Button
                className="w-full"
                variant="ghost"
                onClick={() =>
                  openInquiryEmail(
                    'Speaking Inquiry',
                    'Hi AI MSP team,\n\nI would like to learn more about booking a speaking engagement.\n\nThanks!',
                  )
                }
              >
                Send Us an Inquiry
              </Button>
            </div>

            <form
              id="booking-form"
              className="mt-8 space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const eventDate = formData.get('eventDate');
                const budget = formData.get('budget');
                const eventDetails = formData.get('eventDetails');
                openInquiryEmail(
                  'Book a Session Request',
                  `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nEvent Date: ${eventDate}\nBudget: ${budget}\nDetails: ${eventDetails}`,
                );
              }}
            >
              <FormField label="Name*" name="name" placeholder="Full name" />
              <FormField
                label="Email Address*"
                name="email"
                type="email"
                placeholder="Email Address"
              />
              <FormField
                label="Phone Number"
                name="phone"
                placeholder="Phone Number"
              />
              <FormField
                label="Event Date (or Timeframe)"
                name="eventDate"
                placeholder="Select Date"
              />
              <FormField
                label="Budget Range"
                name="budget"
                placeholder="Select Range"
              />
              <FormField
                label="Tell Us About Your Event*"
                name="eventDetails"
                placeholder="Tell us about your event..."
                multiline
              />
              <Button className="w-full" variant="primary" type="submit">
                Book a Session
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
