import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileKey, Eye, ShieldAlert, Fingerprint, Server, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecurityPlatform = () => {
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
        {/* Dark Matte Background Image - Security/Cyber */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000)' }}
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
                Active Threat Mitigation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Zero-Trust Infrastructure.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
              Security is not an add-on; it is the foundation. Zapro operates a hardened cloud environment with default end-to-end encryption, real-time WAF filtering, and strict isolation for all enterprise workloads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/platform/developer-tools" className="bg-[#00b4d8] text-white px-8 py-4 rounded-sm font-semibold hover:bg-white hover:text-[#0d2b5e] transition-colors duration-300 flex items-center justify-center gap-2">
                <Shield size={18} /> View Security Docs
              </Link>
              <Link to="/reach-us" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                Request Compliance Report
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
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">AES-256</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Data At Rest</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">TLS 1.3</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Data In Transit</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">SOC 2</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Architecture Ready</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">DDoS</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">L3/L4/L7 Mitigation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Architecture Block */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
                Isolated Compute Environments
              </h2>
              <div className="h-1 w-16 bg-[#00b4d8] mb-8"></div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  We operate on the principle of least privilege. Your application logic and data stores are physically and logically isolated from other tenants in the Zapro ecosystem.
                </p>
                <ul className="space-y-4 mt-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">VPC Peering Available</strong>
                      For enterprise deployments, we establish secure, private network connections directly to your internal AWS, GCP, or Azure environments, bypassing the public internet.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Automated Key Rotation</strong>
                      Cryptographic keys securing your environment are automatically rotated every 30 days. Our KMS infrastructure ensures keys are never exposed in plaintext logs.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Strict IAM Enforcement</strong>
                      Control exactly who and what can access your resources. Define granular Role-Based Access Control (RBAC) policies down to the specific API endpoint.
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
                src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Secure Server Racks" 
                className="rounded-sm shadow-xl object-cover w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Tech Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-sm shadow-lg flex items-center gap-4">
                <Lock className="text-[#0d2b5e]" size={32} />
                <div>
                  <p className="text-xs font-bold text-[#00b4d8] uppercase">Instance Isolation</p>
                  <p className="text-[#0d2b5e] font-bold">Secure Enclave Active</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Terminal Preview - Threat Detection Log (Trust Builder) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Dark Code Editor / Audit Log Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-[#061530] rounded-lg shadow-2xl border border-white/10 overflow-hidden order-2 lg:order-1"
            >
              <div className="bg-[#0a1f44] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-gray-400">zapro-sec-audit.log</span>
              </div>
              <div className="p-6 font-mono text-xs sm:text-sm overflow-x-auto text-gray-300 leading-relaxed">
                <p className="text-gray-500">[{new Date().toISOString()}] [INFO] WAF Node Edge-FRA initiated.</p>
                <p className="text-gray-500">[{new Date().toISOString()}] [WARN] Anomalous traffic spike detected on port 443.</p>
                <br/>
                <p><span className="text-red-400 font-bold">[ALERT]</span> Layer 7 HTTP Flood Signature matched.</p>
                <p><span className="text-[#00b4d8]">Target Host:</span> api.zapropvtltd.in/v1/auth</p>
                <p><span className="text-[#00b4d8]">Source IPs:</span> 192.168.45.x (Botnet Subnet)</p>
                <br/>
                <p className="text-green-400">► Executing Mitigation Rule: req_rate_limit_exceeded</p>
                <p className="text-green-400">► Action: IP_BLOCK (Duration: 3600s)</p>
                <p className="text-gray-500">► Dropping 45,000 requests/sec...</p>
                <br/>
                <p><span className="text-yellow-300">Status:</span> Mitigation Successful. Origin servers unaffected.</p>
                <p><span className="text-yellow-300">Latency Impact:</span> 0ms added to legitimate traffic.</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <ShieldAlert size={40} className="text-[#00b4d8] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Active Web Application Firewall
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our infrastructure acts as an intelligent shield in front of your core logic. The Zapro Edge Network actively analyzes millions of requests per second, blocking SQL injections, Cross-Site Scripting (XSS), and malicious botnets automatically.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                You receive full transparency. Every blocked request, authentication attempt, and system change is immutably logged and accessible via your developer dashboard for complete compliance auditing.
              </p>
              <Link to="/platform/developer-tools" className="text-[#00b4d8] font-bold flex items-center gap-2 hover:text-white transition-colors">
                Configure Security Rules <ArrowRight size={20} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Security Capabilities Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
              Platform Security Primitives
            </h2>
            <p className="text-gray-600 text-lg">
              Out-of-the-box security features that ensure your user data remains protected, compliant, and strictly audited.
            </p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Fingerprint size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Identity Protection</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Native support for Multi-Factor Authentication (MFA), passwordless logins, and automatic brute-force attack prevention on all authentication endpoints.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <FileKey size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Secrets Management</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Store your API keys, database URLs, and third-party tokens in our encrypted vault. Environment variables are injected into your runtime securely.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Eye size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Compliance Auditing</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Immutable audit trails for every API write operation. Export your logs seamlessly to S3 or integrate with SIEM tools to maintain strict data compliance.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default SecurityPlatform;