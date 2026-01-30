import { FinalCTA } from "./sections/FinalCTA";
import { FAQ } from "./sections/FAQ";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Packages } from "./sections/Packages";
import { Speakers } from "./sections/Speakers";
import { Testimonials } from "./sections/Testimonials";
import { VideoReels } from "./sections/VideoReels";
import { WhyChooseUs } from "./sections/WhyChooseUs";

const ASSETS = {
  heroBg: "https://placehold.co/1720x949",
  heroGrid: "https://placehold.co/481x892",
  heroGridOverlay: "https://placehold.co/481x629",
  speaker1: "https://placehold.co/310x499",
  speaker2: "https://placehold.co/310x499",
  logo1: "https://placehold.co/92x61",
  logo2: "https://placehold.co/61x61",
  logo3: "https://placehold.co/61x61",
  logo4: "https://placehold.co/61x61",
  videoPoster: "https://placehold.co/1556x462",
  reel1: "https://placehold.co/400x220",
  reel2: "https://placehold.co/400x220",
  reel3: "https://placehold.co/400x220",
  reel4: "https://placehold.co/400x220",
};

const navItems = [
  "Home",
  "Offerings",
  "About",
  "Book a Session",
  "Previous Gigs",
  "Resources",
  "FAQ",
  "Contact / Social",
];

const speakers = [
  {
    name: "Manal Ahmed",
    title: "Visionary Entrepreneur",
    image: ASSETS.speaker1,
    bio:
      "You are not booking just another tech speaker. You are bringing in a leader who runs an MSP every single day and understands the real pressure of modern IT.",
    highlights: [
      "President of a working MSP supporting real organisations daily",
      "Translates AI, cybersecurity, and IT strategy into plain, human language",
      "Delivers practical frameworks, checklists, and decision tools",
    ],
  },
  {
    name: "Dan Perera",
    title: "AI Strategy Lead",
    image: ASSETS.speaker2,
    bio:
      "15+ years working at the intersection of Human–Computer Interaction, applied AI systems, and emerging technologies.",
    highlights: [
      "Advises executives and public-sector leaders on responsible AI adoption",
      "Expert in agentic AI systems and organisational readiness",
      "Applies Double Diamond design methodology to real-world AI workflows",
    ],
  },
];

const whyCards = [
  {
    title: "Falling Behind Competitors",
    description:
      "MSPs without AI strategies are losing market share to more innovative competitors.",
  },
  {
    title: "Overwhelming Ticket Volumes",
    description:
      "Manual processes can’t keep up. Teams are drowning in routine support requests.",
  },
  {
    title: "Talent Burnout",
    description:
      "High workloads lead to turnover and stalled growth without automation support.",
  },
  {
    title: "Client Expectations Rising",
    description:
      "Customers expect faster response times, transparency, and proactive insights.",
  },
];

const packages = [
  {
    name: "Keynote",
    duration: "45-60 minutes",
    description:
      "High-impact presentation that energizes your audience and sets the tone for transformation.",
    bestFor: "Conferences, annual events, large gatherings",
    price: "Starting at $0000",
    features: [
      "Customized to your event theme",
      "Engaging storytelling with real MSP case studies",
      "Actionable takeaways attendees can implement immediately",
      "Q&A session included",
      "Post-event resource package",
    ],
    highlight: false,
  },
  {
    name: "Workshop / Breakout",
    duration: "45-60 minutes",
    description:
      "Deep-dive interactive session where your team learns and applies AI strategies hands-on.",
    bestFor: "Team training, leadership offsites, intensive learning",
    price: "Starting at $0000",
    features: [
      "Interactive exercises and group activities",
      "Custom AI implementation roadmap for your MSP",
      "Walk away with 5 AI use cases tailored to your business",
      "Templates and frameworks included",
      "Follow-up consultation (30 min)",
    ],
    highlight: true,
  },
  {
    name: "Virtual Series / AI Training",
    duration: "45-60 minutes",
    description:
      "Multi-week program that transforms your entire organization’s approach to AI and automation.",
    bestFor: "Organizations seeking ongoing transformation",
    price: "Custom Quote",
    features: [
      "Six 90-minute virtual sessions over 6 weeks",
      "Dedicated Slack/Teams channel for ongoing support",
      "Custom implementation coaching",
      "Quarterly check-ins for 1 year",
      "Certificate of completion for participants",
    ],
    highlight: false,
  },
];

const testimonials = [
  {
    name: "Emily Johnson",
    location: "USA, California",
    quote:
      "The keynote transformed how our MSP team thinks about AI. Practical, energizing, and immediately useful.",
  },
  {
    name: "Carlos Ruiz",
    location: "Spain, Madrid",
    quote:
      "We left with a real roadmap and momentum. The workshop felt tailored to our business.",
  },
  {
    name: "Priya Patel",
    location: "UK, London",
    quote:
      "The speakers balanced strategy with actionable frameworks. Our leadership team loved it.",
  },
  {
    name: "Jordan Lee",
    location: "USA, New York",
    quote:
      "Clear, human-centered guidance on AI adoption. Exactly what our frontline teams needed.",
  },
  {
    name: "Sophie Nguyen",
    location: "Australia, Sydney",
    quote:
      "Their case studies and checklists helped us move from curiosity to execution.",
  },
  {
    name: "Marcus Boyd",
    location: "Canada, Toronto",
    quote:
      "A perfect mix of storytelling and practical steps. We booked a follow-up series.",
  },
];

const faqs = [
  {
    question: "What topics do you cover in your speaking engagements?",
    answer:
      "We cover AI adoption, automation strategy, cybersecurity readiness, operational efficiency, and leadership change management tailored to MSPs.",
  },
  {
    question: "Can sessions be customized for our audience?",
    answer:
      "Yes. We tailor content to your audience size, industry focus, and event goals with pre-event discovery and planning.",
  },
  {
    question: "Do you provide virtual or hybrid sessions?",
    answer:
      "Absolutely. We offer in-person, virtual, and hybrid formats with supporting resources and follow-ups.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "We recommend booking 6-8 weeks in advance for keynote events and 4 weeks for workshops.",
  },
  {
    question: "What is included after the event?",
    answer:
      "We provide recap notes, curated resources, and optional follow-up strategy sessions.",
  },
  {
    question: "Do you work with non-technical leaders?",
    answer:
      "Yes. We translate AI and MSP concepts into actionable language for executives and business leaders.",
  },
];

const videoReels = [
  ASSETS.reel1,
  ASSETS.reel2,
  ASSETS.reel3,
  ASSETS.reel4,
];

const trustLogos = [
  ASSETS.logo1,
  ASSETS.logo2,
  ASSETS.logo3,
  ASSETS.logo4,
];

export function AiMspLanding() {
  return (
    <div className="bg-slate-950 text-white">
      <Hero
        navItems={navItems}
        assets={ASSETS}
        trustLogos={trustLogos}
      />
      <Speakers speakers={speakers} />
      <WhyChooseUs cards={whyCards} />
      <Packages packages={packages} />
      <VideoReels poster={ASSETS.videoPoster} reels={videoReels} />
      <Testimonials testimonials={testimonials} />
      <FAQ faqs={faqs} />
      <FinalCTA />
      <Footer navItems={navItems} />
    </div>
  );
}
