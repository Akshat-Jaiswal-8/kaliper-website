"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = (): React.ReactNode => {
  const gradientVariants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  const gradientTransition = { delay: 0.4, duration: 0.3 };

  const headingVariants = {
    hidden: { opacity: 0, x: 0, y: 50 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  const headingTransition = { delay: 0.7, duration: 0.2 };

  const contentVariants = {
    hidden: { opacity: 0, x: 0, y: 50 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  const contentTransition = { delay: 1, duration: 0.2 };

  const buttonVariants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  const buttonTransition = { delay: 1.3, duration: 0.2 };

  const successVariants = {
    hidden: { opacity: 0, x: 0, y: 50 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  const successTransition = { delay: 1.6, duration: 0.2 };

  return (
    <section>
      <motion.div
        variants={gradientVariants}
        initial={"hidden"}
        animate={"visible"}
        transition={gradientTransition}
        className={
          "absolute -top-[3rem] left-[28%] h-[30rem] w-[40rem] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-3xl"
        }
      />
      <div className="z-50 h-[calc(100vh-3rem)] w-full bg-hero-background bg-center blur-0">
        <div className="hero-gradient left-[10%] mx-auto flex h-[70vh] w-[95vw] flex-col rounded-xl text-center">
          <div className={"flex w-full flex-col gap-y-4"}>
            <motion.h1
              variants={headingVariants}
              initial={"hidden"}
              whileInView={"visible"}
              transition={headingTransition}
              className="mx-auto mt-8 w-2/4 text-center text-5xl font-bold leading-normal text-slate-100">
              Transforming ideas <p>into impact, you trusted</p>
            </motion.h1>
            <motion.h1
              variants={contentVariants}
              initial={"hidden"}
              whileInView={"visible"}
              transition={contentTransition}
              className={
                "mx-auto w-2/3 bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text py-2 text-center text-7xl font-bold text-transparent"
              }>
              IT Consulting Partner
            </motion.h1>
          </div>
          <div className={"mt-10"}>
            <motion.button
              variants={buttonVariants}
              initial={"hidden"}
              whileInView={"visible"}
              transition={buttonTransition}
              className={"rounded-full border border-white/10 p-6"}>
              <Link className={"text-2xl"} href={"/"}>
                Connect with us
              </Link>
            </motion.button>
            <motion.div
              variants={successVariants}
              initial={"hidden"}
              whileInView={"visible"}
              transition={successTransition}
              className={"mt-10 flex justify-center gap-x-16 text-center"}>
              <div>
                Projects
                <p className={"mt-2 text-7xl font-extralight"}>05</p>
              </div>
              <div>
                Clients
                <p className={"mt-2 text-7xl font-extralight"}>05</p>
              </div>
              <div>
                Services
                <p className={"mt-2 text-7xl font-extralight"}>05</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className={"container mx-auto mt-10 flex w-full flex-col gap-y-10 text-[#D9D9D9]"}>
          <h1 className={"text-center text-5xl font-semibold"}>
            From building concept to launch we can help you at Every Stage
          </h1>
          <p className={"mx-auto w-[90%] text-center text-lg leading-normal"}>
            We guide you through every stage of your project, from the initial concept to the final
            launch. Our expert team is dedicated to providing tailored solutions, ensuring a smooth
            process and successful outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};
