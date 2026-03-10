


import HeroAnimations from "@/lib/heroAnimation";
import TeamMember, { teamMembers } from "./TeamMember";
import Link from "next/link"

const Team = () => {
  return (
    <div className="flex-1 bg-white  xl:mx-10">
      <HeroAnimations />
      {/* Team Header Section */}
      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="hero-text-title hero-title md:mt-[104px] text-[#163C0F] mb-[6px]">Our Team - Leading Tax Experts</p>
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
          <h3 className="hero-text-section-heading hero-title text-[#336429] mb-4">Careers: Join Our Expert Tax & Commercial Dispute Team</h3>
          <p className="hero-text-body mb-4">
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
