const fs = require('fs');
const https = require('https');

const brands = [
  { name: 'mango', domain: 'mango.com' },
  { name: 'benetton', domain: 'benetton.com' },
  { name: 'centralmodels', domain: 'centralmodels.pt' },
  { name: 'hugoboss', domain: 'hugoboss.com' },
  { name: 'lacoste', domain: 'lacoste.com' },
  { name: 'bicester', domain: 'thebicestercollection.com' },
  { name: 'chalhoub', domain: 'chalhoubgroup.com' },
  { name: 'ca', domain: 'c-and-a.com' },
  { name: 'veromoda', domain: 'veromoda.com' },
  { name: 'jackjones', domain: 'jackjones.com' },
  { name: 'trends', domain: 'reliancetrends.com' },
  { name: 'yousta', domain: 'relianceretail.com' }
];

brands.forEach(b => {
  const file = fs.createWriteStream(`public/brands/${b.name}.png`);
  https.get(`https://logo.clearbit.com/${b.domain}?size=200`, response => {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${b.name}`);
      });
    } else {
      console.log(`Failed to download ${b.name}: ${response.statusCode}`);
      file.close();
      fs.unlinkSync(`public/brands/${b.name}.png`);
    }
  }).on('error', err => {
    console.error(`Error downloading ${b.name}: ${err.message}`);
    fs.unlinkSync(`public/brands/${b.name}.png`);
  });
});
