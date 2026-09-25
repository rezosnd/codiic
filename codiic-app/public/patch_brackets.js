const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadAndPatch = (url, filename) => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      // Replace the green color with Primary Blue
      // Zipcio green is #56D964 or #56d964 or similar
      const patched = data.replace(/#56[dD]964/g, '#356BC8').replace(/%2356d964/gi, '%23356BC8');
      fs.writeFileSync(path.join('d:\\codiic\\codiic-app\\public', filename), patched);
      console.log(`Saved and patched ${filename}`);
    });
  });
};

downloadAndPatch('https://43675023.fs1.hubspotusercontent-na1.net/hubfs/43675023/raw_assets/public/ZipcioTheme/img/left-bracket.svg', 'left-bracket.svg');
downloadAndPatch('https://43675023.fs1.hubspotusercontent-na1.net/hubfs/43675023/raw_assets/public/ZipcioTheme/img/right-bracket.svg', 'right-bracket.svg');

// Let's also patch the JS files
const files = [
  'd:\\codiic\\codiic-app\\public\\template_main.js',
  'd:\\codiic\\codiic-app\\public\\template_main.min.js'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\/\/[^"]*left-bracket\.svg/g, '/left-bracket.svg');
  content = content.replace(/\/\/[^"]*right-bracket\.svg/g, '/right-bracket.svg');
  fs.writeFileSync(file, content);
});
console.log('Updated JS files to point to local SVGs');
