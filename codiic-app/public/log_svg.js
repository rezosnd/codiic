const fs = require('fs');
const txt = fs.readFileSync('d:\\codiic\\codiic-app\\public\\svg_matches.txt', 'utf8');
const svgs = txt.split('\n\n');
if (svgs.length > 0) {
    console.log(decodeURIComponent(svgs[0]));
}
