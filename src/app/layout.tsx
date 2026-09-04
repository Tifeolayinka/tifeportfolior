import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tifeolayinka.com"),
  title: {
    default: "Tife Olayinka | Product Designer & Engineer",
    template: "%s | Tife Olayinka",
  },
  description: "Strategy, design, and development from one person who stays through launch. 10+ products shipped for clients across the UK, US, Canada, UAE, Australia, and Nigeria.",
  icons: {
    icon: "/avatar.jpg",
  },
  openGraph: {
    title: "Book a Strategy Call | Tife Olayinka",
    description: "Strategy, design, and development from one person who stays through launch. Helping founders get their messy ideas to working products.",
    url: "https://www.tifeolayinka.com",
    siteName: "Tife Olayinka Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.tifeolayinka.com/opengraph-image.png",
        width: 1024,
        height: 523,
        alt: "Book a strategy call - Tife Olayinka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Strategy Call | Tife Olayinka",
    description: "Strategy, design, and development from one person who stays through launch. Helping founders get their messy ideas to working products.",
    creator: "@tifeolayinka",
    images: ["https://www.tifeolayinka.com/opengraph-image.png"],
  },
  verification: {
    google: "VlpR3b9-_aZEDxrjt2t-OECVWCMRdjUkQAWdgrJPZ08",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tife Olayinka",
    "url": "https://tifeolayinka.com",
    "image": "https://piton-digital.s3.eu-north-1.amazonaws.com/Portfolio+Image.JPG",
    "jobTitle": "Product Designer & Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Shipfast.agency"
    },
    "sameAs": [
      "https://twitter.com/tife_olayinka",
      "https://github.com/tifeolayinka",
      "https://www.linkedin.com/in/tife-olayinka/",
      "https://dribbble.com/tifeolayinka"
    ],
    "description": "Strategy, design, and development from one person who stays through launch. 10+ products shipped for clients across the UK, US, Canada, UAE, Australia, and Nigeria.",
    "knowsAbout": [
      "Product Design",
      "Bubble Development",
      "UI/UX Design",
      "No-code development",
      "Procurement & Supply Chain Management"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <WhatsAppWidget />
        </ThemeProvider>
        <Script
          async
          src="https://www.sabilytics.com/script.js"
          data-site="q4ygds5hkj2b"
          data-domain="tifeolayinka.com"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
