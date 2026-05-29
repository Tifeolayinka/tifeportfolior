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
    url: "https://tifeolayinka.com/apps",
    siteName: "Tife Olayinka Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function AppsLandingPage() {
  return <AppsClient />;
}
