
import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center border-b bg-white border-gray-100 overflow-hidden">

        {/* Circle Background */}
        <div className="absolute left-1/2 top-36 -translate-x-1/2 
                  w-[100vw] h-[100vw] 
                  bg-[#6B8066]/10 
                  rounded-full">
        </div>
        <h1 className=" font-bold text-[#163C0F] leading-tight mb-4">
          <span className="text-[#163C0F]" style={{
            fontFamily: "League Spartan",
          fontWeight: 700,
          fontStyle: "Bold",
          fontSize: "58px",
          lineHeight: "58px",
          letterSpacing: "2px",
          textAlign: "center",

          }}>Commitment to </span> <br /> <span className="text-[#2A5A21]" style={{
            fontFamily: "League Spartan",
          fontWeight: 700,
          fontStyle: "Bold",
            fontSize: "58px",
            lineHeight: "58px",
          letterSpacing: "2px",
          textAlign: "center",

          }}> Legal Excellence. </span>
        </h1>

        <p className=" text-gray-600 max-w-lg mx-auto mb-8 " style={{
          fontFamily: "League Spartan",
        fontWeight: 400,
        fontStyle: "Regular",
        fontSize: "16px",
        lineHeight: "21px",
        letterSpacing: "0px",
        textAlign: "center",

        }}>
          Trusted by corporations and individuals across India for strategic legal solutions that drive success and protect your interests.
        </p>

        <div className="flex justify-center gap-4 mb-16" style={{
          fontFamily: "Arial",
        fontStyle: "Bold"
       

        }}>
          <Link href="/contact" className="bg-[#163C0F] z-80 cursor-pointer text-white px-6 py-2.5  flex items-center gap-2 font-bold ">
            Partner With Us <ArrowRight className="h-4 w-4 " />
          </Link>
          <button className="bg-white text-gray-800 z-80 cursor-pointer border-[#163C0F26]/90 border-1 px-8 py-2.5  font-bold hover:bg-gray-50 transition-all">
            Review Firm Profile
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-100">
          <div>
            <div className="text-[32px] font-bold text-[#336429] mb-1" style={{
              fontFamily: "Arial",
            fontWeight: 700,
            fontStyle: "Bold",
            fontSize: "32px",
            lineHeight: "48px",
            letterSpacing: "0px",
            textAlign: "center",


            }}>500+</div>
            <div className=" text-[#000000]" style={{
              fontFamily: "Inter",
            fontWeight: 400,
            fontStyle: "Regular",
            fontSize: "14px",
         
            lineHeight: "21px",
            letterSpacing: "0px",
            textAlign: "center",
            textTransform: "uppercase",

            }}>CASES WON</div>
          </div>
          <div>
            <div className="text-[32px] font-bold text-[#336429] mb-1" style={{
              fontFamily: "Arial",
              fontWeight: 700,
              fontStyle: "Bold",
              fontSize: "32px",
              lineHeight: "48px",
              letterSpacing: "0px",
              textAlign: "center",
            }}>25+</div>
            <div className=" text-[#000000]" style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "Regular",
              fontSize: "14px",

              lineHeight: "21px",
              letterSpacing: "0px",
              textAlign: "center",
              textTransform: "uppercase",

            }}>YEARS EXPERIENCE</div>
          </div>
          <div>
            <div className="text-[32px] font-bold text-[#336429] mb-1" style={{
              fontFamily: "Arial",
              fontWeight: 700,
              fontStyle: "Bold",
              fontSize: "32px",
              lineHeight: "48px",
              letterSpacing: "0px",
              textAlign: "center",
            }}>98%</div>
            <div className=" text-[#000000]" style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "Regular",
              fontSize: "14px",

              lineHeight: "21px",
              letterSpacing: "0px",
              textAlign: "center",
              textTransform: "uppercase",

            }}>CLIENT SATISFACTION</div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-4 px-12 pr-18 mx-30  bg-white ">

        <div className="w-full h-full border border-dotted  border-[#22461B]/50"></div>

        <h2 className="font-bold text-[#336429] mt-[35px] mb-6 " style={{
          fontFamily: "Arial",
        fontWeight: 700,
        fontStyle: "Bold",
        fontSize: "24px",
        lineHeight: "24px",
        letterSpacing: "0px",
        verticalAlign: "middle",
        textTransform: "uppercase",

        }}>WELCOME TO COMMERCIAL LAW CHAMBER</h2>
        <div className=" text-gray-800  space-y-4" style={{
          fontFamily: "League Spartan",
        fontWeight: 400,
        fontStyle: "Regular",
        fontSize: "16.4px",
        
        lineHeight: "20px",
        letterSpacing: "0px",
        verticalAlign: "middle",
        textTransform: "capitalize",

        }}>
          <p>
            Established In 2008, The Commercial Law Chamber (CLC) Is A Boutique Law Firm Widely Recognized For Its Specialized Tax Advisory And High-Stakes Dispute Resolution Practice. As One Of The Top Taxation Law Firms In India, We Maintain A Strong Focus On The Goods And Services Tax Act And Customs Laws. Led By The Team Of Best GST Lawyers In Delhi And Supported By A Team Of 15 Associates, CLC Delivers Strategic, Research-Driven, And Commercially Aligned Legal Solutions Across Complex Tax And Commercial Disputes.
          </p>

          <div className="w-full h-full border border-dotted mt-[35px]  border-[#22461B]/50"></div>
        </div>
      </section>

      {/* Our Distinction */}
      <section className="py-12 pr-18 mx-30 border-b border-dashed border-gray-300">
        <h2 className="text-[18px] font-bold text-[#163C0F] uppercase tracking-wider mb-8">OUR DISTINCTION</h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          <div className="flex gap-4 items-start">
            <div className="w-16 h-12 bg-gray-100 rounded relative shrink-0">
              <Image src="/vivek.webp" alt="" fill className="object-cover rounded grayscale" />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-gray-900 leading-tight">Boutique Law Practice Specializing In GST Law Services, Customs, And Commercial Dispute Resolution</h4>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-16 h-12 bg-gray-100 rounded relative shrink-0">
              <Image src="/shreya.webp" alt="" fill className="object-cover rounded grayscale" />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-gray-900 leading-tight">Regular Representation Before The Supreme Court Of India</h4>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-16 h-12 bg-gray-100 rounded relative shrink-0">
              <Image src="/new/NavLogo.svg" alt="" fill className="object-contain p-1 rounded" />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-gray-900 leading-tight">Business Law Chambers With A Pan-India Legal Network And Seamless Multi-Jurisdictional Coverage</h4>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-16 h-12 bg-gray-100 rounded relative shrink-0">
              <Briefcase className="w-full h-full p-2 text-gray-400" />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-gray-900 leading-tight">Led By Top Tax Lawyers In India With Deep Advisory And Litigation Expertise</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Core Practice Areas */}
      <section className="py-12 px-8">
        <h2 className="text-[18px] font-bold text-[#163C0F] uppercase tracking-wider mb-8">CORE PRACTICE AREAS</h2>
        <div className="space-y-0 border-t border-gray-200">
          <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <div className="p-6 bg-[#B3C7AB]/10 font-bold text-[#163C0F] text-[14px]">Direct Tax</div>
            <div className="col-span-2 p-6 text-[12px] text-gray-700 leading-relaxed italic">
              End-To-End Advisory By Experienced Taxation Lawyers, Covering Compliance And Dispute Resolution Across Corporate And Individual Tax Matters, Including Complex Assessments And High-Value Tax Litigation.
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <div className="p-6 bg-[#B3C7AB]/10 font-bold text-[#163C0F] text-[14px]">Indirect Tax</div>
            <div className="col-span-2 p-6 text-[12px] text-gray-700 leading-relaxed italic border-l border-gray-100">
              Comprehensive GST Lawyer Advisory, Compliance Management, And Representation In Complex Litigation, Including Classification Disputes, GST Input Tax Credit Rules, Investigation, And Enforcement Actions.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
