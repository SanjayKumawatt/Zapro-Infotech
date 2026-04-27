import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#eaf6f9] pt-20 border-t border-[#00b4d8]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content: 2-Column Split Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">

          {/* Left Column: Huge Branding & Direct Communication */}
          <div className="lg:w-1/2 flex flex-col justify-between">

            <div>
              {/* Logo + Name in one line */}
              <div className="flex items-center gap-3 mb-2">
                <img src={logo} className="h-10 w-auto" alt="logo" />
                <h2 className="text-4xl lg:text-5xl font-black text-[#0d2b5e] uppercase tracking-tight">
                  Zapro Infotech
                </h2>
              </div>

              <p className="text-sm font-bold text-[#00b4d8] tracking-[0.2em] uppercase mb-8">
                Private Limited
              </p>

              <p className="text-[#0d2b5e]/80 text-lg max-w-md mb-10 leading-relaxed font-medium">
                Developing structural digital solutions for modern businesses. Our focus is on writing clean code and deploying scalable architecture.
              </p>
            </div>

            {/* Direct Email Callout (Strict Guideline: Visible Text) */}
            <div className="inline-block border-l-4 border-[#00b4d8] pl-5 py-1">
              <p className="text-xs text-[#0d2b5e]/60 font-bold uppercase tracking-widest mb-2">
                Direct Inquiries
              </p>
              <a
                href="mailto:contact@zapropvtltd.in"
                className="group flex items-center gap-2 text-2xl sm:text-3xl font-bold text-[#0d2b5e] hover:text-[#00b4d8] transition-colors"
              >
                contact@zapropvtltd.in
                <ArrowUpRight size={28} className="text-[#00b4d8] opacity-0 -translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Address and Navigation Grid */}
          <div className="lg:w-5/12 flex flex-col sm:flex-row justify-between gap-12">

            {/* Address Block (Strict Guideline: Full Address with Pincode) */}
            <div className="sm:w-3/5">
              <h4 className="text-xs font-bold text-[#00b4d8] tracking-widest uppercase mb-6 flex items-center gap-2">
                <MapPin size={16} />
                Registered Office
              </h4>
              <p className="text-[#0d2b5e] leading-loose font-semibold">
                C-308, Shantam 7 Comp Rto,<br />
                At Po Savgadh, Ilol, Sabarkantha,<br />
                Himatnagar, Gujarat,<br />
                India, 383220
              </p>
            </div>

            {/* Navigation Block */}
            <div className="sm:w-2/5">
              <h4 className="text-xs font-bold text-[#00b4d8] tracking-widest uppercase mb-6">
                Index
              </h4>
              <ul className="space-y-4">
                {['Home', 'Company', 'Solutions', 'Reach Us'].map((item) => {
                  // Creating paths mapping
                  const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                  return (
                    <li key={item}>
                      <Link
                        to={path}
                        className="text-[#0d2b5e] hover:text-[#00b4d8] font-bold transition-colors relative group inline-block"
                      >
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00b4d8] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Legal Bar (Deep Navy Blue for contrast and grounding) */}
      <div className="bg-[#0d2b5e] py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

          {/* Full Name & Date */}
          <p className="text-gray-300 font-medium">
            &copy; 2026 ZAPRO INFOTECH PRIVATE LIMITED.
          </p>

          {/* Exact Domain (Strict Guideline) */}
          <p className="text-gray-400">
            Domain: <span className="text-[#00b4d8] font-semibold tracking-wide">zapropvtltd.in</span>
          </p>

          {/* Unique Legal Page Name (Strict Guideline Part 6) */}
          <Link
            to="/legal"
            className="text-white hover:text-[#00b4d8] font-bold uppercase tracking-widest transition-colors"
          >
            Policies & Terms
          </Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;