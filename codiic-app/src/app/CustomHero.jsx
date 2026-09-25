'use client';
import React, { useState, useEffect } from 'react';

export default function CustomHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { image: '/store_setup.png', label: '1. Store Setup' },
    { image: '/choose_theme.png', label: '2. Choose Theme' },
    { image: '/cutomize_design.png', label: '3. Customize Design' },
    { image: '/import_product.png', label: '4. Import Products' },
    { image: '/connnect_payment.png', label: '5. Connect Payments' },
    { image: '/launch_store.png', label: '6. Launch Store' },
    { image: '/automation.png', label: '7. Running Automation' }
  ];

  // Rotate through cards automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="relative w-full overflow-hidden min-h-[90vh] flex items-center justify-center pt-24 pb-16 bg-white">
      
      {/* BACKGROUND TEXT & BRACKETS */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-[0.03] select-none z-0">
        <h1 className="text-[12vw] font-black leading-none tracking-tighter m-0 p-0 text-center uppercase whitespace-nowrap">
          Launch<br/>Faster
        </h1>
        <h1 className="text-[12vw] font-black leading-none tracking-tighter m-0 p-0 text-center uppercase whitespace-nowrap mt-[-2%]">
          Sell<br/>Smarter
        </h1>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12 pointer-events-none z-0">
        <div className="text-[#1A2853] text-[20vw] md:text-[25vw] font-light leading-none opacity-10">[</div>
        <div className="text-[#1A2853] text-[20vw] md:text-[25vw] font-light leading-none opacity-10">]</div>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 max-w-[1400px]">
        
        {/* LEFT COLUMN: TEXT & CTA */}
        <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <h2 className="text-[#1A2853] text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Launch faster.<br/>
            <span className="text-[#1A2853]">Sell smarter.</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg">
            Launch your online business in minutes. Codiic is the modern ecommerce builder for ambitious brands—create your storefront, manage products, track sales and automate orders.
          </p>
          <a href="https://dashboard.codiic.com/login" className="inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-full bg-[#1A2853] hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get started
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>

        {/* RIGHT COLUMN: CARD STACK */}
        <div className="w-full lg:w-7/12 relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0 perspective-1000">
          
          {/* Card Container */}
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[500px] aspect-square lg:mr-16">
            {cards.map((card, i) => {
              // Calculate distance from active card to handle wrapping smoothly
              let diff = (i - activeIndex + cards.length) % cards.length;
              
              // Only show a few cards behind to keep it looking clean like the reference
              const maxVisible = 4;
              const isVisible = diff < maxVisible;
              
              // Math for the fan effect
              const zIndex = cards.length - diff;
              
              // Fanning effect (up and right slightly)
              const translateY = diff * -22.5; // move up
              const translateX = diff * 22.5; // move right
              const scale = 1 - (diff * 0.05); // shrink slightly
              
              return (
                <div 
                  key={i}
                  className="absolute inset-0 rounded-2xl shadow-2xl transition-all duration-700 ease-out cursor-pointer overflow-hidden border-4 border-white"
                  style={{
                    zIndex: zIndex,
                    opacity: isVisible ? 1 - (diff * 0.15) : 0,
                    transform: isVisible 
                      ? \`translate3d(\${translateX}px, \${translateY}px, 0) scale(\${scale})\`
                      : \`translate3d(81px, -81px, 0) scale(0.8) opacity-0\`,
                    pointerEvents: diff === 0 ? 'auto' : 'none'
                  }}
                  onClick={() => setActiveIndex(i)}
                >
                  <img 
                    src={card.image} 
                    alt={card.label} 
                    className="w-full h-full object-cover object-center bg-white"
                  />
                  {diff === 0 && (
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg font-bold text-[#1A2853] text-sm md:text-base border border-gray-100 flex items-center justify-between">
                      <span>{card.label}</span>
                      <span className="text-xs opacity-50 bg-gray-100 px-2 py-1 rounded">{i + 1}/{cards.length}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dots Indicator for Mobile */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2 lg:hidden">
            {cards.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={\`w-2 h-2 rounded-full transition-all \${i === activeIndex ? 'bg-[#1A2853] w-6' : 'bg-gray-300'}\`}
                aria-label={\`Go to slide \${i + 1}\`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
