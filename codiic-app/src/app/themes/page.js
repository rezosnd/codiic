export const metadata = {
  title: 'Themes | Codiic - E-Commerce Templates',
  description: 'High-converting, mobile-first themes built for speed, scalability, and seamless shopping experiences.',
};

export default function ThemesPage() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{
      __html: `
<div class="container-fluid bg-white">
<div class="row-fluid-wrapper">
<div class="row-fluid">
<div class="span12 widget-span widget-type-cell" data-widget-type="cell" data-x="0" data-w="12">

<!-- NAV BAR -->
<div class="row-fluid-wrapper row-depth-1 row-number-1 dnd-section">
<div class="row-fluid">
<div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-2 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<nav-bar home="true" bookurl="https://dashboard.codiic.com/login">
    <ul slot="desktop" class="flex flex-nowrap">
        <li class="menu-item"><a href="/about">Company</a></li>
        <li class="menu-item"><a href="/enterprise">Enterprise</a></li>
        <li class="menu-item"><a href="/themes">Elementor</a></li>
        <sub-menu label="Products">
            <ul class="flex">
                <li class="menu-item"><a href="/online-store">Online Store</a></li>
                <li class="menu-item"><a href="/automation">Automation</a></li>
                <li class="menu-item"><a href="/analytics">Analytics</a></li>
                <li class="menu-item"><a href="/website-builder">Website Builder</a></li>
            </ul>
        </sub-menu>
        <li class="menu-item"><a href="https://dashboard.codiic.com/login">Pricing</a></li>
    </ul>
    <menu slot="mobile-1">
        <li class="mobile-menu-item"><a href="/">Home <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
        <li class="mobile-menu-item"><a href="/about">Company <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
        <li class="mobile-menu-item"><a href="/enterprise">Enterprise <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
        <li class="mobile-menu-item"><a href="/themes">Elementor <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
    </menu>
    <menu slot="mobile-2">
        <li class="mobile-menu-item"><a href="/online-store">Online Store <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
        <li class="mobile-menu-item"><a href="/automation">Automation <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
        <li class="mobile-menu-item"><a href="/analytics">Analytics <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
        <li class="mobile-menu-item"><a href="/website-builder">Website Builder <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
    </menu>
</nav-bar>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- HERO SECTION -->
<div class="row-fluid-wrapper row-depth-1 row-number-3 dnd-section">
<div class="row-fluid">
<div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-4 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<transform-cta button1label="Browse Themes" button1href="#themes-grid" tagline="High-converting, mobile-first themes built for speed, scalability, and seamless shopping experiences.">
    <strong>THEME MARKETPLACE</strong><br>
    DESIGNED FOR <strong>YOUR SUCCESS</strong>
</transform-cta>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- THEMES GRID SECTION -->
<div id="themes-grid" class="py-24 bg-white">
  <div class="max-w-[1200px] mx-auto px-4 md:px-8">
    <div class="flex flex-wrap items-center justify-between mb-12 gap-6">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-['druk-cyr'] uppercase tracking-tighter text-black m-0" style="line-height: 0.9;">ALL THEMES</h2>
      <div class="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
        <button class="px-6 py-2.5 rounded-full bg-black text-white font-['abc-favorit'] font-bold uppercase tracking-wider text-xs whitespace-nowrap">All Themes</button>
        <button class="px-6 py-2.5 rounded-full bg-white border-2 border-gray-200 text-black hover:border-black font-['abc-favorit'] font-bold uppercase tracking-wider text-xs transition-colors whitespace-nowrap">Free</button>
        <button class="px-6 py-2.5 rounded-full bg-white border-2 border-gray-200 text-black hover:border-black font-['abc-favorit'] font-bold uppercase tracking-wider text-xs transition-colors whitespace-nowrap">Premium</button>
        <button class="px-6 py-2.5 rounded-full bg-white border-2 border-gray-200 text-black hover:border-black font-['abc-favorit'] font-bold uppercase tracking-wider text-xs transition-colors whitespace-nowrap">Industry-Specific</button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <!-- Theme 1 -->
      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-colors duration-300">
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
          <img src="/theme/image.png" alt="Beauty Secrets" class="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out cursor-pointer" loading="lazy">
          <div class="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-black border-2 border-black">Free</div>
        </div>
        <div class="p-8 flex flex-col flex-1">
          <h3 class="text-2xl font-black font-['druk-cyr'] uppercase tracking-tighter text-black mb-3">Beauty Secrets</h3>
          <p class="text-gray-600 mb-6 flex-1 font-['abc-favorit']">Perfect for beauty and cosmetics stores with elegant layouts</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Responsive</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Customizable</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">SEO Ready</span>
          </div>
          <div class="flex gap-4">
            <a href="https://dashboard.codiic.com/login" class="flex-1 text-center py-4 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">Use Theme</a>
          </div>
        </div>
      </div>

      <!-- Theme 2 -->
      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-colors duration-300">
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
          <img src="/theme/image copy.png" alt="Petsy" class="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out cursor-pointer" loading="lazy">
          <div class="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-black border-2 border-black">Free</div>
        </div>
        <div class="p-8 flex flex-col flex-1">
          <h3 class="text-2xl font-black font-['druk-cyr'] uppercase tracking-tighter text-black mb-3">Petsy</h3>
          <p class="text-gray-600 mb-6 flex-1 font-['abc-favorit']">Ideal for pet stores and animal product businesses</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Responsive</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Customizable</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">CDN</span>
          </div>
          <div class="flex gap-4">
            <a href="https://dashboard.codiic.com/login" class="flex-1 text-center py-4 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">Use Theme</a>
          </div>
        </div>
      </div>

      <!-- Theme 3 -->
      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-colors duration-300">
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
          <img src="/theme/image copy 2.png" alt="Crafted Elegance" class="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out cursor-pointer" loading="lazy">
          <div class="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-black border-2 border-black">Free</div>
        </div>
        <div class="p-8 flex flex-col flex-1">
          <h3 class="text-2xl font-black font-['druk-cyr'] uppercase tracking-tighter text-black mb-3">Crafted Elegance</h3>
          <p class="text-gray-600 mb-6 flex-1 font-['abc-favorit']">Sophisticated design for luxury and handmade products</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Responsive</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">SEO Ready</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">CDN</span>
          </div>
          <div class="flex gap-4">
            <a href="https://dashboard.codiic.com/login" class="flex-1 text-center py-4 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">Use Theme</a>
          </div>
        </div>
      </div>

      <!-- Theme 4 -->
      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-colors duration-300">
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
          <img src="/theme/image copy 3.png" alt="Muscle Fuel" class="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out cursor-pointer" loading="lazy">
          <div class="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-black border-2 border-black">Free</div>
        </div>
        <div class="p-8 flex flex-col flex-1">
          <h3 class="text-2xl font-black font-['druk-cyr'] uppercase tracking-tighter text-black mb-3">Muscle Fuel</h3>
          <p class="text-gray-600 mb-6 flex-1 font-['abc-favorit']">Powerful theme for fitness and supplement stores</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Responsive</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Customizable</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">SEO Ready</span>
          </div>
          <div class="flex gap-4">
            <a href="https://dashboard.codiic.com/login" class="flex-1 text-center py-4 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">Use Theme</a>
          </div>
        </div>
      </div>

      <!-- Theme 5 -->
      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-colors duration-300">
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
          <img src="/theme/image copy 4.png" alt="Swadeshi" class="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out cursor-pointer" loading="lazy">
          <div class="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-black border-2 border-black">Free</div>
        </div>
        <div class="p-8 flex flex-col flex-1">
          <h3 class="text-2xl font-black font-['druk-cyr'] uppercase tracking-tighter text-black mb-3">Swadeshi</h3>
          <p class="text-gray-600 mb-6 flex-1 font-['abc-favorit']">Traditional yet modern design for local businesses</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Responsive</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Customizable</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">CDN</span>
          </div>
          <div class="flex gap-4">
            <a href="https://dashboard.codiic.com/login" class="flex-1 text-center py-4 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">Use Theme</a>
          </div>
        </div>
      </div>

      <!-- Theme 6 -->
      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-colors duration-300">
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
          <img src="/theme/image copy 5.png" alt="Oak Heaven" class="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out cursor-pointer" loading="lazy">
          <div class="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-black border-2 border-black">Free</div>
        </div>
        <div class="p-8 flex flex-col flex-1">
          <h3 class="text-2xl font-black font-['druk-cyr'] uppercase tracking-tighter text-black mb-3">Oak Heaven</h3>
          <p class="text-gray-600 mb-6 flex-1 font-['abc-favorit']">Natural and organic product store theme</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Responsive</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">SEO Ready</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">CDN</span>
          </div>
          <div class="flex gap-4">
            <a href="https://dashboard.codiic.com/login" class="flex-1 text-center py-4 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">Use Theme</a>
          </div>
        </div>
      </div>

      <!-- Theme 7 -->
      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-colors duration-300">
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
          <img src="/theme/image copy 2.png" alt="Zarvara" class="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out cursor-pointer" loading="lazy">
          <div class="absolute top-4 right-4 bg-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border-2 border-black">Premium</div>
        </div>
        <div class="p-8 flex flex-col flex-1">
          <h3 class="text-2xl font-black font-['druk-cyr'] uppercase tracking-tighter text-black mb-3">Zarvara</h3>
          <p class="text-gray-600 mb-6 flex-1 font-['abc-favorit']">Premium fashion and apparel store theme</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Responsive</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Customizable</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">SEO Ready</span>
          </div>
          <div class="flex gap-4">
            <a href="https://dashboard.codiic.com/login" class="flex-1 text-center py-4 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">Use Theme</a>
          </div>
        </div>
      </div>

      <!-- Theme 8 -->
      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-colors duration-300">
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
          <img src="/theme/image copy.png" alt="Swarnika" class="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out cursor-pointer" loading="lazy">
          <div class="absolute top-4 right-4 bg-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border-2 border-black">Premium</div>
        </div>
        <div class="p-8 flex flex-col flex-1">
          <h3 class="text-2xl font-black font-['druk-cyr'] uppercase tracking-tighter text-black mb-3">Swarnika</h3>
          <p class="text-gray-600 mb-6 flex-1 font-['abc-favorit']">Elegant jewelry and accessories store theme</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Responsive</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Customizable</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">CDN</span>
          </div>
          <div class="flex gap-4">
            <a href="https://dashboard.codiic.com/login" class="flex-1 text-center py-4 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">Use Theme</a>
          </div>
        </div>
      </div>

      <!-- Theme 9 -->
      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-colors duration-300">
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
          <img src="/theme/image.png" alt="Sanskriti" class="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out cursor-pointer" loading="lazy">
          <div class="absolute top-4 right-4 bg-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border-2 border-black">Premium</div>
        </div>
        <div class="p-8 flex flex-col flex-1">
          <h3 class="text-2xl font-black font-['druk-cyr'] uppercase tracking-tighter text-black mb-3">Sanskriti</h3>
          <p class="text-gray-600 mb-6 flex-1 font-['abc-favorit']">Cultural and traditional product store theme</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Responsive</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">SEO Ready</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">CDN</span>
          </div>
          <div class="flex gap-4">
            <a href="https://dashboard.codiic.com/login" class="flex-1 text-center py-4 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">Use Theme</a>
          </div>
        </div>
      </div>

      <!-- Theme 10 -->
      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-colors duration-300">
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
          <img src="/theme/image copy 3.png" alt="Modern Commerce" class="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out cursor-pointer" loading="lazy">
          <div class="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-black border-2 border-black">Free</div>
        </div>
        <div class="p-8 flex flex-col flex-1">
          <h3 class="text-2xl font-black font-['druk-cyr'] uppercase tracking-tighter text-black mb-3">Modern Commerce</h3>
          <p class="text-gray-600 mb-6 flex-1 font-['abc-favorit']">Contemporary design for modern e-commerce stores</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Responsive</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Customizable</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">SEO Ready</span>
          </div>
          <div class="flex gap-4">
            <a href="https://dashboard.codiic.com/login" class="flex-1 text-center py-4 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">Use Theme</a>
          </div>
        </div>
      </div>

      <!-- Theme 11 -->
      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-colors duration-300">
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
          <img src="/theme/image copy 4.png" alt="Elite Store" class="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out cursor-pointer" loading="lazy">
          <div class="absolute top-4 right-4 bg-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border-2 border-black">Premium</div>
        </div>
        <div class="p-8 flex flex-col flex-1">
          <h3 class="text-2xl font-black font-['druk-cyr'] uppercase tracking-tighter text-black mb-3">Elite Store</h3>
          <p class="text-gray-600 mb-6 flex-1 font-['abc-favorit']">Premium design for high-end retail businesses</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Responsive</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Customizable</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">SEO Ready</span>
          </div>
          <div class="flex gap-4">
            <a href="https://dashboard.codiic.com/login" class="flex-1 text-center py-4 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">Use Theme</a>
          </div>
        </div>
      </div>

      <!-- Theme 12 -->
      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-colors duration-300">
        <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b-2 border-gray-100 group-hover:border-black transition-colors duration-300">
          <img src="/theme/image copy 5.png" alt="Urban Shop" class="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out cursor-pointer" loading="lazy">
          <div class="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-black border-2 border-black">Free</div>
        </div>
        <div class="p-8 flex flex-col flex-1">
          <h3 class="text-2xl font-black font-['druk-cyr'] uppercase tracking-tighter text-black mb-3">Urban Shop</h3>
          <p class="text-gray-600 mb-6 flex-1 font-['abc-favorit']">Urban and trendy design for contemporary stores</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Responsive</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">Customizable</span>
            <span class="text-[10px] bg-gray-100 px-3 py-1.5 rounded font-bold uppercase tracking-widest text-gray-800">SEO Ready</span>
          </div>
          <div class="flex gap-4">
            <a href="https://dashboard.codiic.com/login" class="flex-1 text-center py-4 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">Use Theme</a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>

<!-- CAPABILITIES SECTION -->
<div class="row-fluid-wrapper row-depth-1 row-number-8 dnd-section">
<div class="row-fluid">
<div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-9 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<services-section>
    <span slot="headline">Built for scale, optimized for performance, designed for growth.</span>
    <service-block class="basis-full" item="01" link="https://dashboard.codiic.com/login" buttontext="Get Started" color="purple" image="https://codiic.com/assets/img/theme-5.jpg">
        <span slot="before">BUILT-IN</span><span slot="after">FEATURES</span><span slot="description">Complete e-commerce functionality out of the box with zero external plugins required.</span>
    </service-block>
    <service-block class="basis-full" item="02" link="https://dashboard.codiic.com/login" buttontext="Get Started" color="orange" image="https://codiic.com/assets/img/theme-6.jpg">
        <span slot="before">FAST</span><span slot="after">PERFORMANCE</span><span slot="description">Optimized for speed and CDN-ready delivery to ensure your store loads instantly worldwide.</span>
    </service-block>
    <service-block class="basis-full" item="03" link="https://dashboard.codiic.com/login" buttontext="Get Started" color="green" image="https://codiic.com/assets/img/theme-7.jpg">
        <span slot="before">MOBILE</span><span slot="after">FIRST</span><span slot="description">Responsive design for all devices, delivering flawless shopping experiences on any screen size.</span>
    </service-block>
    <service-block class="basis-full" item="04" link="https://dashboard.codiic.com/login" buttontext="Get Started" color="dark-orange" image="https://codiic.com/assets/img/theme-8.jpg">
        <span slot="before">SEO</span><span slot="after">FRIENDLY</span><span slot="description">Search engine optimized for better visibility, higher rankings, and increased organic traffic.</span>
    </service-block>
</services-section>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- DOUBLE CTA -->
<div class="row-fluid-wrapper row-depth-1 row-number-10 dnd-section">
<div class="row-fluid">
<div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-11 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<double-cta-section>
    <cta-block class="flex-1" color="bg-purple" link="https://dashboard.codiic.com/login" arrow="true" hasform="false" buttontext="Start Free Trial">
        <h2 slot="title">Build Your Dream Store</h2>
        <p slot="text">Empowering entrepreneurs to build and scale successful online stores with powerful tools and seamless experiences.</p>
    </cta-block>
    <cta-block class="flex-1" color="bg-green" link="/contact" arrow="true" hasform="false" buttontext="Call Codiic">
        <h2 slot="title">Need Custom Development?</h2>
        <p slot="text">Let's work together. Our team of experts can build a bespoke theme specifically tailored to your brand.</p>
    </cta-block>
</double-cta-section>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- FOOTER -->
<div class="row-fluid-wrapper row-depth-1 row-number-19 dnd-section main_dnd-row-6-padding">
<div class="row-fluid">
<div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-20 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<footer-section ctalink="/contact">
    <li slot="menu-1" class="footer-menu-item"><a href="/">Home</a></li>
    <li slot="menu-1" class="footer-menu-item"><a href="/about">About</a></li>
    <li slot="menu-1" class="footer-menu-item"><a href="/enterprise">Enterprise</a></li>
    <li slot="menu-1" class="footer-menu-item"><a href="/blog">Blog</a></li>
    <li slot="menu-1" class="footer-menu-item"><a href="/affiliate">Affiliate</a></li>
    
    <li slot="menu-2" class="footer-menu-item"><a href="/themes">Themes</a></li>
    <li slot="menu-2" class="footer-menu-item"><a href="/online-store">Online Store</a></li>
    <li slot="menu-2" class="footer-menu-item"><a href="/automation">Automation</a></li>
    <li slot="menu-2" class="footer-menu-item"><a href="/website-builder">Custom Development</a></li>
    
    <li slot="social"><a target="_blank" href="https://instagram.com/codiic">Instagram</a></li>
    <li slot="social"><a target="_blank" href="https://linkedin.com/company/codiic">LinkedIn</a></li>
    <li slot="social"><a target="_blank" href="https://facebook.com/codiic">Facebook</a></li>
    <li slot="social"><a target="_blank" href="mailto:support@codiic.com">support@codiic.com</a></li>
    
    <li slot="legal" class="square-item"><a href="/privacy">Privacy Policy</a></li>
    <li slot="legal" class="square-item"><a href="/terms">Terms of Service</a></li>
    <li slot="legal" class="square-item"><a href="/contact">Contact Us</a></li>
</footer-section>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
      `
    }} />
  );
}
