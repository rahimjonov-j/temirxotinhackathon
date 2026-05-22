import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
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
    default: "Moshn — Mashinangiz tarixi, bir joyda",
    template: "%s | Moshn",
  },
  description:
    "Har bir ta'mir, har bir moy almashtirish — telefoningizda saqlanadi. Mashinani sotsangiz, butun tarix yangi egaga o'tadi. O'zbekiston bo'ylab 380+ ishonchli usta.",

  keywords: [
    "mashina tarixi",
    "avto servis Toshkent",
    "avtomobil ta'miri",
    "VIN raqam",
    "texpasport skaner",
    "mashina ta'mir yozuvi",
    "servis kitobi",
    "moshn",
    "usta topish",
    "avtoservis O'zbekiston",
    "car service history uzbekistan",
    "mashina sotish tarix",
    "Chevrolet Cobalt servis",
    "avtomobil tarixi ilovasi",
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
    title: "Moshn — Mashinangiz tarixi, bir joyda",
    description:
      "Har bir ta'mir, har bir almashtirish — telefoningizda saqlanadi. Mashinani sotsangiz, butun tarix yangi egaga o'tadi.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Moshn — Mashinangiz tarixi, bir joyda",
    description:
      "Har bir ta'mir, har bir almashtirish — telefoningizda saqlanadi. O'zbekiston bo'ylab 380+ ishonchli usta.",
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
        "O'zbekistonda avtomobil servis tarixi va ishonchli ustalar platformasi.",
      areaServed: { "@type": "Country", name: "Uzbekistan" },
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Moshn",
      operatingSystem: "ANDROID, IOS",
      applicationCategory: "UtilitiesApplication",
      description:
        "Mashinangizga qilingan har bir ta'mir va xizmatni saqlang. Texpasportni skan qiling — mashina ma'lumotlari avtomatik qo'shiladi.",
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
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/logo-white.png" sizes="any" type="image/png" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=switzer@300,400,500,600&display=swap"
          rel="stylesheet"
        />
        <script
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
