export const metadata = {
  title: 'Website Builder | Codiic - Design Without Code',
  description: 'Drag, drop, and launch perfectly responsive storefronts. No coding required. Start with stunning themes and customize every pixel.',
};

export default function WebsiteBuilderPage() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{
      __html: `
<div class="container-fluid">
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

<!-- HERO -->
<div class="row-fluid-wrapper row-depth-1 row-number-3 dnd-section main_dnd-row-1-hidden">
<div class="row-fluid">
<div class="span12 widget-span widget-type-cell dnd-column cell_17415515188772-hidden" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-4 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<zipcio-hero-video
  logo1="https://codiic.com/assets/Logo/Axionix.png"
  logo2="https://codiic.com/assets/Logo/Babyhaat.png"
  logo3="https://codiic.com/assets/Logo/Chronexa.png"
  logo4="https://codiic.com/assets/Logo/Dermify.png"
  getstartedtext="Start Building"
  headline="DRAG. DROP. DONE. BUILD WITHOUT CODE."
  description="Trusted by 5,000+ Stores Worldwide"
  box1="Templates" box1number="50+" box1text="High-converting themes"
  box2="Page Speed" box2number="98/100" box2text="Google PageSpeed score"
  box3="Mobile-First" box3number="100%" box3text="Responsive on all devices"
  box4="Go Live" box4number="<15min" box4text="From signup to launch"
  title1="Design" title2="without" title3="limits"
  getstartedurl="https://dashboard.codiic.com/login"
  heroimg="https://codiic.com/assets/img/Customize.png"
  ctatext="Build beautiful, responsive storefronts with our visual drag-and-drop builder. Choose from 50+ high-converting themes, customize every pixel, and go live in under 15 minutes.">
</zipcio-hero-video>
</div>
</div>
</div>
</div>

<!-- TRANSFORM CTA -->
<div class="row-fluid-wrapper row-depth-1 row-number-5 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<transform-cta button1label="Start Building Free" button1href="https://dashboard.codiic.com/login" tagline="Build beautiful, responsive storefronts with our visual drag-and-drop builder. Choose from 50+ high-converting themes, customize every pixel with AI, and go live in under 15 minutes.">
    <strong>BUILD WITHOUT CODE.</strong><br>
    DRAG. DROP. <strong>DONE.</strong>
</transform-cta>
</div>
</div>
</div>
</div>

<!-- BUILDING BLOCKS -->
<div class="row-fluid-wrapper row-depth-1 row-number-6 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<building-blocks leading="" image="https://codiic.com/assets/img/Customize.png"
  block1title="VISUAL DRAG & DROP" block1description="Snap components into place with our intuitive builder. Rearrange sections, add products, and customize layouts — all without touching code." block1image="/CONVERSION.png"
  block2title="50+ PREMIUM THEMES" block2description="Start with beautifully designed, mobile-first themes that are SEO-optimized and conversion-tested. Customize colors, fonts, and layouts to match your brand." block2image="/LIGHTNING.png"
  block3title="AI STYLE CUSTOMIZER" block3description="Describe what you want and our AI adjusts your color palette, button styles, fonts, and layouts instantly. Live preview every change in real-time." block3image="/SMART.png"
  block4title="RESPONSIVE BY DEFAULT" block4description="Every page you build looks flawless on desktop, tablet, and mobile. No extra work needed — responsiveness is automatic and pixel-perfect." block4image="/ENTERPRISE.png"
  buttontext="Start Building" buttonhref="https://dashboard.codiic.com/login">
    <div class="inline" slot="title1">A Visual Builder</div>
    <div class="inline" slot="title2">Designed for Speed</div>
</building-blocks>
</div>
</div>
</div>
</div>

</div>
</div>
</div>

<!-- CREATED WITH CODIIC -->
<div class="row-fluid-wrapper row-depth-1 row-number-7 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<how-we-work heading="Created with Codiic" description="See what brands are building with our no-code website builder."
  step1number="01." step1title="Enterprise-Level Security" step1text="" step1image="/Enterprise-level.png"
  step2number="02." step2title="AI Customizer & Live Store Styling" step2text="" step2image="/ai-cus.png"
  step3number="03." step3title="Scale Faster with Powerful Integrations" step3text="" step3image="/scale.png"
  step4number="04." step4title="Ongoing Growth & Revenue Optimization" step4text="" step4image="/ongoing-gr.png"></how-we-work>
</div>
</div>
</div>
</div>

<!-- SERVICES -->
<div class="row-fluid-wrapper row-depth-1 row-number-8 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<services-section>
    <span slot="headline">Build Any Type of Store or Website</span>
    <service-block class="basis-full" item="01" link="https://dashboard.codiic.com/login" buttontext="Start Building" color="purple" image="https://codiic.com/assets/img/theme-5.jpg">
        <span slot="before">E-COMMERCE</span><span slot="after">STORES</span><span slot="description">Full-featured online stores with product catalogs, checkout, and payment processing.</span>
    </service-block>
    <service-block class="basis-full" item="02" link="https://dashboard.codiic.com/login" buttontext="Start Building" color="orange" image="https://codiic.com/assets/img/theme-6.jpg">
        <span slot="before">LANDING</span><span slot="after">PAGES</span><span slot="description">High-converting landing pages for product launches, campaigns, and lead capture.</span>
    </service-block>
    <service-block class="basis-full" item="03" link="https://dashboard.codiic.com/login" buttontext="Start Building" color="green" image="https://codiic.com/assets/img/theme-7.jpg">
        <span slot="before">BRAND</span><span slot="after">WEBSITES</span><span slot="description">Professional brand presence with custom design, blog integration, and SEO optimization.</span>
    </service-block>
    <service-block class="basis-full" item="04" link="https://dashboard.codiic.com/login" buttontext="Start Building" color="dark-orange" image="https://codiic.com/assets/img/theme-8.jpg">
        <span slot="before">PORTFOLIO</span><span slot="after">SITES</span><span slot="description">Showcase your work with stunning galleries, case studies, and interactive layouts.</span>
    </service-block>
</services-section>
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
    <cta-block class="flex-1" color="bg-purple" link="https://dashboard.codiic.com/login" arrow="true" hasform="false" buttontext="Start Building">
        <h2 slot="title">Design Your Store Now</h2>
        <p slot="text">No coding required. Choose a theme, customize, and go live in under 15 minutes.</p>
    </cta-block>
    <cta-block class="flex-1" color="bg-green" link="/themes" arrow="true" hasform="false" buttontext="Browse Themes">
        <h2 slot="title">Explore 50+ Themes</h2>
        <p slot="text">Mobile-first, conversion-optimized themes designed for every industry.</p>
    </cta-block>
</double-cta-section>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- NEWSLETTER -->
<div class="row-fluid-wrapper row-depth-1 row-number-17 dnd-section">
<div class="row-fluid">
<div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-18 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<newsletter-section heading="Subscribe <br>to updates" subheading="Design tips, new theme releases, and builder updates — delivered to your inbox." note="We respect your privacy and protect your information.">
</newsletter-section>
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
    
    <li slot="menu-2" class="footer-menu-item"><a href="/online-store">Online Store</a></li>
    <li slot="menu-2" class="footer-menu-item"><a href="/automation">Automation</a></li>
    <li slot="menu-2" class="footer-menu-item"><a href="/analytics">Analytics</a></li>
    <li slot="menu-2" class="footer-menu-item"><a href="/website-builder">Website Builder</a></li>
    
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
