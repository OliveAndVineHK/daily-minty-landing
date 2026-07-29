'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GetStartedHeroSection from '@/components/get-started/Hero-Section';
import GuidesSection from '@/components/get-started/Guide-Section';
import XeroGuideSection from '@/components/get-started/XeroGuideSection';
import GuidesSectionFaq from '@/components/get-started/GetStartedFaq';

export default function GetStartedPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <GetStartedHeroSection />
        <GuidesSection />
        <XeroGuideSection />
        <GuidesSectionFaq />
      </main>
      <Footer />
    </>
  );
}
