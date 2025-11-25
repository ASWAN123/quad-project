/* eslint-disable react/no-unescaped-entities */
// app/sustainability/page.tsx
export default function Sustainability() {
  const initiatives = [
    {
      icon: "🌱",
      title: "Desert Conservation",
      description: "Stick to designated trails to protect fragile desert ecosystems"
    },
    {
      icon: "💧",
      title: "Water Conservation", 
      description: "Use refillable water bottles and minimize plastic waste"
    },
    {
      icon: "🏘️",
      title: "Local Community",
      description: "Employ local guides and support nearby Berber communities"
    },
    {
      icon: "🔄",
      title: "Waste Management",
      description: "Pack in, pack out policy for all our desert tours"
    },
    {
      icon: "🐪",
      title: "Animal Welfare",
      description: "Ethical treatment of camels with proper rest and care"
    },
    {
      icon: "📚",
      title: "Cultural Education",
      description: "Share authentic Berber culture and desert traditions"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-800 text-center mb-8">
          Sustainable Adventures
        </h1>
        <p className="text-xl text-slate-600 text-center mb-12">
          Protecting the desert while sharing its magic with travelers
        </p>

        <div className="bg-amber-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-serif text-slate-800 mb-4">Our Commitment</h2>
          <p className="text-slate-700 mb-4">
            We believe tourism should benefit both travelers and the destinations they visit. 
            That's why we're committed to sustainable practices that protect the Agafay Desert 
            environment and support local communities.
          </p>
          <p className="text-slate-700">
            From our eco-friendly operations to our community partnerships, every aspect of 
            our business is designed with sustainability in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-amber-100 text-center">
              <div className="text-3xl mb-4">{initiative.icon}</div>
              <h3 className="font-semibold text-slate-800 mb-2">{initiative.title}</h3>
              <p className="text-slate-600 text-sm">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-50 rounded-2xl p-8 border border-green-200 text-center">
          <h2 className="text-2xl font-serif text-slate-800 mb-4">Travel Responsibly</h2>
          <p className="text-slate-700 mb-4">
            Join us in protecting the beautiful Agafay Desert for future generations. 
            Together, we can ensure that the magic of Moroccan deserts remains for years to come.
          </p>
          <div className="text-green-600 font-semibold">
            Leave only footprints, take only memories 📸
          </div>
        </div>
      </div>
    </div>
  );
}