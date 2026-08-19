import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles, BookOpen, Clock, Users, Globe } from 'lucide-react';

const modules = [
  {
    num: "01",
    title: "The Architecture of Desire",
    desc: "Psychological principles of retail design and consumer sightline mapping."
  },
  {
    num: "02",
    title: "Street-Level Narratives",
    desc: "Window display engineering and creating immediate visual magnetism."
  },
  {
    num: "03",
    title: "Space Optimization",
    desc: "Traffic flow management, hot zone allocation, and custom layouts."
  },
  {
    num: "04",
    title: "Global Operations",
    desc: "Translating concepts into modular guidelines for international execution."
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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="w-full bg-white text-black py-10 md:py-16 px-6 md:px-12 lg:px-20 border-b border-black/10 overflow-hidden" id="vm-course">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Course Details */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#7651B9]">
                <span className="w-2 h-2 bg-[#7651B9] rounded-full animate-pulse" />
                <span>VM EDUCATION</span>
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight uppercase leading-[1.08] text-black">
                VM MASTERCLASS
              </h2>
              <p className="font-sans text-sm md:text-base font-light text-black/70 max-w-xl leading-relaxed">
                A definitive 8-week program mastering the silent architecture of desire.
              </p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-black/10 font-sans">
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-wider text-black/60 font-semibold flex items-center gap-1">
                  <Clock size={11} className="text-[#7651B9]" /> Duration
                </span>
                <span className="text-xs font-bold text-black">8 Weeks Online</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-wider text-black/60 font-semibold flex items-center gap-1">
                  <BookOpen size={11} className="text-[#7651B9]" /> Format
                </span>
                <span className="text-xs font-bold text-black">Live Workshops</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-wider text-black/60 font-semibold flex items-center gap-1">
                  <Users size={11} className="text-[#7651B9]" /> Cohort Size
                </span>
                <span className="text-xs font-bold text-black">25 Spots Only</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-wider text-black/60 font-semibold flex items-center gap-1">
                  <Globe size={11} className="text-[#7651B9]" /> Alumni
                </span>
                <span className="text-xs font-bold text-black">Global Brands</span>
              </div>
            </div>

            {/* Curriculum Modules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {modules.map((m) => (
                <motion.div 
                  key={m.num}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="p-3.5 bg-[#FAF9FB] border border-black/10 rounded-xl hover:border-[#7651B9]/50 transition-all flex flex-col gap-1.5 group"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-[10px] font-bold text-[#7651B9] tracking-widest uppercase">
                      MODULE {m.num}
                    </span>
                    <span className="text-[10px] text-black/40 group-hover:text-[#7651B9] transition-colors">
                      →
                    </span>
                  </div>
                  <h4 className="font-sans text-sm font-semibold tracking-tight text-black">
                    {m.title}
                  </h4>
                  <p className="font-sans text-xs font-light text-black/70 leading-snug">
                    {m.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Waitlist Sign Up Form */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full bg-[#FAF9FB] border border-[#7651B9]/20 rounded-2xl p-6 md:p-8 shadow-[0_10px_35px_rgba(107,76,154,0.08)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#7651B9]" />
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#7651B9]/10 text-[#7651B9] rounded-full text-[9px] font-bold tracking-widest uppercase w-fit">
                        <Sparkles size={9} /> Next Cohort: Sept 2026
                      </div>
                      <h3 className="font-sans text-xl font-bold tracking-tight text-black mt-1">
                        Reserve Your Seat
                      </h3>
                      <p className="font-sans text-xs font-light text-black/60 leading-relaxed">
                        Seats are highly limited to preserve personalized studio coaching.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 font-sans">
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-bold tracking-wider uppercase text-black/60">
                          Full Name
                        </label>
                        <input 
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Jean Laurent"
                          className="w-full px-3.5 py-2.5 bg-white border border-black/10 rounded-lg focus:outline-none focus:border-[#7651B9] text-xs transition-all placeholder:text-black/40 text-black"
                        />
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-bold tracking-wider uppercase text-black/60">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. jean@fashionbrand.com"
                          className="w-full px-3.5 py-2.5 bg-white border border-black/10 rounded-lg focus:outline-none focus:border-[#7651B9] text-xs transition-all placeholder:text-black/40 text-black"
                        />
                      </div>

                      <button 
                        type="submit"
                        disabled={loading}
                        className="w-full mt-1 bg-[#7651B9] hover:bg-black disabled:bg-neutral-300 text-white font-bold tracking-wider uppercase text-xs py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group shadow-md"
                      >
                        {loading ? (
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Request Syllabus <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>

                    <div className="text-center font-sans text-[9px] text-black/50">
                      By submitting, you agree to receive curriculum updates.
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-6 font-sans"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <CheckCircle2 size={44} className="text-[#7651B9] mb-4" />
                    </motion.div>
                    
                    <h3 className="text-lg font-bold tracking-tight text-black mb-1">
                      Syllabus Request Sent
                    </h3>
                    <p className="text-xs font-light text-black/60 max-w-xs leading-relaxed mb-4">
                      Thank you, <span className="font-semibold text-black">{name}</span>. Curriculum dispatched to <span className="font-semibold text-black">{email}</span>.
                    </p>
                    
                    <button 
                      onClick={() => { setSubmitted(false); setName(''); setEmail(''); }}
                      className="px-5 py-1.5 border border-black/10 hover:border-black/30 rounded-lg text-xs font-semibold uppercase tracking-wider text-black/80 transition-colors"
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
