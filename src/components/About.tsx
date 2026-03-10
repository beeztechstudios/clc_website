import HeroAnimations from "@/lib/heroAnimation";
import { Building2, Users, Gavel, Scale, Shield, BookOpen, Globe, Handshake, Eye, Lightbulb } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building2, label: "Founded", value: "2008" },
    { icon: Users, label: "Partners", value: "2" },
    { icon: Users, label: "Associates", value: "15+" },
    // { icon: Gavel, label: "All", value: "Capital States" },
  ];


  const approaches = [
    {
      icon: BookOpen,
      title: "Research-Driven Analysis",
      description: "Rigorous legal research for strategic advantage."
    },
    {
      icon: Scale,
      title: "Strategic Litigation",
      description: "Outcome-oriented approach in high-stakes disputes."
    },
    {
      icon: Users,
      title: "Client-Centric Solutions",
      description: "Bespoke legal solutions aligned with commercial imperatives."
    },
    {
      icon: Globe,
      title: "Pan India Network",
      description: " Coordinated representation across all Indian state capitals."
    }
  ];

  const values = [
    {
      icon: Handshake,
      title: "Integrity",
      description: "Unwavering commitment to ethical standards and professional conduct"
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "Pursuit of the highest standards in legal representation and advisory"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and honest counsel in all client interactions"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creative legal strategies and modern approaches to complex problems"
    }
  ];

  return (
    <div className="flex-1  bg-white py-4 sm:px-8 md:px-12 lg:px-16 xl:mx-20">
      <HeroAnimations />
      {/* About Header Section */}
      <section className="px-4  pb-12 sm:px-6 md:px-8 py-4 mdborder-b border-dotted border-[#22461B]">
        <div className="max-w-6xl mx-auto ">
          <div className="text-center mb-8">

            <h1 className="font-bold hero-title text-[#163C0F] leading-tight mb-4">
              <span
                className="text-[#163C0F]"
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
                Premier Tax and
              </span>
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
              >
                Commercial Law Firm

              </span>
            </h1>

            <p className="text-base hero-para sm:text-md text-gray-600">
              Strategic Legal Excellence in Tax and Commercial Disputes
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex hero-buttons justify-center  gap-4">
            {stats.map((stat, index) => (
              <div key={index} style={{ background: "linear-gradient(to top, #CFE2C8, #FFFFFF)" }} className=" border border-dashed  border-[#22461B]/40 py-1 md:py-2 px-4 md:px-4 text-center hover:border-[#163C0F] ">

                <div
                  className="font-bold text-[#336429] mb-1"
                  style={{
                    fontFamily: "Arial",
                    fontWeight: 700,
                    fontSize: "clamp(22px, 3.5vw, 25px)",
                    lineHeight: "48px",
                    letterSpacing: "0px",
                    textAlign: "center",
                  }}
                >
                  {stat.value}
                </div>
                <div
             
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "clamp(10px, 1.5vw, 14px)",
                    lineHeight: "21px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: "#000000",
                  }}
                >
                  {stat.label}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-4 px-4 hero-buttons sm:px-6 md:px-8 mb-8 ">
        
          
          <h2
            className="uppercase text-center mb-6 sm:mb-8"
            style={{
              fontFamily: "Arial",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0px",
              color: "#336429",
            }}
          >
            Our Story
          </h2>
          <div className="space-y-4 text-black text-justify leading-relaxed" style={{
            fontFamily: "League Spartan",
            fontWeight: 400,
          fontSize: "clamp(15.5px, 1.8vw, 16.4px)",
            lineHeight: "20px",
            letterSpacing: "0px",
            verticalAlign: "middle",
            textTransform: "capitalize",
          }}>
            <p>
            Founded in 2008, Commercial Law Chamber is a boutique law practice established with a focused vision of delivering excellence in tax advisory. As a leading tax law firm, we are led by two experienced Partners, including top GST lawyers in India, and supported by a team of 15 associates. The firm operates through a strong Pan-India network, ensuring seamless representation across jurisdiction. 
            </p>
            <p>
            Our practice is distinguished by strategic insight, rigorous legal research, and a client-centric approach. Recognized as a premier GST law firm, we regularly represent clients before the Supreme Court of India, various High Courts, and specialized tribunals including ITAT, CESTAT, and VAT authorities.

            </p>
            <p>
            As a specialized tax law firm, we provide comprehensive services covering indirect tax litigation, departmental proceedings, GST input tax credit rules analysis, and trade remedy matters. From strategic advisory to adjudication, CLC offers end-to-end tax and regulatory counsel.
            </p>
          </div>
        
      </section>


      {/* Our Approach Section */}
      <section className="p-4 sm:p-6 md:p-8 border-t border-dotted border-[#22461B] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="= uppercase mb-3" style={{
              fontFamily: "Arial",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0px",
              color: "#336429",
            }}>Our Approach</h2>
            <p className="text-base sm:text-md text-gray-600">Methodology in handling complex legal matters</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-0">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-white border-1 border-dashed border-[#22461B]   p-3 hover:shadow-lg transition-all hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#B3C7AB]/40  p-2 flex-shrink-0">
                    <approach.icon className="h-8 w-8 text-[#163C0F]/80" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1" style={{
                      fontFamily: "League Spartan",
                      fontWeight: 600,
                      color: "#336429",
                      fontSize: "clamp(16.5px, 1.8vw, 16.4px)",
                      lineHeight: "20px",
                      letterSpacing: "0px",
                      verticalAlign: "middle",
                      textTransform: "capitalize",
                    }}>{approach.title}</h3>
                    <p style={{
                      fontFamily: "League Spartan",
                      fontWeight: 400,
                      fontSize: "clamp(15.5px, 1.8vw, 16.4px)",
                      lineHeight: "20px",
                      letterSpacing: "0px",
                      verticalAlign: "middle",
                      textTransform: "capitalize",
                    }}>{approach.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="  p-5 sm:p-6 border-1 border-dashed border-[#22461B] " style={{ background: "linear-gradient(to top, #CFE2C8, #FFFFFF)" }}>
            <h3 className="text-[#163C0F] mb-3 " style={{
              fontFamily: "League Spartan",
              fontWeight: 600,
              color: "#336429",
              fontSize: "clamp(18px, 1.8vw, 16.4px)",
              lineHeight: "20px",
              letterSpacing: "0px",
              verticalAlign: "middle",
              textTransform: "capitalize",
            }}>Pan-India Footprint</h3>
            <p style={{
              fontFamily: "League Spartan",
              fontWeight: 400,
              fontSize: "clamp(15.5px, 1.8vw, 16.4px)",
              lineHeight: "20px",
              letterSpacing: "0px",
              verticalAlign: "middle",
              textTransform: "capitalize",
            }}>
              With on-ground representation in every Indian state capital, our pan-India footprint allows for
              swift, coordinated action and local insight—ensuring efficiency without compromise. This extensive
              network enables us to provide seamless legal support across diverse jurisdictions while maintaining
              the highest standards of professional service.
            </p>
          </div> */}
        </div>
      </section>

      {/* Values & Vision Section */}
      <section className="p-4 sm:p-6 md:p-8 border-t border-dotted border-[#22461B] mt-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="= uppercase mb-3" style={{
              fontFamily: "Arial",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "0px",
              color: "#336429",
            }}>Values & Vision</h2>
            <p className="text-base sm:text-md text-gray-600">Core principles of client service and ethical standards</p>
          </div>

          <div className="bg-white  border-[#22461B] mb-8  sm:p-4">
            <div className="">
              <h3 className="text-[#163C0F] mb-3 " style={{
                fontFamily: "League Spartan",
                fontWeight: 600,
                color: "#336429",
                fontSize: "clamp(18px, 1.8vw, 20.4px)",
                lineHeight: "20px",
                letterSpacing: "0px",
                verticalAlign: "middle",
                textTransform: "capitalize",
              }}>Our Vision</h3>
              <p style={{
                fontFamily: "League Spartan",
                fontWeight: 400,
                fontSize: "clamp(15.5px, 1.8vw, 16.4px)",
                lineHeight: "20px",
                letterSpacing: "0px",
                verticalAlign: "middle",
                textTransform: "capitalize",
              }}>
                To be a leading tax litigation and advisory boutique law firm, recognised for shaping tax jurisprudence, delivering strategic and high-stakes advocacy, and safeguarding our clients’ commercial interests in the most complex and impactful matters. 
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 mb-8">
            {values.map((value, index) => (
              <div key={index} className=" p-3 hover:shadow-lg transition-all" style={
                index % 2 === 0
                  ? { background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }
                  : { background: "linear-gradient(to left, #CFE2C8, #FFFFFF)" }
              }>
                <div className="flex items-start gap-4">
                  <div className="bg-transparent  p-2 flex-shrink-0">
                    <value.icon className="h-8 w-8 text-[#163C0F]/80" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#163C0F] mb-1" style={{
                      fontFamily: "Inter",
                      fontWeight: 600,
                      fontSize: "clamp(18px, 1.8vw, 16.4px)",
                      lineHeight: "20px",
                      letterSpacing: "0.01em",
                      textTransform: "capitalize",
                      color: "#163C0F",

                    }}>{value.title}</h3>
                    <p className="text-gray-700 " style={{
                      fontFamily: "League Spartan",
                      fontWeight: 400,
                      fontSize: "clamp(15.5px, 1.8vw, 16.4px)",
                      lineHeight: "18px",
                      textTransform: "capitalize",
                      color: "#000000",
                    }}>{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>


    </div>
  );
};

export default About;
