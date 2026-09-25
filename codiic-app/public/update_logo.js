const fs = require('fs');

const files = [
  'd:\\codiic\\codiic-app\\public\\template_main.js',
  'd:\\codiic\\codiic-app\\public\\template_main.min.js'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace the header logo.svg with the png
  content = content.replace(/"\/logo\.svg"/g, '"https://codiic.com/assets/img/logo.png"');
  content = content.replace(/"\/logo-light\.svg"/g, '"https://codiic.com/assets/img/logo.png"');
  
  // Update the loader logo height from 24px to 40px
  content = content.replace(/style="height: 24px; object-fit: contain;"/g, 'style="height: 48px; object-fit: contain;"');
  
  fs.writeFileSync(file, content);
});

console.log('Updated logo and loader size!');
