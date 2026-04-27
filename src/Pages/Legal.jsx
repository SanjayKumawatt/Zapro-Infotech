import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Gavel, Scale, Lock, FileSearch, Mail, Info } from 'lucide-react';

const Legal = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const legalContent = [
    {
      id: "data-practices",
      title: "Data Practices & Personal Integrity",
      icon: ShieldAlert,
      text: "ZAPRO INFOTECH PRIVATE LIMITED operates as an early-stage startup with a strict policy of data minimization. We do not engage in the broad harvesting of user data. Any information transmitted through our 'Reach Us' portals-including names, official email addresses, and technical project requirements-is utilized strictly for the initiation of professional dialogue and structural planning. We do not sell, distribute, or lease your information to third-party marketing entities. Our data storage protocols are aimed at maintaining absolute confidentiality for our prospective partners."
    },
    {
      id: "structural-security",
      title: "Structural Security Commitment",
      icon: Lock,
      text: "As we are currently in the development phase of our various technological frameworks, we are committed to applying appropriate, modern security measures upon the official launch of any digital platform we engineer. Our focus remains on the deployment of encrypted transaction tunnels and secure database architectures. While no digital system can be claimed as impenetrable, our engineering intent is to prioritize the protection of sensitive organizational data from the foundation upwards."
    },
    {
      id: "intellectual-property",
      title: "Intellectual & Digital Property",
      icon: FileSearch,
      text: "All content, code architectures, visual assets, and logical frameworks displayed on zapropvtltd.in are the exclusive property of ZAPRO INFOTECH PRIVATE LIMITED. Unauthorized replication, modification, or distribution of these digital assets is strictly prohibited. Our proposed solutions and proprietary methodologies are protected under the intellectual property framework of India. Engagement with our company does not grant automatic rights to our underlying technology unless explicitly stated in a signed Master Service Agreement."
    },
    {
      id: "terms-of-usage",
      title: "Terms of Digital Usage",
      icon: Gavel,
      text: "By accessing this domain, you acknowledge that ZAPRO INFOTECH is an early-stage startup. The services described are proposed technological solutions currently under our engineering roadmap. We reserve the right to modify our service offerings, technical specifications, and internal policies without prior notice. Use of this website for any unlawful activity, or any attempt to bypass our structural security layers, will result in immediate termination of communication and potential legal action under the IT Act."
    },
    {
      id: "jurisdiction",
      title: "Jurisdictional Framework",
      icon: Scale,
      text: "This legal framework and the use of the ZAPRO INFOTECH digital ecosystem are governed by the laws of India. Any legal disputes, claims, or proceedings arising from the use of our website or services are subject to the exclusive jurisdiction of the courts located in Himatnagar, Gujarat. Users accessing this site from outside India do so at their own initiative and are responsible for compliance with local laws where applicable."
    }
  ];

  return (
    <div className="bg-white min-h-screen - pb-0 font-sans">
      
      {/* 1. Impactful Legal Hero Section (No Dates) */}
      <section className="relative bg-[#0d2b5e] text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Architectural Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="legal-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#legal-grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-[#00b4d8]/20 border border-[#00b4d8] rounded-sm backdrop-blur-sm">
              <Info className="text-[#00b4d8]" size={16} />
              <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">
                Organizational Governance
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">
              Data Practices & <br/>Legal Framework
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              This document outlines the structural and legal boundaries governing the interaction between ZAPRO INFOTECH and its digital visitors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Deep Content Sections (Heavy Text) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]/40">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {legalContent.map((section, idx) => (
              <motion.div 
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 md:p-14 shadow-sm border border-gray-100 rounded-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-5 mb-10 border-b border-gray-50 pb-8">
                  <div className="w-14 h-14 bg-[#0d2b5e] text-[#00b4d8] flex items-center justify-center rounded-sm flex-shrink-0">
                    <section.icon size={28} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] uppercase tracking-tight">
                    {section.title}
                  </h2>
                </div>

                <p className="text-gray-600 leading-loose text-lg font-normal">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 3. Official Entity Block (No Dates) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-12 bg-[#0d2b5e] text-white rounded-sm text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-sm font-bold text-[#00b4d8] uppercase tracking-[0.3em] mb-6">Entity Verification</h3>
              <p className="text-2xl font-black uppercase mb-4 tracking-tighter">ZAPRO INFOTECH PRIVATE LIMITED</p>
              
              <div className="h-px w-20 bg-white/20 mx-auto mb-8"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400 font-medium uppercase tracking-widest">
                <div>
                  <p className="text-[#00b4d8] mb-1">Status</p>
                  <p className="text-white">Early-Stage Startup</p>
                </div>
                <div>
                  <p className="text-[#00b4d8] mb-1">Domain</p>
                  <p className="text-white">zapropvtltd.in</p>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/10">
                <p className="text-xs mb-4">FOR OFFICIAL LEGAL INQUIRIES:</p>
                <a href="mailto:contact@zapropvtltd.in" className="text-xl md:text-2xl font-bold text-white hover:text-[#00b4d8] transition-colors">
                  contact@zapropvtltd.in
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Minimal Final Bar (Strictly No Dates) */}
      <section className="py-12 bg-white text-center border-t border-gray-50">
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.5em]">
          ZAPRO INFOTECH PRIVATE LIMITED | ALL RIGHTS RESERVED
        </p>
      </section>

    </div>
  );
};

export default Legal;