import SectionTitle from '../components/SectionTitle';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="relative h-96">
        <div className="absolute inset-0 bg-primary flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <SectionTitle
                  title="Get In Touch"
                  subtitle="We're here to help"
                />
                <div className="space-y-6 text-gray-700">
                  <p>
                    Have questions about our programs, want to volunteer, or explore partnership opportunities? Reach out to us using the form or contact details below.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Address</h4>
                        <p>123 Community Street, Mumbai, India 400001</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Phone</h4>
                        <p>+91 98765 43210</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Email</h4>
                        <p>info.ektaproject.org</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-lg p-8">
            <SectionTitle
              title="Visit Our Office"
              subtitle="We'd love to meet you"
            />
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              {/* Map would go here */}
              <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                <p className="text-gray-500">Map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}