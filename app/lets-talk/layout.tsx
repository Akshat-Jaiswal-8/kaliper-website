import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Let's Talk",
  description:
    "Contact Kaliper Technologies to discuss your innovative IT solutions and consulting needs. Let's turn your ideas into reality together.",
  openGraph: {
    title: "Let's Build Something Great Together | Kaliper Technologies",
    description:
      "Reach out to Kaliper Technologies to explore customized IT solutions and expert consulting. We're excited to help you turn your ideas into reality.",
    type: "website",
    url: "https://kaliper.in/lets-talk",
    siteName: "Kaliper Technologies",
    locale: "en_US",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={"bg-[#171717]"}>{children}</div>;
};

export default Layout;
