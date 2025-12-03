// "use client";

// import { ReactNode, useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Header from "@/components/Header";
// import LeftSidebar from "@/components/LeftSidebar";
// import RightSidebar from "@/components/RightSidebar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";

// export default function Layout({ children }: { children: ReactNode }) {
//   const pathname = usePathname();
//   const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

//   // Map path → section
//   const routeToSection: Record<string, string> = {
//     "": "home",
//     "about": "about",
//     "career": "career",
//     "expertise": "expertise",
//     "practice-area": "expertise",
//     "team": "team",
//     "insights": "insights",
//     "contact": "contact",
//     "news-updates": "content",
//     "news": "content",
//   };

//   // Get active section
//   const cleanPath = pathname.replace("/", "").trim();
//   const activeSection = routeToSection[cleanPath] || "home";

//   // Auto-close sidebar when route changes
//   useEffect(() => {
//     setIsMobileSidebarOpen(false);
//   }, [pathname]);

//   return (
//     <div className="min-h-screen">
//       <div className="max-w-7xl bg-[#B3C7AB] mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <Header />

//         {/* MOBILE MENU BUTTON */}
//         <div className="lg:hidden mb-4">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
//             className="bg-white/10 border-white/20 text-white hover:bg-white/20"
//           >
//             {isMobileSidebarOpen ? <X className="h-4 w-4 mr-2" /> : <Menu className="h-4 w-4 mr-2" />}
//             {isMobileSidebarOpen ? "Close Menu" : "Open Menu"}
//           </Button>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-4">
//           {/* BACKDROP for mobile */}
//           {isMobileSidebarOpen && (
//             <div
//               className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//               onClick={() => setIsMobileSidebarOpen(false)}
//             />
//           )}

//           {/* MOBILE SIDEBAR */}
//           <div
//             className={`lg:hidden transition-all duration-300 z-50 relative ${
//               isMobileSidebarOpen ? "block" : "hidden"
//             }`}
//           >
//             <LeftSidebar
//               activeSection={activeSection}
//               setActiveSection={() => setIsMobileSidebarOpen(false)}
//             />
//           </div>

//           {/* DESKTOP SIDEBAR */}
//           <div className="hidden lg:block lg:w-48 xl:w-52">
//             <LeftSidebar activeSection={activeSection} />
//           </div>

//           {/* MAIN CONTENT */}
//           <div className="flex-1 min-w-0">{children}</div>

//           {/* RIGHT SIDEBAR */}
//           <div className="hidden lg:block lg:w-60 xl:w-64">
//             <RightSidebar />
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// }
"use client";

import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Pages that benefit from sidebars
  const sidebarPages = [
    "/",
    "/insights",
    "/practice-area",
    "/expertise",
    "/team",
    "/news",
    "/news-updates"
  ];

  const showSidebars = sidebarPages.some(path => pathname.startsWith(path));

  // Map path → section
  const routeToSection: Record<string, string> = {
    "": "home",
    "about": "about",
    "career": "career",
    "expertise": "expertise",
    "practice-area": "expertise",
    "team": "team",
    "insights": "insights",
    "contact": "contact",
    "news-updates": "content",
    "news": "content",
  };

  const cleanPath = pathname.replace("/", "").trim();
  const activeSection = routeToSection[cleanPath] || "home";

  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl bg-[#B3C7AB] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Header />

        {/* MOBILE MENU BUTTON */}
        {showSidebars && (
          <div className="lg:hidden mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              {isMobileSidebarOpen ? <X className="h-4 w-4 mr-2" /> : <Menu className="h-4 w-4 mr-2" />}
              {isMobileSidebarOpen ? "Close Menu" : "Open Menu"}
            </Button>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-4">

          {/* MOBILE BACKDROP */}
          {isMobileSidebarOpen && showSidebars && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileSidebarOpen(false)}
            />
          )}

          {/* MOBILE SIDEBAR */}
          {showSidebars && (
            <div
              className={`lg:hidden transition-all duration-300 z-50 relative ${
                isMobileSidebarOpen ? "block" : "hidden"
              }`}
            >
              <LeftSidebar
                activeSection={activeSection}
                setActiveSection={() => setIsMobileSidebarOpen(false)}
              />
            </div>
          )}

          {/* DESKTOP SIDEBAR */}
          {showSidebars && (
            <div className="hidden lg:block lg:w-48 xl:w-52">
              <LeftSidebar activeSection={activeSection} />
            </div>
          )}

          {/* MAIN CONTENT */}
          <div className="flex-1 min-w-0">{children}</div>

          {/* RIGHT SIDEBAR */}
          {showSidebars && (
            <div className="hidden lg:block lg:w-60 xl:w-64">
              <RightSidebar />
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}
