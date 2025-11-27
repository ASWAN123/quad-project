/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    guests: 2,
    preferredDate: '',
    tourType: 'combo'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = async (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       message: '',
  //       guests: 2,
  //       preferredDate: '',
  //       tourType: 'combo'
  //     });
  //   }, 2000);
  // };


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        guests: 2,
        preferredDate: '',
        tourType: 'combo'
      });
    } else {
      alert(result.message || 'Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Failed to send message. Please try again or contact us directly via WhatsApp.');
  } finally {
    setIsSubmitting(false);
  }
};
  const contactMethods = [
    {
      icon: '💬',
      title: 'Chat with Us',
      details: 'Quick & Friendly',
      description: 'Get instant answers on WhatsApp',
      action: 'https://wa.me/212627349254',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📞',
      title: 'Call abdo',
      details: '+212 6 27 349 254',
      description: 'Direct line to your guide',
      action: 'tel:+212627349254',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '✉️',
      title: 'Send Email',
      details: 'experience@quadcamelmarrakesh.com',
      description: 'For detailed planning',
      action: 'mailto:experience@quadcamelmarrakesh.com',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  const quickQuestions = [
    {
      question: "Best time for desert adventure?",
      answer: "Early morning or late afternoon for perfect light and comfortable temperatures."
    },
    {
      question: "Need prior experience?",
      answer: "Not at all! We guide complete beginners through every step."
    },
    {
      question: "What to wear?",
      answer: "Comfortable clothes, closed shoes, and sun protection. We handle the rest!"
    },
    {
      question: "Children welcome?",
      answer: "Absolutely! We love creating family memories in the desert."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      {/* Header */}
      <div className="bg-linear-to-b from-amber-50/80 to-slate-50 border-b border-amber-100/50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200/80 mb-6">
              <span className="text-amber-700 text-sm font-light tracking-widest">
                LET'S CREATE MAGIC
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl  text-slate-800 mb-6 leading-tight">
              Your Desert Adventure
              <span className="block text-amber-700 mt-2">Starts Here</span>
            </h1>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 max-w-2xl mx-auto">
              <p className="text-slate-700 text-lg leading-relaxed">
                "We don't just book tours - we create lifelong memories. Tell us your dreams, and we'll craft the perfect desert experience just for you."
              </p>
              <div className="flex items-center justify-center space-x-3 mt-4">
                <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white  text-sm">
                  K
                </div>
                <div className="text-left">
                  <p className="text-slate-800 font-medium text-sm">The Team</p>
                  <p className="text-slate-600 text-xs">Your local guides in Marrakech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Personal Contact Side */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Welcome Message */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-100/50 shadow-sm">
              <h2 className="text-2xl  text-slate-800 mb-4">We'd Love to Hear from You</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Whether you're dreaming of quad biking thrills, peaceful camel sunsets, or a perfect combination - 
                we're here to make it happen. As locals born and raised in Marrakech, we know the desert like our backyard.
              </p>
              
              <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200/50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-100/80 rounded-xl flex items-center justify-center">
                    <span className="text-amber-700 text-xl">💫</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Why Choose Us?</h3>
                    <p className="text-slate-600 text-sm">Local expertise + personalized service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-4">
              <h3 className="text-xl  text-slate-800 mb-4">Quick Ways to Reach Us</h3>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="group block bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100/50 hover:border-amber-300/70 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-linear-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <span className="text-white text-xl">{method.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 group-hover:text-amber-700 transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-slate-700 font-medium mt-1">{method.details}</p>
                      <p className="text-slate-600 text-sm mt-1">{method.description}</p>
                    </div>
                    <span className="text-slate-500 group-hover:text-amber-500 transform group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="bg-amber-50/60 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/50">
              <h3 className="text-xl  text-slate-800 mb-6">Quick Questions Answered</h3>
              <div className="space-y-4">
                {quickQuestions.map((item, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-amber-100/50">
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                      <span className="text-amber-600 mr-2">•</span>
                      {item.question}
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-100/50 shadow-sm h-fit order-1 lg:order-2">
            <div className="text-center mb-8">
              <h2 className="text-2xl  text-slate-800 mb-2">Plan Your Adventure</h2>
              <p className="text-slate-600">Tell us about your dream desert experience</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-3">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-amber-200/70 rounded-xl focus:outline-none focus:border-amber-500 bg-white/90 transition-colors placeholder-slate-500 text-slate-800"
                    placeholder="How should we call you?"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-3">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-amber-200/70 rounded-xl focus:outline-none focus:border-amber-500 bg-white/90 transition-colors placeholder-slate-500 text-slate-800"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-3">Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-amber-200/70 rounded-xl focus:outline-none focus:border-amber-500 bg-white/90 transition-colors placeholder-slate-500 text-slate-800"
                    placeholder="For quicker updates"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-3">Adventure Type</label>
                  <select
                    name="tourType"
                    value={formData.tourType}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-amber-200/70 rounded-xl focus:outline-none focus:border-amber-500 bg-white/90 transition-colors text-slate-800"
                  >
                    <option value="combo">Quad + Camel Combo</option>
                    <option value="quad">Quad Biking Only</option>
                    <option value="camel">Camel Trekking Only</option>
                    <option value="custom">Custom Experience</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-3">Number of Adventurers</label>
                  <div className="flex items-center justify-between bg-white/90 rounded-xl p-3 border-2 border-amber-200/70">
                    <button
                    aria-label="Decrease number of guests"
                      type="button"
                      onClick={() => setFormData({...formData, guests: Math.max(1, formData.guests - 1)})}
                      className="w-12 h-12 rounded-full border-2 border-amber-300/70 flex items-center justify-center hover:bg-amber-50/80 transition-colors text-amber-600 font-bold text-lg"
                    >
                      -
                    </button>
                    <span className="text-xl font-bold text-slate-800 px-4">{formData.guests}</span>
                    <button
                    aria-label="Increase number of guests"
                      type="button"
                      onClick={() => setFormData({...formData, guests: formData.guests + 1})}
                      className="w-12 h-12 rounded-full border-2 border-amber-300/70 flex items-center justify-center hover:bg-amber-50/80 transition-colors text-amber-600 font-bold text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-3">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-amber-200/70 rounded-xl focus:outline-none focus:border-amber-500 bg-white/90 transition-colors text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-3">Your Adventure Dreams</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-4 border-2 border-amber-200/70 rounded-xl focus:outline-none focus:border-amber-500 bg-white/90 transition-colors resize-none placeholder-slate-500 text-slate-800"
                  placeholder="Tell us about your ideal desert experience, any special requests, or questions you have..."
                ></textarea>
              </div>

              <button
              aria-label="Start Your Desert Journey"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
          
                {isSubmitting ? (
  <>
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    <span>Sending Your Adventure Request...</span>
  </>
) : (
  <>
    <span>Start Your Desert Journey</span>
    <span className="group-hover:translate-x-1 transition-transform">🏜️</span>
  </>
)}

              </button>

              <p className="text-slate-600 text-sm text-center">
                We'll respond within hours with personalized options
              </p>
            </form>
          </div>
        </div>

        {/* Personal Promise */}
        <div className="mt-16 bg-linear-to-r from-amber-500 to-amber-600 rounded-3xl p-8 text-white text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl  mb-4">
            Our Promise to You
          </h2>
          <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Every adventure is personally crafted. From the moment you contact us until you return with incredible memories, 
            you'll experience the genuine hospitality that makes Moroccan deserts so magical.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-amber-200">
              <span>⭐</span>
              <span>Local Expert Guides</span>
            </div>
            <div className="flex items-center space-x-2 text-amber-200">
              <span>⭐</span>
              <span>Personalized Experiences</span>
            </div>
            <div className="flex items-center space-x-2 text-amber-200">
              <span>⭐</span>
              <span>Best Price Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}