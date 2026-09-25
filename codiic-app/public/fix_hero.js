const fs = require('fs');
const files = [
  'd:\\codiic\\codiic-app\\public\\template_main.js',
  'd:\\codiic\\codiic-app\\public\\template_main.min.js'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Change scale and max width in hero container
  // From: flex justify-center flex-wrap relative w-screen max-w-[1000px] 3xl:max-w-[1850px] h-min xl:scale-125 3xl:scale-100
  // To: flex justify-center flex-wrap relative w-screen max-w-[1400px] 3xl:max-w-[1850px] h-min xl:scale-100 3xl:scale-100
  content = content.replace(/max-w-\[1000px\]([^]*?)xl:scale-125/g, 'max-w-[1400px]$1xl:scale-100');
  
  // 2. Fix the placeholder loop for GSAP to handle 7 cards instead of 4
  // [0,5,-5,0].forEach
  content = content.replace(/\[0,5,-5,0\]\.forEach/g, '[0,5,-5,0,-5,5,0].forEach');
  
  fs.writeFileSync(file, content);
});

console.log('Fixed hero layout and animation for 7 cards!');
