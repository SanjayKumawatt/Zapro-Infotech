import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, HardDrive, ShieldCheck, 
  Globe, Activity, Cpu, Cloud, 
  Zap, ArrowRight, Lock, DatabaseBackup
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WebHosting = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const sectorChallenges = [
    {
      title: "The Shared Resource Dilemma",
      problem: "Many early-stage companies rely on shared hosting environments where computational resources are divided among thousands of users, leading to unpredictable slow-downs during peak hours.",
      intent: "We are setting up isolated hosting architectures aimed at dedicating specific CPU and RAM limits to your applications, preventing external traffic spikes from affecting your operational stability."
    },
    {
      title: "The Data Vulnerability Risk",
      problem: "Without proper structural backups, a single server failure or data corruption event can erase critical business assets permanently.",
      intent: "Our focus is on configuring redundant data environments. We are planning backup protocols intended to preserve your database integrity across geographically separated nodes."
    },
    {
      title: "The Latency Bottleneck",
      problem: "Serving global or pan-India users from a single geographic server location creates physical distance delays, resulting in high bounce rates.",
      intent: "We are designing deployment strategies that incorporate localized content delivery networks (CDNs), aimed at reducing physical data travel time and rendering pages rapidly."
    }
  ];

  const technicalSpecifications = [
    {
      title: "Domain Management & DNS Routing",
      desc: "Securing the right namespace is the first step of digital deployment. We manage domain acquisitions and are configuring optimized Domain Name System (DNS) routing aimed at translating your URL to IP addresses with minimal latency.",
      icon: Globe
    },
    {
      title: "Isolated Server Environments",
      desc: "Moving away from crowded shared hosting. We are structuring Virtual Private Server (VPS) and dedicated configurations intended to give your digital platforms the exclusive computational power they require to function smoothly.",
      icon: Server
    },
    {
      title: "Storage & Bandwidth Scaling",
      desc: "As your user base grows, so does your data footprint. We are preparing storage architectures and bandwidth allocations designed to scale dynamically, ensuring you do not hit artificial limits during critical growth phases.",
      icon: HardDrive
    },
    {
      title: "Security & Encryption Commitments",
      desc: "While no system is impenetrable, we are committed to applying appropriate, modern security measures-including SSL encryption protocols and firewall configurations-upon the launch of any hosting environment we engineer.",
      icon: Lock
    },
    {
      title: "Server-Side Caching Implementation",
      desc: "Database queries are computationally expensive. We are setting up server-level caching layers (such as Redis or Memcached equivalents) aimed at storing frequently accessed data in RAM for near-instantaneous retrieval.",
      icon: Zap
    },
    {
      title: "Automated Data Redundancy",
      desc: "Hardware failure is an inevitable reality in tech. We are planning automated structural backup routines designed to capture your exact system state at regular intervals, allowing for rapid restoration in worst-case scenarios.",
      icon: DatabaseBackup
    }
  ];

  return (
    <div className="bg-white min-h-screen - pb-0 font-sans">
      
      {/* 1. Deep Infrastructure Hero Section */}
      <section className="relative bg-[#0d2b5e] text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b5e] via-[#0d2b5e]/85 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-[#eaf6f9]/10 border border-[#eaf6f9]/20 rounded-sm backdrop-blur-sm">
              <Cloud className="text-[#00b4d8]" size={16} />
              <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">
                Infrastructure Operations
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
              Establishing Digital <br className="hidden md:block"/>
              <span className="text-[#00b4d8]">Foundations.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-2xl">
              A high-performance application is only as stable as the server it resides on. ZAPRO INFOTECH is setting up robust hosting and domain architectures aimed at delivering consistent uptime and structural security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Gap: Sector Challenge Blocks (New Layout Format) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6 tracking-tight">
              Addressing The Server-Level Gap
            </h2>
            <div className="h-1 w-20 bg-[#00b4d8] mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Many businesses invest heavily in web development, only to deploy their platforms on fragile, shared servers. We are engineering solutions designed to eliminate these common infrastructure bottlenecks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sectorChallenges.map((challenge, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.15 } }
                }}
                className="flex flex-col h-full"
              >
                {/* Visual Header */}
                <div className="h-2 w-full bg-[#0d2b5e] rounded-t-sm"></div>
                <div className="bg-[#eaf6f9] p-8 flex-1 border-x border-b border-gray-100 rounded-b-sm">
                  <h3 className="text-xl font-bold text-[#0d2b5e] mb-6">{challenge.title}</h3>
                  
                  <div className="mb-8">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">The Industry Reality</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{challenge.problem}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-[#00b4d8]/20">
                    <span className="text-xs font-bold text-[#00b4d8] uppercase tracking-widest block mb-2">Our Engineering Intent</span>
                    <p className="text-[#0d2b5e] font-medium text-sm leading-relaxed">{challenge.intent}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep-Dive Capabilities List with Tech Images */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] text-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Sticky Image Context */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Planned Hosting Specifications</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                As an early-stage startup, we are configuring our infrastructure operations around these six core technical tenets to ensure your platforms remain online and highly responsive.
              </p>
              <div className="relative group overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-[#00b4d8] opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000" 
                  alt="Server Infrastructure" 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Scrolling Tech Specs */}
            <div className="lg:col-span-7 space-y-6">
              {technicalSpecifications.map((spec, index) => (
                <motion.div 
                  key={index}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="flex gap-6 items-start">
                    <div className="mt-1 w-12 h-12 bg-[#00b4d8]/20 flex items-center justify-center rounded-sm text-[#00b4d8] flex-shrink-0">
                      <spec.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{spec.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {spec.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. Heavy CTA Block */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100 text-center relative overflow-hidden">
        {/* Abstract graphic */}
        <div className="absolute top-0 right-0 p-8 opacity-5 -translate-y-1/4 translate-x-1/4">
          <Activity size={400} className="text-[#0d2b5e]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-20 h-20 bg-[#eaf6f9] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <ShieldCheck size={36} className="text-[#0d2b5e]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0d2b5e] mb-6 tracking-tight">
              Ready to Secure Your Server Space?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Zapro Infotech is actively engaging with clients to plan and deploy stable domain and hosting environments. Connect with our engineering team to discuss your bandwidth, storage, and security requirements.
            </p>
            
            {/* Named CTA: Strictly Compliant */}
            <Link
              to="/reach-us"
              className="inline-flex items-center gap-3 bg-[#0d2b5e] text-white px-10 py-5 rounded-sm font-bold tracking-wide hover:bg-[#00b4d8] transition-all duration-300 group shadow-lg"
            >
              Configure Hosting Requirements
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default WebHosting;