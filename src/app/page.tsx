import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tife Olayinka | Product Designer & Engineer",
  description: "I help founders and businesses build the right product, the right way — strategy, design, and development.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tife Olayinka | Product Designer & Engineer",
    description: "I help founders and businesses build the right product, the right way — strategy, design, and development.",
    url: "https://tifeolayinka.com",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1024,
        height: 523,
        alt: "Helping founders get their messy ideas to working products - Tife Olayinka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tife Olayinka | Product Designer & Engineer",
    description: "I help founders and businesses build the right product, the right way — strategy, design, and development.",
    images: ["/opengraph-image.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
