import image1 from "@/public/images/service/image1.png";
import image2 from "@/public/images/service/image2.png";
import image3 from "@/public/images/service/image3.png";
import image4 from "@/public/images/service/image4.png";
import image5 from "@/public/images/service/image5.png";
import image6 from "@/public/images/service/image6.png";

// Common details structure for now, can be customized per service
const defaultServiceDetails = {
  intro: "involves a combination of research, planning, design, and testing activities to create digital products that meet the needs of users and provide them with a positive experience. It is an iterative process that involves continuous refinement and improvement based on user feedback and testing results.",
  howWeProvide: {
    title: "How our agency provides this service",
    content: "We typically encompass the creation and optimization of user interfaces (UI) and user experiences (UX) for digital products such as websites, mobile apps, and software applications.",
  },
  strategies: {
    title: "Service strategies",
    description: "The broader context of a project aligning to design decisions with business goals & creating roadmap for achieving optimal user experiences."
  },
  approach: {
      title: "Our Approach",
      description: "The approach of a digital agency typically encompasses its methodologies, philosophies, and strategies for delivering value to clients. Here's a general outline of what 'Our Approach' might entail for a digital agency:",
      steps: [
          {
              title: "1. Understanding Client Needs",
              content: "We are beginning by thoroughly understanding the target industries & unique challenges of our clients' target audiences. This includes active listening."
          },
          {
              title: "2. Collaborative Planning",
              content: "We beging collaboration and teamwork. We work closely with our clients to co-create a tailored strategy that aligns with their objectives & budget."
          },
          {
              title: "3. Execution & Delivery",
              content: "We conduct in-depth research & analysis to inform strategies. This includes market research, competitor analysis, audience segmentation & analysis."
          }
      ]
  }
};

export const servicesData = [
  {
    id: 1,
    slug: "safari-booking-engine",
    title: "The Safari Booking Engine",
    description: "A custom-built portal that handles payments, itineraries, and CRM. Automate your operations.",
    price: "From $15,000",
    icon: image1, 
    details: {
        ...defaultServiceDetails,
        intro: "The Safari Booking Engine is a custom-built portal that handles payments, itineraries, and CRM. " + defaultServiceDetails.intro
    }
  },
  {
    id: 2,
    slug: "seo-domination-package",
    title: "The SEO Domination Package",
    description: "A 12-month roadmap to rank #1 for high-intent luxury travel keywords.",
    price: "$3k/month",
    icon: image2,
    details: {
        ...defaultServiceDetails,
        intro: "The SEO Domination Package is a 12-month roadmap to rank #1 for high-intent luxury travel keywords. " + defaultServiceDetails.intro
    }
  },
  {
    id: 3,
    slug: "ai-concierge",
    title: "The AI Concierge",
    description: "An AI agent integrated into the site that answers 90% of customer questions and qualifies leads 24/7.",
    price: "$5k setup + $500/mo",
    icon: image3,
    details: {
        ...defaultServiceDetails,
        intro: "The AI Concierge is an AI agent integrated into the site that answers 90% of customer questions. " + defaultServiceDetails.intro
    }
  }
];
