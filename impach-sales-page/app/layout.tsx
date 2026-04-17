import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "IMPACH Academy - Promosi 2026 | Diskaun 25% + Program PERCUMA",
  description:
    "Promosi 2026 IMPACH Academy: Jimat RM2,421! Diskaun 25% yuran pendaftaran + Ujian IMPACH & Kelas Mengaji/Mandarin PERCUMA. Tuisyen berkualiti untuk Darjah 4 - Tingkatan 5. Daftar sebelum 31 Januari 2026.",
  keywords: [
    "IMPACH Academy",
    "tuisyen",
    "tuition",
    "Bangi",
    "Kajang",
    "Semenyih",
    "promosi 2026",
    "diskaun tuisyen",
    "kelas mengaji",
    "kelas mandarin",
    "SPM",
    "UPSR",
    "Darjah 4",
    "Tingkatan 5",
  ],
  openGraph: {
    title: "IMPACH Academy - Promosi 2026 | Jimat RM2,421",
    description:
      "Diskaun 25% + 2 Program PERCUMA (Ujian IMPACH & Kelas Mengaji/Mandarin). Tawaran terhad sehingga 31 Januari 2026!",
    type: "website",
    locale: "ms_MY",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NPFNSR8M');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NPFNSR8M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
