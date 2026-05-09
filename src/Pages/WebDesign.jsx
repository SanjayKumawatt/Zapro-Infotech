import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Paintbrush, MousePointer2, Layout, 
  Smartphone, Monitor, Layers, 
  ArrowRight, Compass, Eye, Zap,
  Focus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDesign = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const designPillars = [
    {
      title: "User Journey Engineering",
      desc: "We are structuring digital pathways aimed at reducing cognitive friction. By analyzing user intent before applying any visual layers, we ensure the interface acts as a seamless conduit for your business objectives.",
      icon: MousePointer2
    },
    {
      title: "Responsive Grid Architectures",
      desc: "A design must remain structurally sound across all viewport sizes. We are developing fluid grid systems intended to maintain aesthetic integrity whether accessed via a handheld device or a high-resolution desktop monitor.",
      icon: Monitor
    },
    {
      title: "Conversion-Focused UI",
      desc: "Interface design is a sales tool. We are conceptualizing UI elements-from button placement to typography scale-designed to guide the user naturally toward specific engagement and conversion milestones.",
      icon: Focus
    },
    {
      title: "Visual Asset Optimization",
      desc: "Performance is a design requirement. Our focus is on preparing optimized SVG and WebP visual assets that maintain high fidelity while ensuring the final platform remains lightweight and rapid to render.",
      icon: Layers
    },
    {
      title: "Inclusive Design Standards",
      desc: "Accessibility is an ethical and technical necessity. We are committed to applying appropriate contrast ratios and structural accessibility tags upon the launch of every interface we engineer.",
      icon: Eye
    },
    {
      title: "Dynamic Prototype Mapping",
      desc: "Before a single line of frontend code is written, we are creating high-fidelity interactive prototypes. This allows for the structural validation of the user flow and design logic early in the planning stage.",
      icon: Layout
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-0 font-sans">
      
      {/* 1. Immersive Hero Section */}
      <section className="relative bg-[#0d2b5e] text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image: Clean, modern design workspace */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b5e] via-[#0d2b5e]/90 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-6">
              <Paintbrush className="text-[#00b4d8]" size={24} />
              <span className="text-[#00b4d8] font-bold tracking-[0.3em] uppercase text-xs bg-white/5 px-3 py-1 rounded-sm">
                Interface Engineering
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
              Designing for <br/>Structural Clarity.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
              ZAPRO INFOTECH approaches web design as a core architectural layer. We are developing visual frameworks aimed at communicating your business logic with absolute clarity and conversion-ready precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Design Stance: Contrast Panels (Heavy Text) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0d2b5e] tracking-tighter">AESTHETICS AS INFRASTRUCTURE.</h2>
              <div className="h-1.5 w-24 bg-[#00b4d8]"></div>
              
              <div className="p-8 bg-[#eaf6f9] border-l-8 border-[#0d2b5e] rounded-r-sm">
                <p className="text-[#0d2b5e] text-lg font-medium italic leading-relaxed">
                  "Most web design focuses on temporary trends. At Zapro Infotech, we are building visual languages intended to maintain long-term relevance and operational logic."
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                As an early-stage startup, we recognize that your website is often the first point of technical validation for your clients. A confusing interface isn't just a design flaw; it is a structural failure that hinders business growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are moving away from bloated, off-the-shelf templates. Our engineering intent is to deliver custom, lightweight interfaces designed for rapid rendering and absolute user intuition. Every pixel in our proposed frameworks is placed with strategic intent.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/4463585/pexels-photo-4463585.jpeg" 
                alt="Web Design Process" 
                className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 h-[550px] object-cover w-full"
              />
              <div className="absolute -top-6 -left-6 bg-[#00b4d8] p-8 hidden md:block">
                <Zap size={40} className="text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Competencies Grid (6 Detailed Items) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#00b4d8] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Execution Pillars
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0d2b5e] mb-6">Our Design Competencies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We are actively focusing our creative engineering efforts on these structural design tenets to ensure maximum user retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designPillars.map((pillar, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="bg-white p-8 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#00b4d8]/20 group rounded-sm"
              >
                <div className="w-14 h-14 bg-[#0d2b5e] text-[#00b4d8] flex items-center justify-center rounded-sm mb-8 group-hover:bg-[#00b4d8] group-hover:text-white transition-all duration-300 shadow-lg">
                  <pillar.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0d2b5e]">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-loose">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Visual Architecture Sprint (Methodology) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative group overflow-hidden rounded-sm">
               <div className="absolute inset-0 bg-[#0d2b5e] opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1000" 
                 alt="UI Engineering" 
                 className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
               />
            </div>

            <div className="space-y-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">Planned Design Lifecycle</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Zapro Infotech is structuring a systematic approach to interface deployment. Here is how we are executing the design journey from concept to final asset delivery.
                </p>
              </motion.div>

              <div className="space-y-10">
                {[
                  { step: "01", title: "Empathy & Intent Mapping", text: "Identifying the core user challenges. We are building this phase to ensure every visual decision is grounded in real business logic." },
                  { step: "02", title: "Information Architecture", text: "Defining the skeletal structure of the platform. We are planning layouts that prioritize the most critical data points for your audience." },
                  { step: "03", title: "Aesthetic Synthesis", text: "Applying high-fidelity design systems. We focus on creating a consistent visual language that remains stable across all digital properties." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <span className="text-4xl font-black text-[#eaf6f9] group-hover:text-[#00b4d8] leading-none">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-[#0d2b5e] mb-2 uppercase tracking-wide">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Final Action CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] relative overflow-hidden text-center">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <Compass size={400} className="text-white" />
        </div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Ready to Engineer Your <br/>Digital Interface?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Our team is prepared to conceptualize and execute structural design frameworks for your organization. Connect with us to begin planning your platform's user journey.
          </p>
          
          <Link
            to="/reach-us"
            className="inline-flex items-center gap-3 bg-[#00b4d8] text-white px-10 py-5 rounded-sm font-bold tracking-wide hover:bg-white hover:text-[#0d2b5e] transition-all duration-300 group shadow-2xl"
          >
            Start Your Design Dialogue
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default WebDesign;