const fs = require('fs');
const txt = fs.readFileSync('d:\\codiic\\codiic-app\\public\\svg_matches.txt', 'utf8');

const svgs = txt.split('\n\n');
const colors = new Set();

svgs.forEach(svg => {
    try {
        const decoded = decodeURIComponent(svg);
        const colorMatches = decoded.match(/#([0-9a-fA-F]{3,6})/g);
        if (colorMatches) {
            colorMatches.forEach(c => colors.add(c.toLowerCase()));
        }
    } catch (e) {
        // Ignore decode errors for malformed parts
    }
});

console.log(Array.from(colors).join('\n'));
