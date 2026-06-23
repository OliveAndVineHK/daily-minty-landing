'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQHero from '@/components/faq/FaqHero';
import FAQCategories from '@/components/faq/FaqCategories';
import FAQSupportSection from '@/components/faq/FaqSupportSection';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#F9FBFC]">
      <Navbar />
      <main>
        <FAQHero />
        <FAQCategories />
        <FAQSupportSection />
      </main>
      <Footer />
    </div>
  );
}