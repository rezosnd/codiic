const fs = require('fs');

// 1. Update page.js
let pageFile = 'd:\\codiic\\codiic-app\\src\\app\\page.js';
let pageContent = fs.readFileSync(pageFile, 'utf8');
pageContent = pageContent.replace(/headline="Launch faster\. Sell smarter\."/g, 'headline="BUILD WITHOUT CODE. DRAG. DROP. DONE."');
fs.writeFileSync(pageFile, pageContent);
console.log('Updated page.js');

// 2. Update template_main.js and template_main.min.js
const templates = [
  'd:\\codiic\\codiic-app\\public\\template_main.js',
  'd:\\codiic\\codiic-app\\public\\template_main.min.js'
];

templates.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove stray closing tags in mobile steroids-anim
  content = content.replace(/\$\{n\} \$\{s\}<\/b><\/b>/g, '${n} ${s}');
  
  // Replace n, s, l assignment block
  // Original:
  // o=this.headline.split(" "),n=E`${o.map((a,p)=>{if(p<=2)return E`<b class="animated-word"><b>${a}</b></b>`})}`,s=E`<b class="animated-word"><b>${o[2]} <img src="${"/hiphip.png"}" alt="rocket" class="w-[88px] inline-block -mt-4"> ${o[3]}</b></b>`,l=E`${o.map((a,p)=>2!=p?E`<b class="animated-word"><b>${a}&nbsp;</b></b>`:E`<b class="animated-word"><b>${a} <img src="${"/hiphip.png"}" alt="rocket" class="w-[88px] inline-block -mt-4"></b></b>`)}`;
  
  const searchPattern = /o=this\.headline\.split\(" "\),n=E`\$\{o\.map\(\(a,p\)=>\{if\(p<=2\)return E`<b class="animated-word"><b>\$\{a\}<\/b><\/b>`\}\)\}`,s=E`<b class="animated-word"><b>\$\{o\[2\]\} <img src="\$\{"\/hiphip\.png"\}" alt="rocket" class="w-\[88px\] inline-block -mt-4"> \$\{o\[3\]\}<\/b><\/b>`,l=E`\$\{o\.map\(\(a,p\)=>2!=p\?E`<b class="animated-word"><b>\$\{a\}&nbsp;<\/b><\/b>`:E`<b class="animated-word"><b>\$\{a\} <img src="\$\{"\/hiphip\.png"\}" alt="rocket" class="w-\[88px\] inline-block -mt-4"><\/b><\/b>`\)\}`;/;
  
  // Wait, template_main.js has EXACTLY:
  // o=this.headline.split(" "),n=E`${o.map((a,p)=>{if(p<=2)return E`<b class="animated-word"><b>${a}</b></b>`})}`,s=E`<b class="animated-word"><b>${o[2]} <img src="${"/hiphip.png"}" alt="rocket" class="w-[88px] inline-block -mt-4"> ${o[3]}</b></b>`,l=E`${o.map((a,p)=>2!=p?E`<b class="animated-word"><b>${a}&nbsp;</b></b>`:E`<b class="animated-word"><b>${a} <img src="${"/hiphip.png"}" alt="rocket" class="w-[88px] inline-block -mt-4"></b></b>`)}`;

  const newLogic = `o=this.headline.split(" "),n=E\`\${o.slice(0,3).map(a=>E\`<b class="animated-word"><b>\${a}&nbsp;</b></b>\`)}\`,s=E\`<b class="animated-word"><b><img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"> \${o[3]||''}</b></b>\${o.slice(4).map(a=>E\`<b class="animated-word"><b>\${a}&nbsp;</b></b>\`)}\`,l=E\`\${o.map((a,p)=>p!==2?E\`<b class="animated-word"><b>\${a}&nbsp;</b></b>\`:E\`<b class="animated-word"><b>\${a} <img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"></b></b>\`)}\`;`;
  
  // Use string replace instead of regex to avoid escaping nightmares
  let splitParts = content.split('o=this.headline.split(" "),n=E`${o.map((a,p)=>{if(p<=2)return E`<b class="animated-word"><b>${a}</b></b>`})}`,s=E`<b class="animated-word"><b>${o[2]} <img src="${"/hiphip.png"}" alt="rocket" class="w-[88px] inline-block -mt-4"> ${o[3]}</b></b>`,l=E`${o.map((a,p)=>2!=p?E`<b class="animated-word"><b>${a}&nbsp;</b></b>`:E`<b class="animated-word"><b>${a} <img src="${"/hiphip.png"}" alt="rocket" class="w-[88px] inline-block -mt-4"></b></b>`)}`;');
  
  if (splitParts.length > 1) {
    content = splitParts.join(newLogic);
    console.log('Replaced JS logic in ' + file);
  } else {
    // try removing newline or extra spaces that minification might have caused
    console.log('Could not match original string in ' + file + ' - using regex fallback');
    const regex = /o=this\.headline\.split\(" "\),n=[^;]+;/;
    content = content.replace(regex, newLogic);
  }
  
  fs.writeFileSync(file, content);
});

console.log('Completed all updates');
