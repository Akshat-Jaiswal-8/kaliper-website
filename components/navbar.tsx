"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Hamburger } from "@/app/(home)/_components/hamburger";

const navbarVariant = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const navTransition = {
  delay: 0.4,
  duration: 0.2,
};

export const Navbar = (): React.ReactNode => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  const handleHamburgerMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.div
        variants={navbarVariant}
        initial={"hidden"}
        animate={"visible"}
        transition={navTransition}
        className={"flex h-[10vh] items-center justify-between px-8 font-montserrat text-lg"}>
        <div className={"relative h-14 w-28"}>
          <Image src={"/png/logo.png"} alt={"kaliper logo"} fill />
        </div>
        <div className={"flex items-center gap-x-2"}>
          <Link className={"text-base font-light text-[#ECECEC]"} href={"/lets-talk"}>
            Let&apos;s Talk
          </Link>
          <button onClick={handleHamburgerMenuClick}>
            <Image
              className={"cursor-pointer"}
              height={80}
              width={80}
              src={"/png/hamburger.png"}
              alt={"hamburger menu"}
            />
          </button>
        </div>
      </motion.div>
      <Hamburger isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
