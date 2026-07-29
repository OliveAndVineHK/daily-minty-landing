export interface GuideItem {
  id: number;
  category: string;
  duration: string;
  title: string;
  description: string;
  badge: string;
  videoThumbnail: string;
  videoUrl: string;
}

export const getStartedContent = {
  hero: {
    title: "Get started using",
    description: "Support guides and tutorials for first-time users — everything you need to be up and running today.",
    primaryBtn: "Try Minty for free",
    primaryBtnHref: "/pricing",
    secondaryBtn: "Log In",
    secondaryBtnHref: "",
    mascotSrc: "/assets/deployed-assets/minty-mascot-glasses.png",
  },
  benefits: {
    title: "What will you get from this page?",
    items: [
      {
        id: "01",
        text: "Complete your first proper daily closing today"
      },
      {
        id: "02",
        text: "Just follow the steps in order"
      },
      {
        id: "03",
        text: "No accounting knowledge required"
      }
    ]
  },
  // Guides are grouped by module. Each group renders as its own band with its
  // own background colour; `eyebrow` is the dark prefix before the teal title,
  // and a group with no eyebrow/subtitle shows just its title (see login-otp).
  //
  // TODO: ids must stay unique across ALL groups — the player keys its open
  // state off them. Videos below are the three we have; the remaining cards
  // reuse them as placeholders until per-module recordings are supplied.
  guideGroups: [
    {
      id: "login-otp",
      eyebrow: "",
      title: "Login to Minty with OTP",
      subtitle: "Get started instantly with a simple one-time password login.",
      // The original benefits band's tint.
      background: "bg-[#f3f9f7]",
      // Empty on purpose — this band is a title-only banner, no guide cards.
      items: [] as GuideItem[],
      // Rendered as a full-width band directly after this group.
      callout: {
        title: "Xero Integration",
        description: "Create Xero organisation to be used in Minty",
        buttonText: "View details",
        buttonHref: "/resources/learning",
        image: "/assets/deployed-assets/minty_xero.png",
        imageAlt: "The Minty x Xero logo lockup",
      },
    },
    {
      id: "petty-cash",
      eyebrow: "Getting started guides",
      title: "Petty Cash Module",
      subtitle: "Short, practical tutorials to help you master Minty step by step.",
      background: "bg-[#FBF7F0]",
      items: [
        {
          id: 3,
          category: "Getting Started",
          duration: "0:44 sec",
          title: "1. When Xero Comes First",
          description: '"I\'m new to Minty - where should I start?"',
          badge: "",
          videoThumbnail: "/assets/deployed-assets/GS-02-03.png",
          videoUrl: "https://www.youtube.com/watch?v=1AwgfXOV-k0"
        },
        {
          id: 4,
          category: "Getting Started",
          duration: "0:42 sec",
          title: "2. Request Payment and keep it on track",
          description: '"How do I connect Minty account with other accounting systems?"',
          badge: "",
          videoThumbnail: "/assets/deployed-assets/GS-07-01.png",
          videoUrl: "https://www.youtube.com/watch?v=Uku-S8hNs6c"
        },
      ],
    },
    {
      id: "payment-request",
      eyebrow: "Getting started guides",
      title: "Payment Request Module",
      subtitle: "Short, practical tutorials to help you master Minty step by step.",
      background: "bg-white",
      items: [
        {
          id: 5,
          category: "Getting Started",
          duration: "0:44 sc",
          title: "1. When Xero Comes First",
          description: '"I\'m new to Minty - where should I start?"',
          badge: "",
          videoThumbnail: "/assets/deployed-assets/GS-02-03.png",
          videoUrl: "https://www.youtube.com/watch?v=1AwgfXOV-k0"
        },
        {
          id: 6,
          category: "Getting Started",
          duration: "0:42 sec",
          title: "2. Request Payment and keep it on track",
          description: '"How do I connect Minty account with other accounting systems?"',
          badge: "",
          videoThumbnail: "/assets/deployed-assets/GS-07-01.png",
          videoUrl: "https://www.youtube.com/watch?v=Uku-S8hNs6c"
        },
      ],
    },
    {
      id: "settings",
      eyebrow: "Getting started guides",
      title: "Settings",
      subtitle: "Short, practical tutorials to help you master Minty step by step.",
      background: "bg-[#F1F6F8]",
      items: [
        {
          id: 7,
          category: "Getting Started",
          duration: "0:44 sc",
          title: "1. When Xero Comes First",
          description: '"I\'m new to Minty - where should I start?"',
          badge: "",
          videoThumbnail: "/assets/deployed-assets/GS-02-03.png",
          videoUrl: "https://www.youtube.com/watch?v=1AwgfXOV-k0"
        },
        {
          id: 8,
          category: "Getting Started",
          duration: "0:42 sec",
          title: "2. Request Payment and keep it on track",
          description: '"How do I connect Minty account with other accounting systems?"',
          badge: "",
          videoThumbnail: "/assets/deployed-assets/GS-07-01.png",
          videoUrl: "https://www.youtube.com/watch?v=Uku-S8hNs6c"
        },
      ],
    },
  ],
faqSection: {
    title: "Still have questions?",
    subtitle: "Our team and resources are here to help you at any step.",
    faqBox: {
      title: "Common FAQ",
      buttonText: "Frequently asked questions",
      items: [
        { id: 1, question: "I didn’t finish today’s closing. Is that okay?" },
        { id: 2, question: "Do the numbers need to be exact?" },
        { id: 3, question: "What if numbers don’t match exactly?" },
        { id: 4, question: "What if I don’t have a receipt?" },
        { id: 5, question: "Is Minty monitoring or controlling my shop?" }
      ]
    },
    supportCards: [
      {
        type: "support",
        icon: "✉", 
        title: "Contact support",
        description: "Contact Olive and Vine Consulting for more information, personalised help, or to book an hour with a specialist.",
        linkText: "Send a message",
        href: "/resources/contact"
      },
      {
        type: "videos",
        icon: "▶",
        title: "Watch video guides",
        description: "Follow along with a curated walkthrough covering every part of Minty — perfect for visual learners.",
        linkText: "Browse videos",
        href: "#guide"
      }
    ]
  }
};