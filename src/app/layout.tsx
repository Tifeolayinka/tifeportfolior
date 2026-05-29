import type { Metadata } from "next";
import { Outfit, Inter, Inter_Tight, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tifeolayinka.com"),
  title: {
    default: "Tife Olayinka | Designer & Developer",
    template: "%s | Tife Olayinka",
  },
  description: "Personal portfolio of Tife Olayinka, a Product Designer & Bubble Developer helping businesses build products from strategy to launch.",
  icons: {
    icon: "/avatar.jpg",
  },
  openGraph: {
    title: "Tife Olayinka | Designer & Developer",
    description: "Personal portfolio of Tife Olayinka, a Product Designer & Bubble Developer helping businesses build products from strategy to launch.",
    url: "https://tifeolayinka.com",
    siteName: "Tife Olayinka Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tife Olayinka Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tife Olayinka | Designer & Developer",
    description: "Personal portfolio of Tife Olayinka, a Product Designer & Bubble Developer helping businesses build products from strategy to launch.",
    creator: "@tifeolayinka",
    images: ["/opengraph-image.png"],
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
    "jobTitle": "Product Designer & Bubble Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Shipfast.agency"
    },
    "sameAs": [
      "https://twitter.com/tife_olayinka",
      "https://github.com/tifeolayinka",
      "https://linkedin.com/in/olayinka-boluwatife-",
      "https://dribbble.com/tifeolayinka"
    ],
    "description": "I help founders and businesses build the right product, the right way — strategy, design, and development.",
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
        className={`${outfit.variable} ${inter.variable} ${interTight.variable} ${playfair.variable} antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50`}
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
      </body>
    </html>
  );
}
