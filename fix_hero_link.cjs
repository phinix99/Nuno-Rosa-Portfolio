const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const target = `          <a href="#press-speaker" className="hover:text-[#6B4C9A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#6B4C9A] hover:after:w-full after:transition-all after:duration-300 pb-1 text-center">
            Press & Guest Speaker
          </a>\n`;

content = content.replace(target, '');
fs.writeFileSync('src/components/Hero.tsx', content);
