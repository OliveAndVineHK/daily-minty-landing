export const landingContent = {
  hero: {
    title: 'Daily Minty — ',
    titleAccent: 'Fresh AI summaries delivered',
    lede: 'Get personalized, daily summaries of what matters to you. Stay informed without information overload.',
    primaryCta: {
      label: 'Start Free',
      href: '/get-started',
    },
    secondaryCta: {
      label: 'Learn more',
      href: '#how-it-works',
    },
    trustText: 'Join 5,000+ users who save 2 hours daily',
    imageAlt: 'Daily Minty hero image showing a cat with a laptop and phone',
    image: '/assets/deployed-assets/hero-cat-laptop-phone.png',
  },
  how: {
    title: 'How It Works',
    subtitle: 'Three simple steps to start getting smarter summaries.',
    steps: [
      {
        num: 1,
        image: '/assets/deployed-assets/step1-cat-coins.png',
        alt: 'Step 1: Connect your sources',
        title: 'Connect Your Sources',
        body: 'Link your favorite news outlets, websites, and feeds.',
      },
      {
        num: 2,
        image: '/assets/deployed-assets/step2-cat-atm.png',
        alt: 'Step 2: Set your preferences',
        title: 'Set Your Preferences',
        body: 'Tell us what topics matter to you and how often you want updates.',
      },
      {
        num: 3,
        image: '/assets/deployed-assets/step3-cat-phone.png',
        alt: 'Step 3: Receive daily summaries',
        title: 'Receive Daily Summaries',
        body: 'Get fresh, AI-powered summaries delivered to your inbox every morning.',
      },
    ],
  },
  problem: {
    tag: 'The Problem',
    headline: 'Information overload is killing productivity',
    highlights: ['Information overload', 'productivity'],
    items: [
      'Spending hours reading and filtering content',
      'Missing important news and updates',
      'Context switching between multiple sources',
      'No time for what actually matters',
    ],
    imageAlt: 'A cat sitting in a cardboard box representing feeling overwhelmed',
    image: '/assets/deployed-assets/problem-cat-box.png'
  },
  outcome: {
  title: 'Daily closing feels',
  titleAccent: 'clear again.',
  cards: [
    {
      key: 'petty-cash',
      title: 'Petty Cash',
      image: '/assets/deployed-assets/sub-petty-cash.png',
      alt: 'Petty cash placeholder',
      // Added design tokens for the first card
      icon: 'payments',
      bgColor: 'bg-[#00cbb2]',
      iconTextColor: 'text-[#00cbb2]'
    },
    {
      key: 'bill-payment',
      title: 'Bill Payment',
      image: '/assets/deployed-assets/sub-bill-payment.png',
      alt: 'Bill payment placeholder',
      // Added design tokens for the second card
      icon: 'notes',
      bgColor: 'bg-[#0f2d37]',
      iconTextColor: 'text-[#0f2d37]'
    },
  ],
},
  helpsYou: {
    title: 'Minty helps you close the day,',
    titleAccent: 'everyday.',
    subtitle: 'Three essential workflows to streamline your closing process.',
    cards: [
      {
        num: 1,
        image: '/assets/helps-1.png',
        alt: 'Enter today\'s numbers',
        title: 'Enter today\'s numbers',
        body: 'Log your petty cash and daily income in one clean, guided interface.',
      },
      {
        num: 2,
        image: '/assets/helps-2.png',
        alt: 'Check the cash',
        title: 'Check the cash',
        body: 'Instant reconciliation and error checking with intelligent alerts.',
      },
      {
        num: 3,
        image: '/assets/helps-3.png',
        alt: 'Get a clean daily report',
        title: 'Get a clean daily report',
        body: 'A clean, accurate summary ready to export or file in seconds.',
      },
    ],
  },
  demo: {
    title: 'See Minty in action',
    subtitle: 'Watch how Minty streamlines your daily closing workflow.',
    videoUrl: '/assets/deployed-assets/minty-mascot-wave.mp4',
  },
};
