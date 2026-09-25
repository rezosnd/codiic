const fs = require('fs');

let c = fs.readFileSync('d:\\codiic\\codiic-app\\public\\template_main.min.js', 'utf8');

const targetStr = 'o=this.headline.split(" "),n=E`${o.slice(0,3).map(a=>E`<b class="animated-word"><b>${a}&nbsp;</b></b>`)}`,s=E`<b class="animated-word"><b><img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"> ${o[3]||\'\'}</b></b>${o.slice(4).map(a=>E`<b class="animated-word"><b>${a}&nbsp;</b></b>`)}`,l=E`${o.map((a,p)=>p!==2?E`<b class="animated-word"><b>${a}&nbsp;</b></b>`:E`<b class="animated-word"><b>${a} <img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"></b></b>`)}`;return E`';

const newStr = 'o=this.headline.split(" "),n=E`<b class="animated-word"><b>BUILD&nbsp;</b></b><b class="animated-word"><b>WITHOUT&nbsp;</b></b>`,s=E`<b class="animated-word"><b><img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"> CODE.&nbsp;</b></b><b class="animated-word"><b>DRAG.&nbsp;DROP.&nbsp;DONE.</b></b>`,l=E`<b class="animated-word"><b>BUILD&nbsp;</b></b><b class="animated-word"><b>WITHOUT&nbsp;</b></b><b class="animated-word"><b>CODE. <img src="/hiphip.png" alt="rocket" class="w-[88px] inline-block -mt-4"></b></b><b class="animated-word"><b>DRAG.&nbsp;DROP.&nbsp;DONE.</b></b>`;return E`';

if (c.includes(targetStr)) {
    c = c.replace(targetStr, newStr);
    fs.writeFileSync('d:\\codiic\\codiic-app\\public\\template_main.min.js', c);
    console.log('Successfully replaced logic in template_main.min.js');
} else {
    console.log('Could not find target string in template_main.min.js');
}
