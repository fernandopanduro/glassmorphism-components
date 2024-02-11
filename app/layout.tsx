import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "https://glassmorphism-components.vercel.app/favicon.png",
  },
  title: "Collection of Glassmorphism components and effects.",
  description: "Collection of Glassmorphism Components and effects.",
  keywords:
    "Collection of Glassmorphism Components, components react, shadcn, materialui, glassmorphism, glassmorphism ciomponents",
  applicationName: "Collection of Glassmorphism Components.",
  authors: [{ name: "Fernando Panduro", url: "https://ferpanduro.com" }],
  creator: "Fernando Panduro",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://glassmorphism-components.vercel.app/",
    title: "Collection of Glassmorphism components and effects.",
    description:
      "Collection of glassmorphism components and effects. Crafted with React and Tailwind CSS.",
    siteName: "Collection of Glassmorphism Components.",
    images: [
      {
        url: "https://glassmorphism-components.vercel.app/cube.jpg",
        alt: "Collection of Glassmorphism Components.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // site: "@tucuenta", // Reemplaza con tu nombre de usuario de Twitter
    // creator: "@tucuenta", // Reemplaza con tu nombre de usuario de Twitter
    title: "Collection of Glassmorphism Components and effects.",
    description:
      "Collection of glassmorphism components and effects. Crafted with React and Tailwind CSS.",
    images: "https://glassmorphism-components.vercel.app/cube.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <Header />
        {children}
        <Analytics />
        <div id="modal"></div>
        <div id="drawer"></div>
      </body>
    </html>
  );
}
