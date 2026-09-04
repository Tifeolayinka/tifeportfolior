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
    url: "https://tifeolayinka.com/about",
    siteName: "Tife Olayinka Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png?v=2",
        width: 1024,
        height: 523,
        alt: "Helping founders get their messy ideas to working products - Tife Olayinka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tife Olayinka | Product Designer & Engineer",
    description: "Learn about Tife's experience as a Senior Product Engineer and UI/UX Designer, offering MBA-level procurement insight and Bubble development.",
    images: ["/opengraph-image.png?v=2"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
