const fs = require('fs');
const files = [
  'd:\\codiic\\codiic-app\\public\\template_main.min.css',
  'd:\\codiic\\codiic-app\\public\\template_main.js',
  'd:\\codiic\\codiic-app\\public\\template_main.min.js'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/%2356d964/gi, '%23356BC8');
  content = content.replace(/%231c211c/gi, '%2308084F');
  content = content.replace(/%2309340e/gi, '%2308084F');
  fs.writeFileSync(file, content);
});
console.log('Replaced encoded hexes!');
