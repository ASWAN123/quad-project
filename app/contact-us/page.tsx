/* eslint-disable react/no-unescaped-entities */
"use client";
// pages/contact.js
import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    guests: 1,
    preferredDate: '',
    tourType: 'combo'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        guests: 1,
        preferredDate: '',
        tourType: 'combo'
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      details: '+212 6 12 34 56 78',
      description: 'Available 24/7 for urgent inquiries',
      action: 'tel:+212612345678'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: '+212 6 12 34 56 78',
      description: 'Quick responses, photos & videos',
      action: 'https://wa.me/212612345678'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: 'experience@quadCamelMarrakesh.com',
      description: 'Detailed inquiries & documentation',
      action: 'mailto:experience@quadCamelMarrakesh.com'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: 'Marrakech, Morocco',
      description: 'Desert adventure base camp',
      action: 'https://maps.google.com'
    }
  ];

  const faqs = [
    {
      question: "What's the best time for desert adventures?",
      answer: "Early morning (7-10 AM) and late afternoon (4-7 PM) offer the most comfortable temperatures and stunning lighting for photography."
    },
    {
      question: "Do I need experience for quad biking?",
      answer: "No experience needed! We provide full training and safety equipment. Our guides ensure everyone feels comfortable and safe."
    },
    {
      question: "What should I wear and bring?",
      answer: "Comfortable clothing, closed-toe shoes, sunglasses, and sunscreen. We provide all safety equipment and bottled water."
    },
    {
      question: "Can children participate?",
      answer: "Yes! Minimum age is 6 for camel trekking and 12 for quad biking. Family tours are our specialty!"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-amber-50 to-stone-50 py-24">
      <Head>
        <title>Contact Us | quadCamelMarrakesh Adventures</title>
        <meta name="description" content="Get in touch with QuadCamelMarrakesh Adventures for premium desert experiences in Morocco" />
      </Head>

      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <span className="text-amber-600 text-sm font-medium tracking-[0.3em] bg-amber-100 px-4 py-2 rounded-full border border-amber-200">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-6xl font-light text-slate-800 mt-6 mb-4">
              Let's Create Your
              <span className="block bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Desert Story
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to embark on your Moroccan adventure? We're here to answer all your questions and help you plan the perfect desert experience.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light text-slate-800 mb-6">Quick Connect</h2>
                <p className="text-slate-600 mb-8">
                  Choose your preferred way to reach us. We typically respond within minutes during business hours.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                        <span className="text-xl group-hover:text-white">{method.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 group-hover:text-amber-600 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-slate-700 font-medium mt-1">{method.details}</p>
                        <p className="text-slate-500 text-sm mt-2">{method.description}</p>
                      </div>
                      <span className="text-slate-400 group-hover:text-amber-500 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center">
                  <span className="text-amber-600 mr-2">🕒</span>
                  Business Hours
                </h3>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Sunday</span>
                    <span className="font-medium">6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Support</span>
                    <span className="font-medium text-green-600">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="bg-linear-to-r from-amber-500 to-amber-600 text-white p-8">
                <h2 className="text-2xl font-light mb-2">Send us a Message</h2>
                <p className="text-amber-100">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="+212 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Tour Type</label>
                    <select
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="combo">Desert Adventure Combo</option>
                      <option value="quad">Quad Biking Only</option>
                      <option value="camel">Camel Trekking Only</option>
                      <option value="private">Private Tour</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Number of Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-slate-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-slate-700 font-medium mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Tell us about your dream desert adventure, any special requirements, or questions you might have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    'Send Message & Begin Adventure'
                  )}
                </button>

                <p className="text-slate-500 text-sm text-center mt-4">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-light text-slate-800 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <span className="text-amber-500 mr-2">❓</span>
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Ready to Start Your
            <span className="block text-amber-400">Adventure?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait - the desert is calling! Book your experience today and create memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212612345678"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <span>💬</span>
              <span>Chat on WhatsApp</span>
            </a>
            <button className="border border-slate-600 hover:border-amber-400 text-slate-300 hover:text-white px-8 py-4 rounded-xl transition-colors">
              Call Now: +212 6 12 34 56 78
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}