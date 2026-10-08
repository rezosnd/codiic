export const metadata = {
  title: 'Analytics | Codiic - Data-Driven Growth',
  description: 'Real-time insights into your sales, customer behavior, and inventory. Turn raw data into actionable growth strategies.',
};

export default function AnalyticsPage() {
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
<transform-cta button1label="View Your Dashboard" button1href="https://dashboard.codiic.com/login" tagline="Stop guessing. Get real-time insights into your sales, customer behavior, inventory levels, and marketing performance. Turn raw data into actionable growth strategies.">
    <strong>DATA-DRIVEN</strong><br>
    DECISIONS THAT <strong>GROW REVENUE</strong>
</transform-cta>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- BUILDING BLOCKS -->
<div class="row-fluid-wrapper row-depth-1 row-number-5 dnd-section">
<div class="row-fluid">
<div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-6 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<building-blocks leading="" image="https://codiic.com/assets/img/Customize.png"
  block1title="REAL-TIME DASHBOARD" block1description="Monitor revenue, orders, conversion rates, and customer metrics — all updating live. No more stale spreadsheets or delayed reports." block1image="/CONVERSION.png"
  block2title="CUSTOMER INSIGHTS" block2description="Understand who your customers are, what they buy, how they shop, and when they churn. Segment audiences for targeted campaigns." block2image="/LIGHTNING.png"
  block3title="PRODUCT ANALYTICS" block3description="Track which products drive the most revenue, highest margins, and best conversion rates. Identify trends before your competitors." block3image="/SMART.png"
  block4title="MARKETING ROI" block4description="See exactly which channels, campaigns, and touchpoints drive sales. Allocate your budget to what actually works." block4image="/ENTERPRISE.png"
  buttontext="Start Free Trial" buttonhref="https://dashboard.codiic.com/login">
    <div class="inline" slot="title1">Analytics That Power</div>
    <div class="inline" slot="title2">Your Growth Strategy</div>
</building-blocks>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- HOW WE WORK -->
<div class="row-fluid-wrapper row-depth-1 row-number-7 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<how-we-work heading="Analytics in Action" description="From raw data to revenue growth. See how Codiic Analytics works."
  step1number="01." step1title="Collect Data" step1text="Every customer interaction, page view, and purchase is tracked automatically — no extra setup needed." step1image="/store_setup.png"
  step2number="02." step2title="Visualize Insights" step2text="Beautiful, intuitive dashboards show you exactly what's happening across your store in real-time." step2image="/cutomize_design.png"
  step3number="03." step3title="Identify Opportunities" step3text="AI-powered recommendations highlight growth opportunities, underperforming products, and optimization targets." step3image="/automation.png"
  step4number="04." step4title="Take Action" step4text="Turn insights into campaigns, product changes, and pricing strategies that directly impact your bottom line." step4image="/ongoing-gr.png"></how-we-work>
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
        <h2 slot="title">See Your Analytics Dashboard</h2>
        <p slot="text">Get instant access to real-time insights about your store's performance.</p>
    </cta-block>
    <cta-block class="flex-1" color="bg-green" link="/enterprise" arrow="true" hasform="false" buttontext="Enterprise Analytics">
        <h2 slot="title">Need Advanced Reporting?</h2>
        <p slot="text">Enterprise plans include custom reports, data exports, and dedicated analytics support.</p>
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
<newsletter-section heading="Subscribe <br>to updates" subheading="Analytics tips, data strategies, and growth insights — delivered to your inbox." note="We respect your privacy and protect your information.">
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
