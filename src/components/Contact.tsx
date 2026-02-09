import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Delhi Office",
      details: [
        "A1, Block A, Jangpura Extension,",
        "New Delhi - 110014, India"
      ]
    },
    {
      icon: MapPin,
      title: "Mumbai Office",
      details: [
        "76, 7th Floor, Bajaj Bhawan, Nariman Point,",
        "Mumbai – 400021, India"
      ]
    },
    {
      icon: MapPin,
      title: "Bengaluru Office",
      details: [
        "No. 6/A, 3A Main Road, Ramaiah Layout,",
        "Bengaluru – 560 084, India"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "legal@clclaw.in",
        "Quick response within 24 hours"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91 99999 20118",
        "Strategic Legal Counsel"
      ]
    }
  ];

  return (
    <div className="flex-1 bg-white">
      {/* Header Section */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-3xl poppins font-bold text-[#163C0F] mb-6">
              Why Choose Our Tax Law Firm?
            </h1>

            <div className="max-w-4xl mx-auto mb-8">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-left">
                {[
                  "Boutique law practice - Client-focused strategic tax advisory.",
                  "Supreme Court Expertise - Proven experience in Tax and Commercial Disputes.",
                  "20+ Years of Experience - Leading among taxation law firms in India.",
                  "Pan-India Presence - Seamless representation across jurisdictions.",
                  "Research-Driven Approach – Strategy built on strong legal research, precedents, and practical solutions."
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                    <span className="text-[#163C0F] font-bold text-lg leading-none">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-base sm:text-lg text-gray-600 mb-6 font-medium">
              Reach out to our experienced team for strategic legal counsel in tax and commercial disputes. We’re here to protect your interests.
            </p>

            <div className="mt-8">
              <p className="text-[#163C0F] font-bold text-xl mb-1">Commercial Law Chamber</p>
              <p className="text-sm sm:text-base text-gray-500 italic">Your Trusted Business Law Chambers for Tax Excellence.</p>
            </div>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-[#163C0F] transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-[#B3C7AB] rounded-lg p-2.5 flex-shrink-0">
                    <info.icon className="h-5 w-5 text-[#163C0F]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-[#163C0F] mb-2 text-base">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => {
                        // Check if detail is a phone number
                        const isPhone = /^\+?91[\s-]?\d{5}[\s-]?\d{5}$/.test(detail.replace(/\s/g, ''));
                        // Check if detail is an email
                        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(detail);

                        if (isPhone) {
                          const phoneNumber = detail.replace(/\s|-/g, '');
                          return (
                            <p key={i} className="text-sm text-gray-600 break-words">
                              <a
                                href={`tel:${phoneNumber}`}
                                className="text-[#163C0F] hover:underline font-medium"
                              >
                                {detail}
                              </a>
                            </p>
                          );
                        } else if (isEmail) {
                          return (
                            <p key={i} className="text-sm text-gray-600 break-words">
                              <a
                                href={`mailto:${detail}`}
                                className="text-[#163C0F] hover:underline font-medium"
                              >
                                {detail}
                              </a>
                            </p>
                          );
                        } else {
                          return (
                            <p key={i} className="text-sm text-gray-600 break-words">
                              {detail}
                            </p>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold poppins text-[#163C0F] mb-2">Send us a Message for Dispute Resolution Counsel</h2>
              <p className="text-sm sm:text-base text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            <form className="space-y-6" action="https://formsubmit.co/legal@clclaw.in" method="POST">
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_subject" value="New Contact Form Submission - CLC Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "/contact?success=true" : "/contact?success=true"} />
              <input type="hidden" name="_template" value="box" />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#163C0F] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#163C0F] focus:border-[#163C0F]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#163C0F] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#163C0F] focus:border-[#163C0F]"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#163C0F] mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#163C0F] focus:border-[#163C0F]"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="matterType" className="block text-sm font-medium text-[#163C0F] mb-2">
                    Legal Matter Type <span className="text-red-500">*</span>
                  </label>
                  <select id="matterType" name="matterType" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#163C0F] focus:border-[#163C0F]">
                    <option value="">Select type</option>
                    <option value="Direct Tax">Direct Tax</option>
                    <option value="Indirect Tax">Indirect Tax</option>
                    <option value="GST Matters">GST Matters</option>
                    <option value="Commercial Disputes">Commercial Disputes</option>
                    <option value="Regulatory Issues">Regulatory Issues</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#163C0F] mb-2">
                  Company/Organization <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#163C0F] focus:border-[#163C0F]"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#163C0F] mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#163C0F] focus:border-[#163C0F] resize-none"
                  placeholder="Please describe your legal matter and how we can assist you..."
                ></textarea>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="privacy" name="privacy" required className="rounded" />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the privacy policy and terms of service <span className="text-red-500">*</span>
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full bg-[#163C0F] hover:bg-[#1a4a1a] text-white">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#B3C7AB] border border-[#163C0F] rounded-lg p-6 sm:p-8 text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-[#163C0F]" />
            <h3 className="text-xl font-bold poppins text-[#163C0F] mb-2">
              Pan-India Legal Network for Complex Disputes
            </h3>
            <p className="text-sm sm:text-base text-black">
              With representation across all state capitals, we provide seamless
              legal support throughout India with local insight and expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;