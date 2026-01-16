import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SplashScreen } from "@/components/SplashScreen";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ababilx.imurad.me"),
  title: {
    default:
      "AbabilX - Open Source Organization | Building Practical Developer Tools",
    template: "%s | AbabilX",
  },
  description:
    "AbabilX is a community-driven open-source organization building practical, clean, and impactful software for developers and learners worldwide.",
  keywords: [
    "AbabilX",
    "open source organization",
    "developer tools",
    "open source software",
    "developer community",
    "productivity tools",
    "learning projects",
    "open collaboration",
    "MIT license",
    "free software",
    "developer utilities",
    "programming tools",
  ],
  authors: [{ name: "AbabilX Team" }],
  creator: "AbabilX",
  publisher: "AbabilX",
  applicationName: "AbabilX",
  category: "Technology",

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
    siteName: "AbabilX",
    title: "AbabilX - Open Source Organization",
    description:
      "Building practical, clean, and impactful open-source software for developers and learners worldwide. Join our community!",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "AbabilX - Open Source Organization",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "AbabilX - Open Source Organization",
    description:
      "Community-driven open-source organization building practical developer tools and learning resources. Free and open!",
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
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://ababilx.imurad.me" />
        <meta name="theme-color" content="#0d1117" />
      </head>
      <body className={`${ubuntu.variable} ${ubuntu.className} antialiased`}>
        <LanguageProvider>
          <SplashScreen>{children}</SplashScreen>
        </LanguageProvider>
      </body>
    </html>
  );
}
