const fs = require('fs');
const path = require('path');

const filesToScale = [
  'src/app/CustomHero.jsx'
];

const regex = /(:|\s|\()(-?[0-9]+(?:\.[0-9]+)?)(px|rem|em)(;|}|!|\)|,|\s)/g;

function scaleValue(match, p1, p2, p3, p4) {
  let val = parseFloat(p2);
  
  if (p3 === 'px' && Math.abs(val) <= 2) {
    return match;
  }
  if ((p3 === 'rem' || p3 === 'em') && Math.abs(val) <= 0.125) {
    return match;
  }
  
  let scaledVal = val * 0.9;
  scaledVal = Number(scaledVal.toFixed(3));
  
  return `${p1}${scaledVal}${p3}${p4}`;
}

filesToScale.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  let newContent = content.replace(regex, scaleValue);
  newContent = newContent.replace(regex, scaleValue);
  
  // also scale manual diff numbers
  newContent = newContent.replace(/diff \* -25/g, 'diff * -22.5');
  newContent = newContent.replace(/diff \* 25/g, 'diff * 22.5');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Scaled layout values in ${file}`);
  } else {
    console.log(`No values scaled in ${file}`);
  }
});
