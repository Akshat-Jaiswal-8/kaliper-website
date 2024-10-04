export type features = {
  title: string;
  description: string;
  icon: string;
};

export const features: features[] = [
  {
    title: "Uncovering Insights: Where Ideas Take Shape!",
    description:
      "Conduct thorough research to understand client needs, market trends, and user requirements. This stage involves stakeholder interviews and competitive analysis.",
    icon: "/webp/uncovering-insights.webp",
  },
  {
    title: "From Ideas to Action: Crafting the Blueprint!",
    description:
      "Brainstorm solutions and create a roadmap. Define project scope, objectives, and deliverables while prioritizing features based on value.",
    icon: "/webp/from-ideas-to-actions.webp",
  },
  {
    title: "Designing Experiences: Shaping User Journeys!",
    description:
      "Develop wireframes and prototypes to visualize the product. Gather feedback from stakeholders to refine designs.",
    icon: "/webp/designing-experiences.webp",
  },
  {
    title: "Building Brilliance: Crafting Your Vision!",
    description:
      "Implement the product using agile methodologies, focusing on iterative development and continuous integration.",
    icon: "/webp/building-brilliance.webp",
  },
  {
    title: "Quality Assurance: Perfecting Every Detail",
    description:
      "Conduct rigorous testing to ensure functionality, usability, and performance. Gather user feedback for improvements.",
    icon: "/webp/quality-assurance.webp",
  },
  {
    title: "Go Live: Celebrating Success Together!",
    description:
      "Release the product to clients, monitor its performance, and collect user feedback for future iterations.",
    icon: "/webp/go-live.webp",
  },
];

export type articlesCardProps = {
  src: string;
  heading: string;
};

export const articlesCard: articlesCardProps[] = [
  {
    src: "/svg/b2b-b2c.svg",
    heading: "B2B & B2C",
  },
  {
    src: "/svg/ecommerce.svg",
    heading: "E-Commerce",
  },
  {
    src: "/svg/fashion-lifecycle.svg",
    heading: "Fashion & Lifestyle",
  },
  {
    src: "/svg/medical-healthcare.svg",
    heading: "Medical & Healthcare",
  },
  {
    src: "/svg/health-fitness.svg",
    heading: "Health & Fitness",
  },
  {
    src: "/svg/fintech.svg",
    heading: "Fintech",
  },
  {
    src: "/svg/banking-insurance.svg",
    heading: "Banking & Insurance",
  },
  {
    src: "/svg/education-employment.svg",
    heading: "Education & Employment",
  },
  {
    src: "/svg/location-compass-1--arrow-compass-location-gps-map-maps-point.svg",
    heading: "Hospitality & Travel",
  },
  {
    src: "/svg/shipping-truck--truck-shipping-delivery-transfer.svg",
    heading: "Manufacturing & Supply chain",
  },
  {
    src: "/svg/camera-video--film-television-tv-camera-movies-video-recorder.svg",
    heading: "Media & Entertainment",
  },
  {
    src: "/svg/fork-spoon--fork-spoon-food-dine-cook-utensils-eat-restaurant-dining-kitchenware.svg",
    heading: "Restaurants & QSR",
  },
];

export const testimonials: { name: string; src: string; content: string }[] = [
  {
    name: "Ranveer shorey",
    src: "/svg/testimonial.svg",
    content:
      "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. ",
  },
  {
    name: "Rohit Sharma",
    src: "/svg/testimonial.svg",
    content:
      "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. ",
  },
  {
    name: "Akshat Jaiswal",
    src: "/svg/testimonial.svg",
    content:
      "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. ",
  },
];

export const faqs: { question: string }[] = [
  { question: "What is the Incorporation date of KALIPER TECHNOLOGIES PRIVATE LIMITED?" },
  { question: "What is authorized share capital of KALIPER TECHNOLOGIES PRIVATE LIMITED?" },
  { question: "What is the paid-up capital of KALIPER TECHNOLOGIES  PRIVATE LIMITED?" },
  { question: "What is the registered address of KALIPER TECHNOLOGIES PRIVATE LIMITED?" },
  { question: "Who are the directors of KALIPER TECHNOLOGIES PRIVATE LIMITED?" },
];
