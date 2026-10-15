import DemoSimulator from './DemoSimulator';

export const metadata = {
  title: 'Interactive Studio | Codiic — Live Customizer & Merchant Dashboard',
  description: 'Experience the real Codiic platform. Live store customizer, real-time order simulator, WhatsApp leads, and merchant dashboard — all for just ₹1/Day.',
};

const topHtml = `
<div class="container-fluid">
<div class="row-fluid-wrapper"><div class="row-fluid">
<div class="span12 widget-span widget-type-cell" data-widget-type="cell" data-x="0" data-w="12">

<!-- NAVIGATION -->
<div class="row-fluid-wrapper row-depth-1 row-number-1 dnd-section">
<div class="row-fluid"><div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-2 dnd-row"><div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget widget_1741551298453-hidden dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<nav-bar home="true" bookurl="https://app.codiic.com">
  <ul slot="desktop" class="flex flex-nowrap">
    <li class="menu-item"><a href="/platform">Platform</a></li>
    <li class="menu-item"><a href="/solutions">Solutions</a></li>
    <li class="menu-item"><a href="/features">Features</a></li>
    <li class="menu-item"><a href="/pricing">Pricing</a></li>
    <li class="menu-item"><a href="/demo">Demo App</a></li>
    <li class="menu-item"><a href="https://app.codiic.com/login">Log in</a></li>
  </ul>
  <menu slot="mobile-1">
    <li class="mobile-menu-item"><a href="/">Home <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
    <li class="mobile-menu-item"><a href="/platform">Platform <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
    <li class="mobile-menu-item"><a href="/features">Features <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
    <li class="mobile-menu-item"><a href="/pricing">Pricing <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
  </menu>
  <menu slot="mobile-2">
    <li class="mobile-menu-item"><a href="/demo">Demo App <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
    <li class="mobile-menu-item"><a href="https://app.codiic.com/login">Log in <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
    <li class="mobile-menu-item"><a href="https://app.codiic.com">Start for ₹1/Day <img src="https://zipcio.com/hubfs/raw_assets/public/ZipcioTheme/img/arrow-right.svg" alt="icon" class="object-contain w-6 h-6"></a></li>
  </menu>
</nav-bar>
</div></div></div></div></div></div></div>

<!-- HERO BANNER -->
<div class="row-fluid-wrapper row-depth-1 row-number-3 dnd-section main_dnd-row-1-hidden">
<div class="row-fluid"><div class="span12 widget-span widget-type-cell dnd-column cell_17415515188772-hidden" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-4 dnd-row"><div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<transform-cta button1label="Start for ₹1/Day" button1href="https://app.codiic.com" tagline="No complicated setup. No multiple tools. Zero coding. Instant activation for your business.">
  <strong>ONE PLATFORM. ₹1/DAY.</strong><br>
  SEE HOW CODIIC WORKS.
</transform-cta>
</div></div></div></div></div></div></div>

</div></div></div>
`;

const bottomHtml = `
<div class="container-fluid">
<div class="row-fluid-wrapper"><div class="row-fluid">
<div class="span12 widget-span widget-type-cell" data-widget-type="cell" data-x="0" data-w="12">

<!-- DOUBLE CTA SECTION -->
<div class="row-fluid-wrapper row-depth-1 row-number-10 dnd-section">
<div class="row-fluid"><div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-11 dnd-row"><div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<double-cta-section>
  <cta-block class="flex-1" color="bg-purple" link="https://app.codiic.com" arrow="true" hasform="false" buttontext="Start for ₹1/Day">
    <h2 slot="title">Your Business, Finally in One Place</h2>
    <p slot="text">Everything you just tested in the live studio &mdash; it&rsquo;s all real, all yours, for just ₹1/Day. Instant activation, no lock-in.</p>
  </cta-block>
  <cta-block class="flex-1" color="bg-green" link="/pricing" arrow="true" hasform="false" buttontext="See Pricing">
    <h2 slot="title">₹365/Year. All 8 Modules.</h2>
    <p slot="text">Save ₹1,43,635 vs separate SaaS tools. Single login. Instant sync. Cancel anytime.</p>
  </cta-block>
</double-cta-section>
</div></div></div></div></div></div></div>

<!-- TESTIMONIALS SECTION -->
<div class="row-fluid-wrapper row-depth-1 row-number-12 dnd-row"><div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<testimonials-section>
  <testimonial-block item="01" color="bg-purple">
    <img slot="logo" src="https://codiic.com/assets/img/r-6.png" alt="Chai & Kraft Store logo">
    <p slot="content">&ldquo;Codiic ne mera business transform kar diya. Website, WhatsApp automation, aur CRM &mdash; sab ek jagah. ₹1/day mein itna kuch? Unbelievable!&rdquo;</p>
    <span slot="author">Rajesh Sharma</span>
    <span slot="designation">Founder, Chai &amp; Kraft Store</span>
  </testimonial-block>
  <testimonial-block item="02" color="bg-green">
    <img slot="logo" src="https://codiic.com/assets/img/r-4.png" alt="Dermify logo">
    <p slot="content">&ldquo;Pehle 5 alag apps use karta tha. Ab sirf Codiic. Orders 3x ho gaye aur cost 98% kam ho gayi.&rdquo;</p>
    <span slot="author">Priya Mehta</span>
    <span slot="designation">Owner, Dermify Skincare</span>
  </testimonial-block>
  <testimonial-block item="03" color="bg-orange">
    <img slot="logo" src="https://codiic.com/assets/img/r-3.png" alt="Babyhaat logo">
    <p slot="content">&ldquo;WhatsApp broadcast, UPI payments, automated GST invoices &mdash; sab kuch ek dashboard se. Real game-changer for Indian merchants.&rdquo;</p>
    <span slot="author">Anita Verma</span>
    <span slot="designation">Founder, Babyhaat</span>
  </testimonial-block>
</testimonials-section>
</div></div></div></div>

<!-- NEWSLETTER SECTION -->
<div class="row-fluid-wrapper row-depth-1 row-number-17 dnd-section">
<div class="row-fluid"><div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-18 dnd-row"><div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<newsletter-section heading="Subscribe <br>to updates" subheading="Indian business growth tips, WhatsApp marketing blueprints, and scaling frameworks &mdash; delivered straight to your inbox." note="We respect your privacy. No spam ever."></newsletter-section>
</div></div></div></div></div></div></div>

<!-- FOOTER SECTION -->
<div class="row-fluid-wrapper row-depth-1 row-number-19 dnd-section main_dnd-row-6-padding">
<div class="row-fluid"><div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-20 dnd-row"><div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<footer-section ctalink="/contact">
  <li slot="menu-1" class="footer-menu-item"><a href="/platform">Platform</a></li>
  <li slot="menu-1" class="footer-menu-item"><a href="/features">Store Builder</a></li>
  <li slot="menu-1" class="footer-menu-item"><a href="/features">CRM Engine</a></li>
  <li slot="menu-1" class="footer-menu-item"><a href="/features">WhatsApp Hub</a></li>
  <li slot="menu-1" class="footer-menu-item"><a href="/features">AI Business Copilot</a></li>
  <li slot="menu-2" class="footer-menu-item"><a href="/about">About Us</a></li>
  <li slot="menu-2" class="footer-menu-item"><a href="/careers">Careers</a></li>
  <li slot="menu-2" class="footer-menu-item"><a href="/press">Press &amp; Media</a></li>
  <li slot="menu-2" class="footer-menu-item"><a href="/contact">Contact Support</a></li>
  <li slot="menu-2" class="footer-menu-item"><a href="/blog">Blog</a></li>
  <li slot="social"><a target="_blank" href="https://instagram.com/codiic">Instagram</a></li>
  <li slot="social"><a target="_blank" href="https://linkedin.com/company/codiic">LinkedIn</a></li>
  <li slot="social"><a target="_blank" href="https://facebook.com/codiic">Facebook</a></li>
  <li slot="social"><a target="_blank" href="mailto:support@codiic.com">support@codiic.com</a></li>
  <li slot="legal" class="square-item"><a href="/privacy">Privacy Policy</a></li>
  <li slot="legal" class="square-item"><a href="/terms">Terms of Service</a></li>
  <li slot="legal" class="square-item"><a href="/refund">Refund Policy</a></li>
  <li slot="legal" class="square-item"><a href="/security">Security Overview</a></li>
</footer-section>
</div></div></div></div></div></div></div>

</div></div></div>
`;

export default function DemoPage() {
  return (
    <div style={{ background: '#FAFAFF', minHeight: '100vh', width: '100%' }}>
      {/* Top Navbar & Hero */}
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: topHtml }} />

      {/* Main Interactive Studio Section */}
      <section style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 clamp(16px, 4vw, 56px) clamp(48px, 6vw, 80px)',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Studio Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{
            fontFamily: 'druk-cyr, Impact, sans-serif',
            fontSize: 'clamp(36px, 6vw, 76px)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: '#08084F',
            lineHeight: 0.95,
            margin: '0 0 16px 0',
            letterSpacing: '-0.02em'
          }}>
            BUILD. CUSTOMIZE.<br />
            <span style={{ color: '#4338CA' }}>RUN YOUR STORE.</span>
          </h2>

          <p style={{
            fontFamily: 'abc-favorit, sans-serif',
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            color: '#475569',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Personalize your storefront design, simulate customer orders, and explore automated business operations in real time.
          </p>
        </div>

        {/* Live Simulator Component */}
        <DemoSimulator />
      </section>

      {/* Bottom Double CTA, Testimonials, Newsletter, Footer */}
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: bottomHtml }} />
    </div>
  );
}
