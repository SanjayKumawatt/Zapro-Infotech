import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, ShieldCheck, Zap, Cpu, Cloud, Terminal } from 'lucide-react';
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
      
      {/* SECTION 1: The Core Value (Live Infrastructure) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <div className="h-1 w-16 bg-[#00b4d8] mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] leading-tight mb-6">
                Enterprise-Grade Infrastructure for Modern Workflows
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Scaling a digital product requires reliable backend architecture. Zapro Infotech operates high-performance cloud environments that process, route, and secure your data in real-time.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We manage the complex infrastructure-from active AI data pipelines to distributed cloud deployments-so your engineering teams can focus entirely on shipping core product features without server-side bottlenecks.
              </p>
              <Link
                to="/platform/core"
                className="inline-flex items-center gap-2 text-[#00b4d8] font-semibold hover:text-[#0d2b5e] transition-colors group"
              >
                Review Platform Architecture
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
                src="https://images.pexels.com/photos/4597280/pexels-photo-4597280.jpeg" 
                alt="Cloud Server Infrastructure" 
                className="relative z-10 rounded-sm shadow-xl object-cover w-full h-full aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Core Platform Ecosystem (Product Focus) */}
      <section className="py-24 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
              Active Deployment Ecosystem
            </h2>
            <p className="text-gray-600 text-lg">
              Our infrastructure is currently serving active production environments across three core technical pillars.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Focus 1: Cloud Platform */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#0d2b5e] text-white flex items-center justify-center mb-6 rounded-sm">
                <Cloud size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-4">Core SaaS Platform</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Operating secure, low-latency deployment stacks handling live user authentication, database management, and session handling.
              </p>
              <Link to="/platform/core" className="text-[#00b4d8] font-semibold text-sm hover:underline">View Core Platform →</Link>
            </motion.div>

            {/* Focus 2: AI Infra */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#0d2b5e] text-white flex items-center justify-center mb-6 rounded-sm">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-4">AI Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Active computational pipelines processing large-scale datasets and routing intelligent workloads without API rate-limit drops.
              </p>
              <Link to="/platform/ai-infrastructure" className="text-[#00b4d8] font-semibold text-sm hover:underline">Explore AI Stack →</Link>
            </motion.div>

            {/* Focus 3: Developer Tools */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#0d2b5e] text-white flex items-center justify-center mb-6 rounded-sm">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-4">Developer APIs</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                RESTful and GraphQL endpoints designed for immediate integration. Comprehensive webhooks for syncing system logic.
              </p>
              <Link to="/platform/developer-tools" className="text-[#00b4d8] font-semibold text-sm hover:underline">Read Documentation →</Link>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 border-2 border-[#0d2b5e] text-[#0d2b5e] px-8 py-3 rounded-sm font-semibold hover:bg-[#0d2b5e] hover:text-white transition-all"
            >
              Access Platform Ecosystem
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: Technical Implementation Standards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-8">
                Operational Standards
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Database className="text-[#00b4d8]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0d2b5e] mb-2">Active Data Routing</h4>
                    <p className="text-gray-600 leading-relaxed">Our clusters handle concurrent data streams efficiently. We monitor and balance loads across edge nodes to guarantee zero packet loss during peak usage.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Zap className="text-[#00b4d8]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0d2b5e] mb-2">Zero-Downtime Architecture</h4>
                    <p className="text-gray-600 leading-relaxed">Deployments and scaling events occur seamlessly. The infrastructure operates continuously, serving real user requests without service interruptions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <ShieldCheck className="text-[#00b4d8]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0d2b5e] mb-2">Enterprise-Grade Security</h4>
                    <p className="text-gray-600 leading-relaxed">End-to-end encryption is active by default. We operate strict access controls, automated threat detection, and continuous compliance monitoring protocols.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-[#0d2b5e] p-10 flex flex-col justify-center rounded-sm text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Integrate Our Stack</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Zapro Infotech provides comprehensive technical documentation and sandbox environments. Generate your API keys today to connect your application logic directly to our infrastructure.
              </p>
              {/* Named CTA - Focused on "Start/Action" rather than "Discussion" */}
              <Link
                to="/platform/developer-tools"
                className="bg-[#00b4d8] text-white px-6 py-3 font-semibold hover:bg-white hover:text-[#0d2b5e] transition-colors inline-block text-center rounded-sm w-fit"
              >
                Access Technical Docs
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomeSections;