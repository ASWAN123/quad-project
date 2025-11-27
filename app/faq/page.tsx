/* eslint-disable react/no-unescaped-entities */
// app/faq/page.tsx
"use client";
import { useState } from 'react';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's included in the quad biking and camel ride experience?",
      answer: "Our full-day experience includes hotel pickup and drop-off in Marrakech, professional quad biking equipment, safety gear, camel trekking experience, bottled water, professional guide services, all safety equipment, and desert photography."
    },
    {
      question: "What is the minimum age for the activities?",
      answer: "For quad biking, the minimum age is 12 years. For camel trekking, the minimum age is 6 years. All minors must be accompanied by adults."
    },
    {
      question: "Do I need prior experience for quad biking?",
      answer: "No prior experience is needed! We provide full safety briefing and instruction for complete beginners. Our guides will ensure you feel comfortable and confident."
    },
    {
      question: "What should I wear for the desert adventure?",
      answer: "We recommend comfortable clothing, closed-toe shoes, sun protection (hat, sunglasses), and bringing a camera for personal photos. Avoid loose clothing that could get caught."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel free of charge up to 24 hours before your scheduled adventure. For cancellations within 24 hours, please contact us directly to discuss options."
    },
    {
      question: "Is hotel pickup included?",
      answer: "Yes! We provide complimentary pickup and drop-off from your accommodation in Marrakech. We'll coordinate the exact pickup time with you after booking."
    },
    {
      question: "What happens in case of bad weather?",
      answer: "We monitor weather conditions closely. If weather makes the adventure unsafe, we'll either reschedule your experience or provide a full refund."
    },
    {
      question: "Can I book for a large group?",
      answer: "Absolutely! We specialize in group adventures. For groups larger than 8 people, please contact us directly for special pricing and arrangements."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl  text-slate-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about your desert adventure
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-100/50 overflow-hidden">
              <button
              aria-label={`Toggle answer for: ${faq.question}`}
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-amber-50/50 transition-colors duration-300"
              >
                <span className="font-semibold text-slate-800 text-lg pr-4">
                  {faq.question}
                </span>
                <span className={`text-amber-600 text-xl transform transition-transform duration-300 ${
                  openQuestion === index ? 'rotate-180' : ''
                }`}>
                  ↓
                </span>
              </button>
              {openQuestion === index && (
                <div className="px-6 py-4 border-t border-amber-100/50 bg-white/50">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-amber-50/80 rounded-2xl p-8 text-center">
          <h2 className="text-2xl  text-slate-800 mb-4">
            Still have questions?
          </h2>
          <p className="text-slate-700 mb-6">
            We're here to help! Get in touch with our team for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212627349254"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="mailto:experience@quadcamelmarrakesh.com"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              ✉️ Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}