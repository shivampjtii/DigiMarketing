export const services = [
  {
    id: 1,
    slug: "seo",
    title: "SEO",
    shortTitle: "Search Engine Optimization",
    description:
      "Improve your search visibility and attract the right audience with a focused SEO strategy built around sustainable growth.",
    benefits: [
      "Keyword and search opportunity research",
      "On-page SEO optimization",
      "Technical SEO improvements",
      "Content optimization",
      "Organic performance tracking",
    ],
  },
  {
    id: 2,
    slug: "content-strategy",
    title: "Content Strategy",
    shortTitle: "Content That Supports Growth",
    description:
      "Create useful, relevant content that connects with your audience and supports your broader marketing and business goals.",
    benefits: [
      "Content strategy and planning",
      "Audience and topic research",
      "Content calendars",
      "Search-focused content opportunities",
      "Content performance analysis",
    ],
  },
  {
    id: 3,
    slug: "social-media",
    title: "Social Media",
    shortTitle: "Build a Stronger Social Presence",
    description:
      "Develop a more consistent and effective social media presence that helps your brand connect with the right audience.",
    benefits: [
      "Social media strategy",
      "Content planning",
      "Platform optimization",
      "Audience engagement",
      "Performance reporting",
    ],
  },
  {
    id: 4,
    slug: "paid-advertising",
    title: "Paid Advertising",
    shortTitle: "Performance-Focused Campaigns",
    description:
      "Run targeted advertising campaigns designed to generate meaningful insights, quality traffic, and measurable business outcomes.",
    benefits: [
      "Campaign strategy",
      "Audience targeting",
      "Ad campaign optimization",
      "Budget management",
      "Performance analysis",
    ],
  },
  {
    id: 5,
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Websites Built for Your Business",
    description:
      "Create modern, responsive digital experiences designed around usability, clear communication, and conversion opportunities.",
    benefits: [
      "Responsive website development",
      "Modern user interfaces",
      "Performance optimization",
      "Conversion-focused design",
      "Ongoing improvements",
    ],
  },
  {
    id: 6,
    slug: "digital-strategy",
    title: "Digital Strategy",
    shortTitle: "A Clearer Direction for Growth",
    description:
      "Connect your digital activities through a clear strategy built around your business goals, audience, and growth opportunities.",
    benefits: [
      "Digital presence analysis",
      "Competitor research",
      "Channel strategy",
      "Growth opportunity identification",
      "Strategic recommendations",
    ],
  },
];

export const serviceCategories = [
  "All Services",
  ...services.map((service) => service.title),
];