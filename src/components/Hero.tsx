
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroAnimations from "@/lib/heroAnimation";
const distinctions = [
  {
    src: "/vivek.webp",
    alt: "Boutique Law Practice",
    text: "Boutique law practice specializing in GST law services, Customs, and commercial dispute resolution",
  },
  {
    src: "/shreya.webp",
    alt: "Supreme Court",
    text: "Led by top tax lawyers in India with deep advisory and litigation expertise",
  },
  {
    src: "/images/deepak.jpg",
    alt: "Business Law Chambers",
    text: "Business law chambers with a Pan-India legal network and seamless multi-jurisdictional coverage",
  },
  {
    src: "/images/vivek.jpg",
    alt: "Top Tax Lawyers",
    text: "Research-intensive, precedent-driven legal strategy",
  },
  {
    src: "/images/vivek.jpg",
    alt: "Top Tax Lawyers",
    text: "Regular representation before the Supreme Court of India",
  },
];

const Hero = () => {

  return (

    <div className="flex-1 ">
      <HeroAnimations />
      {/* Hero Section */}
      <section className="relative py-4 px-4 sm:px-8  md:px-12 lg:px-16 xl:mx-0 text-center justify-end  space-y-[48px] overflow-hidden">

        <img src="/new/heroGlass.svg" className="absolute left-[360px] md:left-[360px] max-w-[800px] top-0 -translate-x-1/2 hidden md:block" alt="" />
        <img src="/new/heroGradient.svg" className="absolute left-1/2 -translate-x-1/2 w-full md:w-[80vw] max-w-[950px] top-0 -z-10 opacity-60 md:opacity-100" alt="" />
        <div className="mx-auto max-w-2xl px-2">

          <h1 className=" hero-title md:mt-[104px] mr-8   text-[#163C0F] leading-tight mb-[6px]" style={{
            fontFamily: "League Spartan",
            fontWeight: 700,
            fontSize: "clamp(30px, 8vw, 50px)",
            lineHeight: "1.2",
            letterSpacing: "0.5px",


          }}>
            Commitment to Legal Excellence.
          </h1>

          <p
            className="text-[#163C0F] hero-para max-w-lg  mx-auto mb-8"
            style={{
              fontFamily: "League Spartan",
              fontWeight: 400,
              fontSize: "clamp(14px, 2vw, 14px)",
              lineHeight: "18px",
              letterSpacing: "0px",
              textAlign: "center",
            }}
          >
            Trusted by corporations and individuals across India for strategic legal solutions.

          </p>

          <div
            className="flex flex-col sm:flex-row hero-buttons justify-center items-center gap-3 sm:gap-[12px]"
            style={{ fontFamily: "Arial", fontWeight: 700 }}
          >
            <Link
              href="/contact"
              style={{
                fontFamily: "Arial",
                fontWeight: 700,
                fontStyle: "Bold",
                fontSize: "14.4px",
                lineHeight: "24px",
                letterSpacing: "0px",
                textAlign: "center",

              }}
              className="bg-[#163C0F] hover:scale-105 z-10 cursor-pointer text-white px-6 py-2.5 flex items-center justify-center gap-[10px] w-full sm:w-auto"
            >
              Partner With Us <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              style={{
                fontFamily: "Arial",
                fontWeight: 700,
                fontStyle: "Bold",
                fontSize: "14.4px",
                lineHeight: "24px",
                letterSpacing: "0px",
                textAlign: "center",

              }}
              className="bg-white text-sm hover:scale-105 text-gray-800 z-10 cursor-pointer border border-[#163C0F]/20 px-6 py-2.5 hover:bg-gray-50 transition-all w-full sm:w-auto">
              Review Firm Profile

            </Link>
          </div>
        </div>


        {/* Stats */}
        <div className="flex items-center justify-center  gap-4 sm:gap-[24px] max-w-[600px] mx-auto  ">
          {[
            { value: 500, suffix: "+", label: "CASES WON" },
            { value: 25, suffix: "+", label: "YEARS EXPERIENCE" },
            { value: 98, suffix: "%", label: "CLIENT SATISFACTION" },
          ].map(({ value, suffix, label }) => (
            <div key={label} className="hero-stat">

              <div
                className="counter font-bold text-[#336429] mb-1"
                data-value={value}
                data-suffix={suffix}
                style={{
                  fontFamily: "Arial",
                  fontWeight: 700,
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  lineHeight: "48px",
                  textAlign: "center",
                }}
              >
                0{suffix}
              </div>

              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(10px, 1.5vw, 14px)",
                  lineHeight: "21px",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-4 px-4 sm:px-8 hero-buttons md:px-12  lg:px-16 xl:mx-10  ">

        <h2
          className="font-bold text-[#336429]   mt-[24px] mb-[12px]"
          style={{
            fontFamily: "Arial",
            fontWeight: 700,
            fontSize: "clamp(16px, 2.5vw, 18px)",
            lineHeight: "24px",
            letterSpacing: "0px",
            verticalAlign: "middle",
            textTransform: "uppercase",
          }}
        >
          WELCOME TO COMMERCIAL LAW CHAMBER
        </h2>

        <div
          className="text-gray-800 space-y-4 "
          style={{
            fontFamily: "League Spartan",
            fontWeight: 400,
            fontSize: "clamp(16.4px, 1.8vw, 14.4px)",
            lineHeight: "20px",
            letterSpacing: "0px",
            verticalAlign: "middle",
            textTransform: "capitalize",
          }}
        >
          <p>
            Established in 2008, the Commercial Law Chamber (CLC) is a boutique law firm widely recognized for its specialized tax advisory and high-stakes dispute resolution practice. As one of the top taxation law firms in India, we maintain a strong focus on the Goods and Services Tax Act and Customs laws. Led by the team of best GST lawyers in Delhi and supported by a team of 15 associates, CLC delivers strategic, research-driven, and commercially aligned legal solutions across complex Tax and Commercial Disputes.
          </p>
          <div className="w-full border border-dotted mt-[24px] border-[#22461B]/50"></div>
        </div>
      </section>

      {/* Our Distinction */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:mx-10">
        <h2
          className="font-bold text-[#336429] mt-[14px] mb-[16px]"
          style={{
            fontFamily: "Arial",
            fontWeight: 700,
            fontSize: "clamp(16px, 2.5vw, 18px)",
            lineHeight: "24px",
            letterSpacing: "0px",
            verticalAlign: "middle",
            textTransform: "uppercase",
          }}
        >
          OUR DISTINCTION
        </h2>

        {/* Checkerboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-gray-100">
          {distinctions.map(({ text }, index) => {
            // Checkerboard logic for 2-column grid
            const isGreen = (Math.floor(index / 2) + (index % 2)) % 2 === 0;
            return (
              <div
                key={text}
                className="p-[11px] flex items-center min-h-[110px]"
                style={{
                  background: isGreen ? "#EBF3E8" : "#FFFFFF",
                }}
              >
                <p
                  style={{
                    fontFamily: "League Spartan",
                    fontWeight: 400,
                    fontSize: "clamp(14.px, 1.8vw, 16px)",
                    lineHeight: "1.4",
                    letterSpacing: "0px",
                    textTransform: "capitalize",
                    color: "#111827",
                  }}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full border border-dotted mt-[24px] border-[#22461B]/50"></div>
      </section>

      {/* Core Practice Areas */}
      <section className="py-8 sm:py-[24px] px-4 bg-white sm:px-8 md:px-12 lg:px-16 xl:mx-10">
        <div className="w-full border border-dotted border-[#22461B]/50 mb-[24px]"></div>
        <h2
          className="uppercase mb-[16px] text-[#336429]"
          style={{
            fontFamily: "Arial",
            fontWeight: 700,
            fontSize: "clamp(16px, 2.5vw, 18px)",
            lineHeight: "24px",
            letterSpacing: "0px",
            verticalAlign: "middle",
            textTransform: "uppercase",
          }}
        >
          CORE PRACTICE AREAS
        </h2>
        <div className="space-y-0">
          {[
            {
              title: "Direct Tax",
              desc: "End-To-End Advisory By Experienced Taxation Lawyers, Covering Compliance And Dispute Resolution Across Corporate And Individual Tax Matters, Including Complex Assessments And High-Value Tax Litigation.",
            },
            {
              title: "Indirect Tax",
              desc: "Comprehensive GST Lawyer Advisory, Compliance Management, And Representation In Complex Litigation, Including Classification Disputes, GST Input Tax Credit Rules, Investigation, And Enforcement Actions.",
            },
            {
              title: "Commercial & Regulatory Disputes",
              desc: "Strategic Resolution Of High-Stakes Disputes, Combining Legal Precision Sector-Specific Insight, And Outcome-Oriented Strategy.",
            },
            {
              title: "Customs Law",
              desc: "Strategic Counsel In Cross-Border Trade, Customs Litigation, And Enforcement Actions.",
            },
          ].map(({ title, desc }, index) => (
            <div
              key={title}
              className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] overflow-hidden"
              style={
                index % 2 === 0
                  ? {
                    background: "linear-gradient(to right, ##CFE2C8, #FFFFFF)",
                  }
                  : { background: "linear-gradient(to left, ##CFE2C8, #FFFFFF)" }
              }
            >
              <div className="flex items-center px-[8px] py-[17px]">
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(16px, 1.8vw, 16px)",
                    lineHeight: "20px",
                    letterSpacing: "1%",
                    textTransform: "capitalize",
                    color: "#163C0F",
                  }}
                >
                  {title}
                </span>
              </div>

              <div className="flex items-center px-[8px] py-[17px]">
                <p
                  style={{
                    fontFamily: "League Spartan",
                    fontWeight: 400,
                    fontSize: "clamp(14.4px, 1.8vw, 14.4px)",
                    lineHeight: "18px",
                    textTransform: "capitalize",
                    color: "#000000",
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="py-8 sm:py-[24px]  px-4 bg-white sm:px-8 md:px-12 lg:px-16 xl:mx-10">
        <div className="w-full border border-dotted border-[#22461B]/50 mb-[24px]"></div>
        <h2
          className="uppercase mb-[16px]"
          style={{
            fontFamily: "Arial",
            fontWeight: 700,
            fontSize: "clamp(16px, 2.5vw, 18px)",
            lineHeight: "24px",
            letterSpacing: "0px",
            color: "#336429",
          }}
        >
          OUR TEAM
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              name: "Vivek Sarin",
              role: "Founding Partner",
              degree: "Bachelor of Laws (LLB)",
              experience: "20+ years",
              image: "/images/vivek.jpg",
              expertise: [
                "High Court & Supreme Court Litigation",
                "Constitutional Tax Challenges",
                "CIRP Matters",
                "Regulatory & Compliance Strategy",
                "Shareholder Disputes",
              ],
            },
            {
              name: "Shreyas Shrivastava",
              role: "Partner",
              degree: "Bachelor of Laws (LLB)",
              experience: "12+ years",
              image: "/images/shreya.jpg",
              expertise: [
                "International Trade Remedies",
                "Income Tax & GST",
                "High-stakes Tax Disputes",
                "Cross-border Tax Advisory",
                "Regulatory Representation",
              ],
            },
            {
              name: "Divyanshi Singh",
              role: "Associate Partner",
              degree: "Bachelor of Laws (LLB)",
              experience: "9+ years",
              image: "/images/shreya.jpg",
              expertise: [
                "GST Litigation and Advisory",
                "Healthcare and Pharmaceutical Regulation",
                "Direct and Indirect Tax Advisory",
                "Regulatory Representation",
                "Complex Tax and Compliance Disputes",
              ],
            },
          ].map(({ name, role, degree, experience, image, expertise }) => (
            <div
              key={name}
              className=" border border-[#22461B]/30  rounded-[16px] p-2 flex flex-col items-center text-center"
            >
              {/* Avatar + experience badge */}
              <div className="relative mb-[10px]">
                <div className="w-[88px] h-[88px] rounded-full overflow-hidden border-2 border-gray-100">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-[7px] py-1 rounded-full text-white "
                  style={{
                    background: "#2A5A21",
                    fontStyle: "medium",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                  }}
                >
                  {experience}
                </span>
              </div>

              <div className="mt-[10px]">
                {/* Name */}
                <h3
                  className=" mb-[2px]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontStyle: "medium",
                    fontSize: "clamp(16px, 1.8vw, 16px)",
                    lineHeight: "26px",
                    color: "#163C0F",
                  }}
                >
                  {name}
                </h3>

                {/* Role */}
                <p
                  className="mb-[2px]"
                  style={{
                    fontFamily: "League Spartan",
                    fontWeight: 400,
                    fontSize: "clamp(14px, 1.8vw, 14px)",
                    lineHeight: "21px",
                    color: "#5A6F55",
                  }}
                >
                  {role}
                </p>

                {/* Degree */}
                <p
                  className="mb-[20px]"
                  style={{
                    fontFamily: "League Spartan",
                    fontWeight: 400,
                    fontSize: "clamp(14px, 1.8vw, 14px)",
                    lineHeight: "18px",
                    color: "#5A6F55",
                  }}
                >
                  {degree}
                </p>
              </div>

              {/* Expertise */}
              <div className="w-full text-left">
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(14.4px, 1.8vw, 14.4px)",
                    color: "#336429",
                  }}
                >
                  Expertise :
                </p>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item) => (
                    <span
                      key={item}
                      className="px-[4px] py-[2px] rounded-full border border-[#5A6F554D]/90 text-[#5A6F55]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(12px, 1.8vw, 10px)",
                        lineHeight: "14px",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
