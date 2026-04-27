import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, ShieldCheck, Zap, Code, Smartphone, LayoutTemplate } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeSections = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-white">
      
      {/* SECTION 1: The Gap Observation (Intro/Value Prop) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <div className="h-1 w-16 bg-[#00b4d8] mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] leading-tight mb-6">
                Bridging the Gap Between Design Intent and Structural Reality
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Many modern digital solutions prioritize surface-level aesthetics over underlying architecture. ZAPRO INFOTECH is being built to challenge this standard. 
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We are developing technology frameworks aimed at long-term scalability. Whether it is a web interface or a complex mobile ecosystem, our focus remains strictly on writing clean code and establishing secure environments that prepare your business for future digital demands.
              </p>
              <Link
                to="/company"
                className="inline-flex items-center gap-2 text-[#00b4d8] font-semibold hover:text-[#0d2b5e] transition-colors group"
              >
                Understand Our Architecture
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Visual Contrast Element */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-[#eaf6f9] rounded-sm absolute -inset-4 transform rotate-3 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000" 
                alt="Development Architecture" 
                className="relative z-10 rounded-sm shadow-xl object-cover w-full h-full aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Core Development Focus (Services Preview) */}
      <section className="py-24 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
              What We Are Engineering
            </h2>
            <p className="text-gray-600 text-lg">
              Our current focus is directed toward three core pillars of digital infrastructure, designed to provide businesses with a stable foundation for online operations.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Focus 1 */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#0d2b5e] text-white flex items-center justify-center mb-6 rounded-sm">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-4">Web Architectures</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Developing custom web platforms built to handle modern data requirements. The focus is on fast load times and clean backend integrations.
              </p>
              <Link to="/solutions/web-development" className="text-[#00b4d8] font-semibold text-sm hover:underline">Explore Web Dev →</Link>
            </motion.div>

            {/* Focus 2 */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#0d2b5e] text-white flex items-center justify-center mb-6 rounded-sm">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-4">Mobile Ecosystems</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Engineering applications designed to connect directly with your audience. We are planning interfaces that prioritize user retention.
              </p>
              <Link to="/solutions/mobile-app-development" className="text-[#00b4d8] font-semibold text-sm hover:underline">Explore App Dev →</Link>
            </motion.div>

            {/* Focus 3 */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#0d2b5e] text-white flex items-center justify-center mb-6 rounded-sm">
                <LayoutTemplate size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-4">Content Management</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Setting up WordPress and Open Source environments aimed at giving you complete control over your content without technical bottlenecks.
              </p>
              <Link to="/solutions/wordpress-development" className="text-[#00b4d8] font-semibold text-sm hover:underline">Explore CMS →</Link>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 border-2 border-[#0d2b5e] text-[#0d2b5e] px-8 py-3 rounded-sm font-semibold hover:bg-[#0d2b5e] hover:text-white transition-all"
            >
              View All Planned Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Engineering Philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-8">
                Our Development Philosophy
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Layers className="text-[#00b4d8]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0d2b5e] mb-2">Structural Planning First</h4>
                    <p className="text-gray-600 leading-relaxed">We believe architecture must precede aesthetics. Before a single component is built, the data flow and system requirements are completely mapped out.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Zap className="text-[#00b4d8]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0d2b5e] mb-2">Scalable By Design</h4>
                    <p className="text-gray-600 leading-relaxed">A platform should not break when traffic increases. We are implementing coding standards designed to handle growth smoothly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <ShieldCheck className="text-[#00b4d8]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0d2b5e] mb-2">Security Commitment</h4>
                    <p className="text-gray-600 leading-relaxed">While no system is impenetrable, we are committed to applying appropriate, modern security measures upon launch for every project we undertake.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-[#0d2b5e] p-10 flex flex-col justify-center rounded-sm text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Start Building With Us</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Zapro Infotech is actively opening channels for new development projects. If you are looking to build a digital platform from scratch or upgrade an existing system, we are ready to discuss your requirements.
              </p>
              {/* Named CTA */}
              <Link
                to="/reach-us"
                className="bg-[#00b4d8] text-white px-6 py-3 font-semibold hover:bg-white hover:text-[#0d2b5e] transition-colors inline-block text-center rounded-sm w-fit"
              >
                Initiate Project Discussion
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomeSections;