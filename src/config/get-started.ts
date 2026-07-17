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
      duration: "1:22 min",
      title: "1. Set up your Entity",
      description: '"I\'m new to Minty - where should I start?"',
      badge: "",
      videoThumbnail: "/assets/deployed-assets/setup_entity.png",
      videoUrl: "https://www.youtube.com/watch?v=r6Eb6KHymqk"
     
    },
    {
      id: 2,
      category: "Getting Started",
      duration: "0:54 sec",
      title: "2. Connecting Minty to Xero",
      description: '"How do I connect Minty account with other accounting systems?"',
      badge: "",
      videoThumbnail: "/assets/deployed-assets/connecting_minty_xero.png",
      videoUrl: "https://www.youtube.com/watch?v=tfhB71hNFUk"
    },
    {
      id: 3,
      category: "Getting Started",
      duration: "0:42 sec",
      title: "3. Request payment and keep it on track",
      description: '"How do I request a payment and stay on top of its status?"',
      badge: "",
      videoThumbnail: "/assets/deployed-assets/requestpayment_andkeep_ontrack.png",
      videoUrl: "https://www.youtube.com/watch?v=ITPafwDPLcA"
    },
     {
      id: 4,
      category: "Getting Started",
      duration: "1:04 min",
      title: "4. Record your payment full/partial",
      description: '"How do I record a full or partial payment against an invoice?"',
      badge: "",
      videoThumbnail: "/assets/deployed-assets/recordyour_payment.png",
      videoUrl: "https://www.youtube.com/watch?v=r9SSuTl-c4o"
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