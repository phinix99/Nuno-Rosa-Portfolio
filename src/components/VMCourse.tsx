import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles, BookOpen, Clock, Users, Globe } from 'lucide-react';

const modules = [
  {
    num: "01",
    title: "The Architecture of Desire",
    desc: "Psychological principles of retail design, consumer sightline mapping, and the silent cues that trigger customer interest."
  },
  {
    num: "02",
    title: "Street-Level Narratives",
    desc: "Window display engineering, theatrical lighting, material tension, and creating immediate visual magnetism in seconds."
  },
  {
    num: "03",
    title: "Bespoke Space Optimization",
    desc: "In-store traffic flow management, hot zone allocation, sensory product zoning, and premium custom fixture layouts."
  },
  {
    num: "04",
    title: "Global Operations & Rollout",
    desc: "Translating brand concepts into modular guidelines, budget management, leading cross-functional teams, and international rollouts."
  }
];

export default function VMCourse() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    
    setLoading(true);
    // Mimic premium API submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="w-full bg-[#fafafa] text-[#111] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#111]/10 overflow-hidden" id="vm-course">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Course Details */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#6B4C9A] rounded-full animate-ping" />
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-[#111]/60">VM EDUCATION</span>
              </div>
              <h2 className="font-sans text-4xl md:text-6xl font-medium tracking-tight uppercase leading-none text-[#111]">
                VM MASTERCLASS
              </h2>
              <p className="font-sans text-lg md:text-xl font-light text-[#111]/70 mt-2 max-w-xl">
                The Silent Architecture of Desire — A comprehensive, 360-degree course in visual merchandising and commercial space engineering.
              </p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-[#111]/10/60 font-sans">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-[#111]/60 font-semibold flex items-center gap-1.5">
                  <Clock size={12} className="text-[#6B4C9A]" /> Duration
                </span>
                <span className="text-sm font-bold text-[#111]">8 Weeks Online</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-[#111]/60 font-semibold flex items-center gap-1.5">
                  <BookOpen size={12} className="text-[#6B4C9A]" /> Format
                </span>
                <span className="text-sm font-bold text-[#111]">Live Workshops</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-[#111]/60 font-semibold flex items-center gap-1.5">
                  <Users size={12} className="text-[#6B4C9A]" /> Cohort Size
                </span>
                <span className="text-sm font-bold text-[#111]">25 Spots Only</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-[#111]/60 font-semibold flex items-center gap-1.5">
                  <Globe size={12} className="text-[#6B4C9A]" /> Alumni
                </span>
                <span className="text-sm font-bold text-[#111]">Global Brands</span>
              </div>
            </div>

            {/* Curriculum Modules */}
            <div className="flex flex-col gap-4 mt-2">
              <h3 className="font-sans text-xs font-bold tracking-widest text-[#111]/60 uppercase">
                CURRICULUM SYLLABUS
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modules.map((m) => (
                  <motion.div 
                    key={m.num}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-6 bg-[#fdfdfd] border border-[#111]/10 rounded-xl hover:border-[#111]/10 hover:shadow-md transition-all duration-300 flex flex-col gap-3 group"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-sans text-xs font-bold text-[#6B4C9A] tracking-widest uppercase">
                        MODULE {m.num}
                      </span>
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-semibold text-[#111]/60 group-hover:bg-[#6B4C9A]/10 group-hover:text-[#6B4C9A] transition-colors">
                        →
                      </span>
                    </div>
                    <h4 className="font-sans text-lg font-semibold tracking-tight text-[#111]">
                      {m.title}
                    </h4>
                    <p className="font-sans text-xs md:text-sm font-light text-[#111]/70 leading-relaxed">
                      {m.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Waitlist Sign Up Form */}
          <div className="lg:col-span-5 w-full lg:sticky lg:top-24 mt-4 lg:mt-0">
            <div className="w-full bg-[#fdfdfd] border border-[#111]/10 rounded-2xl p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.03)] relative overflow-hidden">
              {/* Luxury Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#6B4C9A]" />
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#6B4C9A]/10 text-[#6B4C9A] rounded-full text-[10px] font-bold tracking-widest uppercase w-fit">
                        <Sparkles size={10} /> Next Cohort: Sept 2026
                      </div>
                      <h3 className="font-sans text-2xl font-bold tracking-tight text-[#111] mt-2">
                        Reserve Your Seat
                      </h3>
                      <p className="font-sans text-xs md:text-sm font-light text-[#111]/60 leading-relaxed">
                        Secure early enrollment or request the detailed course syllabus. Seats are highly limited to preserve personalized studio coaching.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans">
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold tracking-wider uppercase text-[#111]/60">
                          Full Name
                        </label>
                        <input 
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Jean Laurent"
                          className="w-full px-4 py-3 bg-white border border-[#111]/10 rounded-lg focus:outline-none focus:border-[#6B4C9A] focus:bg-[#fdfdfd] text-sm transition-all placeholder:text-[#111]/40"
                        />
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold tracking-wider uppercase text-[#111]/60">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. jean@fashionbrand.com"
                          className="w-full px-4 py-3 bg-white border border-[#111]/10 rounded-lg focus:outline-none focus:border-[#6B4C9A] focus:bg-[#fdfdfd] text-sm transition-all placeholder:text-[#111]/40"
                        />
                      </div>

                      <button 
                        type="submit"
                        disabled={loading}
                        className="w-full mt-2 bg-[#111] hover:bg-[#6B4C9A] disabled:bg-neutral-300 text-[#fdfdfd] font-bold tracking-wider uppercase text-xs py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group shadow-md hover:shadow-lg hover:-translate-y-0.5"
                      >
                        {loading ? (
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Request Enrollment & Syllabus <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>

                    <div className="text-center font-sans text-[10px] text-[#111]/60">
                      By submitting, you agree to receive luxury curriculum updates.
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-8 font-sans"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <CheckCircle2 size={56} className="text-[#6B4C9A] mb-6" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold tracking-tight text-[#111] mb-2">
                      Syllabus Request Sent
                    </h3>
                    <p className="text-sm font-light text-[#111]/60 max-w-xs leading-relaxed mb-6">
                      Thank you, <span className="font-semibold text-[#111]">{name}</span>. We have dispatched the visual curriculum and waitlist application to <span className="font-semibold text-[#111]">{email}</span>.
                    </p>
                    
                    <button 
                      onClick={() => { setSubmitted(false); setName(''); setEmail(''); }}
                      className="px-6 py-2 border border-[#111]/10 hover:border-[#fdfdfd] hover:bg-white rounded-lg text-xs font-semibold uppercase tracking-wider text-[#111]/80 hover:text-[#111] transition-colors"
                    >
                      Go Back
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
