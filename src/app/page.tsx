import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tife Olayinka | Product Designer & Engineer",
  description: "I help founders and businesses build the right product, the right way — strategy, design, and development.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Book a Strategy Call | Tife Olayinka",
    description: "Helping founders get their messy ideas to working products — strategy, design, and development.",
    url: "https://www.tifeolayinka.com",
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
    description: "Helping founders get their messy ideas to working products — strategy, design, and development.",
    images: ["https://www.tifeolayinka.com/opengraph-image.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
