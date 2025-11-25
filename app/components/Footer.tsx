const Footer = () => {
  return (
   <footer className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      {/* Brand Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-10 bg-linear-to-b from-amber-400 to-amber-500 rounded-full"></div>
          <span className="text-white font-light text-3xl tracking-widest">QuadCamelMarrakesh</span>
        </div>
        
        <p className="text-slate-300 text-lg leading-relaxed max-w-md">
          Crafting unforgettable desert experiences in the heart of Morocco through luxury adventures and authentic cultural immersion.
        </p>
        
        {/* Social Links */}
        <div className="flex space-x-4">
          {[
            { icon: '📷', label: 'Instagram' },
            { icon: '👥', label: 'Facebook' },
            { icon: '🎥', label: 'YouTube' },
            { icon: '💼', label: 'LinkedIn' }
          ].map((social, index) => (
            <a
              key={index}
              href="#"
              className="group w-12 h-12 bg-slate-700/50 hover:bg-amber-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-slate-600/50 hover:border-amber-400"
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* Experiences */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg tracking-widest uppercase mb-4">
            Experiences
          </h3>
          <div className="space-y-3">
            {['Quad Biking', 'Camel Trekking', 'Private Groups'].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg tracking-widest uppercase mb-4">
            Company
          </h3>
          <div className="space-y-3">
            {['About Us', 'Our Guides', 'Safety', 'Sustainability'].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg tracking-widest uppercase mb-4">
            Support
          </h3>
          <div className="space-y-3">
            {['Contact', 'FAQ', 'Booking Policy', 'Privacy'].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Contact & Newsletter */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 border-t border-slate-700/50">
      {/* Contact Info */}
      <div className="space-y-6">
        <h3 className="text-white font-semibold text-lg tracking-widest uppercase">
          Get In Touch
        </h3>
        <div className="space-y-4">
          {[
            { icon: '📍', text: 'Marrakech, Morocco', subtext: 'Desert Adventure Base' },
            { icon: '📞', text: '+212 6 12 34 56 78', subtext: 'Available 24/7' },
            { icon: '✉️', text: 'experience@quadCamelMarrakesh.com', subtext: 'Quick Response' }
          ].map((contact, index) => (
            <div key={index} className="flex items-start space-x-4 group">
              <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                <span className="text-amber-400 text-lg">{contact.icon}</span>
              </div>
              <div>
                <div className="text-white font-medium group-hover:text-amber-400 transition-colors duration-300">
                  {contact.text}
                </div>
                <div className="text-slate-500 text-sm mt-1">
                  {contact.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-slate-700/50 pt-8">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Copyright */}
        <div className="text-slate-500 text-sm">
          © 2024 QuadCamelMarrakesh ADVENTURES. ALL RIGHTS RESERVED.
        </div>

        {/* Legal Links */}
        <div className="flex items-center space-x-8">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-slate-500 hover:text-amber-400 text-sm transition-colors duration-300 hover:scale-105"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="flex items-center space-x-4">
          <div className="text-slate-500 text-sm mr-4">We Accept:</div>
          <div className="flex space-x-2">
            {['💳', '💰', '🏦', '💵'].map((method, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-400"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>

  {/* Floating CTA */}
  <div className="fixed bottom-6 right-6 z-50">
    <div className="flex flex-col space-y-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/212627349254"
        className="group relative bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <div className="flex items-center space-x-2">
          <span className="text-lg">💬</span>
          <div className="text-xs font-medium tracking-wide">
            Chat Now
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
      </a>

      {/* Book Now */}
      <button className="group bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl">
        <div className="flex items-center space-x-2">
          <span className="text-lg">⚡</span>
          <div className="text-xs font-medium tracking-wide">
            Book Now
          </div>
        </div>
      </button>
    </div>
  </div>
</footer>
  )
}

export default Footer