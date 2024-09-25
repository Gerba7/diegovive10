import { Anton, Cookie, Roboto } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"
import CookieBanner from "../ui/components/Common/CookieBanner/CookieBanner";
import Footer from "../ui/components/Common/Footer/Footer";


const anton = Anton({ subsets: ["latin"], display: 'swap', weight: ['400'], });
export const roboto = Roboto({ subsets: ["latin"], display: 'swap', weight: ['400', '500', '700'], });

export const gabriel = localFont({
  src: [
    {
      path: '../../public/fonts/gabr.ttf',
      weight: '500',
    },
  ],
  display: 'swap',
})

export const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/Helvetica.ttf',
      weight: '500',
    },
  ],
  display: 'swap',
})


export const metadata = {
  title: "Diego Vive Tour",
  description: "Experiencia inmersiva del 10",
};

export default async function RootLayout({ children, params: { locale } }) {

  const messages = await getMessages()
  
  return (
    <html lang={locale}>
      <head>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}></Script>
        <Script id="gtm-config-script"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
              });
              gtag('js', new Date());
              gtag('config', '${process.env.GTM_ID}', {
                'anonymize_ip': true,
              });
            `,
          }}
        />
      </head>
      <body className={anton.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHGHTBXB" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieBanner />
          <Footer />
          <Analytics />
          <Script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&loading=async&libraries=map,marker,places`} strategy="beforeInteractive"></Script>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
