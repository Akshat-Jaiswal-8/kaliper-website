"use client";
import React from "react";
import { CircleX } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
interface HamburgerProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0.5, y: "-100%" },
};
export const Hamburger = ({ isOpen, onClose }: HamburgerProps) => {
  return (
    <motion.section
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 top-0 z-50 m-0 h-screen w-screen bg-black bg-opacity-90 p-0">
      <div className={"flex h-screen w-screen"}>
        <div className={"h-full w-[45%] bg-[#7670CE] text-black"}>
          <div className={"m-auto flex h-full w-[90%] flex-col justify-center gap-y-16"}>
            <p className={"text-2xl font-semibold"}>Got an idea?</p>
            <h1 className={"text-start font-bold lg:text-4xl xl:text-5xl"}>
              Let&apos;s craft brilliance together
            </h1>
            <Link
              href={"/lets-talk"}
              className={
                "mx-auto w-1/2 rounded-2xl border-2 border-black text-center text-2xl font-bold lg:p-3 xl:p-4"
              }>
              Get in touch
            </Link>
          </div>
        </div>
        <div className={"h-full flex-grow bg-[#0F151A]"}>
          <button onClick={onClose} className={"flex h-[5%] w-full justify-end p-5"}>
            <CircleX strokeWidth={0.75} size={32} />
          </button>
          <div className={"flex h-[95%] items-center justify-around gap-x-2"}>
            <div className={"flex flex-col gap-y-8 font-bold lg:text-4xl xl:text-5xl"}>
              <Link href={"/services"}>Services</Link>
              <Link href={"/about-us"}>About us</Link>
              <Link href={"/lets-talk"}>Let&apos;s talk</Link>
            </div>
            <div className={"flex flex-col gap-y-6 font-light lg:text-xl xl:text-2xl"}>
              <h3 className={"font-bold"}>Customer we serve</h3>
              <p>Startups</p>
              <p>Small & medium</p>
              <p>Enterprises</p>
              <p>Large Enterprises</p>
              <p>Non profit organisation</p>
              <p>Government agencies</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
