import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Layout, Palette, Smartphone, 
  LayoutTemplate, Search, Server, ShoppingCart, 
  ArrowRight, AlertCircle, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const solutionsData = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    problem: 'Bloated architectures slow down load times and limit future scalability.',
    solution: 'We are engineering custom web platforms with clean codebases. The focus is strictly on building lightweight backends and responsive frontends designed to handle long-term growth.'
  },
  {
    id: 'web-design',
    title: 'Web Design',
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    problem: 'Complex interfaces confuse users and increase drop-off rates.',
    solution: 'Our design approach is aimed at clarity. We are developing user journeys that reduce friction, ensuring the interface serves as a clear bridge between your business and the user.'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    problem: 'Generic visuals fail to communicate core business values effectively.',
    solution: 'We treat design as a structural layer of communication. We are preparing brand assets and visual identities designed to align perfectly with your organizational intent.'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile Application Development',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    problem: 'Poorly optimized mobile experiences alienate the handheld audience.',
    solution: 'We are structuring mobile ecosystems for native-like performance. Our planned applications focus on keeping users engaged through stable, intuitive handheld interfaces.'
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    icon: LayoutTemplate,
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800',
    problem: 'Hard-coded systems create technical bottlenecks for content creators.',
    solution: 'Setting up flexible content management environments. We are building WordPress frameworks aimed at giving you complete, restriction-free control over your daily content updates.'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    icon: Search,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    problem: 'Lack of search visibility prevents organic discovery and halts growth.',
    solution: 'We are developing algorithmic alignment strategies. Rather than quick fixes, our focus is on structural SEO planning designed to adapt naturally to evolving search engine rules.'
  },
  {
    id: 'web-hosting',
    title: 'Web Hosting and Domain',
    icon: Server,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    problem: 'Unstable hosting environments lead to operational downtime and data risk.',
    solution: 'We are configuring secure server architectures. Our hosting solutions are being prepared to deliver the consistent uptime and stable infrastructure required for modern web operations.'
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce Solution',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    problem: 'Friction during the checkout process results in abandoned digital carts.',
    solution: 'Integrating secure transaction flows with seamless inventory management. We are building digital storefronts designed to simplify the purchasing journey from discovery to payment.'
  }
];

const Solutions = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white min-h-screen - pb-12">
      
      {/* Page Header with Dynamic Background Image */}
      <section 
        className="relative bg-[#0d2b5e] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000)' }}
        />
        {/* Navy Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2b5e]/95 to-[#0d2b5e]/80 mix-blend-multiply" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1 border border-[#00b4d8] text-[#00b4d8] rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-[#0d2b5e]/50 backdrop-blur-sm">
              Zapro Infotech Offerings
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Proposed Solutions
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We are actively developing technological frameworks aimed at solving foundational digital challenges. Review our planned service architecture below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid (Image + Problem -> Solution Format) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {solutionsData.map((item, index) => (
              <motion.div 
                key={item.id}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                }}
                className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-[#0d2b5e]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Icon Over Image */}
                  <div className="absolute bottom-4 right-4 z-20 w-12 h-12 bg-[#0d2b5e] rounded-sm flex items-center justify-center text-[#00b4d8] shadow-lg">
                    <item.icon size={24} />
                  </div>
                </div>

                {/* Title Area */}
                <div className="bg-white pt-8 px-8 pb-4 border-b border-gray-50">
                  <h2 className="text-2xl font-bold text-[#0d2b5e] group-hover:text-[#00b4d8] transition-colors">
                    {item.title}
                  </h2>
                </div>

                {/* Card Body: Problem & Solution */}
                <div className="p-8 pt-6 flex-1 flex flex-col gap-6">
                  
                  {/* The Problem (Gap) */}
                  <div className="bg-red-50/50 p-5 rounded-sm border-l-2 border-red-300">
                    <div className="flex items-start gap-3">
                      <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-red-500 uppercase tracking-wider block mb-1">The Industry Gap</span>
                        <p className="text-gray-700 text-sm leading-relaxed">{item.problem}</p>
                      </div>
                    </div>
                  </div>

                  {/* The Solution (Zapro's Intent) */}
                  <div className="bg-[#eaf6f9]/50 p-5 rounded-sm border-l-2 border-[#00b4d8]">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00b4d8] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider block mb-1">Our Approach</span>
                        <p className="text-[#0d2b5e] font-medium text-sm leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold text-[#0d2b5e] mb-6">
              Require a Custom Architecture?
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              If your organizational needs fall outside the standard frameworks listed above, we are available to discuss custom technological planning. Zapro Infotech is currently taking on complex development challenges.
            </p>
            {/* Named CTA as per Part 3 */}
            <Link
              to="/reach-us"
              className="inline-flex items-center gap-3 bg-[#0d2b5e] text-white px-8 py-4 rounded-sm font-semibold hover:bg-[#00b4d8] transition-colors duration-300 group shadow-lg"
            >
              Draft Your Technical Requirements
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Solutions;