const fs = require('fs');
const cssPath = 'd:\\codiic\\codiic-app\\public\\template_main.min.css';
let css = fs.readFileSync(cssPath, 'utf8');

const regex = /data:image\/svg\+xml[^"'\)]+/g;
const matches = css.match(regex);

if (matches) {
    fs.writeFileSync('d:\\codiic\\codiic-app\\public\\svg_matches.txt', matches.join('\n\n'));
    console.log('Saved to svg_matches.txt');
}
