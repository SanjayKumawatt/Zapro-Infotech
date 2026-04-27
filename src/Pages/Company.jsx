import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Rocket, Globe, TerminalSquare, ArrowRight, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Company = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-white min-h-screen - pb-0">
      
      {/* Hero Section */}
      <section className="relative bg-[#0d2b5e] text-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Architectural / Structural Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b5e] to-[#0d2b5e]/80" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1 border border-[#00b4d8] text-[#00b4d8] rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-[#0d2b5e]/50 backdrop-blur-sm">
              The Organization
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Focusing on Structural Integrity in a Surface-Level Digital World.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* The Opener: The Architecture Principle */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
                The Architecture Principle
              </h2>
              <div className="h-1 w-16 bg-[#00b4d8] mb-8"></div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  In modern software development, aesthetics frequently obscure fragile underlying architectures. Applications may look complete on the surface, yet fail under the pressure of real-world scaling.
                </p>
                <p>
                  <strong className="text-[#0d2b5e]">ZAPRO INFOTECH PRIVATE LIMITED</strong> was established to invert this model. Rather than rushing to market with unstable codebases, our energy is directed entirely toward foundational planning. 
                </p>
                <p>
                  As an early-stage startup building technology frameworks from the ground up, we do not claim decades of history. Instead, our focus is strictly forward-looking-designing systems aimed at handling the demands of tomorrow's digital landscape.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#eaf6f9] transform translate-x-4 translate-y-4 rounded-sm -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Development Planning" 
                className="rounded-sm shadow-xl object-cover w-full h-[500px]"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Official Registry Block */}
      <section className="py-16 bg-[#0d2b5e] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20"
          >
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center p-6">
              <Building2 size={32} className="text-[#00b4d8] mb-4" />
              <h3 className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Registered Entity</h3>
              <p className="font-bold text-lg">ZAPRO INFOTECH PRIVATE LIMITED</p>
            </motion.div>

            {/* Replaced Incorporation Date with Early-Stage Startup */}
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center p-6">
              <Rocket size={32} className="text-[#00b4d8] mb-4" />
              <h3 className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Company Stage</h3>
              <p className="font-bold text-lg text-white">Early-Stage Startup</p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-center text-center p-6">
              <Globe size={32} className="text-[#00b4d8] mb-4" />
              <h3 className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Official Domain</h3>
              <p className="font-bold text-lg text-[#00b4d8]">zapropvtltd.in</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Objectives (Intent vs Experience) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
              What We Are Building Towards
            </h2>
            <p className="text-gray-600 text-lg">
              As an early-stage technology company, our objectives are clear. We are developing our operations around three central pillars of digital execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
              <TerminalSquare size={36} className="text-[#0d2b5e] mb-6" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-4">Clean Architecture</h3>
              <p className="text-gray-600 leading-relaxed">
                We are structuring codebases designed for modularity. The intent is to deliver systems that internal teams can read, manage, and scale without encountering legacy bottlenecks.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
              <Target size={36} className="text-[#0d2b5e] mb-6" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-4">Objective Alignment</h3>
              <p className="text-gray-600 leading-relaxed">
                Technology should serve the business, not complicate it. We are building frameworks aimed at aligning digital capabilities directly with organizational growth targets.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
              <Shield size={36} className="text-[#0d2b5e] mb-6" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-4">Operational Security</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to applying appropriate, modern security measures upon the launch of any platform we engineer, prioritizing the protection of user data from day one.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Image & CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Workspace" 
                className="rounded-sm shadow-lg object-cover w-full h-[400px]"
              />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
                Ready to Discuss Your Infrastructure?
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Zapro Infotech is actively reviewing new development projects. If your organization requires structured technical planning and execution, our team is ready to begin the dialogue.
              </p>
              {/* Named CTA */}
              <Link
                to="/reach-us"
                className="inline-flex items-center gap-3 bg-[#00b4d8] text-white px-8 py-4 rounded-sm font-semibold hover:bg-[#0d2b5e] transition-colors duration-300 shadow-lg group"
              >
                Initiate a Technical Dialogue
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Company;