"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LeftSidebarProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

const LeftSidebar = ({ activeSection, setActiveSection }: LeftSidebarProps) => {
  const pathname = usePathname(); // auto-detect current route

  const menuItems = [
    {
      label: "HOME",
      key: "home",
      href: "/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
    {
      label: "ABOUT CLC",
      key: "about",
      href: "/about",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      label: "PRACTICE AREAS",
      key: "expertise",
      href: "/practice-area",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
          <line x1="7" y1="7" x2="7.01" y2="7"></line>
        </svg>
      ),
    },
    {
      label: "OUR TEAM",
      key: "team",
      href: "/team",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
    },
    {
      label: "INSIGHTS",
      key: "insights",
      href: "/insights",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 11a9 9 0 0 1 9 9"></path>
          <path d="M4 4a16 16 0 0 1 16 16"></path>
          <circle cx="5" cy="19" r="1"></circle>
        </svg>
      ),
    },
    {
      label: "NEWS & UPDATES",
      key: "content",
      href: "/news",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
    {
      label: "CONTACT",
      key: "contact",
      href: "/contact",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
    },
    {
      label: "CAREER",
      key: "career",
      href: "/career",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
    },
  ];

  const sections = [
    { title: "CLC in News", subtitle: "How we perform" },
    { title: "CLC Matter Updates", subtitle: "See our recent matters" },
    { title: "Matter Talk", subtitle: "Latest discussions" }
  ];

  return (
    <div className="left-sidebar w-full lg:w-48 xl:w-52 text-[#163C0F] h-full flex flex-col sticky top-0 self-start">
      {/* Top dark green box */}
      <div className="bg-[#163C0F] py-4">
        <nav className="flex flex-col">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href || activeSection === item.key;
            return (
              <Link key={index} href={item.href} className="w-full">
                <button
                  onClick={() => setActiveSection?.(item.key)}
                  className={`w-full text-left px-4 py-2 text-[13px] font-bold tracking-wider transition-colors border-b border-white/10 last:border-0 ${isActive ? 'text-[#B3C7AB]' : 'text-gray-300 hover:text-white'
                    }`}
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {item.label}
                </button>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom sections in lighter green box */}
      <div className="bg-[#779E5A] p-3 mt-0 flex-1 min-h-[400px]">
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="group cursor-pointer">
              <h3 className="font-bold text-white text-[14px] leading-tight uppercase tracking-wide group-hover:underline">
                {section.title}
              </h3>
              {section.subtitle && (
                <p className="text-[11px] text-white/80 mt-1 italic leading-relaxed">
                  {section.subtitle}
                </p>
              )}
            </div>
          ))}

          <div className="pt-4 mt-4 border-t border-white/20">
            <div className="text-white">
              <h3 className="font-bold text-[14px] uppercase tracking-wide">MATTER <span className="font-normal text-[11px] opacity-70">Hotline</span></h3>
              <p className="text-[10px] text-white/80 mt-1">Latest discussions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
