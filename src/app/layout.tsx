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
  metadataBase: new URL("https://ababil.studio"),
  title: {
    default: "Ababil Studio - Modern API Development Companion",
    template: "%s | Ababil Studio",
  },
  description:
    "A blazing-fast, open-source API development and testing platform. Rust-powered core, lightweight, and privacy-first alternative to Postman.",
  keywords: [
    "API testing",
    "API development",
    "Postman alternative",
    "REST API",
    "HTTP client",
    "open source",
    "Rust",
    "developer tools",
    "productivity",
    "Ababil Studio",
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
    url: "https://ababil.studio",
    siteName: "Ababil Studio",
    title: "Ababil Studio - Modern API Development Companion",
    description:
      "A blazing-fast, open-source API development and testing platform. Rust-powered core, lightweight, and privacy-first alternative to Postman.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Ababil Studio - Modern API Development Companion",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ababil Studio - Modern API Development Companion",
    description:
      "A blazing-fast, open-source API development and testing platform. Rust-powered, lightweight, and privacy-first.",
    images: ["/banner.png"],
    creator: "@AbabilStudio",
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

  // Verification (add your codes when available)
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ababil.studio" />
        <meta name="theme-color" content="#3674B5" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
