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

const AnimatedCounter = ({ value, className }: { value: number; className: string }) => {
  const count = useMotionValue(value);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, value, { duration: 1 });
    return () => animation.stop();
  }, [count, value]);

  return <motion.p className={className}>{rounded}</motion.p>;
};

export const Hero = (): React.ReactNode => {
  return (
    <section className={"bg-gradient-to-b from-[#0F151A] via-[#0F151A] via-90% to-[#171717] py-10"}>
      <motion.div
        variants={gradientVariants}
        initial="hidden"
        animate="visible"
        transition={gradientTransition}
        className="absolute -top-2 left-[28%] h-[60%] w-[50%] rounded-full bg-[#8AA2D0] bg-opacity-50 blur-[8rem]"
      />
      <div className="relative z-50 min-h-[100vh] w-full bg-hero-background bg-center blur-0">
        <motion.div
          variants={gradientVariants}
          initial="hidden"
          animate="visible"
          transition={gradientTransition}
          className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#8AA2D0] blur-[8rem]"
        />
        <div className="hero-gradient left-[10%] mx-auto flex w-[90%] flex-col justify-around rounded-xl text-center lg:min-h-[73vh] xl:min-h-[71vh]">
          <Navbar />
          <div className={"flex w-full flex-col gap-y-4"}>
            <motion.h1
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              transition={headingTransition}
              className="mx-auto text-center font-bold leading-normal text-slate-100 lg:text-4xl xl:text-5xl">
              Transforming ideas <p>into impact, you trusted</p>
            </motion.h1>
            <motion.h1
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              transition={contentTransition}
              className="mx-auto bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text py-2 text-center font-bold text-transparent lg:text-6xl xl:text-7xl">
              IT Consulting Partner
            </motion.h1>
          </div>
          <div className="mt-10">
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              transition={buttonTransition}
              className="rounded-full border border-white/10 p-4">
              <Link className="text-xl" href="/">
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
            From building concept to launch we can help you at Every Stage
          </h1>
          <p className="mx-auto w-[90%] text-center text-lg leading-normal">
            We guide you through every stage of your project, from the initial concept to the final
            launch. Our expert team is dedicated to providing tailored solutions, ensuring a smooth
            process and successful outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};
