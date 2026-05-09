import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, Zap, Lock, Terminal, ArrowRight, CheckCircle2, Workflow, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIInfrastructure = () => {
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
        {/* Abstract AI/Data Nodes Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b5e] via-[#0d2b5e]/90 to-[#0d2b5e]/50 opacity-90" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b4d8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00b4d8]"></span>
              </span>
              <span className="text-[#00b4d8] font-bold tracking-widest uppercase text-xs">
                Pipelines Active & Routing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              High-Throughput AI Pipelines.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
              Bypass rate limits and prototype bottlenecks. Zapro operates scalable machine learning infrastructure designed to ingest unstructured data and return structured intelligence in milliseconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/platform/developer-tools" className="bg-[#00b4d8] text-white px-8 py-4 rounded-sm font-semibold hover:bg-white hover:text-[#0d2b5e] transition-colors duration-300 flex items-center justify-center gap-2">
                Access AI Endpoints <ArrowRight size={18} />
              </Link>
              <Link to="/reach-us" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                Discuss Custom Workloads
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
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">120ms</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Avg Inference Time</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">JSON</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Structured Output</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">Auto</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Load Balancing</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">256-bit</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Payload Encryption</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Architecture Block */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Architecture Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-[#0d2b5e] transform -translate-x-4 translate-y-4 rounded-sm -z-10"></div>
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI Data Processing" 
                className="rounded-sm shadow-xl object-cover w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Tech Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-sm shadow-lg flex items-center gap-4">
                <Workflow className="text-[#0d2b5e]" size={32} />
                <div>
                  <p className="text-xs font-bold text-[#00b4d8] uppercase">Routing Node</p>
                  <p className="text-[#0d2b5e] font-bold">Inference Cluster A-2</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
                Operational Intelligence
              </h2>
              <div className="h-1 w-16 bg-[#00b4d8] mb-8"></div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Running AI models in production requires massive compute orchestration. Zapro’s AI infrastructure abstracts this complexity. You send the raw input; we handle the parallel processing, token management, and node routing.
                </p>
                <ul className="space-y-4 mt-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Dynamic Model Routing</strong>
                      Our API automatically routes your payload to the most efficient computational node available, ensuring latency remains flat even during peak loads.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Unstructured to Structured</strong>
                      Raw text, logs, or system data are actively ingested and processed into strict, schema-validated JSON outputs ready for immediate database insertion.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Zero Data Retention Policy</strong>
                      Enterprise payloads are processed in isolated memory environments and purged immediately after the response is sent. We do not train on your operational data.
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. API Preview / Code Snippet */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Terminal size={40} className="text-[#00b4d8] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Single Endpoint Integration
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our AI extraction API is designed for immediate developer adoption. Connect your application logic via a single REST endpoint and let our infrastructure handle the computational heavy lifting.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Responses are consistently typed, ensuring your frontend or backend architectures never crash due to unpredictable AI hallucinations or formatting errors.
              </p>
              <Link to="/platform/developer-tools" className="text-[#00b4d8] font-bold flex items-center gap-2 hover:text-white transition-colors">
                View Swagger Docs <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* Terminal Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#061530] rounded-lg shadow-2xl border border-white/10 overflow-hidden"
            >
              <div className="bg-[#0a1f44] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs font-mono text-gray-400">POST /api/v1/ai/extract</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto text-gray-300">
                <span className="text-gray-500">// Request Payload</span><br />
                <p className="text-[#00b4d8]">const</p> payload = {'{'}
                <br />&nbsp;&nbsp;task: <span className="text-green-400">'document_analysis'</span>,
                <br />&nbsp;&nbsp;schema: <span className="text-green-400">'strict_json'</span>,
                <br />&nbsp;&nbsp;content: <span className="text-green-400">'...'</span>
                <br />{'};'}
                <br /><br />
                <span className="text-gray-500">// Response: 200 OK (114ms)</span><br />
                {'{'}<br />
                &nbsp;&nbsp;<span className="text-yellow-300">"status"</span>: <span className="text-green-400">"processed"</span>,<br />
                &nbsp;&nbsp;<span className="text-yellow-300">"throughput_ms"</span>: <span className="text-orange-400">114</span>,<br />
                &nbsp;&nbsp;<span className="text-yellow-300">"data"</span>: {'{'}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"entities"</span>: [<span className="text-green-400">"Zapro"</span>, <span className="text-green-400">"Infrastructure"</span>],<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"confidence_score"</span>: <span className="text-orange-400">0.98</span><br />
                &nbsp;&nbsp;{'}'}<br />
                {'}'}
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
              Infrastructure Capabilities
            </h2>
            <p className="text-gray-600 text-lg">
              Our active AI ecosystem provides engineering teams with the operational stability required for production deployments.
            </p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Network size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Parallel Processing</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Submit thousands of concurrent API requests. Our load balancers distribute tasks across multiple active nodes instantly.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Cpu size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Schema Enforcement</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Never deal with broken JSON again. Our middleware strictly validates all AI outputs against your provided schema before returning the response.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Lock size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Enterprise Isolation</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Dedicated infrastructure options are available for clients requiring isolated computational environments and VPC peering.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AIInfrastructure;