const fs = require('fs');

function swapColors(file) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (file === 'src/App.tsx') {
    content = content.replace(/bg-\[#6B4C9A\]/g, 'bg-[#fdfdfd]').replace(/text-\[#fdfdfd\]/g, 'text-[#111]');
  } else if (file === 'src/components/Hero.tsx') {
    content = content.replace(/bg-\[#6B4C9A\] text-\[#fdfdfd\]/g, 'bg-[#fdfdfd] text-[#111]');
    content = content.replace(/text-\[#fdfdfd\]/g, 'text-[#111]');
    content = content.replace(/bg-[#fdfdfd]\/30/g, 'bg-[#111]/30');
    // text-[#111] inside span -> text-[#6B4C9A]
    content = content.replace(/text-\[#111\]\">NARRATIVES/g, 'text-[#6B4C9A]">NARRATIVES');
    content = content.replace(/hover:text-\[#111\]/g, 'hover:text-[#6B4C9A]');
    content = content.replace(/hover:after:bg-\[#111\]/g, 'hover:after:bg-[#6B4C9A]');
    content = content.replace(/hover:bg-white hover:text-\[#111\]/g, 'hover:bg-[#6B4C9A] hover:text-[#fdfdfd]');
    content = content.replace(/border-\[#fdfdfd\]\/20/g, 'border-[#111]/20');
  } else if (file === 'src/components/Welcome.tsx') {
    content = content.replace(/bg-\[#111\] text-\[#fdfdfd\]/g, 'bg-[#fdfdfd] text-[#111]');
    content = content.replace(/border-\[#fdfdfd\]\/10/g, 'border-[#111]/10');
    content = content.replace(/text-\[#fdfdfd\]\/60/g, 'text-[#111]/60');
    content = content.replace(/text-\[#fdfdfd\]/g, 'text-[#111]');
    content = content.replace(/text-\[#fdfdfd\]\/80/g, 'text-[#111]/80');
    content = content.replace(/bg-\[#111\]/g, 'bg-[#fdfdfd]');
    content = content.replace(/bg-neutral-950\/40/g, 'bg-neutral-50/40');
  } else if (file === 'src/components/Projects.tsx') {
    content = content.replace(/bg-\[#6B4C9A\]/g, 'bg-[#fdfdfd]');
    content = content.replace(/border-\[#fdfdfd\]\/10/g, 'border-[#111]/10');
    content = content.replace(/text-\[#fdfdfd\]/g, 'text-[#111]');
    content = content.replace(/hover:bg-\[#111\]\/80/g, 'hover:bg-[#fdfdfd]/80');
    content = content.replace(/bg-\[#111\]/g, 'bg-[#fdfdfd]');
  } else if (file === 'src/components/Philosophy.tsx') {
    content = content.replace(/bg-\[#6B4C9A\]/g, 'bg-[#fdfdfd]');
    content = content.replace(/text-\[#fdfdfd\]\/60/g, 'text-[#111]/60');
    content = content.replace(/text-\[#fdfdfd\]\/80/g, 'text-[#111]/80');
    content = content.replace(/text-\[#fdfdfd\]\/50/g, 'text-[#111]/50');
    content = content.replace(/text-\[#fdfdfd\]/g, 'text-[#111]');
    content = content.replace(/border-\[#fdfdfd\]\/10/g, 'border-[#111]/10');
    content = content.replace(/bg-\[#111\]/g, 'bg-[#fdfdfd]');
    content = content.replace(/backgroundColor: '#222222'/g, "backgroundColor: '#fdfdfd'");
    content = content.replace(/borderColor: '#fdfdfd'/g, "borderColor: '#6B4C9A'");
    content = content.replace(/bg-neutral-900/g, 'bg-neutral-50');
  } else if (file === 'src/components/Services.tsx') {
    content = content.replace(/bg-\[#111\]/g, 'bg-[#fdfdfd]');
    content = content.replace(/border-\[#fdfdfd\]\/10/g, 'border-[#111]/10');
    content = content.replace(/text-\[#fdfdfd\]/g, 'text-[#111]');
    content = content.replace(/bg-\[#fdfdfd\] group-hover/g, 'bg-[#111] group-hover');
  } else if (file === 'src/components/Process.tsx') {
    // Process can be our 30% Secondary Color (#6B4C9A) section!
    // Leave it as is, or make sure it has bg-[#6B4C9A] text-[#fdfdfd].
    content = content.replace(/bg-\[#fdfdfd\]/g, 'bg-[#6B4C9A]');
    // Wait, it is already bg-[#6B4C9A]. So it's fine.
  } else if (file === 'src/components/Journal.tsx') {
    content = content.replace(/bg-\[#6B4C9A\]/g, 'bg-[#fdfdfd]');
    content = content.replace(/text-\[#fdfdfd\]\/80/g, 'text-[#111]/80');
    content = content.replace(/text-\[#fdfdfd\]\/60/g, 'text-[#111]/60');
    content = content.replace(/text-\[#fdfdfd\]/g, 'text-[#111]');
    content = content.replace(/border-\[#fdfdfd\]\/10/g, 'border-[#111]/10');
    content = content.replace(/bg-\[#111\]/g, 'bg-[#fdfdfd]');
  } else if (file === 'src/components/Testimonials.tsx') {
    // Maybe make Testimonials our other 30% Secondary color?
    // User wants 60-30-10. So having a couple sections as #6B4C9A is good.
    // Process and Testimonials can be #6B4C9A.
    // Wait, in Testimonials, cards are already `#6B4C9A` on hover. Let's make the background `#fdfdfd`.
  } else if (file === 'src/components/VMCourse.tsx') {
    content = content.replace(/bg-\[#111\]/g, 'bg-[#fdfdfd]');
    content = content.replace(/text-\[#fdfdfd\]\/80/g, 'text-[#111]/80');
    content = content.replace(/text-\[#fdfdfd\]\/70/g, 'text-[#111]/70');
    content = content.replace(/text-\[#fdfdfd\]\/60/g, 'text-[#111]/60');
    content = content.replace(/text-\[#fdfdfd\]/g, 'text-[#111]');
    content = content.replace(/border-\[#fdfdfd\]\/10/g, 'border-[#111]/10');
    content = content.replace(/bg-\[#fdfdfd\]\/10/g, 'bg-white');
  } else if (file === 'src/components/Footer.tsx') {
    // Footer is 10% or 30%. Let's make it #111 text #fdfdfd.
    // Keep it as is (bg-[#111]).
  }
  
  fs.writeFileSync(file, content);
}

[
  'src/App.tsx',
  'src/components/Hero.tsx',
  'src/components/Welcome.tsx',
  'src/components/Projects.tsx',
  'src/components/Philosophy.tsx',
  'src/components/Services.tsx',
  'src/components/Process.tsx',
  'src/components/Journal.tsx',
  'src/components/Testimonials.tsx',
  'src/components/VMCourse.tsx',
  'src/components/Footer.tsx'
].forEach(swapColors);
