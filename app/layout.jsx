import "./globals.css";
import { Inter } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import { PackageProvider } from "./context/site";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AN Consulting - Your Partner in Financial Excellence",
  description:
    "AN Consulting provides expert accounting, audit, tax, and advisory services for small businesses in South Africa.",
  keywords: [
    "accounting",
    "audit",
    "tax services",
    "financial advisory",
    "small business consulting",
    "South Africa",
  ],
  authors: [{ name: "Ayabonga Qwabi", url: "http://ayabonga.com" }],
  openGraph: {
    title: "AN Consulting - Your Partner in Financial Excellence",
    description:
      "AN Consulting provides expert accounting, audit, tax, and advisory services for small businesses in South Africa.",
    url: "http://anconsulting.co.za",
    type: "website",
    locale: "en_ZA", // Locale for South Africa
    siteName: "AN Consulting",
    images: [
      {
        url: "http://anconsulting.co.za/logo/1.jpg",
        alt: "AN Consulting Logo",
        width: 1200, // Standard OG dimensions
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // Ensures the large image preview is used
    title: "AN Consulting - Your Partner in Financial Excellence",
    description:
      "AN Consulting provides expert accounting, audit, tax, and advisory services for small businesses in South Africa.",
    images: ["http://anconsulting.co.za/logo/1.jpg"],
    creator: "@anconsulting", // Replace with the actual Twitter handle
  },
  metadataBase: new URL("http://anconsulting.co.za"), // Ensures proper URL base resolution
  robots: {
    index: true, // Allow search engines to index the page
    follow: true, // Allow following of links on the page
  },
  alternates: {
    canonical: "http://anconsulting.co.za",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#233142] text-[#7591a0]`}>
        <PackageProvider>
          <AnimatePresence>
            {children}
            <CustomCursor />
            <Toaster position="top-right" />
          </AnimatePresence>
        </PackageProvider>
      </body>
    </html>
  );
}
