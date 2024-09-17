import { Anton, Roboto } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"


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
      <body className={anton.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
          <Script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&loading=async&libraries=map,marker,places`} strategy="beforeInteractive"></Script>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
