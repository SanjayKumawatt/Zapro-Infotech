import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, BarChart3, Globe, LineChart, 
  ArrowRight, SearchCode, Database, Settings2,
  Trophy, Activity, Target, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SEO = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const seoFramework = [
    {
      title: "Technical SEO Engineering",
      desc: "Search engines prioritize structural integrity. We are focusing on optimizing server response times, implementing structured data (Schema markup), and engineering a crawlable site architecture that allows search bots to index your content without encountering technical dead-ends.",
      icon: SearchCode
    },
    {
      title: "Semantic Content Architecture",
      desc: "Keywords alone are no longer sufficient. We are developing content frameworks aimed at semantic relevance. This involves structuring information around core topics and user intent, preparing your platform to align with modern NLP (Natural Language Processing) algorithms.",
      icon: Database
    },
    {
      title: "Performance & Core Web Vitals",
      desc: "Speed is a ranking factor. Our team is building optimization layers intended to meet the highest standards of Core Web Vitals-focusing strictly on Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) to ensure a stable, rapid user experience.",
      icon: Zap
    },
    {
      title: "On-Page Metadata Logic",
      desc: "We are structuring title tags, meta descriptions, and header hierarchies (H1-H6) designed to provide clear signals to search engines. Every element is being engineered to accurately reflect the structural and contextual value of each individual page.",
      icon: Settings2
    },
    {
      title: "Localized Search Optimization",
      desc: "For businesses targeting specific regions, we are planning local search architectures. This includes setting up local schema and geographic signals aimed at increasing your visibility within regional search ecosystems.",
      icon: Globe
    },
    {
      title: "Algorithmic Growth Tracking",
      desc: "While we do not promise fixed rankings, we are committed to applying rigorous data monitoring tools upon launch. We focus on tracking organic growth patterns and behavioral metrics to inform long-term technical adjustments.",
      icon: LineChart
    }
  ];

  return (
    <div className="bg-white min-h-screen - pb-0 font-sans">
      
      {/* 1. Data-Driven Hero Section */}
      <section className="relative bg-[#0d2b5e] text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image: Search/Data Visualization */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b5e] via-[#0d2b5e]/90 to-[#0d2b5e]/60" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#00b4d8] text-[#00b4d8] rounded-sm text-xs font-bold tracking-[0.2em] uppercase bg-[#0d2b5e]/50 backdrop-blur-md">
              <Activity size={16} /> Visibility Operations
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Algorithmic <br/><span className="text-[#00b4d8]">Alignment.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              ZAPRO INFOTECH is developing optimization frameworks designed to align your digital assets with search engine logic. We focus on structural SEO that drives organic discovery through technical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Philosophy: Logic vs. Hacks (Heavy Text) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sticky top-32">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0d2b5e] mb-6 tracking-tight leading-tight">
                Structural SEO Is Not <br/>An Afterthought.
              </h2>
              <div className="h-1.5 w-24 bg-[#00b4d8] mb-10"></div>
              
              <div className="p-8 bg-[#eaf6f9] border-l-8 border-[#0d2b5e] rounded-r-sm">
                <p className="text-[#0d2b5e] text-lg font-medium italic leading-relaxed">
                  "As an early-stage startup, we reject 'black-hat' hacks. We are building optimization strategies aimed at long-term stability and genuine authority in your digital space."
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <p>
                Search Engine Optimization has evolved beyond simple keyword density. Modern search engines are now sophisticated AI entities that evaluate the structural health, speed, and semantic value of your entire platform. We approach SEO as an engineering discipline.
              </p>
              <p>
                Many providers promise immediate page-one results-a claim that is technically impossible to guarantee. Zapro Infotech focuses instead on the <strong className="text-[#0d2b5e]">Controllable Factors</strong>: server response times, clean code hierarchy, mobile responsiveness, and high-quality metadata structures.
              </p>
              <p>
                We are preparing frameworks designed to withstand algorithmic updates. Our intent is to build a foundation so solid that your website becomes the most logical answer to a user's search query, naturally attracting traffic through structural relevance and technical authority.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Deep-Dive Framework Grid (6 Detailed Items) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#00b4d8] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Optimization Tenets
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0d2b5e] mb-6 tracking-tight">Our SEO Architecture</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              We are actively focusing our engineering efforts on these six structural optimization pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoFramework.map((item, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="bg-white p-10 hover:shadow-2xl transition-all duration-300 group border-b-4 border-transparent hover:border-[#00b4d8] rounded-sm"
              >
                <div className="w-14 h-14 bg-[#0d2b5e] text-[#00b4d8] flex items-center justify-center rounded-sm mb-8 group-hover:bg-[#00b4d8] group-hover:text-white transition-all duration-300 shadow-md">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0d2b5e]">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-loose">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Growth Roadmap with Image */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative group overflow-hidden rounded-sm order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-[#0d2b5e] opacity-30 group-hover:opacity-10 transition-opacity duration-500 z-10" />
              <img 
                src="https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg" 
                alt="SEO Data Analysis" 
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 bg-[#0d2b5e] p-4 text-white z-20">
                <Target size={32} />
              </div>
            </motion.div>

            <div className="space-y-12 order-1 lg:order-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6 tracking-tight">The Optimization Journey</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Zapro Infotech is structuring a systematic approach to search visibility. Here is how we are planning to engineer your organic growth.
                </p>
              </motion.div>

              <div className="space-y-10">
                {[
                  { step: "01", title: "Technical Crawl Audit", text: "Identifying structural roadblocks. We are building this phase to ensure that search bots can traverse every logical path of your website without error." },
                  { step: "02", title: "Strategic Keyword Mapping", text: "Defining the semantic landscape. We are planning an information architecture that maps your services to the actual questions your audience is asking." },
                  { step: "03", title: "Data-Driven Refinement", text: "Deploying tracking layers. We are committed to monitoring behavioral signals upon launch to continuously refine the technical SEO strategy." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <span className="text-4xl font-black text-[#eaf6f9] group-hover:text-[#00b4d8] transition-colors leading-none">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-[#0d2b5e] mb-2 uppercase tracking-wide font-black">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Bold Action CTA */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] relative overflow-hidden text-center">
        {/* Abstract Chart Background */}
        <div className="absolute bottom-0 right-0 p-8 opacity-5">
           <BarChart3 size={400} className="text-white" />
        </div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight uppercase">
            Ready to Build Your <br/>Organic Presence?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Our team is prepared to analyze your search landscape and map out a custom structural SEO framework. Connect with us to begin planning your organic growth trajectory.
          </p>
          
          <Link
            to="/reach-us"
            className="inline-flex items-center gap-3 bg-[#00b4d8] text-white px-10 py-5 rounded-sm font-bold tracking-wide hover:bg-white hover:text-[#0d2b5e] transition-all duration-300 group shadow-2xl"
          >
            Initiate SEO Planning
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default SEO;