'use client';

import { useState } from 'react';

const faqDatabase = {
  beginner: [
    { q: "Q. I didn't finish today's closing. Is that okay?", a: "Yes, that's completely fine! Daily Minty allows you to save drafts or backdate entry inputs." },
    { q: "Q. Do I have to close at the same time every day?", a: "Not at all. You can complete your closing review at whatever hour works best for your operational workflows." },
    { q: "Q. What happens if I skip a day?", a: "Skipping a day won't break your system. Daily Minty alerts you of any untracked calendar dates." },
    { q: "Q. Do the numbers need to be exact?", a: "While aiming for exact numbers is great, Minty allows you to log discrepancies clearly under overages/shortages." },
    { q: "Q. What if numbers don't match exactly?", a: "If your physical drawer count contradicts recorded sales, our flow guides you to record a discrepancy adjustment." },
    { q: "Q. Can Minty change my numbers without me knowing?", a: "Never. All records require explicitly signed confirmation and full audit history tracking." },
    { q: "Q. What if I don't have a receipt?", a: "You can flag petty cash expenses as 'Missing Proof' while still documenting the expense category." },
    { q: "Q. Do receipts have to be uploaded on the same day?", a: "Nope. You can snap photos on the fly or go back later to add attachments directly into historical logs." },
    { q: "Q. Will I get in trouble if something is off?", a: "Mistakes happen! Minty is built to find and flag variance anomalies gracefully as an internal helper tool." },
    { q: "Q. Is Minty monitoring or controlling my shop?", a: "No, Daily Minty behaves strictly as a local software platform supporting point-of-sale verification tracking." },
    { q: "Q. When should I contact customer support?", a: "Anytime you hit a snag! Our support specialists are standing by for sync discrepancies or workflow tips." }
  ],
  intermediate: [
    { q: "Q. How do I configure custom petty cash categories?", a: "Head to settings to provision unique operational tags to separate different recurring ledger streams." },
    { q: "Q. Can we link multiple bank terminal floats?", a: "Yes, advanced configurations support splitting cash handling profiles by distinct registers." }
  ],
  accountant: [
    { q: "Q. What if Minty and Xero show different numbers?", a: "Differences usually occur due to unposted batch items. Check your sync logs to verify completed transfers." },
    { q: "Q. How does the full ledger reconciliation export match up?", a: "Exports map into industry-standard formats, providing cash flow breakdowns and tax adjustments." }
  ]
};

export default function FAQCategories() {
  const [activeTab, setActiveTab] = useState<'beginner' | 'intermediate' | 'accountant'>('beginner');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      {/* Tab Navigation */}
      <div className="flex flex-col items-center mb-12">
        <div className="inline-flex bg-white p-1 rounded-full border border-gray-200 shadow-sm">
          {(['beginner', 'intermediate', 'accountant'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setOpenIndex(null); }}
              className={`px-8 py-2.5 rounded-full text-xs font-bold capitalize transition-all ${
                activeTab === tab ? 'bg-[#00CBB0] text-white shadow-md' : 'text-[#4A7280] hover:text-[#113B4A]'
              }`}
            >
              {tab === 'beginner' ? 'Beginner' : tab === 'intermediate' ? 'Intermediate' : 'Accountant'}
            </button>
          ))}
        </div>
        <p className="text-gray-400 text-sm mt-4">
          {activeTab === 'beginner' && "New to Minty? Start here — the everyday basics of closing your day."}
          {activeTab === 'intermediate' && "Optimize operations — workflows, tracking codes, and team control options."}
          {activeTab === 'accountant' && "Deep dives — bookkeeper workflows, reconciliation tools, and data mapping."}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {faqDatabase[activeTab].map((item, index) => (
          <div 
            key={index} 
            className={`bg-white border rounded-2xl p-5 cursor-pointer transition-all ${
              openIndex === index ? 'border-[#00CBB0] shadow-sm' : 'border-gray-100 hover:border-gray-200'
            }`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center gap-4">
              <span className="text-[#113B4A] font-bold text-[13px]">{item.q}</span>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                openIndex === index ? 'bg-[#113B4A] text-white' : 'bg-[#00CBB0] text-white'
              }`}>
                {openIndex === index ? '−' : '+'}
              </div>
            </div>
            {openIndex === index && (
              <p className="mt-4 text-gray-500 text-xs leading-relaxed border-t pt-4">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}