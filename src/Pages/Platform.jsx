import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout, Cpu, Cloud, Layers, Terminal, Shield, ArrowRight, Network, Code2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlatformHub = () => {
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
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Data array for the 6 core modules
  const platformModules = [
    {
      id: 'core',
      title: 'Core SaaS Platform',
      description: 'High-performance backend infrastructure handling persistent state, user authentication, and relational data logic.',
      icon: Layout,
      link: '/platform/core',
      color: 'text-blue-500'
    },
    {
      id: 'ai',
      title: 'AI Infrastructure',
      description: 'Active computational pipelines processing unstructured inputs into strict, schema-validated JSON outputs.',
      icon: Cpu,
      link: '/platform/ai-infrastructure',
      color: 'text-purple-500'
    },
    {
      id: 'cloud',
      title: 'Cloud Deployments',
      description: 'Global edge network supporting Docker containers, serverless functions, and automated CI/CD rollouts.',
      icon: Cloud,
      link: '/platform/cloud',
      color: 'text-[#00b4d8]'
    },
    {
      id: 'workflows',
      title: 'Operational Workflows',
      description: 'Stateful orchestration engine for background jobs, microservices, and distributed cron executions.',
      icon: Layers,
      link: '/platform/workflows',
      color: 'text-orange-500'
    },
    {
      id: 'dev-tools',
      title: 'Developer APIs',
      description: 'Comprehensive REST endpoints, GraphQL schemas, and secure webhooks designed for immediate codebase integration.',
      icon: Terminal,
      link: '/platform/developer-tools',
      color: 'text-green-500'
    },
    {
      id: 'security',
      title: 'Security & Auth',
      description: 'Zero-trust architecture featuring AES-256 encryption, active Layer 7 WAF, and isolated VPC peering.',
      icon: Shield,
      link: '/platform/security',
      color: 'text-red-500'
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-0">
      
      {/* 1. Hero Section */}
      <section className="relative bg-[#0d2b5e] text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Dark Matte Background Image - Abstract tech grid */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2b5e] via-[#0d2b5e]/95 to-[#0d2b5e] opacity-100" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b4d8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00b4d8]"></span>
              </span>
              <span className="text-[#00b4d8] font-bold tracking-widest uppercase text-xs">
                Unified Ecosystem
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              The Zapro Platform.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              One cohesive infrastructure stack. We operate the backend databases, edge networks, AI nodes, and security layers so your engineering team can focus entirely on building your core product.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Ecosystem Grid (Bento Box Layout) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9] relative -mt-10 rounded-t-[3rem] z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
              Explore The Modules
            </h2>
            <p className="text-gray-600 text-lg">
              Every system is decoupled but natively integrated. Use our entire stack or incrementally adopt specific primitives into your existing architecture.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {platformModules.map((module) => (
              <motion.div 
                key={module.id} 
                variants={fadeUp} 
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#00b4d8]/40 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle background glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#eaf6f9] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-10 -mt-10"></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-[#0d2b5e]/5 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon size={24} className={module.color} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0d2b5e] mb-3 group-hover:text-[#00b4d8] transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-8">
                    {module.description}
                  </p>
                  <Link 
                    to={module.link} 
                    className="inline-flex items-center gap-2 text-[#0d2b5e] font-semibold text-sm group-hover:text-[#00b4d8] transition-colors mt-auto"
                  >
                    Explore Module <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Architectural Flow Block */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
                Connected by Default
              </h2>
              <div className="h-1 w-16 bg-[#00b4d8] mb-8"></div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Siloed infrastructure slows down shipping velocities. Zapro is architected to eliminate internal friction. When you deploy a cloud function, it automatically inherits your core database schemas and security policies.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-4 bg-[#eaf6f9] p-4 rounded-sm border border-[#00b4d8]/20">
                    <Code2 className="text-[#0d2b5e]" size={24} />
                    <span className="font-semibold text-[#0d2b5e]">1. Write Application Logic</span>
                  </div>
                  <div className="flex justify-center -my-4">
                    <div className="w-[2px] h-6 bg-[#00b4d8]/30"></div>
                  </div>
                  <div className="flex items-center gap-4 bg-[#eaf6f9] p-4 rounded-sm border border-[#00b4d8]/20">
                    <Network className="text-[#0d2b5e]" size={24} />
                    <span className="font-semibold text-[#0d2b5e]">2. Push to Zapro Network</span>
                  </div>
                  <div className="flex justify-center -my-4">
                    <div className="w-[2px] h-6 bg-[#00b4d8]/30"></div>
                  </div>
                  <div className="flex items-center gap-4 bg-[#eaf6f9] p-4 rounded-sm border border-[#00b4d8]/20">
                    <Database className="text-[#0d2b5e]" size={24} />
                    <span className="font-semibold text-[#0d2b5e]">3. Active & Scalable Globally</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Architecture Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#0d2b5e] transform translate-x-4 translate-y-4 rounded-sm -z-10"></div>
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="System Integration" 
                className="rounded-sm shadow-xl object-cover w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Ecosystem CLI Status (Trust Builder) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Terminal size={40} className="text-[#00b4d8] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Control Everything via CLI
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Your entire Zapro ecosystem can be managed directly from your terminal. Initialize projects, view active logs, or rollback deployments instantly.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-[#061530] rounded-lg shadow-2xl border border-white/10 overflow-hidden text-left max-w-2xl mx-auto"
          >
            <div className="bg-[#0a1f44] px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto text-gray-300">
              <p><span className="text-[#00b4d8] font-bold">~</span>/projects $ zapro status</p>
              <p className="text-gray-500 mt-2">► Fetching ecosystem state...</p>
              <br/>
              <p className="text-green-400">✔ Core Platform:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Operational (v2.1.0)</p>
              <p className="text-green-400">✔ Edge Network:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Routing 42 Nodes</p>
              <p className="text-green-400">✔ AI Pipelines:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Idle / Ready</p>
              <p className="text-green-400">✔ Sec-WAF:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Active (Ruleset: Strict)</p>
              <br/>
              <p className="text-yellow-300">System health is optimal. No active incidents.</p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default PlatformHub;