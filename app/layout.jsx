import "./globals.css";
import { Inter } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import { PackageProvider } from "./context/site";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.anconsulting.co.za"),
  title: {
    default: "AN Consulting | Financial Records Management And Consulting Website",
    template: "%s | AN Consulting",
  },
  description: "AN Consulting provides accounting, tax, audit, and financial advisory services for South African businesses.",
  keywords: [
    "AN Consulting",
    "accounting services South Africa",
    "tax consulting",
    "audit services",
    "financial advisory"
],
  authors: [{ name: "AN Consulting" }],
  creator: "AN Consulting",
  publisher: "AN Consulting",
  alternates: {
    canonical: "https://www.anconsulting.co.za",
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: "https://www.anconsulting.co.za",
    siteName: "AN Consulting",
    title: "AN Consulting | Financial Records Management And Consulting Website",
    description: "AN Consulting provides accounting, tax, audit, and financial advisory services for South African businesses.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "AN Consulting social preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AN Consulting",
    description: "AN Consulting provides accounting, tax, audit, and financial advisory services for South African businesses.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
}

export default function RootLayout({

 children }) {
  return (
    <html lang="en-ZA" className="scroll-smooth"><body className={`${inter.className} bg-[#233142] text-[#7591a0]`}>
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
