import HeroAnimations from "@/lib/heroAnimation";
import { MapPin, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Delhi Office",
    details: ["A1, Block A, Jangpura Extension,", "New Delhi - 110014, India"],
  },
  {
    icon: MapPin,
    title: "Mumbai Office",
    details: ["76, 7th Floor, Bajaj Bhawan, Nariman Point,", "Mumbai – 400021, India"],
  },
  {
    icon: MapPin,
    title: "Bengaluru Office",
    details: ["No. 6/A, 3A Main Road, Ramaiah Layout,", "Bengaluru – 560 084, India"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["legal@clclaw.in", "Quick response within 24 hours"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 99999 20118", "Strategic Legal Counsel"],
  },
];

const whyChoose = [
  "Boutique law practice — Client-focused strategic tax advisory.",
  "Supreme Court Expertise — Proven experience in Tax and Commercial Disputes.",
  "20+ Years of Experience — Leading among taxation law firms in India.",
  "Pan-India Presence — Seamless representation across jurisdictions.",
  "Research-Driven Approach — Strategy built on strong legal research, precedents, and practical solutions.",
];

const Contact = () => {
  return (
    <div className="flex-1 bg-white xl:mx-10">
      <HeroAnimations />
      {/* ── Header ── */}
      <section className="py-4 px-4 sm:px-8 mt-0 md:mt-12 md:px-12  lg:px-16  ">
        <div className="max-w-6xl mx-auto  hero-para text-center">
          <h1
            className="mb-3  hero-title text-[#163C0F] "
            style={{
              fontFamily: "League Spartan",
              fontWeight: 700,
              fontSize: "clamp(32px, 6vw, 45px)",
              lineHeight: "1.1",
              letterSpacing: "2px",
              textAlign: "center",
              display: "block",
            }}
          >
            Get In <span style={{ color: "#163C0F" }}>Touch With Us</span>
          </h1>
          <p
            className=" hero-para "
            style={{
              fontFamily: "League Spartan",
              fontWeight: 400,
              fontSize: "clamp(14px, 2vw, 16px)",
              lineHeight: "18px",
              color: "#4B5563",
            }}
          >
            Reach out to our experienced team for strategic legal counsel in tax and commercial disputes. We’re here to protect your interests.
          </p>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="hero-buttons py-4 px-4 sm:px-8  md:px-12  lg:px-16  bg-white">
        <div className="w-full border border-dotted border-[#22461B]/50 mb-8" />

        <h2
          className="uppercase mb-6"
          style={{
            fontFamily: "Arial",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "24px",
            color: "#336429",
          }}
        >
          WHY CHOOSE OUR TAX LAW FIRM
        </h2>

        <div className="space-y-3">
          {whyChoose.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 px-5 py-4"
              style={
                index % 2 === 0
                  ? { background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }
                  : { background: "linear-gradient(to left, #CFE2C8, #FFFFFF)" }
              }
            >
              <span
                style={{
                  fontFamily: "Arial",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#336429",
                  lineHeight: "1",
                  marginTop: "2px",
                }}
              >
                •
              </span>
              <p
                style={{
                  fontFamily: "League Spartan",
                  fontWeight: 400,
                  fontSize: "clamp(16.5px, 1.8vw, 16.4px)",
                  lineHeight: "20px",
                  color: "#000000",
                }}
              >
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full border border-dotted border-[#22461B]/50 mt-8" />
      </section>

      {/* ── Contact Info ── */}
      <section className="hero-buttons py-4 px-4 sm:px-8  md:px-12  lg:px-16  bg-white">
        <h2
          className="uppercase mb-6"
          style={{
            fontFamily: "Arial",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "24px",
            color: "#336429",
          }}
        >
          OUR OFFICES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 border border-gray-200 hover:border-[#163C0F] transition-all"
            >
              <div className="bg-[#B3C7AB] p-2.5 shrink-0">
                <info.icon className="h-5 w-5 text-[#163C0F]" />
              </div>
              <div className="min-w-0 flex-1">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(18.5px, 1.8vw, 16.4px)",
                    color: "#163C0F",
                  }}
                >
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => {
                    const isPhone = /^\+?91[\s-]?\d{5}[\s-]?\d{5}$/.test(detail.replace(/\s/g, ""));
                    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(detail);

                    const baseStyle = {
                      fontFamily: "League Spartan",
                      fontWeight: 400,
                      fontSize: "clamp(16.5px, 1.8vw, 16.4px)",
                      lineHeight: "20px",
                    } as React.CSSProperties;

                    if (isPhone) {
                      return (
                        <p key={i} style={baseStyle}>
                          <a href={`tel:${detail.replace(/\s|-/g, "")}`}
                            style={{ color: "#163C0F", fontWeight: 600 }}
                            className="hover:underline"
                          >
                            {detail}
                          </a>
                        </p>
                      );
                    } else if (isEmail) {
                      return (
                        <p key={i} style={baseStyle}>
                          <a href={`mailto:${detail}`}
                            style={{ color: "#163C0F", fontWeight: 600 }}
                            className="hover:underline"
                          >
                            {detail}
                          </a>
                        </p>
                      );
                    } else {
                      return (
                        <p key={i} style={{ ...baseStyle, color: "#374151" }}>
                          {detail}
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div
          className="mt-6 px-5 py-5"
          style={{ background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }}
        >
          <p
            style={{
              fontFamily: "League Spartan",
              fontWeight: 700,
              fontSize: "clamp(18.5px, 1.8vw, 20.4px)",
              color: "#163C0F",
              marginBottom: "4px",
            }}
          >
            Commercial Law Chamber
          </p>
          <p
            style={{
              fontFamily: "League Spartan",
              fontWeight: 400,
              fontSize: "clamp(16.5px, 1.8vw, 16.4px)",
              color: "#5A6F55",
            }}
          >
            Your Trusted Business Law Chambers for Tax Excellence.
          </p>
        </div>

        <div className="w-full border border-dotted border-[#22461B]/50 mt-8" />
      </section>

    </div>
  );
};

export default Contact;
