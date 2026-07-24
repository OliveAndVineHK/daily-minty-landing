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
  guides: {
  title: "Getting started guides",
  titleAccent: "guides",
  subtitle: "Short, practical tutorials to help you master Minty step by step.",
  items: [
    {
      id: 1,
      category: "Getting Started",
      duration: "0:44 sc",
      title: "1. When Xero Comes First",
      description: '"I\'m new to Minty - where should I start?"',
      badge: "",
      videoThumbnail: "/assets/deployed-assets/GS-02-03.png",
      videoUrl: "https://www.youtube.com/watch?v=1AwgfXOV-k0"
    },
    {
      id: 2,
      category: "Getting Started",
      duration: "0:42 sec",
      title: "2. Request Payment and keep it on track",
      description: '"How do I connect Minty account with other accounting systems?"',
      badge: "",
      videoThumbnail: "/assets/deployed-assets/GS-07-01.png",
      videoUrl: "https://www.youtube.com/watch?v=Uku-S8hNs6c"
    },
    {
      id: 3,
      category: "Getting Started",
      duration: "0:34 sec",
      title: "3. Voiding Incorrect Bills",
      description: '"How do I request a payment and stay on top of its status?"',
      badge: "",
      videoThumbnail: "/assets/deployed-assets/GS-07-03.png",
      videoUrl: "https://www.youtube.com/watch?v=TtO_HbNOLyM"
    },
  ]
},
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