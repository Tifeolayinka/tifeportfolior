import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tife Olayinka | 0-1 Product Builder & Designer",
  description: "I design and ship products from 0 to 1 — strategy, UI/UX design, and full-stack development with zero handoff gaps.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tife Olayinka | 0-1 Product Builder & Designer",
    description: "I design and ship products from 0 to 1 — strategy, UI/UX design, and full-stack development with zero handoff gaps.",
    url: "https://www.tifeolayinka.com",
    images: [
      {
        url: "https://www.tifeolayinka.com/opengraph-image.png",
        width: 1024,
        height: 523,
        alt: "Tife Olayinka - 0-1 Product Builder & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tife Olayinka | 0-1 Product Builder & Designer",
    description: "I design and ship products from 0 to 1 — strategy, UI/UX design, and full-stack development with zero handoff gaps.",
    images: ["https://www.tifeolayinka.com/opengraph-image.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
