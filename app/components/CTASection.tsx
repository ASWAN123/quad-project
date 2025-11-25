/* eslint-disable react/no-unescaped-entities */


const CTASection = () => {
  return (
    
<section className="py-28 bg-linear-to-br from-slate-50 via-amber-50 to-stone-100 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0">
    {/* Subtle Pattern */}
    <div className="absolute inset-0 bg-[url('/images/subtle-pattern.png')] opacity-5"></div>
    
    {/* Floating Elements */}
    <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200/30 rounded-full blur-xl"></div>
    <div className="absolute bottom-20 right-20 w-24 h-24 bg-amber-100/40 rounded-full blur-xl"></div>
  </div>

  <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
    {/* Clean Badge */}
    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200 shadow-sm mb-8">
      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
      <span className="text-amber-700 text-sm font-light tracking-widest">
        READY FOR ADVENTURE?
      </span>
    </div>
    
    {/* Clear Heading */}
    <div className="mb-8">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6 leading-tight">
        Your Desert
        <span className="block text-amber-600 mt-2">Journey Awaits</span>
      </h2>
    </div>
    
    {/* Readable Description */}
    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
      Join thousands of travelers who've discovered the magic of Morocco with us. 
      Let's create your perfect desert experience together.
    </p>

    {/* High-Contrast Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
      {/* Primary Button */}
      <button className="group bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-12 py-5 text-lg font-medium tracking-wide rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3">
        <span>Start Your Adventure</span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
      </button>
      
      {/* Secondary Button */}
      <button className="group border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-10 py-5 text-lg font-medium tracking-wide rounded-full transition-all duration-300 flex items-center space-x-3">
        <span>Contact Us</span>
        <span className="group-hover:scale-110 transition-transform duration-300">💬</span>
      </button>
    </div>

    {/* Trust Indicators */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
      {[
        { icon: "🚀", text: "Quick Response", color: "text-blue-600" },
        { icon: "💰", text: "Best Price", color: "text-green-600" },
        { icon: "🏆", text: "Local Experts", color: "text-amber-600" },
        { icon: "⭐", text: "4.9/5 Rating", color: "text-amber-600" }
      ].map((item, index) => (
        <div key={index} className="flex items-center justify-center space-x-2 text-slate-600 text-sm">
          <span className={`${item.color} text-lg`}>{item.icon}</span>
          <span>{item.text}</span>
        </div>
      ))}
    </div>

    {/* Simple Guarantee */}
    <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-sm max-w-md mx-auto">
      <div className="flex items-center justify-center space-x-3 text-slate-700 text-sm">
        <span className="text-amber-600 text-lg">✨</span>
        <span>Personalized experiences crafted just for you</span>
      </div>
    </div>
  </div>
</section>

  )
}

export default CTASection