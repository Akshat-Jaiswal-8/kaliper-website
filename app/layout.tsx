import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Inter, Montserrat, Poppins, Prompt } from "next/font/google";
import React from "react";
import ClientSmoothScroller from "@/components/ClientSmoothScroller";
import { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const prompt = Prompt({
  subsets: ["latin"],
  variable: "--font-prompt",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Innovative IT Solutions & Expert Consulting | Kaliper Technologies",
    template: "%s | Kaliper Technologies",
  },
  description:
    "Kaliper Technologies offers innovative IT consulting services designed to help businesses thrive through advanced technology solutions in data engineering, analytics, and AI.",
  openGraph: {
    title: {
      default: "Kaliper Technologies | Your IT Consulting Partner",
      template: "%s | Kaliper Technologies",
    },
    description:
      "Explore Kaliper Technologies for expert IT consulting services that empower businesses to succeed through technology. Specializing in data engineering, analytics, and AI.",
    url: "https://kaliper.in",
    siteName: "Kaliper Technologies",
    images: [
      {
        url: "/png/logo.png",
        width: 1200,
        height: 630,
        alt: "Kaliper Technologies Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"bg-[#171717]"}>
      <body
        className={`${montserrat.variable} ${prompt.variable} ${poppins.variable} ${inter.variable} bg-[#171717] font-montserrat`}>
        <ClientSmoothScroller />
        {children}
        <Analytics mode={"production"} />
      </body>
    </html>
  );
}
