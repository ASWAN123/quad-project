// app/guides/page.tsx
export default function Guides() {
  const guides = [
    {
      name: "Abdou",
      role: "Lead Guide & Founder",
      experience: "8+ years",
      specialty: "Quad Biking & Desert Navigation",
      bio: "Born in Marrakech, Abdou knows every dune and trail in Agafay Desert like his backyard.",
      languages: ["Arabic", "English", "French"]
    },
    {
      name: "Karim", 
      role: "Adventure Guide",
      experience: "5+ years",
      specialty: "Camel Trekking & Cultural Stories",
      bio: "Karim comes from a family of nomadic heritage and shares fascinating desert folklore.",
      languages: ["Arabic", "English", "Spanish"]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl md:text-5xl  text-slate-800 text-center mb-8">
          Meet Our Guides
        </h1>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Local experts who turn desert adventures into lifelong memories
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-amber-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-700 text-2xl">👤</span>
                </div>
                <h3 className="text-2xl  text-slate-800">{guide.name}</h3>
                <p className="text-amber-600 font-medium">{guide.role}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-slate-700">Experience: </span>
                  <span className="text-slate-600">{guide.experience}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">Specialty: </span>
                  <span className="text-slate-600">{guide.specialty}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">Languages: </span>
                  <span className="text-slate-600">{guide.languages.join(', ')}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{guide.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl  text-slate-800 mb-4">Why Choose Our Guides?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-slate-700">
            <div>✅ Certified & Licensed</div>
            <div>✅ First Aid Trained</div>
            <div>✅ Local Experts</div>
            <div>✅ Multi-lingual</div>
            <div>✅ Safety Focused</div>
            <div>✅ Storytellers</div>
          </div>
        </div>
      </div>
    </div>
  );
}