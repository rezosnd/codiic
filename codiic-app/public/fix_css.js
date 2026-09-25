const fs = require('fs');
let css = fs.readFileSync('d:\\codiic\\codiic-app\\public\\template_main.min.css', 'utf8');

// Remove all our previously appended override rules at the end
const splitMarker = '/* ===CODIIC RESPONSIVE OVERRIDES=== */';
const idx = css.indexOf(splitMarker);
if (idx !== -1) css = css.substring(0, idx);

// Append fresh, correct rules
const overrides = `
/* ===CODIIC RESPONSIVE OVERRIDES=== */

/* The hero mega-heading */
@media (min-width:1024px){
  .mega-heading{font-size:clamp(80px, 12vw, 300px)!important;line-height:0.88!important}
}

/* The steroids-anim section - 4 lines stacked vertically, must fit all rows in viewport */
@media (min-width:1024px){
  .steroids-anim.desktop{font-size:clamp(60px, 20vh, 220px)!important;line-height:0.88!important}
  .steroids-anim .animated-word{display:block!important}
}

@media (min-width:1920px){
  .mega-heading{font-size:clamp(150px, 14vw, 350px)!important}
  .steroids-anim.desktop{font-size:clamp(100px, 22vh, 240px)!important}
}
`;

css += overrides;
fs.writeFileSync('d:\\codiic\\codiic-app\\public\\template_main.min.css', css);
console.log('CSS overrides updated successfully');
