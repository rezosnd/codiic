export const metadata = {
  title: 'Contact Us | Codiic',
  description: "Let's build something exceptional together. Our team is here to help you succeed.",
};

export default function ContactPage() {
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
<transform-cta button1label="Talk to an Expert" button1href="#contact-form" tagline="Our team is here to help you succeed. Whether you're just getting started or scaling your business, we're ready to support your journey.">
    <strong>CONTACT US</strong><br>
    LET'S BUILD SOMETHING <strong>EXCEPTIONAL TOGETHER</strong>
</transform-cta>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- CONTACT FORM SECTION -->
<div id="contact-form" class="py-16 md:py-24 bg-[#F8FAFC]">
  <div class="max-w-[1400px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
    <!-- Left: Info -->
    <div class="flex flex-col justify-center">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-['druk-cyr'] uppercase tracking-tighter text-[#0F172A] mb-10">Get in touch</h2>
      <div class="space-y-10">
        <div class="flex items-start gap-6">
          <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          </div>
          <div>
            <h4 class="text-2xl font-bold text-[#0F172A] mb-2">Phone & WhatsApp</h4>
            <p class="text-lg text-gray-600">+91 XXXXX XXXXXX<br>Mon-Fri, 10AM-7PM IST</p>
          </div>
        </div>
        <div class="flex items-start gap-6">
          <div class="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <div>
            <h4 class="text-2xl font-bold text-[#0F172A] mb-2">Email Address</h4>
            <p class="text-lg text-gray-600">support@codiic.com<br>We reply within 24 hours</p>
          </div>
        </div>
        <div class="flex items-start gap-6">
          <div class="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </div>
          <div>
            <h4 class="text-2xl font-bold text-[#0F172A] mb-2">Office Location</h4>
            <p class="text-lg text-gray-600">Office No. 732, Gaur City Mall<br>Greater Noida West - 201318, India</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Right: Form -->
    <div class="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl shadow-slate-200/50">
      <h3 class="text-3xl font-bold text-[#0F172A] mb-3">Send us a message</h3>
      <p class="text-lg text-gray-600 mb-8">We'll get back to you as soon as possible</p>
      <form class="space-y-6">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <input type="text" class="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white outline-none transition-all text-lg" placeholder="John Doe">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input type="email" class="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white outline-none transition-all text-lg" placeholder="john@company.com">
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input type="tel" class="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white outline-none transition-all text-lg" placeholder="+1 (555) 000-0000">
          </div>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">How can we help?</label>
          <textarea rows="4" class="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white outline-none transition-all text-lg" placeholder="Tell us about your project..."></textarea>
        </div>
        <button type="button" class="w-full py-5 bg-[#0F172A] text-white rounded-xl font-bold hover:bg-[#1E293B] hover:shadow-lg transition-all text-xl mt-4">Send Message</button>
        <p class="text-sm text-gray-500 text-center font-medium">Your information is secure and never shared</p>
      </form>
    </div>
  </div>
</div>

<!-- SERVICES SECTION -->
<div class="row-fluid-wrapper row-depth-1 row-number-8 dnd-section">
<div class="row-fluid">
<div class="span12 widget-span widget-type-cell dnd-column" data-widget-type="cell" data-x="0" data-w="12">
<div class="row-fluid-wrapper row-depth-1 row-number-9 dnd-row">
<div class="row-fluid">
<div class="span12 widget-span widget-type-custom_widget dnd-module" data-widget-type="custom_widget" data-x="0" data-w="12">
<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module">
<services-section>
    <span slot="headline">Get the support you need to succeed. Our team is here to help you at every step of your journey.</span>
    <service-block class="basis-full" item="01" link="/contact" buttontext="Get Started" color="purple" image="https://codiic.com/assets/img/theme-5.jpg">
        <span slot="before">PLATFORM DEMO &</span><span slot="after">ONBOARDING</span><span slot="description">Get a personalized walkthrough and expert guidance</span>
    </service-block>
    <service-block class="basis-full" item="02" link="/contact" buttontext="Get Started" color="orange" image="https://codiic.com/assets/img/theme-6.jpg">
        <span slot="before">ENTERPRISE &</span><span slot="after">CUSTOM PRICING</span><span slot="description">Tailored solutions for your business needs</span>
    </service-block>
    <service-block class="basis-full" item="03" link="/contact" buttontext="Get Started" color="green" image="https://codiic.com/assets/img/theme-7.jpg">
        <span slot="before">TECHNICAL &</span><span slot="after">INTEGRATION SUPPORT</span><span slot="description">Expert assistance with setup and integrations</span>
    </service-block>
    <service-block class="basis-full" item="04" link="/contact" buttontext="Get Started" color="dark-orange" image="https://codiic.com/assets/img/theme-8.jpg">
        <span slot="before">PARTNERSHIP &</span><span slot="after">AFFILIATE</span><span slot="description">Explore collaboration opportunities. Average response time: under 2 hours</span>
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
        <h2 slot="title">Ready to Build Your Brand?</h2>
        <p slot="text">Empowering entrepreneurs to build and scale successful online stores with powerful tools and seamless experiences.</p>
    </cta-block>
    <cta-block class="flex-1" color="bg-green" link="tel:+910000000000" arrow="true" hasform="false" buttontext="Call Codiic">
        <h2 slot="title">Let's work together</h2>
        <p slot="text">Need Custom Development or Enterprise Solutions? We're a phone call away.</p>
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
