import { Anton, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../ui/components/Common/Navbar/Navbar";
import localFont from 'next/font/local';
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";


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
  title: "DiegoVive10",
  description: "Experiencia inmersiva del 10",
};

export default async function RootLayout({ children, params: { locale } }) {

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={anton.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}></script>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
