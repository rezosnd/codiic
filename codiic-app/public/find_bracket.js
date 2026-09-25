const fs = require('fs');
const cssPath = 'd:\\codiic\\codiic-app\\public\\template_main.min.css';
let css = fs.readFileSync(cssPath, 'utf8');

const regex = /bg-[^:]*bracket-green[^\{]*\{[^\}]*\}/g;
const matches = css.match(regex);
if (matches) {
    matches.forEach(m => console.log(m));
} else {
    console.log("No bracket-green classes found");
}
