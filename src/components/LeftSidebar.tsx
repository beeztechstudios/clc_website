"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LeftSidebarProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

const LeftSidebar = ({ activeSection, setActiveSection }: LeftSidebarProps) => {
  const pathname = usePathname();

  const menuItems = [
    { label: "HOME", key: "home", href: "/", separator: true },
    { label: "ABOUT CLC", key: "about", href: "/about" },
    { label: "PRACTICE AREAS", key: "expertise", href: "/practice-area", separator: true },
    { label: "OUR TEAM", key: "team", href: "/team" },
    { label: "INSIGHTS", key: "insights", href: "/insights" },
    { label: "NEWS AND UPDATES", key: "content", href: "/news" },
    { label: "CONTACT", key: "contact", href: "/contact", separator: true },
    { label: "CAREER OPPORTUNITIES", key: "career", href: "/career" },
  ];

  const sections = [
    { bold: "CLC", tag: "IN NEWS", subtitle: "How we perform" },
    { bold: "CLC", tag: "MATTER UPDATES", subtitle: "See our recent matters" },
    { bold: "MATTER", tag: "Hotline", subtitle: "Latest discussions" },
  ];

  return (
    <div
      className="left-sidebar cursor-pointer flex flex-col sticky top-0 self-start"
      style={{ width: "220px", minWidth: "160px" }}
    >
      {/* Top dark green nav */}
      <div className="bg-[#163C0F]">
        <nav className="flex flex-col">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href || activeSection === item.key;
            return (
              <React.Fragment key={index}>
                <Link href={item.href}>
                  <button
                    onClick={() => setActiveSection?.(item.key)}
                    className="w-full text-left transition-colors"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "12.1px",
                      lineHeight: "100%",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      padding: "10px 14px",
                      backgroundColor: isActive ? "#A6C89A" : "transparent",
                    }}
                  >
                    <span style={{ color: isActive ? "#163C0F" : "#FFFFFF" }}>
                      {item.label}
                    </span>
                  </button>
                </Link>
                {item.separator && (
                  <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.25)", margin: "0" }} />
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Bottom lighter green section */}
      <div
        className="flex-1"
        style={{ background: "linear-gradient(to top, #779E5A, #A6C89A)" }}
      >
        <div className="flex flex-col divide-y divide-white/20">
          {sections.map((s, i) => (
            <div key={i} className="px-3 py-3 cursor-pointer hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-1">
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    fontSize: "16px",
                    color: "#163C0F",
                    textTransform: "uppercase",
                  }}
                >
                  {s.bold}
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "11px",
                    color: "#163C0F",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {s.tag}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: "#163C0F",
                  marginTop: "2px",
                }}
              >
                {s.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
