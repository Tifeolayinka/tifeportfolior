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
    siteName: "Tife Olayinka Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}
