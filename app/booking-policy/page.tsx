/* eslint-disable react/no-unescaped-entities */
// app/booking-policy/page.tsx
export default function BookingPolicy() {
  const policies = [
    {
      title: "Booking Process",
      items: [
        "Book online through our website or contact us directly via WhatsApp/phone",
        "Receive confirmation within 2 hours during business hours",
        "Full payment required to secure your booking",
        "You'll receive detailed meeting instructions after booking"
      ]
    },
    {
      title: "Cancellation Policy",
      items: [
        "Free cancellation up to 24 hours before your adventure",
        "50% refund for cancellations within 12-24 hours",
        "No refund for cancellations within 12 hours or no-shows",
        "Weather-related cancellations receive full refund or rescheduling"
      ]
    },
    {
      title: "Payment Methods",
      items: [
        "Credit/Debit cards via secure online payment",
        "Cash (EUR, USD, MAD) upon arrival",
        "Bank transfer for advance bookings",
        "All prices in EUR, local currency accepted at current exchange rate"
      ]
    },
    {
      title: "Group Bookings",
      items: [
        "Special rates for groups of 4+ people",
        "Custom itineraries available for large groups",
        "Advance booking recommended for groups larger than 8",
        "Dedicated guide provided for groups of 6+"
      ]
    },
    {
      title: "Safety & Requirements",
      items: [
        "Minimum age: 12 years (quad), 6 years (camel)",
        "Valid ID required for all participants",
        "Safety briefing mandatory before all activities",
        "Follow guide instructions at all times"
      ]
    },
    {
      title: "Customer Service",
      items: [
        "24/7 support via WhatsApp for urgent matters",
        "Email responses within 4 hours during business hours",
        "Multilingual support in English, French, and Arabic",
        "Satisfaction guarantee - we'll make it right"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl  text-slate-800 mb-4">
            Booking Policy
          </h1>
          <p className="text-xl text-slate-600">
            Clear terms for a smooth desert adventure experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {policies.map((policy, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100/50">
              <h2 className="text-xl  text-slate-800 mb-4">{policy.title}</h2>
              <ul className="space-y-2">
                {policy.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3 text-slate-700">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-amber-50/80 rounded-2xl p-8 text-center">
          <h2 className="text-2xl  text-slate-800 mb-4">
            Need Clarification?
          </h2>
          <p className="text-slate-700 mb-6">
            We're happy to explain any part of our policy or discuss special circumstances.
          </p>
          <a
            href="https://wa.me/212627349254"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <span>💬</span>
            <span>Chat with Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}