import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutTemplate, Lock, Sliders, ArrowRight, 
  FileText, CheckSquare, Laptop2, Blocks, 
  Database, Code2, ServerCog, Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WordPressDevelopment = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const coreCapabilities = [
    {
      title: "Custom Theme Engineering",
      desc: "Commercial templates often carry massive technical debt. We are engineering lean, custom WordPress themes built exactly to your functional requirements. The focus is strictly on minimizing DOM size and eliminating unnecessary scripts that slow down page rendering.",
      icon: Code2
    },
    {
      title: "Headless CMS Architecture",
      desc: "For organizations requiring multi-platform content distribution, we are structuring decoupled WordPress environments. By utilizing the WordPress REST API or GraphQL, we are separating the administrative backend from the frontend presentation layer.",
      icon: Layers
    },
    {
      title: "Gutenberg Block Customization",
      desc: "We are building custom Gutenberg environments aimed at giving marketing teams total autonomy. Instead of relying on fragile page builders, we are creating locked-in, brand-compliant blocks that allow safe, structural content updates.",
      icon: Blocks
    },
    {
      title: "Database Optimization Strategy",
      desc: "Content bloat inevitably leads to slow queries. We are designing database frameworks and caching layers intended to maintain rapid read/write speeds, ensuring the platform remains highly responsive even as your digital asset library grows.",
      icon: Database
    },
    {
      title: "Bespoke Plugin Development",
      desc: "When standard plugins fall short or introduce security risks, we write custom integrations. Zapro Infotech focuses on developing localized, secure PHP extensions designed to handle your specific business logic without compromising system stability.",
      icon: Sliders
    },
    {
      title: "Administrative Access Control",
      desc: "Security is an architectural necessity. We are committed to applying strict role-based access controls and customized administrative dashboards, ensuring that internal users only see the tools relevant to their specific operational roles.",
      icon: Lock
    }
  ];

  const deploymentPhases = [
    {
      phase: "Phase 01",
      title: "Structural Discovery",
      text: "Before writing any code, we map out your content taxonomy, user roles, and data flow. We are establishing this phase to ensure the technical architecture perfectly mirrors your organizational structure."
    },
    {
      phase: "Phase 02",
      title: "Backend Configuration",
      text: "Setting up the foundational database, defining custom post types, and configuring the REST API. This step is aimed at creating a stable, secure repository for all your digital assets."
    },
    {
      phase: "Phase 03",
      title: "Frontend Engineering",
      text: "Translating wireframes into a lightweight, custom-coded theme. We focus strictly on clean HTML/CSS and minimal JavaScript to ensure rapid load times and cross-device compatibility."
    },
    {
      phase: "Phase 04",
      title: "Authoring Environment Setup",
      text: "Customizing the administrative dashboard. We are preparing an intuitive backend interface so your internal teams can manage daily publishing without technical friction."
    }
  ];

  return (
    <div className="bg-white min-h-screen - pb-0 font-sans">
      
      {/* 1. Immersive Hero Section with High Detail */}
      <section className="relative bg-[#0d2b5e] text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b5e] via-[#0d2b5e]/95 to-[#0d2b5e]/40" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#00b4d8] text-[#00b4d8] rounded-sm text-xs font-bold tracking-[0.2em] uppercase mb-8 bg-[#0d2b5e]/50 backdrop-blur-md">
              <LayoutTemplate size={16} /> Content Architecture
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Architecting <br/>Autonomous Content Systems.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-2xl">
              ZAPRO INFOTECH is engineering custom WordPress environments focused on giving your internal teams complete, restriction-free publishing control. We are moving beyond basic templates to build enterprise-ready structural frameworks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Philosophy & Stance (Heavy Text Block) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sticky top-32">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0d2b5e] mb-6 tracking-tight">
                The CMS Landscape Requires a Structural Reset.
              </h2>
              <div className="h-1 w-24 bg-[#00b4d8] mb-8"></div>
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                alt="Code and Development" 
                className="rounded-sm shadow-xl w-full h-[300px] object-cover mb-8"
              />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <p>
                Many organizations find themselves trapped in rigid content management systems. Commercial templates and heavy page-builders often lead to "Technical Chaos"-where a simple text update requires developer intervention or threatens to break the entire page layout.
              </p>
              <div className="p-8 bg-[#eaf6f9] border-l-4 border-[#00b4d8] rounded-r-sm">
                <p className="text-[#0d2b5e] font-medium italic">
                  "As an early-stage startup, our development focus is on lean, logical architecture. We are building systems intended to serve the marketing team as much as the engineering team."
                </p>
              </div>
              <p>
                We are approaching WordPress development not as a blogging tool, but as a robust, API-ready data repository. By stripping away unnecessary commercial bloat, we are setting up environments aimed at rapid rendering, high security, and seamless third-party integrations. 
              </p>
              <p>
                Whether you require a traditional monolithic setup or a fully decoupled headless architecture, our intent remains the same: <strong className="text-[#0d2b5e]">to deliver a stable foundation that scales naturally with your content demands.</strong>
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Deep-Dive Core Capabilities (6 Detailed Grid Items) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#00b4d8] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              System Specifications
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Planned Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              We are actively focusing our engineering efforts on the following WordPress architectural pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((cap, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300 group rounded-sm"
              >
                <div className="w-14 h-14 bg-[#00b4d8]/20 text-[#00b4d8] flex items-center justify-center rounded-sm mb-6 group-hover:bg-[#00b4d8] group-hover:text-white transition-all duration-300">
                  <cap.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00b4d8] transition-colors">{cap.title}</h3>
                <p className="text-gray-400 text-sm leading-loose">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Implementation Lifecycle (Process Flow) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex md:items-end justify-between">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">The Development Lifecycle</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Zapro Infotech is structuring a systematic approach to CMS deployment. Here is how we are planning the integration journey from concept to launch.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deploymentPhases.map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { delay: idx * 0.15 } }
                }}
                className="relative bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                {/* Visual Connector Line (Hidden on mobile) */}
                {idx !== deploymentPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[2px] bg-[#00b4d8]/30 z-10"></div>
                )}
                
                <span className="text-sm font-black text-[#00b4d8] tracking-widest uppercase mb-4 block">
                  {item.phase}
                </span>
                <h4 className="text-xl font-bold text-[#0d2b5e] mb-4">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Heavy CTA Section with Image Background */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] relative overflow-hidden text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-[#0d2b5e]/80 mix-blend-multiply" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-[#00b4d8] flex items-center justify-center rounded-full mx-auto mb-8 shadow-xl">
            <ServerCog size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Configure Your CMS Platform?
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Our engineering team is prepared to analyze your content requirements and map out a custom WordPress architecture. Let us discuss how we are structuring modern web environments.
          </p>
          
          {/* Named CTA: Strictly Compliant */}
          <Link
            to="/reach-us"
            className="inline-flex items-center gap-3 bg-white text-[#0d2b5e] px-10 py-5 rounded-sm font-bold tracking-wide hover:bg-[#00b4d8] hover:text-white transition-all duration-300 group shadow-2xl"
          >
            Plan Your CMS Architecture
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default WordPressDevelopment;