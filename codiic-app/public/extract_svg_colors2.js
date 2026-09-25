const fs = require('fs');
const cssPath = 'd:\\codiic\\codiic-app\\public\\template_main.min.css';
let css = fs.readFileSync(cssPath, 'utf8');

// Match anything inside url("...") or url('...') or url(...)
const regex = /url\((["']?)(data:image\/svg\+xml[^)]+)\1\)/g;
let match;
const svgs = [];

while ((match = regex.exec(css)) !== null) {
    svgs.push(match[2]);
}

const colors = new Set();
svgs.forEach(svg => {
    // Look for %23 followed by 3 to 6 hex chars
    const colorMatches = svg.match(/%23([0-9a-fA-F]{3,6})/g);
    if (colorMatches) {
        colorMatches.forEach(c => colors.add(c.toLowerCase()));
    }
});

console.log('Hex colors found in SVGs:');
console.log(Array.from(colors).join('\n'));
