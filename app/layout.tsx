import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://draw-a-ui.vercel.app"
  ),
  title: {
    default: "Draw A UI | AI-Powered Wireframe to HTML Converter",
    template: "%s | Draw A UI",
  },
  description:
    "Transform your wireframe sketches into fully functional HTML with Tailwind CSS using AI. Draw your UI design and let GPT-4 Vision bring it to life instantly. Created by Shubh Srivastava.",
  keywords: [
    "wireframe",
    "UI design",
    "AI",
    "GPT-4 Vision",
    "HTML generator",
    "Tailwind CSS",
    "tldraw",
    "prototyping",
    "web development",
    "sketch to code",
    "AI design tool",
  ],
  authors: [{ name: "Shubh Srivastava" }],
  creator: "Shubh Srivastava",
  publisher: "Shubh Srivastava",
  applicationName: "Draw A UI",
  openGraph: {
    title: "Draw A UI | AI-Powered Wireframe to HTML Converter",
    description:
      "Transform your wireframe sketches into fully functional HTML with Tailwind CSS using AI. Draw your UI design and let GPT-4 Vision bring it to life instantly.",
    type: "website",
    locale: "en_US",
    siteName: "Draw A UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Draw A UI | AI-Powered Wireframe to HTML Converter",
    description:
      "Transform your wireframe sketches into fully functional HTML with Tailwind CSS using AI. Draw, design, and deploy faster.",
    creator: "@shubhsrivastava",
  },
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
