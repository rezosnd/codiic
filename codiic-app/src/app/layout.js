import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'CODIIC - Build, Run & Grow Your E-Commerce Business',
  description: 'Launch faster. Sell smarter.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="stylesheet" href="/template_main.min.css?v=3" />
      </head>
      <body suppressHydrationWarning>
        <div className="hs-content-id-209847509092 hs-site-page page">
          <main>
            {children}
          </main>
        </div>
        
        {/* Next.js Script Components for optimal loading and hydration safety */}
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        
        <script dangerouslySetInnerHTML={{ __html: `var hsVars = hsVars || {}; hsVars['language'] = 'en';` }}></script>
        <script defer src="/template_main.js?v=11"></script>
        <script defer src="https://zipcio.com/hubfs/hub_generated/module_assets/1/187881413719/1778538156611/module_HowWeWork.min.js"></script>

      </body>
    </html>
  );
}

