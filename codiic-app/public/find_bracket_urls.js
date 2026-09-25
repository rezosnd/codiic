const fs = require('fs');
const js = fs.readFileSync('d:\\codiic\\codiic-app\\public\\template_main.js', 'utf8');

const regex = /\/\/[^"'\s]*hubspot[^"'\s]*bracket[^"'\s]*\.svg/gi;
const matches = js.match(regex);
console.log([...new Set(matches)]);
