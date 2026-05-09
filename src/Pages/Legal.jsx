import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Gavel, Scale, Lock, FileSearch, Info } from 'lucide-react';

const Legal = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const legalContent = [
    {
      id: "data-practices",
      title: "Data Practices & Telemetry",
      icon: ShieldAlert,
      text: "ZAPRO INFOTECH PRIVATE LIMITED operates as an active infrastructure provider with a strict policy of data minimization. We do not engage in the broad harvesting of user data. Information transmitted through our API endpoints, enterprise portals, and support channels is utilized strictly for operational continuity, active session authentication, and platform security. We do not sell, distribute, or lease your telemetry or payload data to third-party entities. Our data storage protocols ensure absolute confidentiality for all active deployments on our network."
    },
    {
      id: "structural-security",
      title: "Active Security Commitment",
      icon: Lock,
      text: "Security is actively enforced across our entire ecosystem. We operate continuous threat mitigation, end-to-end encryption, and isolated VPC architecture. Our network natively handles DDoS mitigation, Web Application Firewall (WAF) filtering, and payload encryption at the edge. We prioritize the protection of sensitive organizational data from the hardware foundation upwards, ensuring strict compliance and operational stability for all live enterprise workloads."
    },
    {
      id: "intellectual-property",
      title: "Infrastructure & Digital Property",
      icon: FileSearch,
      text: "All deployed infrastructure, API schemas, compiled assets, and core operational logic accessible via zapropvtltd.in are the exclusive property of ZAPRO INFOTECH PRIVATE LIMITED. Unauthorized replication, reverse engineering, or distribution of these digital assets is strictly prohibited. Engagement with our platform grants access to our services per your active Service Level Agreement (SLA), but does not grant automatic rights to our underlying proprietary engine or source code."
    },
    {
      id: "terms-of-usage",
      title: "API & Platform Usage Terms",
      icon: Gavel,
      text: "By accessing this domain and integrating with our infrastructure, you agree to our operational terms. We provide high-performance cloud ecosystems and reserve the right to deprecate legacy endpoints, modify routing rules, and update rate limits to maintain network integrity. Use of this platform for malicious payloads, unauthorized penetration testing, or attempting to bypass our security layers will result in immediate API key revocation, instance termination, and potential legal action under the IT Act."
    },
    {
      id: "jurisdiction",
      title: "Jurisdictional Framework",
      icon: Scale,
      text: "This legal framework and the use of the ZAPRO INFOTECH digital ecosystem are governed by the laws of India. Any legal disputes, claims, or proceedings arising from the use of our infrastructure or APIs are subject to the exclusive jurisdiction of the courts located in Himatnagar, Gujarat. Enterprises routing traffic through our network from outside India do so at their own initiative and are responsible for compliance with their local data sovereignty laws."
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-0 font-sans">
      
      {/* 1. Impactful Legal Hero Section */}
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
              This document outlines the operational terms, strict security boundaries, and API usage policies governing the ZAPRO INFOTECH infrastructure.
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

          {/* 3. Official Entity Block */}
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
                  <p className="text-white">Active Infrastructure Provider</p>
                </div>
                <div>
                  <p className="text-[#00b4d8] mb-1">Domain</p>
                  <p className="text-white">zapropvtltd.in</p>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/10">
                <p className="text-xs mb-4">FOR OFFICIAL LEGAL INQUIRIES:</p>
                <div className="text-xl md:text-2xl font-bold text-white hover:text-[#00b4d8] transition-colors">
                  contact@zapropvtltd.in
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Minimal Final Bar */}
      <section className="py-12 bg-white text-center border-t border-gray-50">
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.5em]">
          ZAPRO INFOTECH PRIVATE LIMITED | ALL RIGHTS RESERVED
        </p>
      </section>

    </div>
  );
};

export default Legal;