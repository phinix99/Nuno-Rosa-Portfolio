const fs = require('fs');
let content = fs.readFileSync('src/pages/Portfolio.tsx', 'utf8');

const target = `{ title: "Interviews", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405555/1_224_yf8cfh.jpg" }
    ]`;
const replace = `{ title: "Interviews", image: "https://res.cloudinary.com/dtom0ivbp/image/upload/v1784405555/1_224_yf8cfh.jpg" },
      { title: "Public Engagements", image: "https://static.wixstatic.com/media/9e4437_c7516a73c7a74931a566495ddbea2df5~mv2.jpg/v1/fill/w_1463,h_787,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1180mm%20X%20635mm%20(1)_edited.jpg" }
    ]`;

content = content.replace(target, replace);
fs.writeFileSync('src/pages/Portfolio.tsx', content);
