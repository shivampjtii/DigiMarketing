export const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    description:
      "For businesses looking to establish a stronger digital foundation.",
    price: "Custom",
    priceNote: "Tailored to your requirements",
    popular: false,
    features: [
      "Digital presence review",
      "Basic growth strategy",
      "SEO fundamentals",
      "Content recommendations",
      "Monthly performance reporting",
    ],
    buttonText: "Get Started",
    buttonPath: "/contact",
  },
  {
    id: 2,
    name: "Growth",
    description:
      "For growing businesses ready to invest in consistent digital growth.",
    price: "Custom",
    priceNote: "Based on your goals and scope",
    popular: true,
    features: [
      "Everything in Starter",
      "Ongoing SEO strategy",
      "Content strategy and planning",
      "Social media management",
      "Performance campaign support",
      "Detailed monthly reporting",
    ],
    buttonText: "Let's Talk",
    buttonPath: "/contact",
  },
  {
    id: 3,
    name: "Scale",
    description:
      "For ambitious brands looking for a more comprehensive growth partnership.",
    price: "Custom",
    priceNote: "Built around your business needs",
    popular: false,
    features: [
      "Everything in Growth",
      "Multi-channel growth strategy",
      "Advanced performance optimization",
      "Conversion-focused improvements",
      "Dedicated strategic support",
      "Custom reporting and insights",
    ],
    buttonText: "Build a Custom Plan",
    buttonPath: "/contact",
  },
];

export const pricingComparison = [
  {
    feature: "Digital Strategy",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    feature: "SEO Support",
    starter: "Basic",
    growth: "Advanced",
    scale: "Comprehensive",
  },
  {
    feature: "Content Strategy",
    starter: "Basic",
    growth: true,
    scale: true,
  },
  {
    feature: "Social Media",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    feature: "Paid Advertising",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    feature: "Custom Reporting",
    starter: false,
    growth: false,
    scale: true,
  },
  {
    feature: "Dedicated Strategy Support",
    starter: false,
    growth: false,
    scale: true,
  },
];