// app/privacy/page.tsx
export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600">
            Your privacy is important to us
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-100/50">
          <div className="prose prose-slate max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-serif text-slate-800 mb-4">Information We Collect</h2>
              <p className="text-slate-700 mb-4">
                We collect information you provide directly to us when you book an adventure, 
                contact our customer service, or communicate with us via WhatsApp, email, or phone.
              </p>
              <ul className="text-slate-700 space-y-2">
                <li>• Contact information (name, email, phone number)</li>
                <li>• Booking details and preferences</li>
                <li>• Communication history with our team</li>
                <li>• Payment information (processed securely through our payment providers)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-serif text-slate-800 mb-4">How We Use Your Information</h2>
              <ul className="text-slate-700 space-y-2">
                <li>• To process and manage your bookings</li>
                <li>• To communicate with you about your adventure</li>
                <li>• To provide customer support</li>
                <li>• To improve our services and customer experience</li>
                <li>• To send important updates about your booking</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-serif text-slate-800 mb-4">Information Sharing</h2>
              <p className="text-slate-700">
                We do not sell or rent your personal information to third parties. We may share 
                information only with trusted service providers who assist us in operating our 
                business, and only to the extent necessary to provide our services to you.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-serif text-slate-800 mb-4">Data Security</h2>
              <p className="text-slate-700">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-serif text-slate-800 mb-4">Your Rights</h2>
              <ul className="text-slate-700 space-y-2">
                <li>• Access the personal information we hold about you</li>
                <li>• Request correction of inaccurate information</li>
                <li>• Request deletion of your personal information</li>
                <li>• Object to processing of your personal information</li>
                <li>• Request transfer of your data to another service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">Contact Us</h2>
              <p className="text-slate-700">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-slate-700">
                <div>📧 experience@quadcamelmarrakesh.com</div>
                <div>📞 +212 6 27 349 254</div>
                <div>💬 WhatsApp: +212 6 27 349 254</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}