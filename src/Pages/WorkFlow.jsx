import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Workflow, GitMerge, Clock, ArrowRight, CheckCircle2, Terminal, AlertTriangle, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkflowsPlatform = () => {
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
        {/* Dark Matte Background Image - Connections/Graphs */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
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
                Orchestration Engine Live
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Stateful Workflow Orchestration.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
              Coordinate complex microservices, background jobs, and AI pipelines without managing state. Our workflow engine natively handles retries, timeouts, and state persistence so your code never fails silently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#00b4d8] text-white px-8 py-4 rounded-sm font-semibold hover:bg-white hover:text-[#0d2b5e] transition-colors duration-300 flex items-center justify-center gap-2">
                <Layers size={18} /> Deploy First Workflow
              </button>
              <Link to="/reach-us" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                Contact Solutions Engineering
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
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">100%</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Idempotency</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">DLQ</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Dead Letter Queues</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">Auto</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Exponential Backoff</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#0d2b5e] mb-1">DAGs</p>
              <p className="text-xs font-bold text-[#00b4d8] uppercase tracking-wider">Graph Execution</p>
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
                Distributed Task Execution
              </h2>
              <div className="h-1 w-16 bg-[#00b4d8] mb-8"></div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Modern systems break when third-party APIs fail or servers restart during a long-running process. Zapro's workflow engine decouples your business logic from the underlying execution state.
                </p>
                <ul className="space-y-4 mt-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Step-Level Persistence</strong>
                      Every step in your workflow is automatically checkpointed to our PostgreSQL clusters. If a worker crashes, execution resumes exactly where it left off.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Built-in Scheduling</strong>
                      Delay executions for seconds, days, or months. Sleep functions are handled at the infrastructure level, consuming zero compute resources while waiting.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00b4d8] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-[#0d2b5e] block mb-1">Concurrency Control</strong>
                      Prevent race conditions natively. Set strict concurrency limits per user, tenant, or global system to protect your downstream databases from getting overwhelmed.
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
                src="https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="System Architecture" 
                className="rounded-sm shadow-xl object-cover w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Tech Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-sm shadow-lg flex items-center gap-4">
                <Workflow className="text-[#0d2b5e]" size={32} />
                <div>
                  <p className="text-xs font-bold text-[#00b4d8] uppercase">State Machine</p>
                  <p className="text-[#0d2b5e] font-bold">Checkpoint Active</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Code / SDK Preview (Trust Builder) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d2b5e] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Dark Code Editor Mockup */}
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
                <span className="text-xs font-mono text-gray-400">sync-workflow.ts (TypeScript)</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto text-gray-300 leading-relaxed">
                <p><span className="text-[#00b4d8]">import</span> {'{'} Workflow {'}'} <span className="text-[#00b4d8]">from</span> <span className="text-green-400">'@zapro/workflows'</span>;</p>
                <br/>
                <p><span className="text-[#00b4d8]">export const</span> <span className="text-yellow-200">processInvoice</span> = <span className="text-[#00b4d8]">new</span> Workflow(</p>
                <p>&nbsp;&nbsp;<span className="text-green-400">'invoice-sync'</span>,</p>
                <p>&nbsp;&nbsp;<span className="text-[#00b4d8]">async</span> ({'{'} step, payload {'}'}) ={'>'} {'{'}</p>
                <p className="text-gray-500 mt-2">&nbsp;&nbsp;&nbsp;&nbsp;{'// Step 1: Execute with automatic retries'}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00b4d8]">const</span> user = <span className="text-[#00b4d8]">await</span> step.run(<span className="text-green-400">'fetch-user'</span>, <span className="text-[#00b4d8]">async</span> () ={'>'} {'{'}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00b4d8]">return await</span> db.users.get(payload.userId);</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}, {'{'} retries: <span className="text-orange-400">3</span> {'}'});</p>
                <br/>
                <p className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;{'// Step 2: Sleep for 48 hours without server cost'}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00b4d8]">await</span> step.sleep(<span className="text-green-400">'wait-for-payment'</span>, <span className="text-green-400">'48h'</span>);</p>
                <br/>
                <p className="text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;{'// Step 3: Branching logic based on active state'}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00b4d8]">const</span> status = <span className="text-[#00b4d8]">await</span> step.run(<span className="text-green-400">'check-payment'</span>, () ={'>'} verify(user));</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00b4d8]">if</span> (!status.paid) {'{'}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00b4d8]">await</span> step.run(<span className="text-green-400">'send-reminder'</span>, () ={'>'} sendEmail(user));</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</p>
                <p>&nbsp;&nbsp;{'}'}</p>
                <p>{');'}</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <Terminal size={40} className="text-[#00b4d8] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Code-First Orchestration
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Stop dragging and dropping visual boxes. Zapro lets your engineering team define workflows in pure code using our TypeScript and Python SDKs.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Your workflow definitions live in your Git repository. They go through standard code reviews, CI/CD pipelines, and version control, ensuring complete predictability in production.
              </p>
              <Link to="/platform/developer-tools" className="text-[#00b4d8] font-bold flex items-center gap-2 hover:text-white transition-colors">
                Explore Workflow SDKs <ArrowRight size={20} />
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
              Advanced Workflow Tooling
            </h2>
            <p className="text-gray-600 text-lg">
              Full visibility and control over every asynchronous task and microservice interaction running in your infrastructure.
            </p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Activity size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Visual Audit Logs</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                While you write workflows in code, our dashboard automatically generates visual Directed Acyclic Graphs (DAGs) to trace execution paths and debug failures instantly.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <Clock size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Cron & Fan-out</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Trigger workflows on a scheduled cron basis, or fan-out a single webhook into thousands of parallel processing tasks distributed across our edge nodes.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#00b4d8]/50 transition-colors group">
              <AlertTriangle size={32} className="text-[#0d2b5e] mb-6 group-hover:text-[#00b4d8] transition-colors" />
              <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">Dead Letter Queues</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                If a task exhausts all retries, it is safely moved to a DLQ. You can inspect the payload, fix the downstream bug, and replay the event with one click.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default WorkflowsPlatform;