import { Calculator, Building, FileText } from "lucide-react";

const Expertise = () => {
  const practiceAreas = [
    {
      icon: Calculator,
      title: "Direct & Indirect Tax",
      reverseGradient: true,
      subtitle: "Strategic Tax Advisory Across Borders and Sectors",
      description: "Specialized tax and commercial law services covering GST, customs, income tax, investigations, and appellate litigation",
      highlights: [
        "GST advisory & litigation",
        "Customs disputes & classification issues",
        "Income tax assessments & appeals",
        "Indirect tax investigations",
        "Cross-border tax structuring",
        "Corporate tax planning & compliance",
      ],
      experience: [
        "Advised Government of India in bilateral treaty dispute",
        "Structured international income tax strategies for MNCs",
        "Led advisory on double taxation issues and FTAs",
        "Provided strategic counsel on service tax implications",
      ],
    },
    {
      icon: Building,
      title: "Regulatory and Commercial Disputes Under Tax and Commercial Laws",
      reverseGradient: false,
      subtitle: "Focused Expertise in Regulatory and Commercial Disputes",
      description: "We provide strategic, outcome-oriented legal representation in complex regulatory and commercial disputes. Our regulatory practice spans engagements with government bodies, statutory regulators, and adjudicatory forums.",
      highlights: [
        "Regulatory compliance disputes",
        "Corporate commercial litigation",
        "Contractual & business disputes",
        "Enforcement & recovery matters",
        "Fraud, investigation & white-collar issues",
        "PAN-India representation before tribunals & courts",
      ],
      experience: [
        "High-stakes shareholder conflicts resolution",
        "Contractual breach and supply chain disputes",
        "Regulatory investigation defense",
        "Commercial arbitration and ADR",
      ],
    },
  ];

  return (
    <div className="flex-1 bg-white py-4 px-4 sm:px-8 md:px-12 lg:px-16 xl:mx-20">

      {/* Header */}
      <section className="p-6 sm:p-8 md:p-12 border-b border-dashed  border-[#22461B]/40">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-bold text-[#163C0F] leading-tight mb-4">
            <span
              className="text-[#163C0F]"
              style={{
                fontFamily: "League Spartan",
                fontWeight: 700,
                fontSize: "clamp(32px, 6vw, 45px)",
                lineHeight: "1.1",
                letterSpacing: "2px",
                // textAlign: "center",
                display: "block",
              }}
            >
              Tax and Commercial Law </span>
            <span
              className="text-[#2A5A21]"
              style={{
                fontFamily: "League Spartan",
                fontWeight: 700,
                fontSize: "clamp(32px, 6vw, 44px)",
                lineHeight: "1.1",
                letterSpacing: "2px",
                textAlign: "center",
                display: "block",
              }}
            > Comprehensive Litigation Solutions
            </span>
          </h1>
          <p className="text-base sm:text-md text-gray-600  ">
            Research-intensive, solution-driven approach  to align with legal and business objectives.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <div className="space-y-6 sm:space-y-8">
        {practiceAreas.map((area, index) => (
          <section
            key={index}
            className={`p-6 sm:p-8 md:p-12 ${index < practiceAreas.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="bg-white border border-gray-200 p-6 sm:p-8 transition-all">

                {/* Card Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#B3C7AB]/40  p-3 flex-shrink-0">
                    <area.icon className="h-8 w-8 text-[#163C0F]/80" />
                  </div>
                  <div className="flex-1 justify-between items-center">
                    <h2
                      className=""
                      style={{
                        fontFamily: "League Spartan",
                        fontWeight: 700,
                        fontSize: "clamp(16px, 2.5vw, 22px)",
                        lineHeight: "1.3",
                        color: "#163C0F",
                      }}
                    >
                      {area.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "League Spartan",
                        fontWeight: 400,
                        fontSize: "clamp(13px, 1.6vw, 15px)",
                        color: "#4B5563",
                      }}
                    >
                      {area.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">

                  {/* Description + Highlights */}
                  <div>
                    <p
                      className="mb-6"
                      style={{
                        fontFamily: "League Spartan",
                        fontWeight: 400,
                        fontSize: "clamp(13px, 1.6vw, 15px)",
                        lineHeight: "22px",
                        color: "#4B5563",
                      }}
                    >
                      {area.description}
                    </p>

                    <h3
                      className="mb-4"
                      style={{
                        fontFamily: "League Spartan",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "#163C0F",
                      }}
                    >
                      Key Service Areas:
                    </h3>

                    <ul className="space-y-3">
                      {area.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="bg-[#B3C7AB] rounded-full p-1 mt-1 flex-shrink-0">
                            <div className="w-1.5 h-1.5 bg-[#163C0F] rounded-full" />
                          </div>
                          <span
                            style={{
                              fontFamily: "League Spartan",
                              fontWeight: 400,
                              fontSize: "13.5px",
                              lineHeight: "20px",
                              color: "#374151",
                            }}
                          >
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience */}
                  <div>
                    <h3
                      className="mb-4"
                      style={{
                        fontFamily: "League Spartan",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "#163C0F",
                      }}
                    >
                      Select Experience:
                    </h3>

                    <div className="space-y-3">
                      {area.experience.map((exp, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4"
                          style={{
                            background: area.reverseGradient
                              ? "linear-gradient(to left, #CFE2C8, #FFFFFF)"
                              : "linear-gradient(to right, #CFE2C8, #FFFFFF)",
                          }}
                        >
                          <FileText className="h-5 w-5 text-[#163C0F] mt-0.5 flex-shrink-0" />

                          <p
                            style={{
                              fontFamily: "League Spartan",
                              fontWeight: 400,
                              fontSize: "13.5px",
                              lineHeight: "20px",
                              color: "#000000",
                            }}
                          >
                            {exp}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
