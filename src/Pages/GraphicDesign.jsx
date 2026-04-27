import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, Layers, ArrowRight, 
  PenTool, Monitor, Eye, Type, 
  Image as ImageIcon, BookOpen, Target,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GraphicDesign = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const detailedCapabilities = [
    {
      title: "Corporate Identity Formulation",
      desc: "A logo is just a signature; the identity is the entire language. We are conceptualizing comprehensive brand systems-incorporating precise spatial rules, logo marks, and visual constraints designed to establish a highly professional market presence from your very first day of operation.",
      icon: PenTool
    },
    {
      title: "Interface & Experience (UI/UX) Wireframing",
      desc: "Beautiful interfaces fail if the cognitive load is too high. Our focus is strictly on designing wireframes and structural layouts aimed at reducing user friction. We map out the digital journey before applying any aesthetic layers, ensuring the architecture serves the conversion goal.",
      icon: Monitor
    },
    {
      title: "Typography & Color Frameworks",
      desc: "Color psychology and typographic hierarchy dictate how information is digested. We are developing customized, scalable typography and color systems intended to guide the user's eye naturally toward critical data points and call-to-action elements without causing visual fatigue.",
      icon: Type
    },
    {
      title: "Digital Asset Ecosystems",
      desc: "Inconsistent graphics dilute brand trust. We are preparing cohesive visual asset libraries-including custom iconography, social media structural templates, and standardized presentation layouts-aimed at maintaining strict brand integrity across all digital touchpoints.",
      icon: Layers
    },
    {
      title: "Conversion-Focused Marketing Graphics",
      desc: "Marketing visuals require a different structural approach than corporate identity. We are designing high-impact graphic collateral tailored for ad networks and landing pages, focusing entirely on visual hierarchy that drives immediate user action.",
      icon: ImageIcon
    },
    {
      title: "Brand Guideline Documentation",
      desc: "A brand without rules quickly devolves into visual chaos. We are committed to compiling exhaustive brand guidelines (brand books) that dictate exact hex codes, spacing rules, and usage policies to ensure your internal teams maintain the standard.",
      icon: BookOpen
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Visual Audit & Strategy",
      desc: "Before sketching begins, we analyze the visual landscape of your sector. This phase is aimed at identifying visual gaps in the market that your brand can occupy securely."
    },
    {
      step: "02",
      title: "Structural Wireframing",
      desc: "For digital products, we map out the skeleton. We define where information lives and how it flows, completely devoid of color or imagery to test pure logic."
    },
    {
      step: "03",
      title: "High-Fidelity Application",
      desc: "Applying the brand system to the structural wires. We are translating raw logic into polished, aesthetically precise interfaces and graphic layouts."
    },
    {
      step: "04",
      title: "Asset Standardization",
      desc: "Finalizing the files for deployment. We prepare layered, organized, and optimized digital assets ready for immediate use by your development and marketing teams."
    }
  ];

  return (
    <div className="bg-white min-h-screen - pb-0 font-sans">
      
      {/* 1. Deep Immersive Hero Section */}
      <section className="relative bg-[#0d2b5e] text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b5e] via-[#0d2b5e]/90 to-[#0d2b5e]/50" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#00b4d8] text-[#00b4d8] rounded-sm font-bold tracking-[0.2em] uppercase text-xs bg-[#0d2b5e]/60 backdrop-blur-md">
              <Palette size={16} /> Visual Engineering
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Designing Infrastructure, <br className="hidden md:block"/>
              <span className="text-[#00b4d8] font-light italic">Not Just Decoration.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
              As an early-stage technology startup, ZAPRO INFOTECH approaches graphic and interface design as a core structural element. We are developing visual frameworks aimed at communicating your business logic with absolute clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Heavy Text Philosophy Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sticky top-32">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0d2b5e] mb-6 tracking-tight leading-tight">
                Why Aesthetics Must Serve Functionality.
              </h2>
              <div className="h-1 w-24 bg-[#00b4d8] mb-10"></div>
              
              <div className="flex gap-6 mb-8 group">
                <div className="w-16 h-16 rounded-full bg-[#eaf6f9] flex items-center justify-center flex-shrink-0 group-hover:bg-[#00b4d8] transition-colors duration-300">
                  <Eye className="text-[#0d2b5e] group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0d2b5e] mb-2">The Cognitive Load Factor</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Over-designed interfaces confuse users. We are engineering visual systems designed to lower cognitive load, ensuring your audience processes information rapidly.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <p>
                In the digital ecosystem, trust is established within milliseconds. A fragmented visual identity or a confusing user interface immediately signals instability to a potential client or user. We do not believe in creating graphics merely to fill empty space; every pixel must justify its existence.
              </p>
              <div className="p-8 bg-[#0d2b5e] text-white rounded-sm shadow-xl">
                <Compass className="text-[#00b4d8] mb-4" size={32} />
                <p className="font-light italic leading-relaxed">
                  "Current design trends fade quickly, often leaving companies with dated assets within months. We are structuring corporate identities aimed at maintaining visual relevance, focusing on grid logic, timeless typography, and strict color math rather than fleeting aesthetic fads."
                </p>
              </div>
              <p>
                Whether you require a comprehensive brand overhaul or meticulous UI wireframing for a complex web application, our intent is consistent. We are preparing visual assets designed to serve a distinct, strategic communication purpose that aligns directly with your long-term business objectives.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Detailed Core Capabilities (6 Grid Items) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#00b4d8] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Design Competencies
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0d2b5e] mb-6">Visual Architecture Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We are actively focusing our creative engineering efforts on the following structural design pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedCapabilities.map((cap, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="bg-white border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 group rounded-sm"
              >
                <div className="w-14 h-14 bg-[#eaf6f9] text-[#00b4d8] flex items-center justify-center rounded-sm mb-6 group-hover:bg-[#0d2b5e] group-hover:text-white transition-all duration-300 shadow-sm">
                  <cap.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0d2b5e]">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-loose">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Design Sprint / Methodology with Image */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-[#0d2b5e] translate-x-4 translate-y-4 rounded-sm -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000" 
                alt="Design Strategy" 
                className="rounded-sm shadow-xl w-full h-[600px] object-cover"
              />
              <div className="absolute top-6 right-6 bg-[#00b4d8] p-4 rounded-sm shadow-lg text-white">
                <Target size={32} />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">Our Methodology</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Zapro Infotech is structuring a systematic approach to visual deployment. Here is how we are executing design sprints from concept to final asset delivery.
              </p>

              <div className="space-y-8">
                {designProcess.map((item, idx) => (
                  <div key={idx} className="flex gap-6 group relative">
                    {/* Connecting Line */}
                    {idx !== designProcess.length - 1 && (
                      <div className="absolute left-[19px] top-12 bottom-[-32px] w-[2px] bg-gray-100 group-hover:bg-[#00b4d8]/30 transition-colors"></div>
                    )}
                    
                    <div className="relative z-10 w-10 h-10 bg-[#eaf6f9] rounded-full flex items-center justify-center text-[#0d2b5e] font-bold border-2 border-white shadow-sm flex-shrink-0 group-hover:bg-[#00b4d8] group-hover:text-white transition-colors duration-300">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0d2b5e] mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Bold CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] text-center relative overflow-hidden">
        {/* Abstract shapes for design vibe */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#00b4d8] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#eaf6f9] opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Define Your Visual Architecture?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Our team is prepared to conceptualize and execute visual frameworks for your business. Connect with us to begin planning your digital aesthetic and user interfaces.
          </p>
          
          {/* Named CTA: Strictly Compliant */}
          <Link
            to="/reach-us"
            className="inline-flex items-center gap-3 bg-[#00b4d8] text-white px-10 py-5 rounded-sm font-bold tracking-wide hover:bg-white hover:text-[#0d2b5e] transition-all duration-300 group shadow-2xl"
          >
            Discuss Visual Requirements
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default GraphicDesign;