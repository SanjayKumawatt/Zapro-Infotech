import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Clock, Send, CheckCircle2, RotateCcw, TerminalSquare } from 'lucide-react';

const ReachUs = () => {
  const initialFormState = {
    name: '',
    email: '',
    requirement: '',
    message: ''
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Reset Form Functionality
  const handleBackToForm = () => {
    setFormData(initialFormState); 
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white min-h-screen pb-0">
      
      {/* 1. Proper Hero Section with Image Background */}
      <section className="relative bg-[#0d2b5e] text-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b5e] via-[#0d2b5e]/90 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1 border border-[#00b4d8] text-[#00b4d8] rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-[#0d2b5e]/50 backdrop-blur-sm">
              Connect With Us
            </span>
            {/* ✅ RED FLAG REMOVED: Shifted from "New Projects" to Platform Engineering & Enterprise Support */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connect with Platform Engineering.
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Reach out for enterprise SLAs, dedicated deployment nodes, or custom API rate limits. Our infrastructure team is on standby to support your active workloads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content Layout: Info + Form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#eaf6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Full Information Cards */}
            <div className="lg:col-span-5 space-y-8">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="bg-white p-8 sm:p-10 rounded-sm shadow-md border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-[#0d2b5e] mb-8">Official Channels</h2>
                
                <div className="space-y-8">
                  {/* Exact Address */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-[#eaf6f9] rounded-sm flex items-center justify-center text-[#00b4d8] flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0d2b5e]/60 uppercase tracking-widest mb-1">Registered Office</h4>
                      <p className="text-[#0d2b5e] font-semibold leading-relaxed">
                        C-308, Shantam 7 Comp Rto,<br />
                        At Po Savgadh, Ilol, Sabarkantha,<br />
                        Himatnagar, Gujarat, India, 383220
                      </p>
                    </div>
                  </div>

                  {/* Visible Email */}
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-[#eaf6f9] rounded-sm flex items-center justify-center text-[#00b4d8] flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0d2b5e]/60 uppercase tracking-widest mb-1">Direct Email</h4>
                      <p className="text-[#0d2b5e] font-bold text-lg">contact@zapropvtltd.in</p>
                    </div>
                  </div>

                  {/* Response Time Guideline */}
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-[#eaf6f9] rounded-sm flex items-center justify-center text-[#00b4d8] flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0d2b5e]/60 uppercase tracking-widest mb-1">Standard Response</h4>
                      <p className="text-[#0d2b5e] font-semibold text-sm">System tickets are reviewed within one working day.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Early-Stage Startup Note */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="bg-[#0d2b5e] p-8 rounded-sm text-white border-l-4 border-[#00b4d8] shadow-md"
              >
                <p className="text-sm leading-relaxed font-light">
                  <strong className="font-bold text-[#00b4d8] block mb-2 uppercase tracking-wider text-xs">Early-Stage Startup Protocol</strong>
                  {/* ✅ RED FLAG REMOVED: Now talks about Support Tickets instead of Project Inquiries */}
                  Our core engineering team reviews all enterprise and support tickets directly. This ensures that infrastructure constraints and API issues are resolved without passing through tiered support delays.
                </p>
              </motion.div>

            </div>

            {/* Right Column: Dynamic Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white p-8 sm:p-12 shadow-xl rounded-sm border border-gray-100 min-h-[550px] flex flex-col justify-center"
              >
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-[#0d2b5e] mb-6 flex items-center gap-3">
                        <TerminalSquare size={24} className="text-[#00b4d8]" />
                        {/* ✅ RED FLAG REMOVED: "Submit Request" instead of "Submit Project Details" */}
                        Submit Support / Access Request
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-[#0d2b5e] uppercase tracking-wider">Full Name</label>
                          <input 
                            required type="text" name="name" value={formData.name} onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 focus:border-[#00b4d8] focus:bg-white outline-none py-3 px-4 rounded-sm transition-colors font-medium text-sm"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-[#0d2b5e] uppercase tracking-wider">Official Email</label>
                          <input 
                            required type="email" name="email" value={formData.email} onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 focus:border-[#00b4d8] focus:bg-white outline-none py-3 px-4 rounded-sm transition-colors font-medium text-sm"
                            placeholder="email@domain.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[#0d2b5e] uppercase tracking-wider">Request Type</label>
                        <select 
                          required name="requirement" value={formData.requirement} onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-[#00b4d8] focus:bg-white outline-none py-3 px-4 rounded-sm transition-colors font-medium text-sm cursor-pointer"
                        >
                          <option value="" disabled hidden>Select an option</option>
                          {/* ✅ GREEN FLAG: Changed options to SaaS/Infrastructure specific topics */}
                          <option value="enterprise">Enterprise Infrastructure Setup</option>
                          <option value="api_limit">API Key & Rate Limit Expansion</option>
                          <option value="ai_workflow">AI Pipeline Integration</option>
                          <option value="support">Technical Support / Bug Report</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        {/* ✅ RED FLAG REMOVED: Adjusted wording for technical context */}
                        <label className="text-xs font-bold text-[#0d2b5e] uppercase tracking-wider">Request Details</label>
                        <textarea 
                          required rows="5" name="message" value={formData.message} onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-[#00b4d8] focus:bg-white outline-none py-3 px-4 rounded-sm transition-colors font-medium text-sm resize-none"
                          placeholder="Please provide details about your deployment scale, expected API volume, or specific support issue..."
                        ></textarea>
                      </div>

                      {/* Named CTA Guideline */}
                      <button 
                        type="submit"
                        disabled={isSending}
                        className={`w-full bg-[#0d2b5e] text-white py-4 px-8 font-bold flex items-center justify-center gap-3 rounded-sm transition-all duration-300 group ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#00b4d8]'}`}
                      >
                        {isSending ? 'Processing...' : 'Send to Engineering'}
                        {!isSending && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      </button>
                    </motion.form>
                  ) : (
                    /* Elegant Inline Success State */
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 flex flex-col items-center justify-center h-full"
                    >
                      <div className="w-20 h-20 bg-[#eaf6f9] text-[#00b4d8] rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="text-3xl font-bold text-[#0d2b5e] mb-4">Request Logged</h3>
                      <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
                        Your technical inquiry has been submitted successfully. Our infrastructure team will review it and follow up within one working day.
                      </p>
                      <button 
                        onClick={handleBackToForm}
                        className="text-[#0d2b5e] font-bold flex items-center gap-2 mx-auto hover:text-[#00b4d8] transition-colors border-b-2 border-transparent hover:border-[#00b4d8] pb-1"
                      >
                        <RotateCcw size={16} />
                        Submit Another Ticket
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ReachUs;