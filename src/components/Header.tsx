import Link from "next/link"
import Image from 'next/image';
const Header = () => {
  const locations = [
    "MUMBAI", "BENGALURU", "NEW DELHI"];

  return (
    <header className="w-full">
      {/* Top teal header */}
      <div className=" bg-[#FFFFFF]/40 text-black">
        <div className="max-w-full mx-auto px-2 sm:px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="px-2 sm:px-4 md:px-[24px]  py-16 md:py-[20px] flex items-center">
              <Link href="/">
                <Image
                  src="/new/NavLogo.svg"
                  width={400}
                  height={0}
                  alt="Commercial Law Chamber - Leading Tax & Commercial Disputes Law Firm"
                  loading="eager"
                  fetchPriority="high"
                />
              </Link>

            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 px-2 sm:px-4 md:px-10">

              <a
                href="https://www.linkedin.com/company/7953220/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#779E5A] hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Image src="/new/LinkedIn_icon.svg" width={20}
                  height={20} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Location tabs */}
      <div className="bg-[#163C0F]/70 border-b">
        <div className="max-w-full mx-auto px-2 sm:px-4">
          <div className="flex justify-end space-x-2 sm:space-x-4 md:space-x-8 py-2">
            {locations.map((location) => (
              <span
                key={location}
                className=" text-xs md:text-sm text-[#FFFFFF] py-[12px] px-[25px] sm:px-2 " style={{ fontFamily: "Inter",
            fontWeight: 700,
            fontStyle: "ExtraBold",
            lineHeight: "11px",
            letterSpacing: "1.2px",
            verticalAlign: "middle",
            textTransform: "uppercase",
 }}
              >
                {location}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;