const fs = require('fs');
const cssPath = 'd:\\codiic\\codiic-app\\public\\template_main.min.css';
let css = fs.readFileSync(cssPath, 'utf8');

const regex = /data:image\/svg\+xml[^"'\)]+/g;
const matches = css.match(regex);

if (matches) {
    matches.forEach(m => {
        console.log(m.substring(0, 100)); // Log first 100 chars
    });
}
