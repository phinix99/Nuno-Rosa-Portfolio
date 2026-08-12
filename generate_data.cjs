const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(process.cwd(), 'public', 'portfolio');
const categories = fs.readdirSync(portfolioDir).filter(f => fs.statSync(path.join(portfolioDir, f)).isDirectory());

const portfolioData = {};

categories.forEach(category => {
  const images = [];
  
  function scanDir(dir, relPath) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        scanDir(fullPath, path.join(relPath, file));
      } else if (file.match(/\.(jpg|jpeg|png|webp|avif)$/i)) {
        images.push('/portfolio/' + relPath.replace(/\\/g, '/') + '/' + file);
      }
    });
  }
  
  scanDir(path.join(portfolioDir, category), category);
  
  let key = category;
  if (category.includes('Conceptual Design') || category.includes('VISUAL SIGNAGE') || category.includes('CONCEPTUAL DESIGN')) key = 'CONCEPT & SIGNAGE';
  else if (category.includes('E-Commerce')) key = 'E-COMMERCE & STYLING';
  else if (category.includes('Events')) key = 'EVENTS & Brand Exhibition';
  else if (category.includes('Press')) key = 'PRESS & GUEST SPEAKER';
  else if (category.includes('VISUAL MERCHANDISING')) key = 'VISUAL MERCHANDISING';

  if (!portfolioData[key]) portfolioData[key] = [];
  portfolioData[key].push(...images);
});

const output = "export const portfolioData: Record<string, string[]> = " + JSON.stringify(portfolioData, null, 2) + ";";
fs.mkdirSync(path.join(process.cwd(), 'src', 'data'), { recursive: true });
fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'portfolio.ts'), output);
console.log('Portfolio data generated successfully.');
