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
      <div className="mx-auto flex pt-10 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:gap-x-10">
        <div className="flex w-full flex-col">
          {features.slice(0, 3).map((eachFeature, index) => (
            <motion.div
              variants={featureVariants}
              initial={"hidden"}
              animate={"visible"}
              transition={{ delay: index + 1 - 0.5, duration: 0.8 }}
              key={index}
              className="relative my-20 w-full">
              <Image
                height={125}
                width={475}
                className="relative w-full lg:h-32 xl:h-36 2xl:h-44"
                src="/svg/feature-border.svg"
                alt="feature border"
              />
              <div className="absolute inset-0 flex items-center justify-end">
                <div
                  className={
                    "absolute flex flex-col pb-2 text-xs lg:right-36 xl:right-40 2xl:right-44"
                  }>
                  <span className="my-2 text-end font-semibold text-white lg:text-xs xl:text-sm 2xl:text-base">
                    {eachFeature.title}
                  </span>
                  <span className="text-end font-extralight text-[#D2F0FF] lg:text-xs 2xl:text-sm">
                    {eachFeature.description}
                  </span>
                </div>

                <div
                  className={
                    "relative h-24 w-24 lg:-left-5 lg:top-1.5 xl:-left-14 2xl:-left-8 2xl:h-32 2xl:w-32"
                  }>
                  <Image
                    src={"/webp/feature-icon-background.webp"}
                    height={150}
                    width={150}
                    alt={"feature icon background"}
                    className={
                      "absolute my-auto rounded-full lg:h-[6rem] lg:w-[6rem] 2xl:h-[8rem] 2xl:w-[8rem]"
                    }
                  />
                  <Image
                    className="absolute lg:left-3 lg:top-2 lg:h-16 lg:w-16 xl:left-3 xl:top-3 xl:h-[4rem] xl:w-[4rem] 2xl:h-[5.5rem] 2xl:w-[5.5rem]"
                    src={eachFeature.icon}
                    alt="icon"
                    width={150}
                    height={150}
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
              <Image
                height={125}
                width={475}
                className="relative w-full lg:h-32 xl:h-36 2xl:h-44"
                src="/svg/feature-border-rotated.svg"
                alt="feature border"
              />
              <div className="absolute inset-0 flex items-center">
                <div
                  className={
                    "relative h-24 w-24 lg:left-10 lg:top-1.5 xl:left-20 2xl:left-10 2xl:h-32 2xl:w-32"
                  }>
                  <Image
                    src={"/webp/feature-icon-background.webp"}
                    height={150}
                    width={150}
                    alt={"feature icon background"}
                    className={
                      "absolute my-auto rounded-full lg:h-[6rem] lg:w-[6rem] 2xl:h-[8rem] 2xl:w-[8rem]"
                    }
                  />
                  <Image
                    className={cn(
                      "2xl:h-30 absolute lg:left-3 lg:top-3 lg:h-16 lg:w-16 xl:left-1.5 xl:top-1 xl:h-20 xl:w-20 2xl:left-2 2xl:top-3 2xl:h-24 2xl:w-24",
                    )}
                    src={eachFeature.icon}
                    alt="icon"
                    width={150}
                    height={150}
                  />
                </div>
                <div className={"absolute left-[30%] flex flex-col pb-2 text-xs"}>
                  <span className="my-2 font-semibold text-white lg:text-xs xl:text-sm 2xl:text-lg">
                    {eachFeature.title}
                  </span>
                  <span className="font-extralight text-[#D2F0FF] 2xl:text-sm">
                    {eachFeature.description}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
