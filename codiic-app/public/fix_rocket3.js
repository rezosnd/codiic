const fs = require('fs');

const templates = [
  'd:\\codiic\\codiic-app\\public\\template_main.js',
  'd:\\codiic\\codiic-app\\public\\template_main.min.js'
];

templates.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // The current logic in the files is what we set in fix_rocket2.js
  const searchPattern = /o=this\.headline\.split\(" "\),n=[^;]+,l=E`<b class="animated-word text-\[#08084F\]"><b>BUILD&nbsp;<\/b><\/b><b class="animated-word text-\[#08084F\]"><b>WITHOUT&nbsp;CODE\. <img src="\/hiphip\.png" alt="rocket" class="w-\[88px\] inline-block -mt-4"><\/b><\/b><b class="animated-word text-\[#08084F\]"><b>DRAG\.&nbsp;DROP\.&nbsp;DONE\.<\/b><\/b>`;/;
  
  // New logic: 4 lines, default color (black, matching Zipcio)
  const newLogic = `o=this.headline.split(" "),n=E\`<b class="animated-word"><b>BUILD&nbsp;</b></b><b class="animated-word"><b>WITHOUT&nbsp;</b></b>\`,s=E\`<b class="animated-word"><b><img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"> CODE.&nbsp;</b></b><b class="animated-word"><b>DRAG.&nbsp;DROP.&nbsp;DONE.</b></b>\`,l=E\`<b class="animated-word"><b>BUILD&nbsp;</b></b><b class="animated-word"><b>WITHOUT&nbsp;</b></b><b class="animated-word"><b>CODE. <img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"></b></b><b class="animated-word"><b>DRAG.&nbsp;DROP.&nbsp;DONE.</b></b>\`;`;
  
  if (content.match(searchPattern)) {
      content = content.replace(searchPattern, newLogic);
      console.log('Regex matched and replaced in ' + file);
  } else {
      // Manual fallback
      const fallbackSplit = 'l=E`<b class="animated-word text-[#08084F]"><b>BUILD&nbsp;</b></b><b class="animated-word text-[#08084F]"><b>WITHOUT&nbsp;CODE. <img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"></b></b><b class="animated-word text-[#08084F]"><b>DRAG.&nbsp;DROP.&nbsp;DONE.</b></b>`;';
      const fallbackNew = 'l=E`<b class="animated-word"><b>BUILD&nbsp;</b></b><b class="animated-word"><b>WITHOUT&nbsp;</b></b><b class="animated-word"><b>CODE. <img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"></b></b><b class="animated-word"><b>DRAG.&nbsp;DROP.&nbsp;DONE.</b></b>`;';
      
      const fallbackNSplit = 'n=E`${o.slice(0,3).map(a=>E`<b class="animated-word"><b>${a}&nbsp;</b></b>`)}`,s=E`<b class="animated-word"><b><img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"> ${o[3]||\'\'}</b></b>${o.slice(4).map(a=>E`<b class="animated-word"><b>${a}&nbsp;</b></b>`)}`,';
      const fallbackNNew = 'n=E`<b class="animated-word"><b>BUILD&nbsp;</b></b><b class="animated-word"><b>WITHOUT&nbsp;</b></b>`,s=E`<b class="animated-word"><b><img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"> CODE.&nbsp;</b></b><b class="animated-word"><b>DRAG.&nbsp;DROP.&nbsp;DONE.</b></b>`,';
      
      if (content.includes(fallbackSplit) && content.includes(fallbackNSplit)) {
          content = content.replace(fallbackSplit, fallbackNew).replace(fallbackNSplit, fallbackNNew);
          console.log('String match replaced in ' + file);
      } else {
          console.log('Could not find logic in ' + file);
      }
  }
  
  fs.writeFileSync(file, content);
});
