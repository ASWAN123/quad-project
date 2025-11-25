// app/safety/page.tsx
export default function Safety() {
  const safetyFeatures = [
    {
      icon: "🛡️",
      title: "Professional Equipment",
      description: "Regularly maintained quad bikes, certified helmets, and safety gear"
    },
    {
      icon: "🎓", 
      title: "Certified Guides",
      description: "First-aid trained guides with extensive desert experience"
    },
    {
      icon: "📋",
      title: "Safety Briefings",
      description: "Comprehensive pre-tour instructions and practice sessions"
    },
    {
      icon: "📱",
      title: "Communication",
      description: "Radio communication and emergency contact systems"
    },
    {
      icon: "💧",
      title: "Hydration & Comfort",
      description: "Water provided, sun protection, and regular breaks"
    },
    {
      icon: "🚑",
      title: "Emergency Preparedness",
      description: "First aid kits and emergency evacuation plans"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-800 text-center mb-8">
          Your Safety Comes First
        </h1>
        <p className="text-xl text-slate-600 text-center mb-12">
          Professional safety standards for peace of mind in the desert
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {safetyFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-amber-100 text-center">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
          <h2 className="text-2xl font-serif text-slate-800 mb-4 text-center">Safety Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-700">
            <ul className="space-y-2">
              <li>✅ Minimum age: 12 years (quad biking)</li>
              <li>✅ Minimum age: 6 years (camel riding)</li>
              <li>✅ Closed-toe shoes required</li>
              <li>✅ Follow guide instructions</li>
            </ul>
            <ul className="space-y-2">
              <li>✅ No alcohol before activities</li>
              <li>✅ Inform guides of medical conditions</li>
              <li>✅ Stay with the group at all times</li>
              <li>✅ Use provided safety equipment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}