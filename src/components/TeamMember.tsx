"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { Briefcase, GraduationCap, MapPin, User } from "lucide-react";

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
    achievements?: string[];
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
    ],
    achievements: [
      "Successfully secured stay and protection orders on issues relating to ITC mismatch, limitation expiry, non-consideration of replies, incorrect place of supply determination, and jurisdictional irregularities for over 75 clients for FY 2017-18 and 2018-19 before the High Courts of Orissa, Punjab & Haryana, Bihar, Delhi and Andhra Pradesh in complex GST disputes.",
      "Successfully represented a garment trader in a challenge to coercive DGGI search proceedings, obtaining a landmark order from the Delhi High Court directing refund of tax deposited during the raid. Judgment reported.",
      "Successfully represented an agro-chemical manufacturer before the Delhi High Court in quashing of bank account attachment orders, securing immediate restoration of banking operations. Judgment reported.",
      "Successfully secured stay of adjudication proceedings in a Customs–DRI matter involving expiry of the statutory period for adjudication, and presently leading final arguments before the adjudicating authority.",
      "Presently leading arguments before the Bombay High Court on the constitutional validity of taxation of Government services under the Finance Act, 1994 and multiple pre-GST and post-GST notifications, a matter with pan-India implications.",
      "Successfully represented a telecom-media conglomerate in TDS disputes concerning the interplay of Section 194C and Section 194J, including issues of technical vs non-technical services, verification requirements, and industry-wide interpretational challenges.",
      "Successfully represented a global technology major before the Supreme Court in a significant transfer pricing dispute concerning comparability analysis and appropriateness of TP methods (TNMM, CUP, Cost-Plus), setting persuasive value for similar matters.",
      "Successfully represented the assessee before the Allahabad High Court in a landmark dispute involving apportionment of service and sale components in composite transactions, contributing to clarity in dual-tax scenarios.",
      "Successfully represented a leading media house before the Karnataka High Court on the issue of abatement of local taxes while computing service tax liability, with favourable recognition of cascading-avoidance principles.",
      "Successfully represented an assessee before the Madras High Court in challenging discriminatory local tax levies imposed by the State of Tamil Nadu, securing full relief.",
      "Advised and represented over 120 corporates, MSMEs, and startups in GST audit objections, special audit proceedings, departmental investigations, and appellate disputes across India, including issues of classification, valuation, export-refund mismatches, and input tax credit restrictions.",
      "Handled more than 50 writ petitions before various High Courts challenging system-generated GST notices, procedural violations, retrospective cancellation of GST registrations, denial of revocation applications, and erroneous suspension orders, securing consistent interim and final relief.",
      "Successfully represented multiple multinational manufacturers and technology companies in anti-profiteering investigations and DGAP proceedings, achieving closure without adverse orders.",
      "Successfully led complex customs valuation and exemption matters for over 30 importers, including disputes on special valuation branch (SVB) orders, related-party pricing, exemption notifications, and project import regulations.",
      "Advised and represented leading e-commerce and logistics companies in nationwide investigations involving place-of-supply, intermediary classification, and cross-border service taxation issues.",
      "Represented several Fortune 500 companies in litigation involving service tax/GST transitional credit (TRAN-1/TRAN-2), securing restoration or re-credit based on judicial precedents and equitable grounds.",
      "Successfully assisted more than 40 clients in securing the release of seized goods and vehicles under GST, including cases involving alleged e-way bill mismatches, valuation discrepancies, and classification-based detentions.",
      "Represented clients in complex income-tax matters involving reassessment under Sections 147/148, faceless assessment errors, and digital-hearing violations, obtaining quashing and remand orders for over 60 assesses across jurisdictions.",
      "Advised large conglomerates and family-owned businesses on GST implications of corporate restructuring, slump sales, cross-border EPC contracts, captive service arrangements, and inter-unit transfer pricing.",
      "Handled multi-state indirect tax due-diligence and pre-litigation reviews for M&A transactions.",
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
  },
  divyanshi: {
    id: "Divyanshi Singh ",
    name: "Divyanshi Singh : Associate Partner",

    image: "/shreya.webp",
    experience: "9+ Years",
    location: "New Delhi",
    shortDescription: "Partner with 12+ years of experience in direct and indirect taxation, international trade remedies, and cross-border tax advisory matters.",
    fullDescription: [
      "Divyanshi is an Associate Partner with over 9 years of experience in healthcare regulation, direct and indirect taxation, and GST-focused advisory and dispute resolution matters. Her practice involves handling complex litigation and advisory assignments, with a particular emphasis on GST, regulatory compliance, and sector-specific tax issues.",
      "She has advised and represented clients across a wide range of sectors, including Healthcare, Pharmaceuticals, Consumer Goods, Retail, and Technology-enabled services. Her work encompasses GST litigation, regulatory representations, and advisory on intricate tax and compliance frameworks, often involving multi-layered statutory interpretation and procedural strategy.",
      "Known for her structured legal analysis, strong research orientation, and meticulous preparation, Divyanshi regularly appears before Tribunals, High Courts, and the Supreme Court of India. She brings a disciplined, detail-driven approach to every matter, ensuring legal positions are both technically sound and practically effective."
    ],
    expertise: [
      "GST Litigation and Advisory",
      "Healthcare and Pharmaceutical Regulation",
      "Direct and Indirect Tax Advisory",
      "Regulatory Representation",
      "Complex Tax and Compliance Disputes",

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
      <div className=" p-2 sm:p-6">
        <div className="max-w-4xl">

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
                className="hero-text-experience-badge absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-white"
                style={{ background: "#2A5A21" }}
              >
                {member.experience}
              </span>
            </div>

            {/* Name + meta */}
            <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
              <h2 className="hero-text-team-name mb-1">
                {member.name}
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 mb-4">
                <span className="hero-text-team-role flex items-center gap-1">
                  <Briefcase className="w-3 h-3" /> {member.experience}
                </span>
                <span className="hero-text-team-role flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {member.location}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">

            {/* About */}
            <section>
              <h3 className="hero-text-section-heading hero-title text-[#336429] mb-3">
                About
              </h3>
              <div className="space-y-3">
                {member.fullDescription.map((paragraph, index) => (
                  <p
                    key={index}
                    className="hero-text-body text-[#374151]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Expertise */}
            <section>
              <h3 className="hero-text-section-heading hero-title text-[#336429] mb-3">
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="hero-text-expertise-tag px-3 py-1 rounded-full border border-[#5A6F554D]/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="hero-text-section-heading hero-title text-[#336429] mb-3">
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
                    <span className="hero-text-practice-desc">{edu}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Notable Achievements */}
            {member.achievements && member.achievements.length > 0 && (
              <section>
                <h3 className="hero-text-section-heading hero-title text-[#336429] mb-1">
                  Notable Achievements
                </h3>
                <p className="hero-text-team-role mb-3">
                  Notable Representation and Courtroom Achievements · Representative Litigation &amp; Advisory Experience
                </p>
                <div className="space-y-0">
                  {member.achievements.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[auto_1fr] gap-3 px-[8px] py-[14px]"
                      style={
                        index % 2 === 0
                          ? { background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }
                          : { background: "linear-gradient(to left, #CFE2C8, #FFFFFF)" }
                      }
                    >
                      <span className="hero-text-practice-title mt-[2px] shrink-0">•</span>
                      <p className="hero-text-practice-desc">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-[#22461B]/30 rounded-[16px] p-4 flex flex-col items-center text-center h-full">

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
          className="hero-text-experience-badge absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-white"
          style={{ background: "#2A5A21" }}
        >
          {member.experience}
        </span>
      </div>

      {/* Name */}
      <h2 className="hero-text-team-name mt-5 mb-1">
        {member.name}
      </h2>

      {/* Location */}
      <p className="hero-text-team-role mb-5 flex items-center justify-center gap-1">
        <MapPin className="w-3 h-3" /> {member.location}
      </p>

      {/* Short description */}
      <p className="hero-text-body text-[#374151] mb-5 text-left">
        {member.shortDescription}
      </p>

      {/* Expertise pills */}
      <div className="w-full text-left mb-5">
        <p className="hero-text-expertise-label mb-3">
          Expertise :
        </p>
        <div className="flex flex-wrap gap-2">
          {member.expertise.map((skill, index) => (
            <span
              key={index}
              className="hero-text-expertise-tag px-[4px] py-[2px] rounded-full border border-[#5A6F554D]/90"
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
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px" }}
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
