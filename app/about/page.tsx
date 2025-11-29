/* eslint-disable react/no-unescaped-entities */
// app/about/page.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl md:text-5xl  text-slate-800 text-center mb-8">
          About Quad Camel Marrakech
        </h1>
        <div className="prose prose-lg max-w-none">
          
          <p className="text-xl text-slate-600 text-center mb-12">
            Local experts creating unforgettable desert adventures since 2018
          </p>
          
          <div className="bg-amber-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl  text-slate-800 mb-4">Our Story</h2>
            <p className="text-slate-700 mb-4">
              Born and raised in the shadows of the Atlas Mountains, our team has spent a lifetime 
              exploring the Agafay Desert. What started as childhood adventures has grown into a 
              passion for sharing the magic of Moroccan deserts with travelers from around the world.
            </p>
            <p className="text-slate-700">
              We believe every desert journey should be authentic, safe, and unforgettable. 
              That's why we personally guide every tour, ensuring you experience the true spirit 
              of Moroccan hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Mission</h3>
              <p className="text-slate-600">
                To create authentic desert experiences that respect local traditions while 
                delivering unforgettable adventures for every traveler.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-amber-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Values</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Authentic local experiences</li>
                <li>• Safety first approach</li>
                <li>• Sustainable tourism</li>
                <li>• Personalized service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}