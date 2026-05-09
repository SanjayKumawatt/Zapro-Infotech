import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Zap, Database, Activity, Code, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const CorePlatform = () => {
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
        {/* Dark Matte Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b5e] to-transparent opacity-80" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b4d8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00b4d8]"></span>
              </span>
              <span className="text-[#00b4d8] font-bold tracking-widest uppercase text-xs">
                System Status: 100% Operational
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Production-Ready Core Architecture.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
              Stop maintaining servers. Zapro Infotech operates a high-performance, edge-routed cloud platform designed to handle active user authentication, database management, and session handling at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/platform/developer-tools" className="bg-[#00b4d8] text-white px-8 py-4 rounded-sm font-semibold hover:bg-white hover:text-[#0d2b5e] transition-colors duration-300 flex items-center justify-center gap-2">
                Generate API Keys <ArrowRight size={18} />
              </Link>
              <Link to="/reach-us" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                View Enterprise SLAs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. System Metrics Banner (Proof of Operation) */}
      <section className="bg-[#eaf6f9] border-y border-[#00b4d8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#0d2b5e]/10">
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">99.99%</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Uptime SLA</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">&lt; 50ms</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Edge Latency</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">0</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Packet Loss</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">24/7</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Node Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Architecture / "Full" Content Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
                Engineered for High-Volume Workloads
              </h2>
              <div className="h-1 w-16 bg-[#00b4d8] mb-8"></div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Our Core Platform is actively processing gigabytes of data across distributed edge nodes. We eliminate the need for your engineering team to configure Linux servers, manage Kubernetes clusters, or write boilerplate backend code.
                </p>
                <ul className="space-y-4 mt-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Persistent State Management</strong>
                      Distributed databases sync in real-time, ensuring that a state change in one geographic region propagates globally within milliseconds.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Automated Load Balancing</strong>
                      Traffic spikes are handled natively. Our routing algorithms dynamically assign active connections to the least congested nodes.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Secure Protocol Enforcement</strong>
                      All data in transit is forced through TLS 1.3. We handle the certificate generation and renewal invisibly in the background.
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Architecture Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#0d2b5e] transform translate-x-4 translate-y-4 rounded-sm -z-10"></div>
              <img 
                src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Server Infrastructure" 
                className="rounded-sm shadow-xl object-cover w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Tech Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-sm shadow-lg flex items-center gap-4">
                <Database className="text-[#0d2b5e]" size={32} />
                <div>
                  <p className="text-xs font-bold text-[#00b4d8] uppercase">Active Cluster</p>
                  <p className="text-[#0d2b5e] font-bold">Node-A7 (Mumbai Region)</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. API Preview / Code Snippet (Builds Massive Trust) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Terminal Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#061530] rounded-lg shadow-2xl border border-white/10 overflow-hidden"
            >
              <div className="bg-[#0a1f44] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs font-mono text-gray-400">POST /api/v1/core/auth</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto text-gray-300">
                <p className="text-[#00b4d8]">const</p> response = <p className="text-[#00b4d8] inline">await</p> fetch(<span className="text-green-400">'https://api.zapropvtltd.in/v1/auth'</span>, {'{'}
                <br />&nbsp;&nbsp;method: <span className="text-green-400">'POST'</span>,
                <br />&nbsp;&nbsp;headers: {'{'} <span className="text-green-400">'Authorization'</span>: <span className="text-green-400">'Bearer zpro_prod_89x2...'</span> {'}'},
                <br />&nbsp;&nbsp;body: JSON.stringify({'{'} userId: <span className="text-green-400">'usr_12948'</span> {'}'})
                <br />{'});'}
                <br /><br />
                <span className="text-gray-500">// Response: 200 OK</span><br />
                {'{'}<br />
                &nbsp;&nbsp;<span className="text-yellow-300">"status"</span>: <span className="text-green-400">"success"</span>,<br />
                &nbsp;&nbsp;<span className="text-yellow-300">"session_token"</span>: <span className="text-green-400">"ey..."</span>,<br />
                &nbsp;&nbsp;<span className="text-yellow-300">"node_routed"</span>: <span className="text-green-400">"ap-south-1"</span><br />
                {'}'}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Terminal size={40} className="text-[#00b4d8] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Developer-First Access
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The core platform is completely headless. We provide comprehensive REST and GraphQL APIs that allow your frontend developers to securely read and write data directly to our infrastructure.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Authentication is handled via industry-standard JWTs, and every API endpoint is actively monitored for rate limits to prevent abuse while ensuring your application never drops a legitimate request.
              </p>
              <Link to="/platform/developer-tools" className="text-[#00b4d8] font-bold flex items-center gap-2 hover:text-white transition-colors">
                Read API Documentation <ArrowRight size={20} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Core Platform Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
              Active Platform Capabilities
            </h2>
            <p className="text-gray-600 text-lg">
              Our core infrastructure provides the following foundational services out of the box, actively maintained by our engineering team.
            </p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Shield size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Identity & Auth</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Secure user registration, password hashing, OAuth 2.0 integration, and session management are handled natively.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Database size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Relational Logic</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                PostgreSQL-backed data storage with automated backups, point-in-time recovery, and optimized indexing for fast queries.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Activity size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Webhook Sync</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Trigger external systems instantly. Our core platform fires secure webhooks on specific database events to keep external tools synchronized.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CorePlatform;