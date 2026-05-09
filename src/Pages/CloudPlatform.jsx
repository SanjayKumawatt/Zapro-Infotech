import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Globe, Shield, Terminal, ArrowRight, CheckCircle2, Cpu, Zap, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudPlatform = () => {
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
    <div className="bg-white min-h-screen pb-0">
      
      {/* 1. Hero Section */}
      <section className="relative bg-[#0d2b5e] text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Dark Matte Background Image - Server/Fiber Optics */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b5e] via-[#0d2b5e]/90 to-transparent opacity-90" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b4d8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00b4d8]"></span>
              </span>
              <span className="text-[#00b4d8] font-bold tracking-widest uppercase text-xs">
                Global Edge Network Active
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Deploy to the Edge. instantly.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
              Push your code and let Zapro handle the orchestration. We operate a globally distributed container infrastructure that auto-scales your frontend and backend workloads without manual server configuration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/platform/developer-tools" className="bg-[#00b4d8] text-white px-8 py-4 rounded-sm font-semibold hover:bg-white hover:text-[#0d2b5e] transition-colors duration-300 flex items-center justify-center gap-2">
                Install Zapro CLI <ArrowRight size={18} />
              </Link>
              <Link to="/reach-us" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                Contact Cloud Architecture Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. System Metrics Banner */}
      <section className="bg-[#eaf6f9] border-y border-[#00b4d8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#0d2b5e]/10">
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">45+</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Edge Locations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">&lt; 30ms</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Global Latency</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">Docker</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Native Support</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">100<span className="text-xl">Gbps</span></p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Network Capacity</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLI Terminal / Deployment Workflow (Massive Trust Builder) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Terminal size={40} className="text-[#00b4d8] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Terminal to Production
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Forget FTPs and manual cPanel configurations. The Zapro CLI integrates directly with your local environment and CI/CD pipelines. One command packages your MERN stack or containerized app and distributes it globally.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our infrastructure automatically provisions SSL certificates, builds your assets, and invalidates stale caches across all edge nodes simultaneously.
              </p>
              <Link to="/platform/developer-tools" className="text-[#00b4d8] font-bold flex items-center gap-2 hover:text-white transition-colors">
                Read Deployment Docs <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* Terminal Mockup showing a live deployment */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#061530] rounded-lg shadow-2xl border border-white/10 overflow-hidden"
            >
              <div className="bg-[#0a1f44] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-gray-400">zapro-cli (v2.4.1)</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto text-gray-300 leading-relaxed">
                <p><span className="text-[#00b4d8] font-bold">~</span>/projects/api-service $ zapro deploy --prod</p>
                <p className="text-gray-500 mt-2">► Authenticating session...</p>
                <p className="text-green-400">✔ Authenticated as Sanjay Kumawat (usr_sk_9921)</p>
                <p className="text-gray-500 mt-2">► Inspecting project...</p>
                <p className="text-blue-300">ℹ Detected Dockerfile. Building container image.</p>
                <p className="text-gray-500 mt-2">► Pushing image to Zapro Container Registry...</p>
                <p className="text-gray-500">► Propagating to Edge Nodes: [BOM, FRA, IAD, SIN]</p>
                <p className="text-green-400 mt-2">✔ Deployment Successful! (12.4s)</p>
                <br/>
                <p><span className="text-yellow-300">Production URL:</span> https://api-service.zapro.app</p>
                <p><span className="text-yellow-300">Environment:</span>&nbsp;&nbsp;&nbsp;Production</p>
                <p><span className="text-[#00b4d8] font-bold">~</span>/projects/api-service $ _</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Detailed Architecture Block */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Architecture Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#0d2b5e] transform -translate-x-4 translate-y-4 rounded-sm -z-10"></div>
              <img 
                src="https://images.pexels.com/photos/1181311/pexels-photo-1181311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cloud Infrastructure Operations" 
                className="rounded-sm shadow-xl object-cover w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Tech Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-sm shadow-lg flex items-center gap-4">
                <Globe className="text-[#0d2b5e]" size={32} />
                <div>
                  <p className="text-xs font-bold text-[#00b4d8] uppercase">CDN Routing</p>
                  <p className="text-[#0d2b5e] font-bold">Anycast Network Active</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
                Elastic Computing Power
              </h2>
              <div className="h-1 w-16 bg-[#00b4d8] mb-8"></div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Traffic is unpredictable, but your infrastructure shouldn't be. Our cloud environment is built on elastic orchestration, meaning it physically scales your resources up or down based on real-time HTTP requests.
                </p>
                <ul className="space-y-4 mt-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Serverless Execution</strong>
                      Run your backend functions in isolated environments. You only consume compute resources when a function is actively executing.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">DDoS Mitigation</strong>
                      Enterprise-grade traffic filtering runs at the edge. Malicious spikes and Layer 7 attacks are dropped before they ever reach your core application.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Continuous Integration</strong>
                      Connect your GitHub repositories. Every push to your main branch automatically triggers an isolated build and a zero-downtime deployment.
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Core Platform Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
              Cloud Capabilities
            </h2>
            <p className="text-gray-600 text-lg">
              Our deployment infrastructure is equipped with the necessary primitives to host, scale, and secure modern web applications.
            </p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Cloud size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Global CDN</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Static assets and compiled frontends are cached globally across our edge nodes, ensuring sub-second load times for users anywhere in the world.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Cpu size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Container Hosting</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Bring your own Dockerfile. We support custom environments, background workers, and long-running processes for complex backend logic.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Shield size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Automated SSL</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Every custom domain attached to your project is automatically secured with an auto-renewing SSL certificate. No manual configuration needed.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CloudPlatform;