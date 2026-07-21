const fs = require('fs');
let content = fs.readFileSync('src/pages/Portfolio.tsx', 'utf8');

const target = `<div className="hidden lg:flex items-center gap-6 font-sans text-[10px] font-bold tracking-widest uppercase">
          {portfolioData.map((section, idx) => (
            <Link to="/" className="hover:text-[#6B4C9A] transition-colors">
            WELCOME
          </Link>
          {portfolioData.map((section, idx) => (
            <a 
              key={idx} 
              href={\`#\${section.slug}\`}
              className="hover:text-[#6B4C9A] transition-colors"
            >
              {section.category}
            </a>
          ))}
        </div>`;

const replace = `<div className="hidden lg:flex items-center gap-6 font-sans text-[10px] font-bold tracking-widest uppercase">
          <Link to="/" className="hover:text-[#6B4C9A] transition-colors">
            WELCOME
          </Link>
          {portfolioData.map((section, idx) => (
            <a 
              key={idx} 
              href={\`#\${section.slug}\`}
              className="hover:text-[#6B4C9A] transition-colors"
            >
              {section.category}
            </a>
          ))}
        </div>`;

content = content.replace(target, replace);
fs.writeFileSync('src/pages/Portfolio.tsx', content);
