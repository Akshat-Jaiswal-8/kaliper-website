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
    <section className="relative mt-10 h-full w-full px-6">
      <motion.div
        variants={gradientVariants}
        initial={"hidden"}
        animate={"visible"}
        transition={gradientTransition}
        className={
          "absolute -left-[20%] h-[90%] w-[80%] rounded-full bg-[#8AA2D0] bg-opacity-30 blur-[20rem]"
        }
      />
      <div className="mx-auto">
        <div className="mx-auto flex max-w-screen-lg justify-between">
          <div className="flex flex-col">
            {features.slice(0, 3).map((eachFeature, index) => (
              <motion.div
                variants={featureVariants}
                initial={"hidden"}
                animate={"visible"}
                transition={{ delay: index + 1 - 0.5, duration: 0.8 }}
                key={index}
                className="relative my-20">
                <Image
                  height={600}
                  width={600}
                  className="relative rotate-180"
                  src="/svg/features-border.svg"
                  alt="feature border"
                />
                <div className="absolute inset-0 flex justify-end">
                  <div className={"absolute right-32 top-2 flex flex-col text-xs"}>
                    <span className="my-4 text-end text-sm font-semibold">{eachFeature.title}</span>
                    <span className="px-4 text-end text-gray-300">{eachFeature.description}</span>
                  </div>
                  <div className={"relative h-24 w-24"}>
                    <Image
                      src={"/webp/feature-icon-background.webp"}
                      height={150}
                      width={150}
                      alt={"feature icon background"}
                      className={"absolute right-8 top-7 rounded-full opacity-20"}
                    />
                    <Image
                      className="absolute right-12 top-8"
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
          <div className="flex flex-col">
            {features.slice(3, 6).map((eachFeature: features, index: number) => (
              <motion.div
                variants={featureVariants}
                initial={"hidden"}
                animate={"visible"}
                transition={{ delay: index + 1, duration: 0.8 }}
                key={index}
                className={cn("relative my-10", index === 0 && "mt-0")}>
                <Image
                  height={600}
                  width={600}
                  className="relative"
                  src="/svg/features-border.svg"
                  alt="feature border"
                />
                <div className={"relative h-24 w-24"}>
                  <Image
                    src={"/webp/feature-icon-background.webp"}
                    height={150}
                    width={150}
                    alt={"feature icon background"}
                    className={"absolute -top-[7rem] left-8 rounded-full opacity-20"}
                  />
                  <Image
                    className="absolute -top-[6.2rem] left-10"
                    src={eachFeature.icon}
                    alt="icon"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="absolute inset-0 flex justify-end">
                  <div className={"absolute left-32 top-2 flex flex-col text-xs"}>
                    <span className="my-4 text-start text-sm font-semibold">
                      {eachFeature.title}
                    </span>
                    <span className="px-4 text-start text-gray-300">{eachFeature.description}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
