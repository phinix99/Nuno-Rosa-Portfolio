import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles, BookOpen, Clock, Users, Globe } from 'lucide-react';

const processSteps = [
  {
    id: "01",
    title: "DISCOVER",
    desc: "Understanding brand identity, consumer psychology, and strategic spatial objectives.",
    percent: "25%"
  },
  {
    id: "02",
    title: "DESIGN",
    desc: "Ideas take shape. Conceptualizing space, sightlines, materialization, and visual storytelling.",
    percent: "50%"
  },
  {
    id: "03",
    title: "BUILD",
    desc: "Developing final spatial solutions with technical precision and modular display engineering.",
    percent: "75%"
  },
  {
    id: "04",
    title: "LAUNCH",
    desc: "Managing global activations, international rollout guidelines, and brand performance.",
    percent: "100%"
  }
];

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
    title: "Bespoke Space Optimization",
    desc: "Traffic flow management, hot zone allocation, and custom layouts."
  },
  {
    num: "04",
    title: "Global Operations & Rollout",
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
    // Mimic premium API submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="w-full bg-[#fdfdfd] text-[#111] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#111]/10 overflow-hidden" id="vm-course">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Course Details */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#6B4C9A] rounded-full animate-ping" />
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-[#111]/60">VM EDUCATION & MASTERCLASS</span>
              </div>
              <h2 className="font-sans text-4xl md:text-6xl font-medium tracking-tight uppercase leading-none text-[#111]">
                VM MASTERCLASS
              </h2>
              <p className="font-sans text-lg md:text-xl font-light text-[#111]/70 mt-2 max-w-xl">
                A definitive 8-week program mastering the silent architecture of desire and spatial retail engineering.
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

            {/* Repurposed Design Process Introduction for Masterclass */}
            <div className="flex flex-col gap-5 pt-2">
              <div className="flex justify-between items-center border-b border-[#111]/10 pb-3">
                <h3 className="font-sans text-xs font-bold tracking-widest text-[#6B4C9A] uppercase">
                  MASTERCLASS METHODOLOGY & DESIGN PROCESS
                </h3>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-[#111]/50">4-STAGE FRAMEWORK</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {processSteps.map((step) => (
                  <div key={step.id} className="p-5 bg-neutral-50/80 rounded-xl border border-neutral-200/80 flex flex-col justify-between gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs font-mono font-bold text-[#6B4C9A] px-2 py-0.5 rounded bg-[#6B4C9A]/10">
                        {step.id}
                      </span>
                      <span className="font-sans text-[10px] font-semibold text-neutral-400">{step.percent}</span>
                    </div>
                    <div>
                      <h4 className="font-sans text-base font-bold tracking-tight text-[#111] mb-1">{step.title}</h4>
                      <p className="font-sans text-xs font-light text-[#111]/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Modules */}
            <div className="flex flex-col gap-4 mt-4">
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
                        Seats are highly limited to preserve personalized studio coaching. Secure early enrollment today.
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
                            Request Syllabus <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
