import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Shield, Award, Users, BookOpen, Gavel, Building, Calculator, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const practiceAreas = [
    { icon: Calculator, title: "Direct & Indirect Tax", description: "Comprehensive direct tax advisory and litigation services" },
    { icon: Gavel, title: "Commercial Disputes", description: "Strategic litigation and dispute resolution" },
    { icon: Building, title: "Regulatory Disputes", description: "Corporate compliance and regulatory advisory" },
    { icon: Globe, title: "International Tax", description: "Cross-border tax structuring and planning" },
  ];

  const whyChooseUs = [
    { icon: Scale, title: "Supreme Court Representation", description: "Extensive experience before the highest court of India" },
    { icon: Award, title: "20+ Years Experience", description: "Combined expertise in tax and commercial law" },
    { icon: Users, title: "Pan-India Network", description: "Legal professionals across all state capitals" },
    { icon: BookOpen, title: "Research-Driven Approach", description: "Solution-oriented legal strategies" },
  ];

  const teamMembers = [
    { name: "Vivek Sarin", designation: "Partner", image: "/vivek.webp" },
    { name: "Shreyas Srivastava", designation: "Partner", image: "/shreya.webp" },
  ];

  return (
    <div className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative p-4 sm:p-6 md:p-8 overflow-hidden">
        <div className="relative max-w-5xl mx-auto border-2 border-[#163C0F] rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl overflow-hidden"
          style={{
            backgroundImage: 'url(/bgpattern.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="text-center space-y-6 relative z-10">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight drop-shadow-lg">
              Specialized in Tax & Commercial Disputes
            </h1>

            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Link href="/contact" className="bg-white px-4 py-2 rounded-xl text-base sm:text-lg font-semibold text-[#163C0F] flex items-center gap-2 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                Discuss your Issue
                <ArrowRight className="h-5 w-5 text-[#163C0F]" />
              </Link>
              <Link href="/practice-area" className="bg-[#B3C7AB] px-4 py-2 rounded-xl text-base sm:text-lg font-semibold text-[#163C0F] flex items-center gap-2 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                Our Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="p-2 sm:p-3 md:p-4 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold poppins text-center text-[#163C0F] mb-4">Welcome to Commercial Law Chamber</h2>
          <p className="text-sm sm:text-base text-justify text-gray-600 leading-relaxed mb-4">
            Founded in 2008, Commercial Law Chamber is a boutique law practice distinguished by its deep specialization in tax advisory and dispute resolution. With three seasoned Partners and a team of 15 adept associates, we operate through a robust national network of legal professionals.
          </p>
          <p className="text-sm sm:text-base text-justify text-gray-600 leading-relaxed">
            Our philosophy is rooted in strategic thinking and rigorous legal research—crafting bespoke solutions that align with both legal precedents and commercial imperatives.
          </p>
        </div>
      </section>

      {/* Core Practice Areas */}
      <section className="p-4 sm:p-3 md:p-4 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl poppins font-bold text-[#163C0F] mb-3 text-center">Core Practice Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceAreas.map((area, index) => (
              <div key={index} className="bg-white border-2 border-[#163C0F] rounded-xl p-3 hover:shadow-lg transition-all hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#B3C7AB] rounded-lg p-2 flex-shrink-0">
                    <area.icon className="h-8 w-8 text-[#163C0F]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#163C0F] text-lg mb-1">{area.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="p-4 sm:p-6 md:p-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold poppins text-[#163C0F] mb-3 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white border-2 border-[#163C0F] rounded-xl overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02]">
                <div className="aspect-square bg-gray-200 relative">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.designation}`}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                </div>
                <div className="p-5 text-center bg-[#B3C7AB]">
                  <h3 className="font-bold text-[#163C0F] text-lg mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-[#163C0F]">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="p-4 sm:p-6 md:p-8 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold poppins text-[#163C0F] mb-3 text-center">Why Choose Commercial Law Chamber</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-[#E5E7EB] rounded-xl p-3 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-[#B3C7AB] rounded-lg p-4 flex-shrink-0">
                    <item.icon className="h-7 w-7 text-[#163C0F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#163C0F] text-[16px] mb-1">{item.title}</h3>
                    <p className="text-gray-700 text-[14px] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
