"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Showreel() {
  const canvasRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading assets...");
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const images = useRef({});
  const audioContextRef = useRef(null);
  const audioBufferRef = useRef(null);
  const tl = useRef(null);

  // The animation state object
  const state = useRef({
    // Intro
    logoScale: 3, logoOp: 0,
    // Build
    buildY: -500, buildOp: 0,
    withoutX: -500, withoutOp: 0,
    codeX: 500, codeOp: 0,
    // Images
    setupImgY: 1920, setupImgOp: 0, setupImgScale: 1,
    payImgY: 1920, payImgOp: 0, payImgScale: 1,
    customImgY: 1920, customImgOp: 0, customImgScale: 1,
    launchImgScale: 0, launchImgOp: 0,
    // Drag Drop Done
    dragScale: 5, dragOp: 0,
    dropScale: 5, dropOp: 0,
    doneScale: 5, doneOp: 0,
    // Social
    stores: 0, storesOp: 0,
    // Outro
    outroScale: 0.5, outroOp: 0,
    bgColor: "#050505",
    // Shockwave
    swScale: 0, swOp: 0,
    // Screen shake
    shakeX: 0, shakeY: 0
  }).current;

  // Preload all assets
  useEffect(() => {
    const loadAssets = async () => {
      const imageUrls = {
        logo: "/logo-light.svg",
        setup: "/store_setup.png",
        pay: "/connnect_payment.png",
        custom: "/cutomize_design.png",
        launch: "/launch_store.png"
      };

      let loadedCount = 0;
      const total = Object.keys(imageUrls).length + 1; // +1 for audio

      // Load images
      for (const [key, url] of Object.entries(imageUrls)) {
        const img = new Image();
        img.src = url;
        await new Promise((resolve) => {
          img.onload = () => {
            images.current[key] = img;
            loadedCount++;
            setLoadingText(`Loaded image: ${key} (${loadedCount}/${total})`);
            resolve();
          };
          img.onerror = () => {
             console.warn(`Failed to load ${url}`);
             resolve(); // continue anyway
          };
        });
      }

      // Load audio
      try {
        const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3";
        const response = await fetch(audioUrl);
        const arrayBuffer = await response.arrayBuffer();
        
        // We need a user gesture to create AudioContext usually, but we can just initialize it on click.
        // For now, just store the buffer.
        audioBufferRef.current = arrayBuffer;
        loadedCount++;
        setLoadingText(`Loaded audio (${loadedCount}/${total})`);
      } catch(e) {
        console.error("Audio load failed", e);
      }

      setImagesLoaded(true);
      setLoadingText("Ready to generate perfect video!");
      
      initTimeline();
    };

    loadAssets();
    
    // Clean up ticker on unmount
    return () => {
      gsap.ticker.remove(renderCanvas);
    };
  }, []);

  const initTimeline = () => {
    tl.current = gsap.timeline({ paused: true });

    // 0-3s: Intro
    tl.current.to(state, { logoScale: 1, logoOp: 1, duration: 1.5, ease: "power4.out" }, 0);
    tl.current.to(state, { logoScale: 1.2, duration: 1.5, ease: "sine.inOut" }, 1.5);
    tl.current.to(state, { logoOp: 0, duration: 0.3 }, 3);

    // 3-8s: The Process & Images
    tl.current.to(state, { buildY: 0, buildOp: 1, duration: 0.5, ease: "bounce.out" }, 3.2);
    tl.current.to(state, { withoutX: 0, withoutOp: 1, duration: 0.5, ease: "back.out(1.5)" }, 3.4);
    tl.current.to(state, { codeX: 0, codeOp: 1, duration: 0.5, ease: "back.out(1.5)" }, 3.6);
    
    tl.current.to(state, { swScale: 5, swOp: 1, duration: 0.5 }, 3.6);
    tl.current.to(state, { swOp: 0, duration: 0.3 }, 4.1);

    // Slide up images in background
    tl.current.to(state, { setupImgY: 400, setupImgOp: 0.8, duration: 1, ease: "power3.out" }, 4.0);
    tl.current.to(state, { payImgY: 1000, payImgOp: 0.8, duration: 1, ease: "power3.out" }, 4.5);
    
    tl.current.to(state, { buildOp: 0, withoutOp: 0, codeOp: 0, setupImgOp: 0, payImgOp: 0, duration: 0.5 }, 7.5);

    // 8-14s: Drag. Drop. Done.
    tl.current.to(state, { dragScale: 1, dragOp: 1, duration: 0.4, ease: "power3.in" }, 8);
    tl.current.to(state, { shakeX: 20, shakeY: 20, duration: 0.05, yoyo: true, repeat: 5 }, 8.4);
    
    tl.current.to(state, { dropScale: 1, dropOp: 1, duration: 0.4, ease: "power3.in" }, 9);
    tl.current.to(state, { shakeX: -20, shakeY: 20, duration: 0.05, yoyo: true, repeat: 5 }, 9.4);
    
    tl.current.to(state, { doneScale: 1, doneOp: 1, duration: 0.4, ease: "power3.in" }, 10);
    tl.current.to(state, { shakeX: 25, shakeY: -25, duration: 0.05, yoyo: true, repeat: 7 }, 10.4);

    tl.current.to(state, { customImgY: 600, customImgOp: 1, customImgScale: 1.2, duration: 1.5, ease: "expo.out" }, 11);
    tl.current.to(state, { dragOp: 0, dropOp: 0, doneOp: 0, customImgOp: 0, duration: 0.5 }, 13.5);

    // 14-20s: Flash Features & Launch
    tl.current.to(state, { bgColor: "#6B21A8", duration: 0.2 }, 14);
    tl.current.to(state, { bgColor: "#16A34A", duration: 0.2 }, 15.5);
    tl.current.to(state, { bgColor: "#EA580C", duration: 0.2 }, 17);
    
    tl.current.to(state, { launchImgScale: 1, launchImgOp: 1, duration: 0.8, ease: "back.out(2)" }, 17);
    tl.current.to(state, { launchImgScale: 1.5, duration: 2 }, 17.8);
    tl.current.to(state, { launchImgOp: 0, duration: 0.5 }, 19.5);
    tl.current.to(state, { bgColor: "#050505", duration: 0.5 }, 19.5);

    // 20-25s: Social Proof
    tl.current.to(state, { stores: 5000, duration: 2.5, ease: "power2.out" }, 21);
    tl.current.to(state, { storesOp: 1, duration: 0.5 }, 20.5);
    tl.current.to(state, { storesOp: 0, duration: 0.5 }, 25);

    // 25-30s: Outro
    tl.current.to(state, { outroScale: 1, outroOp: 1, duration: 1, ease: "elastic.out(1, 0.5)" }, 26);
    
    // Add canvas render to GSAP ticker
    gsap.ticker.add(renderCanvas);
  };

  const renderCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;  // 1080
    const h = canvas.height; // 1920

    // Clear and draw background
    ctx.fillStyle = state.bgColor;
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    // Apply screen shake globally
    ctx.translate(state.shakeX, state.shakeY);

    // Helper to draw centered text
    const drawText = (text, x, y, size, color, weight = "900", op = 1, scale = 1) => {
      if (op <= 0) return;
      ctx.save();
      ctx.globalAlpha = op;
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.font = `${weight} ${size}px Arial`;
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 0, 0);
      ctx.restore();
    };

    // Helper to draw centered image
    const drawImg = (imgKey, x, y, op = 1, scale = 1, width = null) => {
      const img = images.current[imgKey];
      if (!img || op <= 0) return;
      ctx.save();
      ctx.globalAlpha = op;
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      const drawW = width || img.width;
      const drawH = width ? (width / img.width) * img.height : img.height;
      ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
      ctx.restore();
    };

    // 1. Images
    drawImg('setup', w/2, state.setupImgY, state.setupImgOp, state.setupImgScale, 800);
    drawImg('pay', w/2, state.payImgY, state.payImgOp, state.payImgScale, 800);
    drawImg('custom', w/2, state.customImgY, state.customImgOp, state.customImgScale, 800);
    drawImg('launch', w/2, h/2, state.launchImgOp, state.launchImgScale, 800);

    // 2. Shockwave
    if (state.swOp > 0) {
      ctx.save();
      ctx.globalAlpha = state.swOp;
      ctx.beginPath();
      ctx.arc(w/2, h/2, 100 * state.swScale, 0, Math.PI * 2);
      ctx.strokeStyle = "#A855F7";
      ctx.lineWidth = 20;
      ctx.stroke();
      ctx.restore();
    }

    // 3. Intro
    drawImg('logo', w/2, h/2, state.logoOp, state.logoScale, 600);

    // 4. Build Without Code
    drawText("BUILD", w/2, h/2 - 200 + state.buildY, 150, "#fff", "900", state.buildOp);
    drawText("WITHOUT", w/2 + state.withoutX, h/2, 150, "#A855F7", "900", state.withoutOp);
    drawText("CODE.", w/2 + state.codeX, h/2 + 200, 150, "#fff", "900", state.codeOp);

    // 5. Drag. Drop. Done.
    drawText("DRAG.", w/2, h/2 - 250, 180, "#4ADE80", "900", state.dragOp, state.dragScale);
    drawText("DROP.", w/2, h/2, 180, "#F97316", "900", state.dropOp, state.dropScale);
    drawText("DONE.", w/2, h/2 + 250, 180, "#A855F7", "900", state.doneOp, state.doneScale);

    // 6. Features (Text on top of bgColor)
    if (state.bgColor === "#6B21A8") drawText("AI Customizer", w/2, h/2, 120, "#fff", "800", 1);
    if (state.bgColor === "#16A34A") drawText("Enterprise Security", w/2, h/2, 120, "#fff", "800", 1);
    if (state.bgColor === "#EA580C") drawText("Lightning Fast", w/2, h/2, 120, "#fff", "800", 1);

    // 7. Social Proof
    drawText(`${Math.floor(state.stores)}+`, w/2, h/2 - 50, 200, "#4ADE80", "900", state.storesOp);
    drawText("STORES WORLDWIDE", w/2, h/2 + 100, 70, "#fff", "700", state.storesOp);

    // 8. Outro
    if (state.outroOp > 0) {
      drawImg('logo', w/2, h/2 - 150, state.outroOp, state.outroScale, 500);
      drawText("The modern ecommerce builder.", w/2, h/2 + 100, 60, "#CBD5E1", "500", state.outroOp, state.outroScale);
      
      // Draw CTA Button
      ctx.save();
      ctx.globalAlpha = state.outroOp;
      ctx.translate(w/2, h/2 + 300);
      ctx.scale(state.outroScale, state.outroScale);
      ctx.fillStyle = "#A855F7";
      ctx.beginPath();
      ctx.roundRect(-250, -60, 500, 120, 60);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "800 50px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Start Free Trial", 0, 5);
      ctx.restore();
    }

    ctx.restore(); // restore from screen shake
  };

  const startRecordAndDownload = async () => {
    setIsRecording(true);
    
    // Set up Audio Context to merge audio with canvas stream perfectly
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    const ctx = audioContextRef.current;
    
    let audioStream = null;
    let sourceNode = null;

    if (audioBufferRef.current) {
      const audioBuffer = await ctx.decodeAudioData(audioBufferRef.current.slice(0));
      sourceNode = ctx.createBufferSource();
      sourceNode.buffer = audioBuffer;
      
      // Route audio to both speakers (so user hears it) AND a media stream destination
      const destNode = ctx.createMediaStreamDestination();
      sourceNode.connect(destNode);
      sourceNode.connect(ctx.destination);
      
      audioStream = destNode.stream;
    }

    // 1. Capture precise 1080x1920 video stream from Canvas at 30fps
    const canvasStream = canvasRef.current.captureStream(30);
    
    // 2. Merge tracks!
    const tracks = [...canvasStream.getTracks()];
    if (audioStream) {
      tracks.push(...audioStream.getAudioTracks());
    }
    
    const combinedStream = new MediaStream(tracks);
    
    // Use high bitrate for perfect quality
    const options = { mimeType: 'video/webm; codecs=vp9', videoBitsPerSecond: 8000000 };
    let mediaRecorder;
    try {
      mediaRecorder = new MediaRecorder(combinedStream, options);
    } catch (e) {
      // Fallback if vp9 not supported
      mediaRecorder = new MediaRecorder(combinedStream);
    }

    const chunks = [];
    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'codiic-perfect-1080x1920.webm';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setIsRecording(false);
      combinedStream.getTracks().forEach(track => track.stop());
    };

    // Reset timeline
    tl.current.restart();
    if (sourceNode) sourceNode.start(0);
    mediaRecorder.start();

    // Auto-stop exactly at 30 seconds
    setTimeout(() => {
      if (mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
      }
      if (sourceNode) sourceNode.stop();
    }, 30000);
  };

  return (
    <div style={{ backgroundColor: '#111', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: '"Arial", sans-serif' }}>
      
      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Perfect Canvas Video Generator</h1>
        <p style={{ color: '#aaa', fontSize: '0.9rem', maxWidth: '500px', marginBottom: '1rem' }}>
          This uses HTML5 Canvas to render a perfect 1080x1920 video with images and built-in synced audio. <br/>
          <strong>NO screen-sharing prompt needed! It generates the video file directly!</strong>
        </p>
        
        {!imagesLoaded ? (
          <div style={{ color: '#F97316', fontWeight: 'bold' }}>{loadingText}</div>
        ) : (
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button 
                  onClick={startRecordAndDownload}
                  disabled={isRecording}
                  style={{ padding: '15px 30px', backgroundColor: isRecording ? '#dc2626' : '#16A34A', color: 'white', border: 'none', borderRadius: '8px', cursor: isRecording ? 'not-allowed' : 'pointer', fontWeight: 800, fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(22, 163, 74, 0.4)' }}>
                  {isRecording ? '🔴 Generating exact MP4/WebM...' : '⬇ Generate & Download Perfect Video'}
              </button>
          </div>
        )}
      </div>

      {/* Hidden 1080x1920 Canvas (we scale it down using CSS just to see it on screen) */}
      <canvas 
        ref={canvasRef} 
        width={1080} 
        height={1920} 
        style={{ 
          width: '100%', 
          maxWidth: '360px', // Display size
          aspectRatio: '9/16', 
          backgroundColor: '#050505', 
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }} 
      />

    </div>
  );
}
