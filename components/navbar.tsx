"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
  { name: "Let's Talk", href: "/contact-us" },
];

const navbarVariant = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const navTransition = {
  delay: 0.4,
  duration: 0.2,
};

export const Navbar = (): React.ReactNode => {
  return (
    <motion.div
      variants={navbarVariant}
      initial={"hidden"}
      animate={"visible"}
      transition={navTransition}
      className={"flex items-center justify-between px-16 py-3 font-montserrat text-lg"}>
      <div className={"relative h-10 w-28"}>
        <Image src={"/webp/logo.webp"} alt={"kaliper logo"} fill />
      </div>
      <div className={"flex gap-x-12"}>
        {navLinks.map((navElement) => (
          <div key={navElement.name}>{navElement.name}</div>
        ))}
      </div>
    </motion.div>
  );
};
