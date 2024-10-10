"use client";
import React from "react";
import { features } from "@/app/(home)/constant";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const featureVariants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const gradientVariants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};
const gradientTransition = { delay: 0.4, duration: 0.3 };

export const Features = (): React.ReactNode => {
  return (
    <section className="relative h-full w-full bg-gradient-to-b from-[#0F151A] from-0% via-[#171717] via-5% to-[#171717] to-100% px-6">
      <motion.div
        variants={gradientVariants}
        initial={"hidden"}
        animate={"visible"}
        transition={gradientTransition}
        className={
          "absolute -left-[20%] -top-20 h-[90%] w-[80%] rounded-full bg-[#8AA2D0] bg-opacity-30 blur-[20rem]"
        }
      />
      <div className="mx-auto flex max-w-screen-lg pt-10 lg:gap-x-8 xl:max-w-screen-xl xl:gap-x-10">
        <div className="flex w-full flex-col">
          {features.slice(0, 3).map((eachFeature, index) => (
            <motion.div
              variants={featureVariants}
              initial={"hidden"}
              animate={"visible"}
              transition={{ delay: index + 1 - 0.5, duration: 0.8 }}
              key={index}
              className="relative my-20 w-full">
              <img
                className="relative w-full lg:h-32 xl:h-36"
                src="/png/feature-border.png"
                alt="feature border"
              />
              <div className="absolute inset-0 flex items-center justify-end">
                <div className={"absolute right-32 flex flex-col pb-2 text-xs"}>
                  <span className="my-2 text-end text-sm font-semibold text-[#868A8D]">
                    {eachFeature.title}
                  </span>
                  <span className="text-end font-extralight text-[#D2F0FF]">
                    {eachFeature.description}
                  </span>
                </div>
                <div className={"relative -left-4 h-24 w-24"}>
                  <Image
                    src={"/webp/feature-icon-background.webp"}
                    height={150}
                    width={150}
                    alt={"feature icon background"}
                    className={"absolute my-auto rounded-full opacity-20"}
                  />
                  <Image
                    className="absolute left-2 top-2"
                    src={eachFeature.icon}
                    alt="icon"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex w-full flex-col">
          {features.slice(3, 6).map((eachFeature, index) => (
            <motion.div
              variants={featureVariants}
              initial={"hidden"}
              animate={"visible"}
              transition={{ delay: index + 1, duration: 0.8 }}
              key={index}
              className={cn("relative my-16", index === 0 && "mt-0")}>
              <img
                className="relative w-full lg:h-32 xl:h-36"
                src="/png/feature-border-rotated.png"
                alt="feature border"
              />
              <div className="absolute inset-0 flex items-center">
                <div className={"relative left-[6%] h-24 w-24"}>
                  <Image
                    src={"/webp/feature-icon-background.webp"}
                    height={150}
                    width={150}
                    alt={"feature icon background"}
                    className={"absolute my-auto rounded-full opacity-20"}
                  />
                  <Image
                    className="absolute left-2 top-2"
                    src={eachFeature.icon}
                    alt="icon"
                    width={70}
                    height={70}
                  />
                </div>
                <div className={"absolute left-[30%] flex flex-col pb-2 text-xs"}>
                  <span className="my-2 text-sm font-semibold text-[#868A8D]">
                    {eachFeature.title}
                  </span>
                  <span className="font-extralight text-[#D2F0FF]">{eachFeature.description}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
