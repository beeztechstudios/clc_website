
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Briefcase, GraduationCap, MapPin, User } from "lucide-react";

interface TeamMemberProps {
  member: {
    id: string;
    name: string;
    image: string;
    experience: string;
    shortDescription: string;
    fullDescription: string[];
    expertise: string[];
    location: string;
    education: string[];
  };
  variant?: "card" | "detailed";
}

const teamMembers = {
  vivek: {
    id: "vivek",
    name: "Vivek Sarin: Founder & Leading Tax Litigation Expert",
    
    image: "/vivek.webp",
    experience: "20+ Years",
    location: "New Delhi",
    shortDescription: "Founding Partner with 20+ years of experience in tax litigation, regulatory compliance, and commercial disputes across Supreme Court and High Courts.",
    fullDescription: [
      "Vivek Sarin is the Founding Partner of Commercial Law Chambers, a New Delhi-based boutique firm specializing in Tax, Regulatory, and Commercial Disputes. With over 20 years of experience, he represents clients in high-stakes litigation before the Supreme Court, multiple High Courts, tribunals including ITAT, CESTAT, VAT Appellate Tribunals, and forums such as NCLT.",
      "His expertise spans constitutional tax challenges, shareholder disputes, and CIRP matters, as well as regulatory pricing issues involving NPPA, TRAI, AERA, and Electricity Commissions. He advises leading companies across sectors—FMCG, Healthcare, Technology, and more—on CGST, VAT, Customs, Income Tax, and compliance strategy.",
      "His blend of deep domestic insight and global perspective makes him a trusted advisor in complex legal landscapes."
    ],
    expertise: [
      "High Court & Supreme Court Litigation",
      "Constitutional Tax Challenges",
      "CIRP Matters",
      "Regulatory & Compliance Strategy",
      "Shareholder Disputes",
    ],
    education: [
      "Bachelor of Laws (LLB)",
      "Member, Bar Council of India"
    ]
  },
  shreyas: {
    id: "shreyas",
    name: "Shreyas Srivastava: Partner & Commercial Dispute Specialist",
    
    image: "/shreya.webp",
    experience: "12+ Years",
    location: "New Delhi",
    shortDescription: "Partner with 12+ years of experience in direct and indirect taxation, international trade remedies, and cross-border tax advisory matters.",
    fullDescription: [
      "Shreyas is a seasoned counsel with over 12 years of experience in direct and indirect taxation. At Commercial Law Chambers, he leads complex litigation and advisory mandates with a strategic focus on Income Tax, GST, and Customs matters, including international trade remedies such as anti-dumping and safeguard duties.",
      "Shreyas has represented clients across a wide range of industries including FMCG, Consumer Durables, Aviation, Real Estate, Banking & Finance, Insurance, and Food & Beverage. His practice spans high-stakes tax disputes, regulatory representation, and advisory on cross-border trade issues.",
      "Known for his research-driven and solution-oriented approach, Shreyas combines legal depth with industry insight to deliver pragmatic and effective outcomes for clients across forums including tribunals, High Courts, and the Supreme Court."
    ],
    expertise: [
      "International Trade Remedies",
      "Income Tax & GST",
      "High-stakes Tax Disputes",
      "Cross-border Tax Advisory",
      "Regulatory Representation",
    ],
    education: [
      "Bachelor of Laws (LLB)",
      "Member, Bar Council of India"
    ]
  }
};

export { teamMembers };

const TeamMember = ({ member, variant = "card" }: TeamMemberProps) => {
  if (variant === "detailed") {
    return (
      <div className="bg-white p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-gray-100">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} at Commercial Law Chamber`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>
              <span
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-white"
                style={{ background: "#2A5A21", fontFamily: "Inter", fontWeight: 600, fontSize: "12px" }}
              >
                {member.experience}
              </span>
            </div>

            {/* Name + meta */}
            <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
              <h2
                className="mb-1"
                style={{
                  fontFamily: "League Spartan",
                  fontWeight: 600,
                  fontSize: "clamp(18px, 3vw, 24px)",
                  lineHeight: "1.3",
                  color: "#163C0F",
                }}
              >
                {member.name}
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 mb-4">
                <span
                  className="flex items-center gap-1"
                  style={{ fontFamily: "League Spartan", fontWeight: 400, fontSize: "13px", color: "#5A6F55" }}
                >
                  <Briefcase className="w-3 h-3" /> {member.experience}
                </span>
                <span
                  className="flex items-center gap-1"
                  style={{ fontFamily: "League Spartan", fontWeight: 400, fontSize: "13px", color: "#5A6F55" }}
                >
                  <MapPin className="w-3 h-3" /> {member.location}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">

            {/* About */}
            <section>
              <h3
                className="mb-3"
                style={{ fontFamily: "Arial", fontWeight: 700, fontSize: "16px", color: "#336429", textTransform: "uppercase" }}
              >
                About
              </h3>
              <div className="space-y-3">
                {member.fullDescription.map((paragraph, index) => (
                  <p
                    key={index}
                    style={{ fontFamily: "League Spartan", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "#374151" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Expertise */}
            <section>
              <h3
                className="mb-3"
                style={{ fontFamily: "Arial", fontWeight: 700, fontSize: "16px", color: "#336429", textTransform: "uppercase" }}
              >
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full border border-[#5A6F554D]/90"
                    style={{ fontFamily: "League Spartan", fontWeight: 400, fontSize: "13px", lineHeight: "18px", color: "#5A6F55" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3
                className="mb-3"
                style={{ fontFamily: "Arial", fontWeight: 700, fontSize: "16px", color: "#336429", textTransform: "uppercase" }}
              >
                Education &amp; Qualifications
              </h3>
              <div className="flex flex-col gap-2">
                {member.education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3"
                    style={{ background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }}
                  >
                    <GraduationCap className="w-4 h-4 text-[#163C0F] shrink-0" />
                    <span style={{ fontFamily: "League Spartan", fontWeight: 400, fontSize: "13.5px", color: "#000000" }}>
                      {edu}
                    </span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" border border-[#22461B] border-dotted p-6 flex flex-col items-center text-center h-full">

      {/* Avatar + experience badge */}
      <div className="relative mb-4">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-gray-100">
          {member.image ? (
            <img
              src={member.image}
              alt={`${member.name} at Commercial Law Chamber`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <User className="w-12 h-12 text-gray-400" />
            </div>
          )}
        </div>
        <span
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-white"
          style={{ background: "#2A5A21", fontFamily: "Inter", fontWeight: 600, fontSize: "12px" }}
        >
          {member.experience}
        </span>
      </div>

      {/* Name */}
      <h2
        className="mt-5 mb-1"
        style={{
          fontFamily: "League Spartan",
          fontWeight: 600,
          fontSize: "22px",
          lineHeight: "26px",
          color: "#163C0F",
        }}
      >
        {member.name}
      </h2>

      {/* Location */}
      <p
        className="mb-5 flex items-center justify-center gap-1"
        style={{
          fontFamily: "League Spartan",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "18px",
          color: "#5A6F55",
        }}
      >
        <MapPin className="w-3 h-3" /> {member.location}
      </p>

      {/* Short description */}
      <p
        className="mb-5 text-left"
        style={{
          fontFamily: "League Spartan",
          fontWeight: 400,
          fontSize: "13.5px",
          lineHeight: "20px",
          color: "#374151",
        }}
      >
        {member.shortDescription}
      </p>

      {/* Expertise pills */}
      <div className="w-full text-left mb-5">
        <p
          className="mb-3"
          style={{ fontFamily: "Inter", fontWeight: 600, fontSize: "14px", color: "#336429" }}
        >
          Expertise :
        </p>
        <div className="flex flex-wrap gap-2">
          {member.expertise.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full border border-[#5A6F554D]/90 text-[#5A6F55]"
              style={{ fontFamily: "League Spartan", fontWeight: 400, fontSize: "13px", lineHeight: "18px" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* View Profile button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-[#163C0F] hover:bg-[#1a4a1a] cursor-pointer text-white mt-auto"
            style={{ fontFamily: "Inter", fontWeight: 600, fontSize: "14px" }}
          >
            View Profile
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] bg-white overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold poppins text-[#163C0F]">Team Member Profile</DialogTitle>
            <DialogDescription>
              <TeamMember member={member} variant="detailed" />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeamMember;
