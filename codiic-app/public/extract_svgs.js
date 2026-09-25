const fs = require('fs');
const cssPath = 'd:\\codiic\\codiic-app\\public\\template_main.min.css';
let css = fs.readFileSync(cssPath, 'utf8');

const regex = /data:image\/svg\+xml[^"']+/g;
const matches = css.match(regex);

if (matches) {
    matches.forEach(m => {
        // Log if it contains a green color like %2356D964 or %234ADE80 or any green hex
        if (m.toLowerCase().includes('%2356d964') || m.toLowerCase().includes('%2300ff66') || m.toLowerCase().includes('56d964')) {
            console.log('Found green SVG data URI!');
        }
        
        // Let's also check for other hex colors in the URI
        const hexMatch = m.match(/%23([0-9a-fA-F]{6})/g);
        if (hexMatch) {
            console.log('Hex in URI:', hexMatch.join(', '));
        }
    });
}
