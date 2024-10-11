"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const founders = [
  { src: "/svg/amit.svg", alt: "amit" },
  { src: "/svg/pradeep.svg", alt: "pradeep" },
];
const engineers = [
  { src: "/svg/varsha.svg", alt: "varsha" },
  { src: "/svg/sonu.svg", alt: "sonu" },
  { src: "/svg/gajendar.svg", alt: "gajendar" },
  { src: "/svg/tejas.svg", alt: "tejas" },
  { src: "/svg/gaurav.svg", alt: "gaurav" },
  { src: "/svg/deepankar.svg", alt: "deepankar" },
  { src: "/svg/akshat.svg", alt: "akshat" },
];
const marketing = [
  { src: "/svg/tanu.svg", alt: "tanu" },
  { src: "/svg/priyanka.svg", alt: "priyanka" },
];
const designers = [
  { src: "/svg/garima.svg", alt: "garima" },
  { src: "/svg/sakshi.svg", alt: "sakshi" },
  { src: "/svg/sadhna.svg", alt: "sadhna" },
];

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
                <div className="relative grid h-full w-full grid-cols-2 items-center justify-around">
                  {founders.map((image, index) => (
                    <motion.div
                      variants={imageVariants}
                      initial={"hidden"}
                      whileInView={"visible"}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      key={index}
                      className={"z-20"}>
                      <Image
                        className={"h-full w-full"}
                        src={image.src}
                        width={150}
                        height={150}
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
                    <div className="relative grid h-full w-full grid-cols-2 items-center justify-around">
                      {designers.map((image, index) => (
                        <motion.div
                          variants={imageVariants}
                          initial={"hidden"}
                          whileInView={"visible"}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          key={index}>
                          <Image
                            className={"h-full w-full"}
                            src={image.src}
                            width={120}
                            height={120}
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
                    <div className="relative grid h-full w-full grid-cols-2 items-center justify-center gap-4 text-center">
                      {engineers.map((image, index) => (
                        <motion.div
                          variants={imageVariants}
                          initial={"hidden"}
                          whileInView={"visible"}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          key={index}
                          className={`mx-auto ${engineers.length === 3 && index === 2 ? "col-span-2" : ""}`}>
                          <Image
                            className={"h-full w-full"}
                            src={image.src}
                            width={150}
                            height={150}
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
                    <div className="relative grid h-full w-full grid-cols-2 items-center justify-around">
                      {marketing.map((image, index) => (
                        <motion.div
                          variants={imageVariants}
                          initial={"hidden"}
                          whileInView={"visible"}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          key={index}
                          className={""}>
                          <Image
                            className={"h-full w-full"}
                            src={image.src}
                            width={150}
                            height={150}
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
                onClick={handleViewAll}
                className="rounded-full border border-[#FFFFFF] bg-[#E6E6E60D] px-4 py-2 font-inter text-sm font-semibold">
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};
