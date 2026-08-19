import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Linkedin, ArrowUpRight, Newspaper, Heart, MessageCircle, Share2, Sparkles, ChevronLeft, ChevronRight, CheckCircle2, Play, Image as ImageIcon, Video, ExternalLink } from 'lucide-react';

const linkedInPosts = [
  {
    id: "post-1",
    tabTitle: "YOUSTA 15,000 sq.ft Flagship Launch",
    category: "Store Architecture & Launch",
    date: "Latest Dispatch",
    followers: "14,288+ followers",
    headline: "Global Creative Head of Visual Merchandising & Retail Design",
    text: `Every successful retail store opening hides an invisible story. The "behind-the-curtain" logistics of a major launch are truly cinematic. Long before day one, teams manage high-level category forecasting and balancing complex, massive budgets under tight deadlines.

For our upcoming 15,000 sq.ft. #YOUSTA Flagship launch at Commercial Street, the stakes couldn't be higher to Reliance Retail.

Turning our operational dynamics into a short film would perfectly capture the chaotic brilliance that happens before the doors ever open.

It would give people a true appreciation for the massive, cross-functional engine running behind the scenes to deliver a modern shopping experience pushing the boundaries of visual innovation, and product enhancement to truly stand out in a legendary retail hub.

To anyone currently deep in the pre-launch phase I say BRAVO to you.`,
    tags: ["#RetailStrategy", "#CommercialStreet", "#BangaloreRetail", "#StoreLaunch", "#Forecasting", "#VisualMerchandising", "#RetailDesign", "#Leadership"],
    stats: { reactions: "542", comments: "12", reposts: "18" },
    mediaType: "gallery",
    mediaCount: "1/4",
    images: [
      {
        src: "/portfolio/VISUAL MERCHANDISING/In-store Product Display/IN STORE/YOUSTA.jpg",
        caption: "15,000 sq.ft Commercial Street Flagship Facade & Structure",
        tag: "Exterior Architecture"
      },
      {
        src: "/portfolio/E-Commerce Creative Direction & Styling/3-compressed.jpg",
        caption: "In-Store Spatial Journey & Visual Category Zoning",
        tag: "Interior Zoning"
      },
      {
        src: "/portfolio/VISUAL MERCHANDISING/In-store Product Display/IN STORE/20170227_112718.avif",
        caption: "High-Traffic Sightline Choreography & Display Architecture",
        tag: "Visual Merchandising"
      },
      {
        src: "/portfolio/VISUAL MERCHANDISING/Creative Window Concepts/p.jpg",
        caption: "Illumination Geometry & Commercial Launch Window",
        tag: "Lighting Scheme"
      }
    ],
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7493976849853661184/"
  },
  {
    id: "post-2",
    tabTitle: "In-Store Asia Keynote Reflection",
    category: "Keynote & Retail Leadership",
    date: "Keynote Dispatch",
    followers: "14,288+ followers",
    headline: "Global Creative Head of Visual Merchandising & Retail Design",
    text: `What does it take to truly inspire the next generation of Retail & Fashion leaders?

This was my core reflection as I took the stage at In-Store Asia at the Mumbai Convention Centre.

Bringing 30+ years of global experience to the industry is a privilege, but longevity isn't the final metric.

The true measure of our work lies in how effectively we elevate our brands, maximize our budgets, and empower our teams.

Leadership in Visual Merchandising is undeniable magic. However, creativity alone isn't enough. Success requires a 360-degree integration with retail operations—driving impact in the critical, unseen spaces of the business.`,
    tags: ["#RetailLeadership", "#InStoreAsia2026", "#VisualMerchandising", "#StoreOperations", "#RetailStrategy"],
    stats: { reactions: "684", comments: "48", reposts: "36" },
    mediaType: "video",
    videoPreview: {
      thumbnail: "/DP/20190118_165706_HDR~2.jpg",
      title: "Nuno Rosa Keynote Address | In-Store Asia Summit",
      location: "Mumbai Convention Centre",
      duration: "Keynote Session"
    },
    images: [
      {
        src: "/portfolio/Events & Brands Exhibition/Bespoke Press Showroom Curation/SET-UP PICS/6E4A7870.JPG",
        caption: "360° Operations Integration & Brand Value Framework",
        tag: "Stage Insights"
      },
      {
        src: "/DP/20190118_165754.jpg",
        caption: "Retail Summit Discussion Panel & Industry Dialogue",
        tag: "Executive Panel"
      }
    ],
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7483837657177972736/"
  },
  {
    id: "post-3",
    tabTitle: "Retail4Growth Eco-System",
    category: "Press & Retail Media",
    date: "Media Feature",
    followers: "Retail4Growth Coverage",
    headline: "Latest from the world of retail experience and its eco-system",
    text: `Exploring the future of retail design, spatial visual merchandising, and the evolving retail ecosystem. 

Featured analyses, interviews, and industry coverage covering 30+ years of global retail architecture and strategic brand transformation.

Read the full series of articles and thought-leadership pieces on Retail4Growth.`,
    tags: ["#Retail4Growth", "#RetailExperience", "#VisualMerchandising", "#RetailDesign", "#EcoSystem", "#StoreArchitecture"],
    stats: { reactions: "890", comments: "34", reposts: "52" },
    mediaType: "gallery",
    mediaCount: "1/3",
    images: [
      {
        src: "/portfolio/Press & Guest Speaker/Drapers UK press 2013  - Biggest LACOSTE Flagship in Europe _edited.avif",
        caption: "Drapers UK Press - Biggest European Flagship Architecture",
        tag: "Global Press"
      },
      {
        src: "/portfolio/Press & Guest Speaker/VMRD Magazine.avif",
        caption: "VMRD Magazine Retail Design & Storefront Dialogue",
        tag: "Magazine Feature"
      },
      {
        src: "/portfolio/Press & Guest Speaker/FIFA YOUSTA 2026_edited.avif",
        caption: "FIFA & Retail Experience Architecture Feature",
        tag: "Press Article"
      }
    ],
    postUrl: "https://www.retail4growth.com/search/nuno-rosa"
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
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#5E27BA] uppercase">
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
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#111] text-white hover:bg-[#5E27BA] transition-all text-xs font-bold tracking-widest uppercase group shadow-md"
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
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                activePostIndex === idx
                  ? 'bg-[#5E27BA] text-white shadow-md'
                  : 'bg-[#FAF9FB] text-black/60 hover:text-black hover:bg-neutral-200/70 border border-black/5'
              }`}
            >
              {post.mediaType === 'video' ? <Video size={13} /> : <ImageIcon size={13} />}
              {post.tabTitle}
            </button>
          ))}
        </div>

        {/* Featured Post Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Main LinkedIn Feed Post */}
          <div className="lg:col-span-8 rounded-3xl bg-[#FAF9FB] border border-black/10 overflow-hidden shadow-[0_15px_40px_rgba(94, 39, 186,0.06)] flex flex-col">
            
            {/* Post Author Header */}
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-black/5 bg-white/80 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/fashionvisualmerchandising/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative group"
                >
                  <img 
                    src="/DP/1 (1).png" 
                    alt="Nuno Rosa"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#5E27BA] group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0077B5] text-white flex items-center justify-center border-2 border-white">
                    <Linkedin size={11} />
                  </div>
                </a>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <a 
                      href="https://www.linkedin.com/in/fashionvisualmerchandising/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-sans text-base md:text-lg font-bold text-black hover:text-[#5E27BA] transition-colors"
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
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/60 hover:bg-[#5E27BA] hover:text-white hover:border-[#5E27BA] transition-colors"
                  title="Previous Post"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/60 hover:bg-[#5E27BA] hover:text-white hover:border-[#5E27BA] transition-colors"
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
                    <span key={tag} className="text-xs font-semibold text-[#5E27BA] hover:underline cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Video or Multi-Photo Media Showcase */}
                {activePost.mediaType === 'video' && activePost.videoPreview ? (
                  <div className="flex flex-col gap-4">
                    {/* Featured Video Player Preview */}
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black shadow-lg group border border-black/10">
                      <img 
                        src={activePost.videoPreview.thumbnail} 
                        alt={activePost.videoPreview.title}
                        className="w-full h-full object-cover object-top opacity-85 group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 flex flex-col justify-between p-6">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white font-mono text-[10px] font-bold uppercase tracking-widest shadow-md">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> LIVE KEYNOTE RECORDING
                          </span>
                          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] uppercase">
                            {activePost.videoPreview.location}
                          </span>
                        </div>

                        <div className="flex items-end justify-between">
                          <div className="flex flex-col gap-1 max-w-lg">
                            <h4 className="font-sans text-lg md:text-xl font-bold text-white leading-tight">
                              {activePost.videoPreview.title}
                            </h4>
                            <span className="text-xs text-white/70">
                              360° Operations Integration • In-Store Asia Mumbai
                            </span>
                          </div>

                          <a 
                            href={activePost.postUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-[#5E27BA] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-white hover:text-black transition-all shrink-0"
                            title="Play Video on LinkedIn"
                          >
                            <Play size={24} className="ml-1 fill-current" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Accompanying Photo Strip */}
                    <div className="grid grid-cols-2 gap-3">
                      {activePost.images.map((img, i) => (
                        <div key={i} className="aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 relative group border border-black/10">
                          <img 
                            src={img.src} 
                            alt={img.caption}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-white font-sans text-[11px] truncate">
                            {img.caption}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* 4-Image Grid for Yousta Store Launch */
                  <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activePost.images.slice(0, 2).map((img, i) => (
                        <div key={i} className="aspect-[4/3] rounded-2xl bg-neutral-900 overflow-hidden relative group border border-black/10">
                          <img 
                            src={img.src} 
                            alt={img.caption}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider">
                            {img.tag}
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md text-white font-sans text-xs tracking-wide">
                            {img.caption}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activePost.images.slice(2, 4).map((img, i) => (
                        <div key={i} className="aspect-[16/10] rounded-2xl bg-neutral-900 overflow-hidden relative group border border-black/10">
                          <img 
                            src={img.src} 
                            alt={img.caption}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider">
                            {img.tag}
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md text-white font-sans text-xs tracking-wide truncate">
                            {img.caption}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Engagement Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-black/10 text-xs font-semibold text-black/60">
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-1.5 hover:text-[#5E27BA] transition-colors cursor-pointer">
                      <Heart size={16} className="text-[#5E27BA]" /> {activePost.stats.reactions} Reactions
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-[#5E27BA] transition-colors cursor-pointer">
                      <MessageCircle size={16} /> {activePost.stats.comments} Comments
                    </span>
                    <span className="hidden sm:flex items-center gap-1.5 hover:text-[#5E27BA] transition-colors cursor-pointer">
                      <Share2 size={16} /> {activePost.stats.reposts} Reposts
                    </span>
                  </div>
                  
                  <a 
                    href={activePost.postUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0077B5] hover:bg-black text-white font-bold uppercase tracking-wider text-[11px] transition-colors shadow-sm"
                  >
                    <Linkedin size={13} /> View on LinkedIn <ArrowUpRight size={13} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Side Column: Profile Summary & Speaking Dispatches */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Quick Profile Summary Card */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-black/10 flex flex-col gap-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#5E27BA] uppercase">
                <Sparkles size={14} /> LINKEDIN PROFILE SUMMARY
              </div>
              
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-xl font-bold tracking-tight text-black">
                  Nuno Rosa
                </h4>
                <p className="font-sans text-xs md:text-sm font-light text-black/70 leading-relaxed">
                  30+ years leading visual merchandising, brand enhancement, and spatial architecture across Europe, Middle East, Mexico, and India.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 pt-4 border-t border-black/10 font-sans text-xs">
                <div className="flex items-center gap-2 text-black/80">
                  <CheckCircle2 size={15} className="text-[#5E27BA] shrink-0" />
                  <span>14,288+ Active Industry Followers</span>
                </div>
                <div className="flex items-center gap-2 text-black/80">
                  <CheckCircle2 size={15} className="text-[#5E27BA] shrink-0" />
                  <span>Weekly VM Insights & Store Analyses</span>
                </div>
                <div className="flex items-center gap-2 text-black/80">
                  <CheckCircle2 size={15} className="text-[#5E27BA] shrink-0" />
                  <span>Open for Consultations & Masterclasses</span>
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
            <div className="p-6 md:p-8 rounded-3xl bg-[#5E27BA] text-white flex flex-col gap-4 shadow-[0_15px_30px_rgba(94, 39, 186,0.25)]">
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

            {/* Retail4Growth Press Feature Card */}
            <a 
              href="https://www.retail4growth.com/search/nuno-rosa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 md:p-8 rounded-3xl bg-neutral-900 text-white flex flex-col gap-3.5 border border-black/10 hover:border-[#5E27BA] transition-all group shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5E27BA]">
                  Press & Media Feature
                </span>
                <ExternalLink size={14} className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h4 className="font-sans text-base md:text-lg font-bold tracking-tight leading-snug group-hover:text-[#5E27BA] transition-colors">
                Latest from the world of retail experience and its eco-system
              </h4>
              <p className="font-sans text-xs font-light text-white/70 leading-relaxed">
                Read Nuno Rosa's exclusive articles, interviews, and industry analyses on Retail4Growth.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#5E27BA] uppercase tracking-wider mt-1">
                <span>Read on Retail4Growth</span>
                <ArrowUpRight size={13} />
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
