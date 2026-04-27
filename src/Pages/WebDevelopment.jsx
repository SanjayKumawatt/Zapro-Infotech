import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Cpu, Database, Globe2, 
  Layers, ShieldAlert, Zap, ArrowRight, 
  Terminal, MonitorSmartphone, Braces
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const architecturePillars = [
    {
      title: "Stateless Backend Engineering",
      desc: "We are designing server-side logic aimed at stateless execution, allowing for horizontal scaling as your user base expands.",
      icon: Cpu,
      image: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg"
    },
    {
      title: "Modular Frontend Frameworks",
      desc: "Our team is building component-based interfaces that prioritize rapid rendering and consistent user experience across browsers.",
      icon: Braces,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Relational Data Integrity",
      desc: "We are structuring database schemas designed to maintain high referential integrity and optimized query performance.",
      icon: Database,
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-white min-h-screen  pb-0 font-sans">
      
      {/* 1. Technical Hero Section */}
      <section className="relative bg-[#0d2b5e] text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image: Code/Engineering focused */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b5e] via-[#0d2b5e]/90 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-[#00b4d8]" size={24} />
              <span className="text-[#00b4d8] font-bold tracking-[0.3em] uppercase text-xs bg-white/5 px-3 py-1 rounded-sm">
                Engineering Domain
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight max-w-4xl">
              Constructing Scalable <br/>Web Architectures.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
              ZAPRO INFOTECH is building custom web environments focused on performance metrics and structural stability. We are engineering the digital foundations for early-stage and growing organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Structural Challenge (Contrast Section) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-8 uppercase tracking-tighter">
                The Performance-First Philosophy
              </h2>
              <div className="h-1 w-20 bg-[#00b4d8] mb-10"></div>
              
              <div className="space-y-8 text-gray-600">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#eaf6f9] text-[#0d2b5e] flex items-center justify-center font-bold border-l-4 border-[#00b4d8]">01</div>
                  <p className="text-lg leading-relaxed italic">
                    "Most modern web applications suffer from 'Technical Debt' due to rushed initial development. We are building systems that prioritize clean architecture from day one."
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed pl-14">
                  Our development team is currently focusing on <strong className="text-[#0d2b5e]">modular codebases</strong>. By isolating functionality into discrete services, we are preparing platforms to grow without the need for periodic, costly re-engineering.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000" 
                alt="Clean Code Architecture" 
                className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#00b4d8] p-8 hidden md:block">
                <MonitorSmartphone size={40} className="text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Pillars (Image Cards) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-4">Core Development Pillars</h2>
            <p className="text-gray-600 max-w-xl mx-auto">We are structuring our development operations around high-integrity engineering practices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {architecturePillars.map((pillar, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } }
                }}
                className="bg-white rounded-sm overflow-hidden shadow-lg group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0d2b5e]/40 group-hover:bg-transparent transition-all duration-500 z-10" />
                  <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-[#0d2b5e] text-white flex items-center justify-center rounded-sm mb-6">
                    <pillar.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0d2b5e] mb-4">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Development Strategy (Planned Journey) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-[#0d2b5e]">Our Development Roadmap</h3>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Technical Requirements Gathering", text: "We are establishing a rigorous discovery phase to map business logic to technical constraints." },
                  { step: "02", title: "Architecture Mapping", text: "Defining the tech stack and data models aimed at long-term operational efficiency." },
                  { step: "03", title: "Continuous Engineering", text: "Writing testable, modular code following the latest industry development standards." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <span className="text-4xl font-black text-[#eaf6f9] group-hover:text-[#00b4d8] transition-colors duration-300">{item.step}</span>
                    <div>
                      <h4 className="text-lg font-bold text-[#0d2b5e] mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0d2b5e] p-12 text-white flex flex-col justify-center rounded-sm relative overflow-hidden">
               {/* Abstract background for CTA box */}
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Globe2 size={200} />
              </div>
              
              <h3 className="text-3xl font-bold mb-6 relative z-10">Define Your Web Infrastructure Today.</h3>
              <p className="text-gray-300 mb-10 leading-relaxed relative z-10">
                ZAPRO INFOTECH is ready to discuss your web development requirements. As an early-stage startup, we offer direct collaboration with our engineering core to ensure your project is built to last.
              </p>
              
              {/* Named CTA: Strictly Compliant */}
              <Link
                to="/reach-us"
                className="inline-flex items-center gap-3 bg-[#00b4d8] text-white px-8 py-4 rounded-sm font-bold hover:bg-white hover:text-[#0d2b5e] transition-all duration-300 w-fit relative z-10"
              >
                Initiate Technical Dialogue
                <ArrowRight size={20} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default WebDevelopment;