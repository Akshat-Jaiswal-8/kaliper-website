"use client";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

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

const AnimatedCounter = ({
  value,
  duration = 3,
  className,
}: {
  value: number;
  duration?: number;
  className: string;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayed = useTransform(rounded, (latest) => latest.toString().padStart(2, "0"));

  useEffect(() => {
    const controls = animate(count, value, { duration: duration, delay: 2 });
    return controls.stop;
  }, [value, duration]);

  return <motion.div className={className}>{displayed}</motion.div>;
};
export const Hero = (): React.ReactNode => {
  return (
    <>
      <Navbar />
      <section className="mt-2 bg-gradient-to-b from-[#171717] from-20% via-[#171717] via-30% to-[#0F151A] to-100% pb-10">
        <motion.div
          variants={gradientVariants}
          initial="hidden"
          animate="visible"
          transition={gradientTransition}
          className="absolute -top-40 left-[24%] h-[60%] w-[50%] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-[8rem]"
        />
        <div className="relative z-40 min-h-[100vh] w-full overflow-hidden bg-hero-background bg-center blur-0">
          <div className="hero-gradient mx-auto flex min-h-[85vh] w-[90%] flex-col justify-between rounded-xl">
            <div
              className={
                "flex w-full flex-grow flex-col items-center justify-around gap-y-10 py-4"
              }>
              <div className={"flex w-full flex-col gap-y-10"}>
                <motion.h1
                  variants={headingVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={headingTransition}
                  className="mx-auto text-center font-prompt font-bold leading-normal text-slate-100 lg:text-4xl xl:text-5xl">
                  Transforming ideas <p>into impact, you trusted</p>
                </motion.h1>
                <motion.h1
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={contentTransition}
                  className="mx-auto bg-gradient-to-r from-[#4AC7FA] to-[#E649F5] bg-clip-text text-center font-prompt font-bold text-transparent lg:text-6xl xl:text-7xl">
                  IT Consulting Partner
                </motion.h1>
              </div>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                transition={buttonTransition}
                className="rounded-full border border-white/10 p-4 lg:h-16 lg:w-52 xl:h-20 xl:w-60">
                <Link className="text-xl" href="/lets-talk">
                  Connect with us
                </Link>
              </motion.button>
              <motion.div
                variants={successVariants}
                initial="hidden"
                whileInView="visible"
                transition={successTransition}
                className="mt-10 flex justify-center gap-x-16 text-center">
                <div>
                  Projects
                  <AnimatedCounter value={5} className="mt-2 text-7xl font-extralight" />
                </div>
                <div>
                  Clients
                  <AnimatedCounter value={5} className="mt-2 text-7xl font-extralight" />
                </div>
                <div>
                  Services
                  <AnimatedCounter value={5} className="mt-2 text-7xl font-extralight" />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="relative mx-auto flex w-[90%] flex-col gap-y-10 bg-transparent pb-10 text-[#D9D9D9] lg:mt-12 xl:mt-16">
            <h1 className="text-center font-semibold lg:text-4xl xl:text-5xl">
              From building concept to launch we help
              <br />
              you at Every Stage
            </h1>
            <p className="mx-auto w-[90%] text-center text-lg leading-normal">
              We guide you through every stage of your project, from the initial concept to the
              final launch. Our expert <br />
              team is dedicated to providing tailored solutions, ensuring a smooth process and
              successful outcomes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
