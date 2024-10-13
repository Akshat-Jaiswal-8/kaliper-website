import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Transform your business with Kaliper's tailored IT services. We offer enterprise software, AI, web development, cybersecurity, and more. Get expert consulting for your business growth.",
  keywords:
    "web development, app development, mobile apps, artificial intelligence, software development, enterprise software, cybersecurity, progressive web applications, product design, UI, UX, shopify and wordpress apps, custom software, Kaliper services",
  openGraph: {
    title: "Innovative IT Solutions & Expert Consulting | Kaliper Technologies",
    description:
      "Discover Kaliper's range of IT services: from AI and cybersecurity to web development and UI/UX design. Innovative solutions for modern businesses.",
    type: "website",
    url: "https://www.kaliper.in/services",
    siteName: "Kaliper Technologies",
    locale: "en_US",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={"bg-[#171717]"}>{children}</div>;
};

export default Layout;
