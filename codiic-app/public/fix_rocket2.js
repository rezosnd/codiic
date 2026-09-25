const fs = require('fs');

const templates = [
  'd:\\codiic\\codiic-app\\public\\template_main.js',
  'd:\\codiic\\codiic-app\\public\\template_main.min.js'
];

templates.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  const oldLogicRegex = /o=this\.headline\.split\(" "\),n=[^;]+,l=E`\$\{o\.map\(\(a,p\)=>p!==2\?E`<b class="animated-word"><b>\$\{a\}&nbsp;<\/b><\/b>`:E`<b class="animated-word"><b>\$\{a\} <img src="\/hiphip\.png" alt="rocket" class="w-\[88px\] inline-block -mt-4"><\/b><\/b>`\)\}`;/;
  
  const newLogic = `o=this.headline.split(" "),n=E\`\${o.slice(0,3).map(a=>E\`<b class="animated-word"><b>\${a}&nbsp;</b></b>\`)}\`,s=E\`<b class="animated-word"><b><img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"> \${o[3]||''}</b></b>\${o.slice(4).map(a=>E\`<b class="animated-word"><b>\${a}&nbsp;</b></b>\`)}\`,l=E\`<b class="animated-word text-[#08084F]"><b>BUILD&nbsp;</b></b><b class="animated-word text-[#08084F]"><b>WITHOUT&nbsp;CODE. <img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"></b></b><b class="animated-word text-[#08084F]"><b>DRAG.&nbsp;DROP.&nbsp;DONE.</b></b>\`;`;
  
  if (content.match(oldLogicRegex)) {
    content = content.replace(oldLogicRegex, newLogic);
    console.log('Regex matched and replaced in ' + file);
  } else {
    // fallback string replacement
    let splitStr = 'l=E`${o.map((a,p)=>p!==2?E`<b class="animated-word"><b>${a}&nbsp;</b></b>`:E`<b class="animated-word"><b>${a} <img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"></b></b>`)}`;';
    if (content.includes(splitStr)) {
        content = content.replace(splitStr, 'l=E`<b class="animated-word text-[#08084F]"><b>BUILD&nbsp;</b></b><b class="animated-word text-[#08084F]"><b>WITHOUT&nbsp;CODE. <img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"></b></b><b class="animated-word text-[#08084F]"><b>DRAG.&nbsp;DROP.&nbsp;DONE.</b></b>`;');
        console.log('String match replaced in ' + file);
    } else {
        console.log('Could not find logic in ' + file);
    }
  }
  
  fs.writeFileSync(file, content);
});
