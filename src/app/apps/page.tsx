import AppsClient from "./AppsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Internal Applications | Tife Olayinka",
  description: "Replace chaotic spreadsheets and duct-taped tools with custom internal applications tailored to your business operations. Ready in 2-4 weeks.",
  alternates: {
    canonical: "/apps",
  },
  openGraph: {
    title: "Custom Internal Applications | Tife Olayinka",
    description: "Replace chaotic spreadsheets and duct-taped tools with custom internal applications tailored to your business operations. Ready in 2-4 weeks.",
    url: "https://www.tifeolayinka.com/apps",
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
    title: "Custom Internal Applications | Tife Olayinka",
    description: "Replace chaotic spreadsheets and duct-taped tools with custom internal applications tailored to your business operations. Ready in 2-4 weeks.",
    images: ["https://www.tifeolayinka.com/opengraph-image.png"],
  },
};

export default function AppsLandingPage() {
  return <AppsClient />;
}
