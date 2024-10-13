import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Kaliper Technologies, established in 2023, specializes in data engineering, analytics, and AI. We provide innovative IT consulting solutions that transform data into actionable insights and deliver measurable outcomes. Discover our projects and client success stories.",
  keywords:
    "Kaliper Technologies, IT consulting, data engineering, analytics, artificial intelligence, custom development, client testimonials, digital transformation, systems architecture, process modeling",
  openGraph: {
    title: "Kaliper Technologies | Your Trusted IT Consulting Partner",
    description:
      "Explore Kaliper Technologies: Experts in data engineering, AI, and custom IT solutions. See how we help organizations navigate digital challenges and achieve business objectives.",
    type: "website",
    url: "https://www.kaliper.in/about-us",
    siteName: "Kaliper Technologies",
    locale: "en_US",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={"bg-[#171717]"}>{children}</div>;
};

export default Layout;
