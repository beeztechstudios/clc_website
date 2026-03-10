

import HeroAnimations from "@/lib/heroAnimation";
import TeamMember, { teamMembers } from "./TeamMember";
import Link from "next/link"

const Team = () => {
  return (
    <div className="flex-1 bg-white  xl:mx-10">
      <HeroAnimations />
      {/* Team Header Section */}
      <section className="py-4 px-4 sm:px-8 mt-0 md:mt-12  md:px-12  lg:px-16  ">
        <div className="max-w-6xl mx-auto">
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
              >Our Team - Leading Tax Experts
              </span>
             
            </h1>
          
          </div>

          {/* Team Grid */}
          <div className="grid hero-para grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(teamMembers).map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-4 px-4 sm:px-8  md:px-12  lg:px-16  border-b border-dotted border-[#22461B]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className=" text-[#163C0F] mb-4" style={{
            fontFamily: "Arial",
            fontWeight: 700,
            fontSize: "clamp(18.5px, 1.8vw, 18.4px)",
            lineHeight: "24px",
            letterSpacing: "0px",
            color: "#336429",
          }}>Careers: Join Our Expert Tax & Commercial Dispute Team</h3>
          <p className=" mb-4" style={{
            fontFamily: "League Spartan",
            fontWeight: 400,
            fontSize: "clamp(15.5px, 1.8vw, 16.4px)",
            lineHeight: "20px",
            letterSpacing: "0px",
            verticalAlign: "middle",
            textTransform: "capitalize",
          }}>
            We're always looking for talented professionals to join our team. If you're passionate about 
            tax law and commercial litigation, we'd love to hear from you.
          </p>
          <Link 
             href="/career"
             className="text-[#163C0F]  hover:text-[#1a4a1a] hover:scale-110 font-semibold transition-colors"
           >
             View Career Opportunities →
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;