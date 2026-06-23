export default function ContactFormSection() {
  return (
    <section className="max-w-[1000px] mx-auto px-4 grid lg:grid-cols-12 gap-8 pb-20 mt-20">
      {/* Left: Contact Form Card with Subtle Shadow */}
      <div className="lg:col-span-7 bg-white p-10 rounded-[32px] shadow-[0_4px_32px_rgba(0,0,0,0.03)] border border-gray-100">
        <h2 className="text-2xl font-extrabold text-[#113B4A] mb-2">Send us a message</h2>
        <p className="text-sm text-[#4A7280] mb-8">We typically reply within a few hours during business days.</p>
        
        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-[#113B4A] mb-1.5">Your name *</label>
              <input className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00CBB0]/20 outline-none transition-all" placeholder="minty" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#113B4A] mb-1.5">Email *</label>
              <input className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00CBB0]/20 outline-none transition-all" placeholder="you@business.com" />
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-bold text-[#113B4A] mb-1.5">Business name</label>
            <input className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00CBB0]/20 outline-none transition-all" placeholder="Optional" />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#113B4A] mb-1.5">Topic *</label>
            <select className="w-full p-3 rounded-xl border border-gray-200 text-[#4A7280] focus:ring-2 focus:ring-[#00CBB0]/20 outline-none transition-all appearance-none">
              <option>Pick one..</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#113B4A] mb-1.5">How can we help? *</label>
            <textarea className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00CBB0]/20 outline-none transition-all" rows={4} placeholder="Tell us a bit about..." />
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <p className="text-[10px] text-[#4A7280] max-w-[200px]">By submitting, you agree to our <a href="#" className="text-[#00CBB0] underline">privacy policy</a>.</p>
            <button className="bg-[#00CBB0] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#00B59D] transition-colors shadow-lg shadow-[#00CBB0]/20">
              Send message →
            </button>
          </div>
        </form>
      </div>

      {/* Right: Support Sidebar */}
      <div className="lg:col-span-5 space-y-4">
        {[
          { title: 'Email us directly', desc: 'Replies usually within 4 hours. hello@minty.app →' },
          { title: 'Chat in the app', desc: 'Tap the speech bubble in the bottom-right of the dashboard for live chat with our team. Open dashboard →' },
          { title: 'Help centre', desc: 'Step-by-step guides, video walkthroughs, and answers to the most common questions. Browse articles →' }
        ].map((item, i) => (
          <div key={i} className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#F2EFE8] hover:border-[#E8E1D5] transition-colors">
            <h3 className="font-bold text-[#113B4A] mb-1">{item.title}</h3>
            <p className="text-xs text-[#4A7280] leading-relaxed">{item.desc}</p>
          </div>
        ))}
        
        {/* Status Bar */}
        <div className="bg-[#E1F3F0] p-4 rounded-xl text-[11px] font-medium text-[#113B4A] flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-[#00CBB0]" />
           All systems normal <span className="text-[#4A7280]">No incidents reported in the last 24 hours. View status page →</span>
        </div>
      </div>
    </section>
  );
}