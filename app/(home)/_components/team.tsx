"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { designers, engineers, founders, marketing } from "@/app/(home)/constant";

const headerVariants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

export const Team = () => {
  const [viewAll, setViewAll] = useState<boolean>(false);

  const handleViewAll = () => {
    setViewAll(!viewAll);
  };
  return (
    <AnimatePresence>
      <section className="mt-20">
        <div className="h-full w-full">
          <div className="mx-auto flex h-[90%] w-[90%] flex-col rounded-2xl bg-[#D4E2FF12] py-6 text-center">
            <motion.div
              variants={headerVariants}
              initial={"hidden"}
              animate={"visible"}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex w-full flex-col gap-y-4">
              <h1 className="mx-auto w-2/3 text-center font-bold lg:text-5xl xl:text-6xl">
                Meet the team
              </h1>
              <h2 className="mx-auto text-center text-[#797979] lg:text-2xl xl:text-3xl">
                Meet our team of professionals to serve you
              </h2>
            </motion.div>
            <div className={"flex h-full flex-col items-center justify-between px-6"}>
              <div className={"flex w-full items-center"}>
                <div className="m-auto flex flex-col font-bold lg:text-3xl xl:text-4xl">
                  {"FOUNDERS".split("").map((letter, index) => (
                    <span key={index} className="mx-6 text-center">
                      {letter}
                    </span>
                  ))}
                </div>
                <div className="relative grid h-full w-full grid-cols-2 items-center justify-center gap-8 text-center">
                  {founders.map((image, index) => (
                    <motion.div
                      variants={imageVariants}
                      initial={"hidden"}
                      whileInView={"visible"}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      key={index}>
                      <Image
                        src={image.src}
                        quality={100}
                        width={1000}
                        height={1000}
                        alt={image.alt}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
              {viewAll && (
                <>
                  <div className={"mt-20 flex w-full items-center"}>
                    <div className="m-auto flex flex-col font-bold lg:text-3xl xl:text-4xl">
                      {"DESIGNERS".split("").map((letter, index) => (
                        <span key={index} className="mx-6 text-center">
                          {letter}
                        </span>
                      ))}
                    </div>
                    <div className="relative grid h-full w-full grid-cols-2 items-center justify-center gap-8 text-center">
                      {designers.map((image, index) => (
                        <motion.div
                          variants={imageVariants}
                          initial={"hidden"}
                          whileInView={"visible"}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          key={index}>
                          <Image
                            src={image.src}
                            quality={100}
                            width={1000}
                            height={1000}
                            alt={image.alt}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className={"mt-20 flex w-full"}>
                    <div className="flex flex-col font-bold lg:text-3xl xl:text-6xl">
                      {"ENGINEERS".split("").map((letter, index) => (
                        <span key={index} className="mx-6 text-center">
                          {letter}
                        </span>
                      ))}
                    </div>
                    <div className="relative grid h-full w-full grid-cols-2 items-center justify-center gap-8 text-center">
                      {engineers.map((image, index) => (
                        <motion.div
                          variants={imageVariants}
                          initial={"hidden"}
                          whileInView={"visible"}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          key={index}>
                          <Image
                            src={image.src}
                            quality={100}
                            width={1000}
                            height={1000}
                            alt={image.alt}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className={"mt-20 flex w-full items-center"}>
                    <div className="m-auto flex flex-col font-bold lg:text-3xl xl:text-4xl">
                      {"MARKETING".split("").map((letter, index) => (
                        <span key={index} className="mx-6 text-center">
                          {letter}
                        </span>
                      ))}
                    </div>
                    <div className="relative grid h-full w-full grid-cols-2 items-center justify-center gap-8 text-center">
                      {marketing.map((image, index) => (
                        <motion.div
                          variants={imageVariants}
                          initial={"hidden"}
                          whileInView={"visible"}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          key={index}>
                          <Image
                            src={image.src}
                            quality={100}
                            width={1000}
                            height={1000}
                            alt={image.alt}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="relative z-20 mx-auto w-full text-center">
              <button
                aria-label={viewAll ? "View Less" : "View all"}
                onClick={handleViewAll}
                className="rounded-full border border-white bg-transparent px-4 py-2 font-inter text-sm font-semibold focus:outline-none">
                {viewAll ? "View less" : "View all"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};
