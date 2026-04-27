import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Tablet, Cpu, Layers, 
  ArrowRight, ShieldCheck, Zap, Code2,
  Signal, Infinity, Share2, AppWindow
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileAppDevelopment = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const appCapabilities = [
    {
      title: "Native iOS & Android Engineering",
      desc: "We are focusing on platform-specific development using Swift and Kotlin. The intent is to leverage the full hardware capability of the device, ensuring the application remains highly responsive and integrated with native OS features.",
      icon: Smartphone
    },
    {
      title: "Cross-Platform Ecosystems",
      desc: "Our team is structuring unified codebases using frameworks like React Native and Flutter. We are building these environments aimed at delivering a consistent structural experience across multiple devices while maintaining a single, clean source of truth.",
      icon: Share2
    },
    {
      title: "Real-Time Data Architecture",
      desc: "For applications requiring instant updates, we are planning WebSocket and serverless integrations. The goal is to develop data flows that remain stable under heavy concurrency, aimed at zero-latency user interactions.",
      icon: Zap
    },
    {
      title: "Offline-First Logic",
      desc: "Connectivity isn't always guaranteed. We are engineering localized data storage and synchronization protocols designed to allow users to interact with the application offline, with seamless background syncing upon reconnection.",
      icon: Signal
    },
    {
      title: "High-Performance Backend APIs",
      desc: "A mobile app is only as fast as its data source. We are building robust RESTful and GraphQL APIs intended to serve mobile clients with minimal payload size, significantly reducing mobile data consumption and battery drain.",
      icon: Cpu
    },
    {
      title: "Structural Security Deployment",
      desc: "We are committed to applying appropriate mobile security measures-including biometric authentication hooks and data encryption at rest-upon the launch of any mobile ecosystem we engineer.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-white min-h-screen - pb-0 font-sans">
      
      {/* 1. High-Impact Hero Section */}
      <section className="relative bg-[#0d2b5e] text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image: Mobile Interface/Code focus */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b5e] via-[#0d2b5e]/90 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#00b4d8] text-[#00b4d8] rounded-sm text-xs font-bold tracking-[0.2em] uppercase bg-[#0d2b5e]/50 backdrop-blur-md">
              <AppWindow size={16} /> Handheld Systems
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Engineering the <br/>Mobile Future.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              ZAPRO INFOTECH is building native and cross-platform mobile environments focused on performance and user retention. We are engineering the handheld foundations for tomorrow's digital-first organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Mobility Challenge (Deep Text Section) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0d2b5e] tracking-tighter">BEYOND THE INTERFACE.</h2>
              <div className="h-1.5 w-24 bg-[#00b4d8]"></div>
              
              <div className="p-8 bg-[#eaf6f9] border-l-8 border-[#0d2b5e] rounded-r-sm">
                <p className="text-[#0d2b5e] text-lg font-medium italic leading-relaxed">
                  "As an early-stage startup, we recognize that mobile apps are often the primary point of contact for users. We are building handheld ecosystems that prioritize structural stability over temporary visual gimmicks."
                </p>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  In the mobile ecosystem, hardware fragmentation and varied connectivity speeds create significant engineering challenges. A mobile application must do more than just look good; it must remain computationally efficient to preserve device resources.
                </p>
                <p>
                  We are developing applications aimed at providing native-like smoothness. By isolating core business logic from the UI layer, we are preparing platforms to scale across multiple OS versions and screen dimensions with absolute structural integrity.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative rounded-sm overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000" 
                alt="Mobile App Development" 
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#0d2b5e]/10 group-hover:bg-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Competencies Grid (6 Detailed Items) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#00b4d8] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Technical Focus
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0d2b5e] mb-6">Our App Architecture</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              We are actively focusing our handheld engineering efforts on these six core structural pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appCapabilities.map((cap, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="bg-white p-10 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#00b4d8]/20 group rounded-sm"
              >
                <div className="w-14 h-14 bg-[#0d2b5e] text-[#00b4d8] flex items-center justify-center rounded-sm mb-8 group-hover:bg-[#00b4d8] group-hover:text-white transition-all duration-300 shadow-lg">
                  <cap.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0d2b5e]">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-loose">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Development Strategy (Planned Flow) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 lg:order-1 relative group overflow-hidden rounded-sm">
               <div className="absolute inset-0 bg-[#0d2b5e] opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1521931961826-fe48677230a5?auto=format&fit=crop&q=80&w=1000" 
                 alt="Handheld Architecture" 
                 className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
               />
            </div>

            <div className="order-1 lg:order-2 space-y-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">Planned Build Lifecycle</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Zapro Infotech is structuring a systematic approach to mobile deployment. Here is how we are executing the handheld journey from concept to store release.
                </p>
              </motion.div>

              <div className="space-y-10">
                {[
                  { step: "01", title: "Structural Logic Mapping", text: "Defining the core app features and offline data requirements. We are building this phase to ensure technical feasibility early on." },
                  { step: "02", title: "API Integration Strategy", text: "Mapping the bridge between handheld and server. We focus on creating secure, lightweight data tunnels for rapid communication." },
                  { step: "03", title: "Continuous Engineering", text: "Writing modular Swift/Kotlin or Cross-platform code. We focus strictly on clean components that remain easy to maintain and scale." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <span className="text-4xl font-black text-[#eaf6f9] group-hover:text-[#00b4d8] transition-colors leading-none">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-[#0d2b5e] mb-2 uppercase tracking-wide">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. High-Contrast Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] relative overflow-hidden text-center">
        <div className="absolute bottom-0 right-0 p-8 opacity-5">
           <Infinity size={400} className="text-white" />
        </div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight uppercase">
            Ready to Build Your <br/>Handheld Ecosystem?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Our team is prepared to analyze your mobile requirements and map out a custom handheld architecture. Connect with us to begin planning your application's structural deployment.
          </p>
          
          <Link
            to="/reach-us"
            className="inline-flex items-center gap-3 bg-[#00b4d8] text-white px-10 py-5 rounded-sm font-bold tracking-wide hover:bg-white hover:text-[#0d2b5e] transition-all duration-300 group shadow-2xl"
          >
            Start Your App Dialogue
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default MobileAppDevelopment;