import { Button } from "@/components/ui/button";
import { Briefcase, Users, GraduationCap, Clock, MapPin, Building2, CheckCircle } from "lucide-react";
import { useCareerOpenings } from "@/hooks/useSanityData";

const whyJoinUs = [
  {
    icon: Users,
    title: "Collaborative Environment & Inclusive Culture",
    description: "Work with experienced professionals in a supportive team setting.",
  },
  {
    icon: GraduationCap,
    title: "Accelerated Learning & Professional Development",
    description: "Regular training programs and mentorship opportunities.",
  },
  {
    icon: Building2,
    title: "Professional Growth",
    description: "Clear career progression path and leadership opportunities.",
  },
  {
    icon: Clock,
    title: "Sustainable Work-Life Balance",
    description: "Flexible working arrangements and supportive policies.",
  },
];

const applicationItems = [
  "Detailed CV",
  "Cover letter explaining your League Spartanest in CLC",
  "Academic transcripts",
  "Writing sample (for legal positions)",
];

const Career = () => {
  const { data: currentOpenings, isLoading, isError } = useCareerOpenings();

  return (
    <div className="flex-1 bg-white  xl:mx-10">

      {/* ── Header ── */}
      <section className="py-4 px-4 sm:px-8 mt-0 md:mt-12 md:px-12  lg:px-16 ">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="mb-3 text-[#163C0F] "
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
            Legal Careers in{" "}
            <span style={{ color: "#163C0F" }}>Tax & Commercial Law</span>
          </h1>
          <p
            style={{
              fontFamily: "League Spartan",
              fontWeight: 400,
              fontSize: "clamp(14px, 2vw, 16px)",
              lineHeight: "14px",
              color: "#4B5563",
            }}
          >
            Join Our Team of Legal Excellence
          </p>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-4 px-4 sm:px-8  md:px-12  lg:px-16  bg-white">
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
          ABOUT THE OPPORTUNITY
        </h2>

        <div
          className="space-y-4"
          style={{
            fontFamily: "League Spartan",
            fontWeight: 400,
            fontSize: "clamp(16.5px, 1.8vw, 16.4px)",
            lineHeight: "22px",
            color: "#1F2937",
          }}
        >
          <p>
            At Commercial Law Chamber, we are always looking for talented professionals who share our
            commitment to excellence and client service. We offer a dynamic work environment where you
            can grow your career while working on challenging and meaningful cases.
          </p>
          <p>
            Our firm provides opportunities for both experienced lawyers and fresh graduates who demonstrate
            exceptional potential and a passion for tax and commercial law.
          </p>
        </div>

        <div className="w-full border border-dotted border-[#22461B]/50 mt-8" />
      </section>

      {/* ── Current Openings ── */}
      <section className="py-4 px-4 sm:px-8  md:px-12  lg:px-16  bg-white">
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
          CURRENT JOB OPENINGS
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {isLoading && (
            <p style={{ fontFamily: "League Spartan", fontSize: "clamp(16.5px, 1.8vw, 16.4px)", color: "#4B5563" }}>
              Loading openings...
            </p>
          )}
          {!isLoading && (isError || !currentOpenings || currentOpenings.length === 0) && (
            <div
              className="px-5 py-6"
              style={{ background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }}
            >
              <p style={{ fontFamily: "League Spartan", fontWeight: 400,  fontSize: "clamp(16.5px, 1.8vw, 16.4px)", color: "#000000" }}>
                No current openings. Please check back later or send your CV to{" "}
                <span style={{ color: "#163C0F", fontWeight: 600 }}>careers@clc.in</span>
              </p>
            </div>
          )}
          {!isLoading && currentOpenings && currentOpenings.map((job, index) => (
            <div
              key={job._id ?? index}
              className="border border-gray-200 p-5 sm:p-6 hover:border-[#163C0F] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "League Spartan",
                      fontWeight: 600,
                      fontSize: "clamp(22.5px, 1.8vw, 22.4px)",
                      lineHeight: "20px",
                      color: "#163C0F",
                    }}
                  >
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: MapPin, val: job.location },
                      { icon: Briefcase, val: job.type },
                      { icon: Clock, val: job.experience },
                    ].map(({ icon: Icon, val }) => val && (
                      <span
                        key={val}
                        className="flex items-center gap-1"
                        style={{ fontFamily: "League Spartan", fontWeight: 400, fontSize: "clamp(18.5px, 1.8vw, 18.4px)", color: "#5A6F55" }}
                      >
                        <Icon className="h-3 w-3" /> {val}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  className="shrink-0 bg-[#163C0F] cursor-pointer hover:bg-[#1a4a1a] text-white"
                  style={{ fontFamily: "League Spartan", fontWeight: 600, fontSize: "13px" }}
                >
                  Apply Now
                </Button>
              </div>

              {job.requirements && job.requirements.length > 0 && (
                <div>
                  <p
                    className="mb-2"
                    style={{ fontFamily: "League Spartan", fontWeight: 600, fontSize: "clamp(18.5px, 1.8vw, 16.4px)", color: "#163C0F" }}
                  >
                    Requirements:
                  </p>
                  <ul className="space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#336429] mt-0.5 shrink-0" />
                        <span style={{ fontFamily: "League Spartan", fontWeight: 400, fontSize: "clamp(18.5px, 1.8vw, 16.4px)", color: "#374151" }}>
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full border border-dotted border-[#22461B]/50 mt-8" />
      </section>

      {/* ── Why Join Us ── */}
      <section className="py-4 px-4 sm:px-8  md:px-12  lg:px-16  bg-white">
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
          WHY BUILD YOUR CAREER AT CLC
        </h2>

        <div className="space-y-4">
          {whyJoinUs.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] overflow-hidden"
              style={
                index % 2 === 0
                  ? { background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }
                  : { background: "linear-gradient(to left, #CFE2C8, #FFFFFF)" }
              }
            >
              <div className="flex items-center gap-3 px-5 py-5 sm:py-6">
                <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-[#336429]/10 rounded">
                  <Icon className="h-4 w-4 text-[#163C0F]" />
                </div>
                <span
                  style={{
                    fontFamily: "League Spartan",
                    fontWeight: 600,
                    fontSize: "clamp(16.5px, 1.8vw, 12.4px)",
                    lineHeight: "20px",
                    letterSpacing: "0.01em",
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
                    fontSize: "clamp(16.5px, 1.8vw, 16.4px)",
                    lineHeight: "18px",
                    color: "#000000",
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full border border-dotted border-[#22461B]/50 mt-8" />
      </section>

      {/* ── Application Process ── */}
      <section className="py-4 px-4 sm:px-8  md:px-12  lg:px-16  bg-white">
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
          HOW TO APPLY
        </h2>

        <p
          className="mb-4"
          style={{
            fontFamily: "League Spartan",
            fontWeight: 400,
            fontSize: "clamp(16.5px, 1.8vw, 12.4px)",
            lineHeight: "22px",
            color: "#1F2937",
          }}
        >
          To apply for any of the positions listed above, please send your:
        </p>

        <div className="space-y-3 mb-6">
          {applicationItems.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 px-5 py-4"
              style={{ background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }}
            >
              <CheckCircle className="h-4 w-4 text-[#336429] shrink-0" />
              <span
                style={{
                  fontFamily: "League Spartan",
                  fontWeight: 400,
                  fontSize: "clamp(16.5px, 1.8vw, 16.4px)",
                  lineHeight: "18px",
                  color: "#000000",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "League Spartan",
            fontWeight: 400,
            fontSize: "clamp(16.5px, 1.8vw, 16.4px)",
            lineHeight: "20px",
            color: "#1F2937",
          }}
        >
          Send your application to:{" "}
          <span style={{ fontFamily: "League Spartan", fontWeight: 600, color: "#163C0F" }}>
            careers@clc.in
          </span>
        </p>

        <p
          className="mt-3"
          style={{
            fontFamily: "League Spartan",
            fontWeight: 400,
            fontSize: "clamp(16.5px, 1.8vw, 16.4px)",
            color: "#6B7280",
          }}
        >
          * We review all applications carefully and will contact shortlisted candidates for League Spartanviews.
        </p>

        <div className="w-full border border-dotted border-[#22461B]/50 mt-8" />
      </section>

    </div>
  );
};

export default Career;
