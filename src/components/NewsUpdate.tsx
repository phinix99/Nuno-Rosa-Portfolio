import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Linkedin, ArrowUpRight, Newspaper, Heart, MessageCircle, Share2, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const linkedInPosts = [
  {
    id: "post-1",
    tabTitle: "Yousta Store Launch",
    category: "Retail Store Architecture",
    date: "Recent Activity",
    followers: "14,288+ followers",
    headline: "Global Creative Head of Visual Merchandising & Retail Design",
    text: "Every successful retail store opening hides an invisible story. The 'behind-the-curtain' logistics of spatial choreography, sightline geometry, and human emotion coming together seamlessly in a high-traffic physical space.",
    tags: ["#VisualMerchandising", "#RetailDesign", "#StoreOpening", "#RetailArchitecture"],
    stats: { reactions: "528", comments: "64", reposts: "22" },
    images: [
      {
        src: "/brands/YOUSTA.jpg",
        caption: "Store Facade & Illumination"
      },
      {
        src: "https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg",
        caption: "In-Store Spatial Journey"
      }
    ],
    postUrl: "https://www.linkedin.com/in/fashionvisualmerchandising/"
  },
  {
    id: "post-2",
    tabTitle: "Retail4Growth Feature",
    category: "Industry Thought Leadership",
    date: "Press Feature",
    followers: "14,288+ followers",
    headline: "Global Creative Head of Visual Merchandising & Retail Design",
    text: "'Copy-paste approach is a big NO for Visual Merchandising.' In an in-depth conversation with Retail4Growth, I discussed why true retail innovation requires bespoke local identity, disciplined lighting schemes, and commercial agility.",
    tags: ["#Retail4Growth", "#RetailStrategy", "#DesignLeadership", "#FashionRetail"],
    stats: { reactions: "412", comments: "48", reposts: "19" },
    images: [
      {
        src: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405555/1_224_yf8cfh.jpg",
        caption: "Retail4Growth Interview Feature"
      },
      {
        src: "https://static.wixstatic.com/media/9e4437_590cee324ec8484980dce6346f6d9664~mv2.jpg/v1/fill/w_1181,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_MG_0064_edited.jpg",
        caption: "Curated Press Preview"
      }
    ],
    postUrl: "https://www.linkedin.com/in/fashionvisualmerchandising/"
  },
  {
    id: "post-3",
    tabTitle: "VM Challenge & Keynote",
    category: "Panels & Masterclasses",
    date: "Keynote Dispatch",
    followers: "14,288+ followers",
    headline: "Global Creative Head of Visual Merchandising & Retail Design",
    text: "Honored to host the VM Challenge at In-Store Asia and deliver keynote perspectives across national retail summits. Mentoring the next generation of visual storytellers is how our industry continues to evolve and thrive.",
    tags: ["#InStoreAsia", "#VMChallenge", "#KeynoteSpeaker", "#FashionEducation"],
    stats: { reactions: "635", comments: "79", reposts: "34" },
    images: [
      {
        src: "https://static.wixstatic.com/media/9e4437_0b022f9ff7e645fbacc6aa8a6e68dbe0~mv2.jpg/v1/crop/x_304,y_805,w_3588,h_5915/fill/w_477,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SKPL8757_JPG.jpg",
        caption: "Great India Retail Summit Keynote"
      },
      {
        src: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784662099/1_78_tfobxr.avif",
        caption: "Award-Winning Spatial Concept"
      }
    ],
    postUrl: "https://www.linkedin.com/in/fashionvisualmerchandising/"
  }
];

export default function NewsUpdate() {
  const [activePostIndex, setActivePostIndex] = useState(0);
  const activePost = linkedInPosts[activePostIndex];

  const handleNext = () => {
    setActivePostIndex((prev) => (prev + 1) % linkedInPosts.length);
  };

  const handlePrev = () => {
    setActivePostIndex((prev) => (prev - 1 + linkedInPosts.length) % linkedInPosts.length);
  };

  return (
    <section className="w-full bg-white text-black py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-black/10 overflow-hidden" id="news">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14 border-b border-black/10 pb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7651B9] uppercase">
              <Linkedin size={14} className="text-[#0077B5]" /> LIVE DISPATCHES & ACTIVITY
            </div>
            <h2 className="font-sans text-4xl md:text-6xl font-medium tracking-tight uppercase text-black">
              LINKEDIN INSIGHTS
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/in/fashionvisualmerchandising/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#111] text-white hover:bg-[#7651B9] transition-all text-xs font-bold tracking-widest uppercase group shadow-md"
            >
              <Linkedin size={14} /> Connect with Nuno
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Post Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-6">
          {linkedInPosts.map((post, idx) => (
            <button
              key={post.id}
              onClick={() => setActivePostIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activePostIndex === idx
                  ? 'bg-[#7651B9] text-white shadow-md'
                  : 'bg-[#FAF9FB] text-black/60 hover:text-black hover:bg-neutral-200/70 border border-black/5'
              }`}
            >
              {post.tabTitle}
            </button>
          ))}
        </div>

        {/* Featured Post Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Main LinkedIn Feed Post */}
          <div className="lg:col-span-8 rounded-3xl bg-[#FAF9FB] border border-black/10 overflow-hidden shadow-[0_15px_40px_rgba(118,81,185,0.06)] flex flex-col">
            
            {/* Post Author Header */}
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-black/5 bg-white/80 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <a 
                  href={activePost.postUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative group"
                >
                  <img 
                    src="https://static.wixstatic.com/media/9e4437_0b022f9ff7e645fbacc6aa8a6e68dbe0~mv2.jpg/v1/crop/x_304,y_805,w_3588,h_5915/fill/w_477,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SKPL8757_JPG.jpg" 
                    alt="Nuno Rosa"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#7651B9] group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0077B5] text-white flex items-center justify-center border-2 border-white">
                    <Linkedin size={11} />
                  </div>
                </a>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <a 
                      href={activePost.postUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-sans text-base md:text-lg font-bold text-black hover:text-[#7651B9] transition-colors"
                    >
                      Nuno Rosa
                    </a>
                    <span className="text-black/30 font-normal">• 1st</span>
                  </div>
                  <span className="font-sans text-xs text-black/60 font-medium line-clamp-1">
                    {activePost.headline}
                  </span>
                  <span className="font-sans text-[10px] text-black/40 uppercase tracking-wider mt-0.5">
                    {activePost.date} • {activePost.followers}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/60 hover:bg-[#7651B9] hover:text-white hover:border-[#7651B9] transition-colors"
                  title="Previous Post"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/60 hover:bg-[#7651B9] hover:text-white hover:border-[#7651B9] transition-colors"
                  title="Next Post"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Post Content */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activePost.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 md:p-8 flex flex-col gap-6"
              >
                <p className="font-sans text-base md:text-lg font-light leading-relaxed text-black/90 whitespace-pre-line">
                  {activePost.text}
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-2">
                  {activePost.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold text-[#7651B9] hover:underline cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Post Visual Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl overflow-hidden border border-black/10">
                  {activePost.images.map((img, i) => (
                    <div key={i} className="aspect-[4/3] bg-neutral-900 overflow-hidden relative group">
                      <img 
                        src={img.src} 
                        alt={img.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md text-white font-sans text-xs tracking-wide">
                        {img.caption}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Engagement Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-black/10 text-xs font-semibold text-black/60">
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-1.5 hover:text-[#7651B9] transition-colors cursor-pointer">
                      <Heart size={16} className="text-[#7651B9]" /> {activePost.stats.reactions} Reactions
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-[#7651B9] transition-colors cursor-pointer">
                      <MessageCircle size={16} /> {activePost.stats.comments} Comments
                    </span>
                    <span className="hidden sm:flex items-center gap-1.5 hover:text-[#7651B9] transition-colors cursor-pointer">
                      <Share2 size={16} /> {activePost.stats.reposts} Reposts
                    </span>
                  </div>
                  
                  <a 
                    href={activePost.postUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#7651B9] hover:underline font-bold uppercase tracking-wider text-[11px]"
                  >
                    View on LinkedIn <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Side Column: Profile Bio Highlights & Speaking Calendar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Quick Profile Summary Card */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-black/10 flex flex-col gap-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7651B9] uppercase">
                <Sparkles size={14} /> LINKEDIN PROFILE SUMMARY
              </div>
              
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-xl font-bold tracking-tight text-black">
                  Nuno Rosa
                </h4>
                <p className="font-sans text-xs md:text-sm font-light text-black/70 leading-relaxed">
                  30+ years leading visual merchandising and spatial design across Europe, Middle East, Mexico, and India.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 pt-4 border-t border-black/10 font-sans text-xs">
                <div className="flex items-center gap-2 text-black/80">
                  <CheckCircle2 size={15} className="text-[#7651B9] shrink-0" />
                  <span>14,280+ Active Industry Followers</span>
                </div>
                <div className="flex items-center gap-2 text-black/80">
                  <CheckCircle2 size={15} className="text-[#7651B9] shrink-0" />
                  <span>Weekly VM Insights & Store Analyses</span>
                </div>
                <div className="flex items-center gap-2 text-black/80">
                  <CheckCircle2 size={15} className="text-[#7651B9] shrink-0" />
                  <span>Open for Consultations & Workshops</span>
                </div>
              </div>

              <a 
                href="https://www.linkedin.com/in/fashionvisualmerchandising/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 text-center rounded-full bg-[#0077B5] hover:bg-black text-white text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Linkedin size={14} /> Open Full Profile
              </a>
            </div>

            {/* Speaking Summit Highlight */}
            <div className="p-6 md:p-8 rounded-3xl bg-[#7651B9] text-white flex flex-col gap-4 shadow-[0_15px_30px_rgba(118,81,185,0.25)]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70">
                Keynote & Masterclasses
              </span>
              <h4 className="font-sans text-xl font-bold tracking-tight leading-snug">
                In-Store Asia & Retail Summits
              </h4>
              <p className="font-sans text-xs font-light text-white/85 leading-relaxed">
                4x Guest Host of the VM Challenge and Keynote Speaker at Asian National Retail Summits.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
