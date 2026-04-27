import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, CreditCard, Box, Users, 
  ArrowRight, ShieldCheck, Zap, BarChart4,
  Smartphone, Database, Package, Truck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ECommerce = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const commerceCapabilities = [
    {
      title: "Transactional Gateway Engineering",
      desc: "Security is the foundation of digital trade. We are engineering payment integrations aimed at high success rates and absolute data integrity. Our planned infrastructure focuses on creating secure, encrypted tunnels between your storefront and global payment processors.",
      icon: CreditCard
    },
    {
      title: "Elastic Inventory Architectures",
      desc: "Stock levels must be accurate across all touchpoints. We are structuring database schemas designed for real-time inventory synchronization, intended to prevent overselling and manage complex SKU variations across multiple product categories.",
      icon: Box
    },
    {
      title: "Frictionless Checkout Journeys",
      desc: "Cart abandonment is a structural problem. We are developing single-page checkout flows aimed at reducing user friction. By eliminating unnecessary steps, we are preparing interfaces designed to maximize conversion rates from day one.",
      icon: Zap
    },
    {
      title: "Mobile-First Commerce Ecosystems",
      desc: "The handheld shopper is the priority. Our team is building responsive retail environments aimed at native-like performance on mobile browsers, focusing on touch-optimized navigation and rapid image rendering for handheld catalogs.",
      icon: Smartphone
    },
    {
      title: "Logistic & Supply Chain Logic",
      desc: "We are planning integrations with automated logistics providers. The intent is to create a seamless bridge between order placement and shipping manifests, allowing your business to manage fulfillment without manual technical bottlenecks.",
      icon: Truck
    },
    {
      title: "Consumer Behavioral Analytics",
      desc: "Data is the roadmap for growth. We are committed to applying advanced tracking layers upon launch-designed to monitor user drop-off points and high-interest product sectors to inform your future retail strategy.",
      icon: BarChart4
    }
  ];

  const buildPhases = [
    {
      phase: "Phase 01",
      title: "Market Logic Mapping",
      text: "Every retail sector has unique constraints. We are establishing this phase to define your tax rules, shipping zones, and currency logic before the first line of code is written."
    },
    {
      phase: "Phase 02",
      title: "Product Taxonomy Design",
      text: "Setting up a scalable data structure. We are planning how categories, attributes, and tags interact to ensure searchability remains rapid as your inventory expands to thousands of items."
    },
    {
      phase: "Phase 03",
      title: "Infrastructure Deployment",
      text: "Building the core engine. We focus strictly on clean, server-side logic and secure backend environments designed to handle high-frequency transaction spikes during peak retail periods."
    },
    {
      phase: "Phase 04",
      title: "UAT & Security Hardening",
      text: "Rigorous testing of the transactional flow. We are committed to applying appropriate structural security measures and load testing before your digital storefront enters the live market."
    }
  ];

  return (
    <div className="bg-white min-h-screen - pb-0 font-sans">
      
      {/* 1. High-Detail Hero Section */}
      <section className="relative bg-[#0d2b5e] text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image: Retail Tech focus */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b5e] via-[#0d2b5e]/95 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#00b4d8] text-[#00b4d8] rounded-sm text-xs font-bold tracking-[0.2em] uppercase bg-[#0d2b5e]/50 backdrop-blur-sm">
              <ShoppingCart size={16} /> Retail Infrastructure
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Engineering High-Frequency <br/><span className="text-[#00b4d8]">Retail Systems.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              ZAPRO INFOTECH is building custom e-commerce environments focused on transactional stability and conversion logic. We are engineering the digital storefronts of tomorrow for early-stage organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Deep Philosophy Section (Heavy Content) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sticky top-32">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0d2b5e] mb-6 tracking-tighter uppercase leading-tight">
                Digital Commerce <br/>is Infrastructure.
              </h2>
              <div className="h-2 w-20 bg-[#00b4d8] mb-10"></div>
              
              <div className="p-8 bg-[#eaf6f9] border-l-8 border-[#0d2b5e] rounded-r-sm shadow-sm">
                <p className="text-[#0d2b5e] text-lg font-medium italic leading-relaxed">
                  "As an early-stage startup, we reject the use of bloated, unstable templates. Our engineering energy is directed toward building custom, high-speed retail environments designed to handle growth."
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <p>
                Modern retail demand requires more than just a list of products. In a market where a single second of latency can result in lost revenue, the underlying architecture of your storefront is your most critical asset. We do not just build websites; we engineer transactional systems.
              </p>
              <p>
                Most commercial e-commerce platforms suffer from excessive technical debt-redundant plugins and unoptimized scripts that compromise page speed. ZAPRO INFOTECH is developing lean codebases aimed at achieving rapid rendering and high structural reliability across all device types.
              </p>
              <img 
                src="https://images.pexels.com/photos/7948055/pexels-photo-7948055.jpeg" 
                alt="E-commerce Analytics" 
                className="rounded-sm shadow-xl w-full h-[350px] object-cover mb-8"
              />
              <p>
                Our intent is to separate the commerce engine from the presentation layer (Headless Commerce). This prepares your business to distribute products across web, mobile, and IoT devices from a single, high-integrity data source. We are building the future of retail infrastructure, one clean block of code at a time.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Detailed Architecture Grid (6 Detailed Items) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#00b4d8] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Technical Specifications
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0d2b5e] mb-6">Retail Core Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              We are actively focusing our development operations on these six core e-commerce pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commerceCapabilities.map((cap, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="bg-white p-10 hover:shadow-2xl transition-all duration-300 group rounded-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#0d2b5e] text-[#00b4d8] flex items-center justify-center rounded-sm mb-8 group-hover:bg-[#00b4d8] group-hover:text-white transition-all duration-300 shadow-lg">
                  <cap.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0d2b5e] leading-tight">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-loose">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Build Journey (Process Flow) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-12 order-2 lg:order-1">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">Planned Lifecycle</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Zapro Infotech is structuring a systematic approach to retail deployment. Here is how we are executing the e-commerce journey from logic to launch.
                </p>
              </motion.div>

              <div className="space-y-10">
                {buildPhases.map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <span className="text-4xl font-black text-[#eaf6f9] group-hover:text-[#00b4d8] transition-colors leading-none">
                      {item.phase}
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-[#0d2b5e] mb-2 uppercase tracking-wide font-black">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2 group overflow-hidden rounded-sm"
            >
               <div className="absolute inset-0 bg-[#0d2b5e] opacity-30 group-hover:opacity-10 transition-opacity duration-500 z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" 
                 alt="Digital Storefront Development" 
                 className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute top-6 left-6 bg-[#00b4d8] p-4 text-white z-20">
                  <Package size={32} />
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Final Action CTA */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] relative overflow-hidden text-center">
        <div className="absolute bottom-0 right-0 p-8 opacity-5">
           <Database size={400} className="text-white" />
        </div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight uppercase">
            Ready to Build Your <br/>Retail Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Our team is prepared to analyze your commerce requirements and map out a custom digital storefront architecture. Connect with us to begin planning your structural retail deployment.
          </p>
          
          <Link
            to="/reach-us"
            className="inline-flex items-center gap-3 bg-[#00b4d8] text-white px-10 py-5 rounded-sm font-bold tracking-wide hover:bg-white hover:text-[#0d2b5e] transition-all duration-300 group shadow-2xl"
          >
            Start Your E-commerce Dialogue
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default ECommerce;