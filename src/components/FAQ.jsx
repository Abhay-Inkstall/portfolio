import { useState } from "react";
import { FiPlus, FiArrowRight } from "react-icons/fi";

const faqData = [
  {
    question: "How does the free trial work?",
    answer: "Start your 14-day free trial with no credit card required. You'll have full access to all features in your chosen plan. Cancel anytime during the trial period without being charged."
  },
  {
    question: "Can I change plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges or credits to your account."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers. Security is handled via industry-standard encryption protocols."
  },
  {
    question: "Is my data secure?",
    answer: "Data security is our top priority. We use AES-256 encryption at rest and TLS 1.3 for all data in transit. Your information is stored in globally distributed, SOC2-compliant data centers."
  },
  {
    question: "Do you offer discounts for annual plans?",
    answer: "Yes, annual billing offers a 20% discount compared to monthly billing. You can switch to annual billing at any point through your dashboard."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="py-20 bg-background border-b-4 border-primary bg-news-dots overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Header and Help Center */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div>
              <h2 className="headline-serif text-4xl md:text-6xl font-black mb-8 leading-tight">
                Frequently asked questions
              </h2>
              <div className="w-16 h-1 bg-accent mb-10"></div>
            </div>

            <div className="bg-white/50 border border-primary p-8 lg:p-10 shadow-[8px_8px_0px_0px_rgba(17,17,17,0.05)] sticky top-24">
              <span className="uppercase-label text-xs font-black mb-4 block tracking-widest text-primary">Help Center</span>
              <p className="text-sm font-medium leading-relaxed mb-8 opacity-80">
                Need more details? Contact our support team directly for specialized technical inquiries or project collaborations.
              </p>
              <a 
                href="#contact" 
                className="flex items-center gap-3 text-accent font-black uppercase-label text-xs group"
              >
                Contact Support 
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-8 flex flex-col">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`border-b border-primary transition-all duration-300 ${index === 0 ? 'border-t' : ''}`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                  className="w-full py-8 flex justify-between items-center text-left group"
                >
                  <span className={`headline-serif text-xl md:text-2xl font-black transition-colors ${activeIndex === index ? 'text-accent' : 'text-primary'}`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 flex items-center justify-center border border-primary transition-all duration-500 transform ${activeIndex === index ? 'bg-primary text-background rotate-45' : 'bg-transparent text-primary rotate-0'}`}>
                    <FiPlus size={20} className={`transition-transform duration-500 ${activeIndex === index ? 'rotate-0' : 'rotate-0'}`} />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-96 pb-8' : 'max-h-0'}`}
                >
                  <p className="text-sm md:text-base text-primary/80 leading-relaxed max-w-3xl font-medium">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
