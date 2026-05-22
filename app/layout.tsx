import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://temirxotin.uz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Moshn — Bir tugma, yo'lda yordam",
    template: "%s | Moshn",
  },
  description:
    "Yo'lda mashinangiz ishdan chiqsa — ilovani oching, SOS tugmasini bosing. Operator aloqaga chiqadi, muammoni aniqlab, kerakli mutaxassisni yuboradi. O'zbekiston bo'ylab 380+ ishonchli mutaxassis.",

  keywords: [
    "yo'lda yordam",
    "avtoservis Toshkent",
    "mashina buzilib qolsa",
    "SOS yordam",
    "yo'l yordami",
    "moshn",
    "mutaxassis chaqirish",
    "avtoservis O'zbekiston",
    "roadside assistance uzbekistan",
    "mashina ta'miri",
    "tezkor usta",
    "yo'lda qolib ketdim",
    "Chevrolet Cobalt ta'miri",
    "avtomobil yordam ilovasi",
  ],

  authors: [{ name: "Moshn", url: SITE_URL }],
  creator: "Moshn",
  publisher: "Moshn",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      "uz-UZ": SITE_URL,
    },
  },

  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: SITE_URL,
    siteName: "Moshn",
    title: "Moshn — Bir tugma, yo'lda yordam",
    description:
      "Yo'lda mashinangiz ishdan chiqsa — SOS tugmasini bosing. Operator aloqaga chiqadi, kerakli mutaxassisni yuboradi.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Moshn — Bir tugma, yo'lda yordam",
    description:
      "Yo'lda mashinangiz ishdan chiqsa — SOS tugmasini bosing. O'zbekiston bo'ylab 380+ ishonchli mutaxassis.",
  },

  icons: {
    icon: [
      { url: "/logo-white.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      { url: "/logo-white.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo-white.png",
  },

  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Moshn",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-transparent.webp`,
      },
      description:
        "O'zbekistonda yo'lda qolib ketgan haydovchilarga tezkor yordam ko'rsatuvchi platforma.",
      areaServed: { "@type": "Country", name: "Uzbekistan" },
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Moshn",
      operatingSystem: "ANDROID, IOS",
      applicationCategory: "UtilitiesApplication",
      description:
        "Yo'lda mashinangiz ishdan chiqsa — SOS tugmasini bosing. Operator aloqaga chiqadi, muammoni aniqlab, kerakli mutaxassisni yuboradi.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "UZS" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "124",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Moshn",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "uz-UZ",
    },
  ],
};

/* Anti-flash: set theme before first paint */
const themeScript = `(function(){var t=localStorage.getItem('tx-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-white.png" sizes="any" type="image/png" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=switzer@300,400,500,600&display=swap"
          rel="stylesheet"
        />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
