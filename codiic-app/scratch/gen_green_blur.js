// Generate a perfectly blurred green radial gradient image using pure Node.js
// Output: a PPM file converted to JPG via sharp or canvas

const fs = require('fs');
const path = require('path');

const width = 1024;
const height = 1024;

// Colors: center #059669, edges #022c22
const centerR = 5, centerG = 150, centerB = 105;
const edgeR = 2, edgeG = 44, edgeB = 34;

// Create raw pixel buffer
const pixels = Buffer.alloc(width * height * 3);
const maxDist = Math.sqrt((width/2) * (width/2) + (height/2) * (height/2));

for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        const dx = x - width / 2;
        const dy = y - height / 2;
        const dist = Math.sqrt(dx * dx + dy * dy);
        // Smooth falloff with easing
        let t = Math.min(dist / (maxDist * 0.75), 1.0);
        // Apply smooth easing for extra blurriness
        t = t * t * (3 - 2 * t); // smoothstep
        
        const r = Math.round(centerR + (edgeR - centerR) * t);
        const g = Math.round(centerG + (edgeG - centerG) * t);
        const b = Math.round(centerB + (edgeB - centerB) * t);
        
        const idx = (y * width + x) * 3;
        pixels[idx] = r;
        pixels[idx + 1] = g;
        pixels[idx + 2] = b;
    }
}

// Write as PPM
const header = `P6\n${width} ${height}\n255\n`;
const ppmPath = path.join(__dirname, 'panel3_blur.ppm');
const fd = fs.openSync(ppmPath, 'w');
fs.writeSync(fd, header);
fs.writeSync(fd, pixels);
fs.closeSync(fd);
console.log('PPM written to', ppmPath);

// Try to use sharp if available, otherwise we'll use another method
try {
    const sharp = require('sharp');
    const rawBuffer = Buffer.from(pixels);
    sharp(rawBuffer, {
        raw: {
            width: width,
            height: height,
            channels: 3
        }
    })
    .blur(50)
    .jpeg({ quality: 95 })
    .toFile(path.join(__dirname, '..', 'public', 'mockups', 'panel3_abs.jpg'))
    .then(() => console.log('panel3_abs.jpg generated with sharp!'))
    .catch(err => {
        console.log('Sharp failed, trying alternative...');
        writeWithCanvas();
    });
} catch(e) {
    console.log('Sharp not available, trying alternative...');
    writeWithCanvas();
}

function writeWithCanvas() {
    try {
        const { createCanvas } = require('canvas');
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');
        
        // Create radial gradient
        const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, maxDist * 0.75);
        gradient.addColorStop(0, `rgb(${centerR},${centerG},${centerB})`);
        gradient.addColorStop(1, `rgb(${edgeR},${edgeG},${edgeB})`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
        fs.writeFileSync(path.join(__dirname, '..', 'public', 'mockups', 'panel3_abs.jpg'), buffer);
        console.log('panel3_abs.jpg generated with canvas!');
    } catch(e2) {
        console.log('Canvas not available either. Using BMP fallback...');
        writeBMP();
    }
}

function writeBMP() {
    // Write a minimal BMP file
    const fileSize = 54 + width * height * 3;
    const bmp = Buffer.alloc(fileSize);
    
    // BMP Header
    bmp.write('BM', 0);
    bmp.writeUInt32LE(fileSize, 2);
    bmp.writeUInt32LE(0, 6);
    bmp.writeUInt32LE(54, 10);
    
    // DIB Header
    bmp.writeUInt32LE(40, 14);
    bmp.writeInt32LE(width, 18);
    bmp.writeInt32LE(-height, 22); // negative for top-down
    bmp.writeUInt16LE(1, 26);
    bmp.writeUInt16LE(24, 28);
    bmp.writeUInt32LE(0, 30);
    bmp.writeUInt32LE(width * height * 3, 34);
    
    // Pixel data (BGR format for BMP)
    let offset = 54;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 3;
            bmp[offset++] = pixels[idx + 2]; // B
            bmp[offset++] = pixels[idx + 1]; // G
            bmp[offset++] = pixels[idx];     // R
        }
    }
    
    const bmpPath = path.join(__dirname, 'panel3_blur.bmp');
    fs.writeFileSync(bmpPath, bmp);
    console.log('BMP written to', bmpPath);
    console.log('NOTE: You need to manually convert this BMP to JPG, or install sharp/canvas');
}
