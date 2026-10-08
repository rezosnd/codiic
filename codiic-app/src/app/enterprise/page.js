export const metadata = {
  title: 'Codiic Enterprise | Enterprise Infrastructure for Global Scale',
  description: 'Enterprise-grade website builder, ecommerce, and AI automation. Multi-site management, 99.99% uptime SLA, dedicated support.',
};

export default function EnterprisePage() {
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
<div class="row-fluid-wrapper row-depth-1 row-number-3 dnd-section">
<div class="row-fluid">
<div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-4 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<transform-cta button1label="Request Enterprise Demo" button1href="/contact" tagline="Multi-site control. Compliance-ready security. Dedicated support. Built for organizations that demand reliability at global scale.">
    <strong>ENTERPRISE INFRASTRUCTURE</strong><br>
    THAT OPERATES AT <strong>GLOBAL SCALE</strong>
</transform-cta>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- WHY ENTERPRISE — BUILDING BLOCKS -->
<div class="row-fluid-wrapper row-depth-1 row-number-5 dnd-section">
<div class="row-fluid">
<div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-6 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<building-blocks leading="" image="https://codiic.com/assets/img/enterprise.png"
  block1title="PERFORMANCE AT SCALE" block1description="Auto-scaling infrastructure built to handle your biggest flash sales and peak traffic without any compromise on speed or reliability." block1image="/CONVERSION.png"
  block2title="MULTI-SITE CONTROL" block2description="Manage all your brands, regions, and teams from one unified, role-based dashboard. Complete visibility across your entire portfolio." block2image="/LIGHTNING.png"
  block3title="ENTERPRISE SECURITY" block3description="SOC 2 Type II certified, GDPR ready, AES-256 encryption at rest. Data protection at every layer with granular access controls." block3image="/SMART.png"
  block4title="EXTENSIBLE ARCHITECTURE" block4description="RESTful APIs, webhooks, headless commerce support, and custom integrations. Build exactly what you need with our developer-first platform." block4image="/ENTERPRISE.png"
  buttontext="Contact Sales" buttonhref="/contact">
    <div class="inline" slot="title1">Why Leading Enterprises</div>
    <div class="inline" slot="title2">Choose Codiic</div>
</building-blocks>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- HOW WE WORK — ENTERPRISE PROCESS -->
<div class="row-fluid-wrapper row-depth-1 row-number-7 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<how-we-work heading="Enterprise Capabilities" description="Built for the most demanding organizations. Scale without limits."
  step1number="01." step1title="Global Cloud Infrastructure" step1text="Auto-scaling servers, advanced load balancing, and high-speed global CDN for 99.99% uptime." step1image="/Enterprise-level.png"
  step2number="02." step2title="Multi-Brand Management" step2text="Centralized dashboard, role-based team access, shared assets, and multi-language support." step2image="/ai-cus.png"
  step3number="03." step3title="Enterprise Commerce" step3text="Unlimited catalogs, custom checkout flows, B2B & B2C capabilities, and multi-currency payments." step3image="/scale.png"
  step4number="04." step4title="Security & Compliance" step4text="AES-256 encryption, SSO, PCI-DSS compliance, GDPR-ready, and regular third-party security audits." step4image="/ongoing-gr.png"></how-we-work>
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
    <span slot="headline">Enterprise Solutions for Every Challenge</span>
    <service-block class="basis-full" item="01" link="/contact" buttontext="Learn More" color="purple" image="https://codiic.com/assets/img/theme-5.jpg">
        <span slot="before">UNLIMITED</span><span slot="after">PRODUCTS</span><span slot="description">Scale your catalog without constraints. Advanced inventory management with real-time sync across all channels.</span>
    </service-block>
    <service-block class="basis-full" item="02" link="/contact" buttontext="Learn More" color="orange" image="https://codiic.com/assets/img/theme-6.jpg">
        <span slot="before">CUSTOM</span><span slot="after">CHECKOUT</span><span slot="description">Tailored checkout experiences at every step. Optimized for conversion with multi-currency and global payment support.</span>
    </service-block>
    <service-block class="basis-full" item="03" link="/contact" buttontext="Learn More" color="green" image="https://codiic.com/assets/img/theme-7.jpg">
        <span slot="before">API-DRIVEN</span><span slot="after">PLATFORM</span><span slot="description">Full REST API access, webhooks, headless commerce support, and third-party integrations for maximum flexibility.</span>
    </service-block>
    <service-block class="basis-full" item="04" link="/contact" buttontext="Learn More" color="dark-orange" image="https://codiic.com/assets/img/theme-8.jpg">
        <span slot="before">DEDICATED</span><span slot="after">SUPPORT</span><span slot="description">Dedicated account manager, custom integrations, SLA-backed priority support, and security compliance assistance.</span>
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
    <cta-block class="flex-1" color="bg-purple" link="/contact" arrow="true" hasform="false" buttontext="Talk to Enterprise Sales">
        <h2 slot="title">Get a Custom Enterprise Demo</h2>
        <p slot="text">See how Codiic Enterprise can power your organization's commerce at global scale.</p>
    </cta-block>
    <cta-block class="flex-1" color="bg-green" link="https://dashboard.codiic.com/login" arrow="true" hasform="false" buttontext="Compare Plans">
        <h2 slot="title">Enterprise vs Pro Plans</h2>
        <p slot="text">Find the right tier for your organization's needs, traffic, and growth trajectory.</p>
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
<newsletter-section heading="Subscribe <br>to updates" subheading="Enterprise insights, infrastructure updates, and scaling strategies — delivered to your inbox." note="We respect your privacy and protect your information.">
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
    <li slot="menu-1" class="footer-menu-item"><a href="/affiliate">Affiliate</a></li>
    
    <li slot="menu-2" class="footer-menu-item"><a href="/online-store">Online Store</a></li>
    <li slot="menu-2" class="footer-menu-item"><a href="/automation">Automation</a></li>
    <li slot="menu-2" class="footer-menu-item"><a href="/analytics">Analytics</a></li>
    <li slot="menu-2" class="footer-menu-item"><a href="/website-builder">Website Builder</a></li>
    <li slot="menu-2" class="footer-menu-item"><a href="/help-center">Help Center</a></li>
    
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
