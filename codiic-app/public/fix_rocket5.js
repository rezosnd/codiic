const fs = require('fs');

const templates = [
  'd:\\codiic\\codiic-app\\public\\template_main.js',
  'd:\\codiic\\codiic-app\\public\\template_main.min.js'
];

templates.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  const searchPattern = /o=this\.headline\.split\(" "\),n=E`<b class="animated-word"><b>BUILD&nbsp;<\/b><\/b><b class="animated-word"><b>WITHOUT&nbsp;<\/b><\/b>`,s=E`<b class="animated-word"><b><img src="\/hiphip\.png" alt="rocket" class="w-\[88px\] inline-block -mt-4"> CODE\.&nbsp;<\/b><\/b><b class="animated-word"><b>DRAG\.&nbsp;DROP\.&nbsp;DONE\.<\/b><\/b>`,l=E`<b class="animated-word"><b>BUILD&nbsp;<\/b><\/b><b class="animated-word"><b>WITHOUT&nbsp;<\/b><\/b><b class="animated-word"><b>CODE\. <img src="\/hiphip\.png" alt="rocket" class="w-\[88px\] inline-block -mt-4"><\/b><\/b><b class="animated-word"><b>DRAG\.&nbsp;DROP\.&nbsp;DONE\.<\/b><\/b>`;/;
  
  const newLogic = `o=this.headline.split(" "),n=E\`<b class="animated-word"><b>BUILD&nbsp;</b></b><b class="animated-word"><b>WITHOUT&nbsp;</b></b>\`,s=E\`<b class="animated-word"><b><span class="inline-block bg-[#4ade80] rounded-[24px] px-4 py-2 -mt-4"><img src="/hiphip.png" alt="rocket" class="w-[88px] h-auto"></span> CODE.&nbsp;</b></b><b class="animated-word"><b>DRAG.&nbsp;DROP.&nbsp;DONE.</b></b>\`,l=E\`<b class="animated-word"><b>BUILD&nbsp;</b></b><b class="animated-word"><b>WITHOUT&nbsp;</b></b><b class="animated-word"><b>CODE. <span class="inline-block bg-[#4ade80] rounded-[24px] px-4 py-2 -mt-4"><img src="/hiphip.png" alt="rocket" class="w-[88px] h-auto"></span></b></b><b class="animated-word"><b>DRAG.&nbsp;DROP.&nbsp;DONE.</b></b>\`;`;
  
  if (content.match(searchPattern)) {
      content = content.replace(searchPattern, newLogic);
      console.log('Regex matched and replaced in ' + file);
  } else {
      console.log('Could not find target string in ' + file);
  }
  
  fs.writeFileSync(file, content);
});
