import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ababil Studio - Modern Development Companion",
  description:
    "A powerful, intuitive development tool designed to streamline your workflow and boost productivity.",
  keywords: ["development", "tools", "productivity", "open source"],
  authors: [{ name: "Ababil Studio Team" }],
  openGraph: {
    title: "Ababil Studio",
    description: "Your Modern Development Companion",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
