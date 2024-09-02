import { Anton, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/components/Common/Navbar/Navbar";
import localFont from 'next/font/local';


const anton = Anton({ subsets: ["latin"], display: 'swap', weight: ['400'], });
export const roboto = Roboto({ subsets: ["latin"], display: 'swap', weight: ['400', '500', '700'], });

export const gabriel = localFont({
  src: [
    {
      path: '../public/fonts/gabr.ttf',
      weight: '500',
    },
  ],
  display: 'swap',
})

export const helvetica = localFont({
  src: [
    {
      path: '../public/fonts/Helvetica.ttf',
      weight: '500',
    },
  ],
  display: 'swap',
})


export const metadata = {
  title: "DiegoVive10",
  description: "Experiencia inmersiva del 10",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anton.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
