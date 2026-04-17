import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const sections = {
    CONNECT: ["Request a meeting", "Subscribe", "Contact us", "Submit RFP", "Events and webcasts", "People", "Offices", "GT store", "Employment verification"],
    ABOUT: ["About us", "Careers", "Alumni", "Newsroom", "Ethics Hotline", "Code of conduct"],
    LEGAL: ["Privacy", "Cookie policy", "Cookie settings", "Do not sell/share my personal information", "Hyperlink agreement", "Terms of use", "Our suppliers"]
  };

  return (
    <footer className="bg-[#24133F] text-white py-16 px-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {Object.entries(sections).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold border-b border-gray-500 pb-2 mb-6 text-sm tracking-widest">
                {title}
              </h4>
              <ul className="space-y-3 text-sm font-light">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-bold border-b border-gray-500 pb-2 mb-6 text-sm tracking-widest">
              FOLLOW US
            </h4>
            <div className="flex gap-4">
              <Facebook size={24} className="cursor-pointer hover:opacity-70" />
              <Linkedin size={24} className="cursor-pointer hover:opacity-70" />
              <Twitter size={24} className="cursor-pointer hover:opacity-70" />
              <Instagram
                size={24}
                className="cursor-pointer hover:opacity-70"
              />
              <Youtube size={24} className="cursor-pointer hover:opacity-70" />
            </div>
          </div>
        </div>

        <div className="text-[11px] leading-relaxed text-gray-300 space-y-4 max-w-5xl">
          <p>
            "Grant Thornton" is the brand name under which Grant Thornton LLP
            and Grant Thornton Advisors LLC and its subsidiary entities provide
            professional services...
          </p>
          <p>Grant Thornton LLP is a licensed independent CPA firm...</p>
          <p>The mobius symbol is a trademark of GTIL.</p>
          <p className="pt-4">
            © 2026 Grant Thornton Advisors LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
