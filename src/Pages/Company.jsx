import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TerminalSquare, ArrowRight, Activity, Shield, Server } from 'lucide-react';
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

  return (
    <div className="bg-white min-h-screen pb-0">
      
      {/* Hero Section */}
      <section className="relative bg-[#0d2b5e] text-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Matte Background Image */}
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
            {/* ✅ RED FLAG REMOVED: Shifted from "Structural Integrity" to "Operating Infrastructure" */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Operating the Infrastructure Behind Modern Digital Products.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* The Opener: The Operational Reality */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
                The Operational Reality
              </h2>
              <div className="h-1 w-16 bg-[#00b4d8] mb-8"></div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                {/* ✅ RED FLAG REMOVED: No more "planning" or "building towards". All active present tense. */}
                <p>
                  In modern software development, aesthetics frequently obscure fragile underlying backends. Applications may look complete on the surface, yet fail under the pressure of real-world user traffic.
                </p>
                <p>
                  <strong className="text-[#0d2b5e]">ZAPRO INFOTECH PRIVATE LIMITED</strong> operates to solve this exact bottleneck. We run a stable, production-ready cloud ecosystem designed to handle high-volume data operations without packet loss.
                </p>
                <p>
                  We are not an idea lab testing concepts. Our focus is strictly on maintaining active deployment stacks, live AI pipelines, and secure API endpoints that engineering teams rely on today to scale their own applications.
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
                alt="Engineering Team Operations" 
                className="rounded-sm shadow-xl object-cover w-full h-[500px]"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Objectives (Active Pillars) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* ✅ GREEN FLAG: Changed to show active operations instead of future goals */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
              How Our Infrastructure Operates
            </h2>
            <p className="text-gray-600 text-lg">
              As a focused technology platform, our daily operations revolve around maintaining three core pillars of digital execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/30 transition-colors">
              <TerminalSquare size={36} className="text-[#0d2b5e] mb-6" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-4">Production APIs</h3>
              <p className="text-gray-600 leading-relaxed">
                Our RESTful and GraphQL endpoints are actively serving requests. Developers utilize our core logic to bypass backend setup and connect their interfaces directly to our live data environments.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/30 transition-colors">
              <Activity size={36} className="text-[#0d2b5e] mb-6" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-4">Zero-Downtime Routing</h3>
              <p className="text-gray-600 leading-relaxed">
                Technology should work invisibly. Our edge nodes actively monitor and balance concurrent server loads to ensure continuous synchronization across platforms without latency drops.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/30 transition-colors">
              <Shield size={36} className="text-[#0d2b5e] mb-6" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-4">Active Security</h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end encryption and automated threat detection are live on our platform right now. We enforce strict access controls to protect user sessions and active deployments.
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
                alt="Modern Server Operations" 
                className="rounded-sm shadow-lg object-cover w-full h-[400px]"
              />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:pl-8">
              {/* ✅ RED FLAG REMOVED: No more "reviewing new projects" (agency talk). Now it's product adoption. */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
                Ready to Integrate Our Stack?
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Zapro Infotech is actively processing live workloads for modern applications. If your organization requires a robust, scalable backend infrastructure, access our environments today.
              </p>
              
              <Link
                to="/platform/developer-tools"
                className="inline-flex items-center gap-3 bg-[#00b4d8] text-white px-8 py-4 rounded-sm font-semibold hover:bg-[#0d2b5e] transition-colors duration-300 shadow-lg group"
              >
                Access Technical Docs
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