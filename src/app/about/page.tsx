import AboutClient from "./AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tife Olayinka | Product Designer & Engineer",
  description: "Learn about Tife's experience as a Senior Product Engineer and UI/UX Designer, offering MBA-level procurement insight and Bubble development.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Tife Olayinka | Product Designer & Engineer",
    description: "Learn about Tife's experience as a Senior Product Engineer and UI/UX Designer, offering MBA-level procurement insight and Bubble development.",
    url: "https://www.tifeolayinka.com/about",
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
    title: "About Tife Olayinka | Product Designer & Engineer",
    description: "Learn about Tife's experience as a Senior Product Engineer and UI/UX Designer, offering MBA-level procurement insight and Bubble development.",
    images: ["https://www.tifeolayinka.com/opengraph-image.png"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
