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
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <link rel="stylesheet" href="https://cdn2.hubspot.net/hub/-1/hub_generated/template_assets/1495141174000/hubspot/hubspot_default/shared/responsive/layout.min.css" />
        
        <script dangerouslySetInnerHTML={{ __html: `var hsVars = hsVars || {}; hsVars['language'] = 'en';` }}></script>
        <script defer src="/template_main.js"></script>
        <script defer src="https://zipcio.com/hubfs/hub_generated/module_assets/1/187881413719/1778538156611/module_HowWeWork.min.js"></script>

      </body>
    </html>
  );
}

