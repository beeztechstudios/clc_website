
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroAnimations  from "@/lib/heroAnimation";
const distinctions = [
  {
    src: "/vivek.webp",
    alt: "Boutique Law Practice",
    text: "Boutique Law Practice Specializing In GST Law Services, Customs, And Commercial Dispute Resolution",
  },
  {
    src: "/shreya.webp",
    alt: "Supreme Court",
    text: "Regular Representation Before The Supreme Court Of India",
  },
  {
    src: "/images/deepak.jpg",
    alt: "Business Law Chambers",
    text: "Business Law Chambers With A Pan-India Legal Network And Seamless Multi-Jurisdictional Coverage",
  },
  {
    src: "/images/vivek.jpg",
    alt: "Top Tax Lawyers",
    text: "Led By Top Tax Lawyers In India With Deep Advisory And Litigation Expertise",
  },
];

const Hero = () => {
  
  return (
    
    <div className="flex-1">
      <HeroAnimations />
      {/* Hero Section */}
      <section className="relative py-12 pb-0 sm:py-16 md:py-20 px-4 sm:px-6 text-center justify-end bg-white  overflow-hidden">
        {/* Circle Background */}
        <div
          className="absolute left-1/2  top-[45%] md:top-32 -translate-x-1/2 w-[140vw] md:w-[1200px] h-[140vw] md:h-[1200px] bg-[#6B8066]/10 rounded-full"
        ></div>

        <h1 className="font-bold hero-title text-[#163C0F] leading-tight mb-4">
          <span
            className="text-[#163C0F]"
            style={{
              fontFamily: "League Spartan",
              fontWeight: 700,
              fontSize: "clamp(38px, 6vw, 58px)",
              lineHeight: "1.1",
              letterSpacing: "2px",
              textAlign: "center",
              display: "block",
            }}
          >
            Commitment to
          </span>
          <span
            className="text-[#2A5A21]"
            style={{
              fontFamily: "League Spartan",
              fontWeight: 700,
              fontSize: "clamp(38px, 6vw, 58px)",
              lineHeight: "1.1",
              letterSpacing: "2px",
              textAlign: "center",
              display: "block",
            }}
          >
            Legal Excellence.
          </span>
        </h1>

        <p
          className="text-gray-600 hero-para max-w-lg mx-auto mb-8"
          style={{
            fontFamily: "League Spartan",
            fontWeight: 400,
            fontSize: "clamp(14px, 2vw, 16px)",
            lineHeight: "21px",
            letterSpacing: "0px",
            textAlign: "center",
          }}
        >
          Trusted by corporations and individuals across India for strategic
          legal solutions that drive success and protect your interests.
        </p>

        <div
          className="flex flex-row hero-buttons justify-center hero-title gap-3 sm:gap-4 mb-8 sm:mb-16"
          style={{ fontFamily: "Arial", fontWeight: 700 }}
        >
          <Link
            href="/contact"
            className="bg-[#163C0F] hover:scale-105 text-sm z-10 cursor-pointer text-white px-4 md:px-6 py-2.5 flex items-center justify-center gap-2 font-bold"
          >
            Partner With Us <ArrowRight className="h-3 md:h-4 w-3  md:w-4" />
          </Link>

          <Link
            href="/contact"
            className="bg-white text-sm hover:scale-105 text-gray-800 z-10 cursor-pointer border border-[#163C0F]/20 px-4 md:px-6 py-2.5 font-bold hover:bg-gray-50 transition-all">
            Review Firm Profile
      
          </Link>
        </div>

        {/* Stats */}
        
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto pt-0 md:pt-8">
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
                  fontFamily: "Inter",
                  fontSize: "clamp(10px, 1.5vw, 14px)",
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
      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16 xl:mx-30 bg-white">
        <div className="w-full border border-dotted border-[#22461B]/50"></div>

        <h2
          className="font-bold text-[#336429] mt-[35px] mb-6"
          style={{
            fontFamily: "Arial",
            fontWeight: 700,
            fontSize: "clamp(16px, 2.5vw, 24px)",
            lineHeight: "24px",
            letterSpacing: "0px",
            verticalAlign: "middle",
            textTransform: "uppercase",
          }}
        >
          WELCOME TO COMMERCIAL LAW CHAMBER
        </h2>

        <div
          className="text-gray-800 space-y-4"
          style={{
            fontFamily: "League Spartan",
            fontWeight: 400,
            fontSize: "clamp(15.5px, 1.8vw, 16.4px)",
            lineHeight: "20px",
            letterSpacing: "0px",
            verticalAlign: "middle",
            textTransform: "capitalize",
          }}
        >
          <p>
            Established In 2008, The Commercial Law Chamber (CLC) Is A Boutique
            Law Firm Widely Recognized For Its Specialized Tax Advisory And
            High-Stakes Dispute Resolution Practice. As One Of The Top Taxation
            Law Firms In India, We Maintain A Strong Focus On The Goods And
            Services Tax Act And Customs Laws. Led By The Team Of Best GST
            Lawyers In Delhi And Supported By A Team Of 15 Associates, CLC
            Delivers Strategic, Research-Driven, And Commercially Aligned Legal
            Solutions Across Complex Tax And Commercial Disputes.
          </p>
          <div className="w-full border border-dotted mt-[35px] border-[#22461B]/50"></div>
        </div>
      </section>

      {/* Our Distinction */}
      <section className="py-8 sm:py-10 px-4 sm:px-8 md:px-12 lg:px-16 bg-white xl:mx-30 ">
        <h2
          className="uppercase mb-6 sm:mb-8"
          style={{
            fontFamily: "Arial",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "0px",
            verticalAlign: "middle",
            textTransform: "uppercase",
            color: "#336429",
          }}
        >
          OUR DISTINCTION
        </h2>

        {/* 2-col grid on md+, 1-col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {distinctions.map(({ src, alt, text }) => (
            <div key={text} className="flex items-center gap-3">
              <div
                className="relative shrink-0 rounded overflow-hidden bg-gray-100"
                style={{ width: "55px", height: "54px", borderRadius: "4px" }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="55px"
                />
              </div>
              <p
                style={{
                  fontFamily: "League Spartan",
                  fontWeight: 400,
                  fontSize: "clamp(15.5px, 1.8vw, 16.4px)",
                  lineHeight: "18px",
                  letterSpacing: "0px",
                  verticalAlign: "middle",
                  textTransform: "capitalize",
                  color: "#111827",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Practice Areas */}
      <section className="py-8 sm:py-10 px-4 bg-white sm:px-8 md:px-12 lg:px-16 xl:mx-30">
        <div className="w-full border border-dotted border-[#22461B]/50 mb-8"></div>
        <h2
          className="uppercase mb-6 sm:mb-8"
          style={{
            fontFamily: "Arial",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "0px",
            color: "#336429",
          }}
        >
          CORE PRACTICE AREAS
        </h2>
        <div className="space-y-4">
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
                    background: "linear-gradient(to right, #CFE2C8, #FFFFFF)",
                  }
                  : { background: "linear-gradient(to left, #CFE2C8, #FFFFFF)" }
              }
            >
              <div className="flex items-center px-5 py-5 sm:py-6">
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontSize: "clamp(18px, 1.8vw, 16.4px)",
                    lineHeight: "20px",
                    letterSpacing: "0.01em",
                    textTransform: "capitalize",
                    color: "#163C0F",
                  }}
                >
                  {title}
                </span>
              </div>

              <div className="flex items-center px-5 py-5 sm:py-6">
                <p
                  style={{
                    fontFamily: "League Spartan",
                    fontWeight: 400,
                    fontSize: "clamp(15.5px, 1.8vw, 16.4px)",
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
      <section className="py-8 sm:py-10 px-4 bg-white sm:px-8 md:px-12 lg:px-16 xl:mx-30">
        <div className="w-full border border-dotted border-[#22461B]/50 mb-8"></div>
        <h2
          className="uppercase mb-8"
          style={{
            fontFamily: "Arial",
            fontWeight: 700,
            fontSize: "18px",
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
          ].map(({ name, role, degree, experience, image, expertise }) => (
            <div
              key={name}
              className=" border border-[#22461B] border-dotted p-6 flex flex-col items-center text-center"
            >
              {/* Avatar + experience badge */}
              <div className="relative mb-4">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-gray-100">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-white text-xs font-semibold"
                  style={{
                    background: "#2A5A21",

                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  {experience}
                </span>
              </div>

              {/* Name */}
              <h3
                className="mt-5 mb-1"
                style={{
                  fontFamily: "League Spartan",
                  fontWeight: 600,
                  fontSize: "clamp(20.5px, 1.8vw, 20.4px)",
                  lineHeight: "26px",
                  color: "#163C0F",
                }}
              >
                {name}
              </h3>

              {/* Role */}
              <p
                className="mb-1"
                style={{
                  fontFamily: "League Spartan",
                  fontWeight: 400,
                  fontSize: "clamp(16.5px, 1.8vw, 18.4px)",
                  lineHeight: "20px",
                  color: "#5A6F55",
                }}
              >
                {role}
              </p>

              {/* Degree */}
              <p
                className="mb-5"
                style={{
                  fontFamily: "League Spartan",
                  fontWeight: 400,
                  fontSize: "clamp(17.5px, 1.8vw, 14.4px)",
                  lineHeight: "18px",
                  color: "#5A6F55",
                }}
              >
                {degree}
              </p>

              {/* Expertise */}
              <div className="w-full text-left">
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontSize: "clamp(18.5px, 1.8vw, 14.4px)",
                    color: "#336429",
                  }}
                >
                  Expertise :
                </p>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full border border-[#5A6F554D]/90 text-[#5A6F55]"
                      style={{
                        fontFamily: "League Spartan",
                        fontWeight: 400,
                        fontSize: "clamp(15px, 1.8vw, 14.4px)",
                        lineHeight: "18px",
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
        <div className="w-full border border-dotted border-[#22461B]/50 mt-8"></div>
      </section>
    </div>
  );
};

export default Hero;
