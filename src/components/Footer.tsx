import Link from "next/link";

const Footer = () => {
  const links = ["DISCLAIMER", "CONTENT", "FEEDBACK", "WALKTHROUGH", "SUBSCRIBE"];

  return (
    <footer>
      {/* ── Minimal footer ── */}
      <div className="border-t z-90 border-gray-200 bg-white">
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-2 gap-2">
          <div className="flex items-center gap-4 sm:gap-6">
            {links.map((label) => (
              <span
                key={label}
                className="cursor-pointer hover:text-[#163C0F] transition-colors"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "10px",
                  letterSpacing: "0.5px",
                  color: "#6B7280",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </span>
            ))}
          </div>
          <span
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "10px",
              letterSpacing: "0.5px",
              color: "#6B7280",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            CLC ©2026 All rights reserved.
          </span>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
