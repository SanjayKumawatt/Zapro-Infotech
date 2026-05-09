import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Key, Webhook, BookOpen, ArrowRight, CheckCircle2, Braces, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeveloperTools = () => {
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
        {/* Dark Matte Background Image - Code/Terminal */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b5e] via-[#0d2b5e]/90 to-transparent opacity-90" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Terminal size={16} className="text-[#00b4d8]" />
              <span className="text-[#00b4d8] font-bold tracking-widest uppercase text-xs">
                v2.0 API Live in Production
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Developer-First Primitives.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
              Build directly on top of our operational logic. Zapro provides comprehensive REST endpoints, GraphQL schemas, and secure webhooks designed for immediate integration into your application code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#00b4d8] text-white px-8 py-4 rounded-sm font-semibold hover:bg-white hover:text-[#0d2b5e] transition-colors duration-300 flex items-center justify-center gap-2">
                <Key size={18} /> Generate Access Token
              </button>
              <Link to="/reach-us" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2">
                <BookOpen size={18} /> Read Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. API Metrics Banner */}
      <section className="bg-[#eaf6f9] border-y border-[#00b4d8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#0d2b5e]/10">
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">REST</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Primary Protocol</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">GraphQL</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Data Querying</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">OAS 3.0</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Swagger Specs</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">RSA</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Key Encryption</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Code Integration (Node.js/MERN Context) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
                Integrate in Minutes
              </h2>
              <div className="h-1 w-16 bg-[#00b4d8] mb-8"></div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  No complex SDKs required. Our API architecture is designed to be consumed natively by your existing tech stack, whether you are running Node.js, Python, or Go.
                </p>
                <ul className="space-y-4 mt-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Stateless Authentication</strong>
                      Authenticate requests securely using Bearer Tokens. API keys can be scoped to specific endpoints with granular read/write permissions.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Predictable JSON Responses</strong>
                      Error handling is standardized across all routes. You will always receive strongly typed status codes and actionable error messages.
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Dark Code Editor Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-[#061530] rounded-lg shadow-2xl border border-white/10 overflow-hidden"
            >
              <div className="bg-[#0a1f44] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-gray-400">service.js (Node.js)</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto text-gray-300 leading-relaxed">
                <p className="text-gray-500 mb-2">{'// Fetching infrastructure status via Zapro API'}</p>
                <p><span className="text-[#00b4d8]">import</span> {'{'} ZaproClient {'}'} <span className="text-[#00b4d8]">from</span> <span className="text-green-400">'@zapro/node'</span>;</p>
                <br/>
                <p><span className="text-[#00b4d8]">const</span> client = <span className="text-[#00b4d8]">new</span> ZaproClient({'{'}</p>
                <p>&nbsp;&nbsp;apiKey: process.env.<span className="text-white">ZAPRO_SECRET_KEY</span>,</p>
                <p>&nbsp;&nbsp;environment: <span className="text-green-400">'production'</span></p>
                <p>{'});'}</p>
                <br/>
                <p><span className="text-[#00b4d8]">export const</span> <span className="text-yellow-200">syncData</span> = <span className="text-[#00b4d8]">async</span> (payload) ={'>'} {'{'}</p>
                <p>&nbsp;&nbsp;<span className="text-[#00b4d8]">try</span> {'{'}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00b4d8]">const</span> response = <span className="text-[#00b4d8]">await</span> client.core.<span className="text-yellow-200">sync</span>(payload);</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00b4d8]">return</span> response.data;</p>
                <p>&nbsp;&nbsp;{'}'} <span className="text-[#00b4d8]">catch</span> (error) {'{'}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;console.<span className="text-yellow-200">error</span>(<span className="text-green-400">'Zapro API Error:'</span>, error.message);</p>
                <p>&nbsp;&nbsp;{'}'}</p>
                <p>{'};'}</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Event-Driven Architecture (Webhooks) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Architecture Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-[#00b4d8]/20 transform -translate-x-4 translate-y-4 rounded-sm -z-10"></div>
              <img 
                src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Code and API Data" 
                className="rounded-sm shadow-xl object-cover w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Tech Badge */}
              <div className="absolute bottom-6 right-6 bg-[#0a1f44]/90 backdrop-blur-md p-4 rounded-sm shadow-lg border border-white/10 flex items-center gap-4">
                <Webhook className="text-[#00b4d8]" size={32} />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Event Triggered</p>
                  <p className="text-white font-bold">payload.sync.completed</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <Webhook size={40} className="text-[#00b4d8] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Event-Driven Webhooks
              </h2>
              <div className="h-1 w-16 bg-[#00b4d8] mb-8"></div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Stop polling APIs. Zapro pushes real-time updates directly to your servers the millisecond an event occurs in your infrastructure.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Subscribe to lifecycle events like <code className="bg-white/10 px-2 py-1 rounded text-sm text-[#00b4d8]">deployment.success</code>, <code className="bg-white/10 px-2 py-1 rounded text-sm text-[#00b4d8]">node.scaled</code>, or <code className="bg-white/10 px-2 py-1 rounded text-sm text-[#00b4d8]">auth.failed</code>. All webhook payloads are signed with a cryptographic signature so you can verify they originated from Zapro.
              </p>
              <Link to="/reach-us" className="text-[#00b4d8] font-bold flex items-center gap-2 hover:text-white transition-colors">
                Configure Endpoints <ArrowRight size={20} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Tooling Capabilities Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
              Complete Developer Tooling
            </h2>
            <p className="text-gray-600 text-lg">
              Everything your engineering team needs to manage resources, debug requests, and monitor traffic in production.
            </p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Key size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">API Key Management</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Generate, revoke, and rotate API keys instantly. Assign specific IP whitelists and strict rate limits to protect your billing cycles.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Braces size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">OpenAPI Schemas</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Import our live Swagger definitions directly into Postman, Insomnia, or your frontend types. Never guess request body parameters again.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Activity size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Real-time Logs</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                View raw request headers, payloads, and execution times as they happen. Stream logs directly to Datadog or AWS CloudWatch.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default DeveloperTools;