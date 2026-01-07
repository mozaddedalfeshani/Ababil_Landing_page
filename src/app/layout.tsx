import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ababilx.imurad.me"),
  title: {
    default:
      "Ababil Studio - Free Open Source Postman Alternative | Rust-Powered API Testing",
    template: "%s | Ababil Studio",
  },
  description:
    "Free, open-source Postman alternative built with Rust. Blazing-fast API testing, lightweight, privacy-first. No account required. Download now!",
  keywords: [
    "Postman alternative",
    "free Postman alternative",
    "open source API testing",
    "Rust API client",
    "free API testing tool",
    "lightweight HTTP client",
    "REST API testing",
    "privacy-first API tool",
    "developer tools",
    "Ababil Studio",
    "open source",
    "free software",
  ],
  authors: [{ name: "Ababil Studio Team" }],
  creator: "Ababil Studio",
  publisher: "Ababil Studio",
  applicationName: "Ababil Studio",
  category: "Developer Tools",

  // Icons
  icons: {
    icon: [
      { url: "/iconwithoutbg.png", sizes: "any" },
      { url: "/iconwithoutbg.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/iconwithoutbg.png", sizes: "180x180" }],
    shortcut: "/iconwithoutbg.png",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ababilx.imurad.me",
    siteName: "Ababil Studio",
    title: "Ababil Studio - Free Open Source Postman Alternative",
    description:
      "Free, open-source Postman alternative built with Rust. Blazing-fast, lightweight, privacy-first API testing. No account required!",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Ababil Studio - Free Open Source Postman Alternative",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ababil Studio - Free Postman Alternative | Rust-Powered",
    description:
      "Free, open-source Postman alternative. Rust-powered, blazing-fast, lightweight, privacy-first. No account required!",
    images: ["/banner.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ababilx.imurad.me" />
        <meta name="theme-color" content="#3674B5" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
