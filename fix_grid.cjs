const fs = require('fs');
let content = fs.readFileSync('src/pages/Portfolio.tsx', 'utf8');

const target = `className="border-[12px] md:border-[24px] border-[#111] p-2 md:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 bg-[#fdfdfd]"`;

const replace = `className={\`border-[12px] md:border-[24px] border-[#111] p-2 md:p-4 grid grid-cols-1 gap-2 md:gap-4 bg-[#fdfdfd] \${
                section.items.length === 2 ? 'md:grid-cols-2 lg:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'
              }\`}`;

content = content.replace(target, replace);
fs.writeFileSync('src/pages/Portfolio.tsx', content);
