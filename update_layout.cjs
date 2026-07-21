const fs = require('fs');
let content = fs.readFileSync('src/components/Philosophy.tsx', 'utf8');

const startStr = '{/* Locations Grid */}';
const startIdx = content.indexOf(startStr);

if (startIdx !== -1) {
  const replacement = `{/* Locations List - Premium Architectural Layout */}
          <div className="w-full flex flex-col border-t border-[#111]/10 mt-8">
            {locations.map((loc) => (
              <div 
                key={loc.city} 
                className="w-full flex flex-col lg:flex-row lg:items-center py-6 lg:py-8 border-b border-[#111]/10 group hover:bg-[#111] transition-colors duration-500 px-4 md:px-8 relative overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B4C9A]/0 via-[#6B4C9A]/10 to-[#6B4C9A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* 1. Country & Status */}
                <div className="w-full lg:w-1/5 flex items-center gap-3 mb-4 lg:mb-0 relative z-10">
                  <div className="relative flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" />
                  </div>
                  <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#111]/60 group-hover:text-[#fdfdfd]/70 transition-colors">
                    {loc.country}
                  </span>
                </div>
                
                {/* 2. City Name */}
                <div className="w-full lg:w-1/4 mb-3 lg:mb-0 relative z-10">
                  <h5 className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight uppercase text-[#111] group-hover:text-[#fdfdfd] group-hover:translate-x-4 transition-all duration-500">
                    {loc.city}
                  </h5>
                </div>

                {/* 3. Description & Coords */}
                <div className="w-full lg:w-1/3 mb-4 lg:mb-0 pr-4 lg:pr-8 relative z-10">
                  <div className="flex flex-col gap-2">
                    <span className="font-sans text-[10px] tracking-widest font-mono text-[#6B4C9A] group-hover:text-[#6B4C9A] transition-colors">
                      {loc.coords}
                    </span>
                    <p className="font-sans text-xs md:text-sm font-light leading-relaxed text-[#111]/60 group-hover:text-[#fdfdfd]/70 transition-colors line-clamp-2 lg:line-clamp-none">
                      {loc.desc}
                    </p>
                  </div>
                </div>

                {/* 4. Time */}
                <div className="w-full lg:w-auto ml-auto text-left lg:text-right relative z-10">
                  <div className="flex flex-col items-start lg:items-end gap-1">
                    <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-[#111]/40 group-hover:text-[#fdfdfd]/40 transition-colors">
                      Local Time
                    </span>
                    <span className="font-sans text-xl md:text-2xl font-light tabular-nums font-mono text-[#111] group-hover:text-[#fdfdfd] transition-colors">
                      {getCityTime(loc.timezone)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`;
  
  // Cut everything from startIdx to the end, then append replacement
  const newContent = content.substring(0, startIdx) + replacement;
  fs.writeFileSync('src/components/Philosophy.tsx', newContent);
  console.log("Replaced successfully via substring.");
} else {
  console.log("Could not find start index");
}
