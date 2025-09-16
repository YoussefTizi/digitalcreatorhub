
import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import Favicon from './favicon.ico';

import "./globals.css";

const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Space_Mono({
  weight:'700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})
export const metadata: Metadata = {
  title: "Création de Sites Web & Solutions Digitales sur Mesure | Casablanca",
  description: "Agence digitale spécialisée dans la création de sites web professionnels, solutions digitales et optimisation SEO pour entreprises à Casablanca et au-delà.",
  keywords: [
    "création de sites web", 
    "solutions digitales", 
    "développement web", 
    "agence digitale", 
    "SEO Casablanca",
    "design de sites web",
    "services digitaux", 
    "entreprise digitale",
    "développement sur mesure",
    "Casablanca"
  ],
  // verification: { google: "F27P7x4KGBdgL9FWnTEcTxfUU8Gbc0tjeeMFLru0wYw" },
  verification: { google: "A-p8MKJq5P9DdnMQIKoYLZtIGeusEDY4oAgyPKffCvQ" },

  authors: [{ name: "Youssef Tizi", url: "https://digital-creator-hub.web.app" }],
  icons: [{ rel: 'icon', url: Favicon.src }],
 
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        {children}
       
      </body>
       <GoogleAnalytics gaId="G-ZGBN6X27N2" />
    </html>
  );
}
