import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'CODIIC - Build, Run & Grow Your E-Commerce Business',
  description: 'Launch faster. Sell smarter.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="hs-content-id-209847509092 hs-site-page page">
          <main>
            {children}
          </main>
        </div>
        
        {/* Next.js Script Components for optimal loading and hydration safety */}
        <Script id="template-css" strategy="beforeInteractive" dangerouslySetInnerHTML={{
          __html: `
            // Injecting stylesheet this way prevents hydration mismatch on the server rendered head
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://zipcio.com/hubfs/hub_generated/template_assets/1/187080988771/1777423563060/template_main.min.css';
            document.head.appendChild(link);
          `
        }} />
        
        <Script src="/template_main.js" strategy="afterInteractive" />
        <Script src="https://zipcio.com/hubfs/hub_generated/module_assets/1/187881413719/1778538156611/module_HowWeWork.min.js" strategy="afterInteractive" />
        
        
        <Script id="codiic-brand-override" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          (function() {
            const originalAttachShadow = HTMLElement.prototype.attachShadow;
            
            const handleNodes = (rootNode) => {
                // Inject Codiic Global Color Overrides
                const styleId = rootNode === document.body ? 'codiic-color-overrides-main' : 'codiic-color-overrides';
                const styleExists = rootNode === document.body ? document.getElementById(styleId) : rootNode.querySelector('#' + styleId);
                if (!styleExists) {
                   const style = document.createElement('style');
                   style.id = styleId;
                   style.textContent = [
                     ":root, :host, *, ::before, ::after { --green: #1A2853 !important; --color-green: #1A2853 !important; --primary-color: #1A2853 !important; --theme-green: #1A2853 !important; --bg-green: #1A2853 !important; --fill-green: #1A2853 !important; }",
                     ".bg-green, .\\\\!bg-green, .color-green, [class*='bg-green'], [class*='bg-[#4'], [class*='bg-[#5'] { background-color: #1A2853 !important; fill: #1A2853 !important; }",
                     ".text-green, .\\\\!text-green, [class*='text-green'], [class*='text-[#4'], [class*='text-[#5'] { color: #1A2853 !important; fill: #1A2853 !important; }",
                     ".border-green, .\\\\!border-green, [class*='border-green'] { border-color: #1A2853 !important; stroke: #1A2853 !important; }",
                     "[style*='background-color: rgb(86, 217, 100)'], [style*='background-color:rgb(86, 217, 100)'], [style*='background-color: #56d964'], [style*='background-color: #4ade80'], [style*='background: #4ade80'] { background-color: #1A2853 !important; }",
                     "[style*='color: rgb(86, 217, 100)'], [style*='color:rgb(86, 217, 100)'], [style*='color: #56d964'], [style*='color: #4ade80'] { color: #1A2853 !important; fill: #1A2853 !important; }",
                     "svg path[fill*='56D964' i], svg path[fill*='86, 217, 100'], svg path[fill*='4ade80' i], svg path[fill*='46d773' i] { fill: #1A2853 !important; }",
                     "svg rect[fill*='56D964' i], svg rect[fill*='86, 217, 100'], svg rect[fill*='4ade80' i], svg rect[fill*='46d773' i] { fill: #1A2853 !important; }",
                     "svg circle[fill*='56D964' i], svg circle[fill*='86, 217, 100'], svg circle[fill*='4ade80' i], svg circle[fill*='46d773' i] { fill: #1A2853 !important; }",
                     "svg path[stroke*='56D964' i], svg path[stroke*='86, 217, 100'], svg path[stroke*='4ade80' i], svg path[stroke*='46d773' i] { stroke: #1A2853 !important; }",
                     /* Brackets and Stubborn Components Recolor via CSS Filters */
                     "[class*='bg-square-bracket'] { filter: hue-rotate(99deg) brightness(0.35) saturate(0.8) !important; }",
                     "[class*='bg-square-bracket']::before, [class*='bg-square-bracket']::after { filter: hue-rotate(99deg) brightness(0.35) saturate(0.8) !important; }",
                     "transform-cta, nav-bar, building-blocks, zipcio-hero-video { --green: #1A2853 !important; --color-green: #1A2853 !important; }",
                     ".mega-heading, .mega-heading b, .animated-letter, .animated-letter b, span#about { color: #1A2853 !important; }"
                   ].join("\\n");
                   if (rootNode === document.body) {
                      document.head.appendChild(style);
                   } else if (rootNode.appendChild) {
                      rootNode.appendChild(style);
                   }
                }

                // Handle links
                const logoLinks = rootNode.querySelectorAll ? rootNode.querySelectorAll('a.logo, a[class*="logo" i]') : [];
                logoLinks.forEach(a => {
                   if (a.dataset.codiicReplaced) return;
                   a.dataset.codiicReplaced = 'true';
                   
                   const existingImg = a.querySelector('img, svg');
                   if (existingImg) {
                      existingImg.style.display = 'none'; // hide old
                      const newImg = document.createElement('img');
                      newImg.src = "https://codiic.com/assets/img/logo.png";
                      newImg.alt = "Codiic Logo";
                      // Copy classes to ensure media queries for mobile/desktop logos still apply
                      if (existingImg.className && existingImg.className.baseVal !== undefined) {
                          newImg.className = existingImg.className.baseVal;
                      } else if (existingImg.className) {
                          newImg.className = existingImg.className;
                      }
                      newImg.style.height = '35px';
                      newImg.style.width = 'auto';
                      newImg.style.objectFit = 'contain';
                      existingImg.insertAdjacentElement('afterend', newImg);
                   }
                });

                // Handle standalone imgs
                const imgs = rootNode.querySelectorAll ? rootNode.querySelectorAll('img') : [];
                imgs.forEach(img => {
                  if (img.dataset.codiicReplaced) return;
                  const alt = (img.alt || '').toLowerCase();
                  const src = (img.src || '').toLowerCase();
                  const isLoader = (img.closest && img.closest('[class*="loader" i], [id*="loader" i], [class*="preloader" i]'));
                  
                  // Skip if inside a logo link (handled above)
                  if (img.closest && img.closest('a.logo, a[class*="logo" i]')) return;
                  
                  if (alt.includes('zipcio') || alt === 'logo' || img.classList.contains('logo') || isLoader || (src.includes('zipcio') && (src.includes('logo') || src.includes('brand')))) {
                    if (img.src !== "https://codiic.com/assets/img/logo.png") {
                      img.dataset.codiicReplaced = 'true';
                      img.src = "https://codiic.com/assets/img/logo.png";
                      img.alt = "Codiic Logo";
                      img.style.height = isLoader ? '120px' : '35px';
                      img.style.objectFit = 'contain';
                      img.removeAttribute('srcset');
                    }
                  }
                });
                
                // Handle SVGs in loaders or generic logos
                const svgs = rootNode.querySelectorAll ? rootNode.querySelectorAll('svg') : [];
                svgs.forEach(svg => {
                   if (svg.dataset.codiicReplaced) return;
                   
                   // Skip if inside a logo link (handled above)
                   if (svg.closest && svg.closest('a.logo, a[class*="logo" i]')) return;
                   
                   const isLoader = (svg.closest && svg.closest('[class*="loader" i], [id*="loader" i], [class*="preloader" i]'));
                   
                   // Replace Zipcio SVGs in loaders or if marked as logo
                   if (svg.classList.contains('logo') || svg.getAttribute('alt') === 'logo' || isLoader || (svg.innerHTML && svg.innerHTML.includes('zipcio'))) {
                     svg.dataset.codiicReplaced = 'true';
                     svg.style.display = 'none'; 
                     const newImg = document.createElement('img');
                     newImg.src = "https://codiic.com/assets/img/logo.png";
                     newImg.alt = "Codiic Logo";
                     if (svg.className && svg.className.baseVal !== undefined) {
                         newImg.className = svg.className.baseVal;
                     } else if (svg.className) {
                         newImg.className = svg.className;
                     }
                     // Set height to 45px for loader logo so it doesn't look too small or too massive
                     newImg.style.height = isLoader ? '45px' : '35px';
                     newImg.style.objectFit = 'contain';
                     // Center it if it's a loader
                     if (isLoader) {
                         newImg.style.margin = '0 auto';
                         newImg.style.display = 'block';
                     }
                     svg.insertAdjacentElement('afterend', newImg);
                   }
                });
                
                // Extra color sweeper for green hexes in inline styles
                const allElements = rootNode.querySelectorAll ? rootNode.querySelectorAll('*') : [];
                allElements.forEach(el => {
                   if (el.style) {
                      if (el.style.backgroundColor && (el.style.backgroundColor.includes('86, 217, 100') || el.style.backgroundColor.includes('70, 215, 115') || el.style.backgroundColor.includes('#46d773') || el.style.backgroundColor.includes('#56d964') || el.style.backgroundColor.includes('#4ade80'))) {
                         el.style.setProperty('background-color', '#1A2853', 'important');
                      }
                      if (el.style.color && (el.style.color.includes('86, 217, 100') || el.style.color.includes('70, 215, 115') || el.style.color.includes('#46d773') || el.style.color.includes('#56d964') || el.style.color.includes('#4ade80'))) {
                         el.style.setProperty('color', '#1A2853', 'important');
                      }
                      if (el.style.fill && (el.style.fill.includes('86, 217, 100') || el.style.fill.includes('#56d964'))) {
                         el.style.setProperty('fill', '#1A2853', 'important');
                      }
                   }
                });
                
                // Handle text nodes without breaking GSAP (Safe because it preserves the node reference)
                const walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT, null, false);
                let node;
                while (node = walker.nextNode()) {
                  const val = node.nodeValue;
                  if (val.toLowerCase().includes('zipcio')) {
                    let newVal = val;
                    newVal = newVal.replace(/ZIPCIO/g, 'CODIIC');
                    newVal = newVal.replace(/Zipcio/g, 'Codiic');
                    newVal = newVal.replace(/zipcio/g, 'codiic');
                    node.nodeValue = newVal;
                  }
                }
                
            };

            HTMLElement.prototype.attachShadow = function(init) {
              const shadowRoot = originalAttachShadow.call(this, init);
              const observer = new MutationObserver(() => handleNodes(shadowRoot));
              observer.observe(shadowRoot, { childList: true, subtree: true, characterData: true, attributes: true });
              return shadowRoot;
            };

            // Global document observer for loaders
            if (typeof window !== 'undefined') {
               const docObserver = new MutationObserver(() => {
                  if (document.body) handleNodes(document.body);
               });
               
               const startObserving = () => {
                  if (document.body) {
                     handleNodes(document.body);
                     docObserver.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true });
                  } else {
                     setTimeout(startObserving, 50);
                  }
               };
               startObserving();
               
            }
          })();
        `}} />
      </body>
    </html>
  );
}

