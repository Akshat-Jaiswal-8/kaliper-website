"use client";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  { src: "/webp/sadhna.webp", alt: "sadhna image" },
  { src: "/webp/garima.webp", alt: "garima image" },
  { src: "/webp/sakshi.webp", alt: "sakshi image" },
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
  return (
    <AnimatePresence>
      <section className="mt-20">
        <div className="mb-20 h-[calc(100vh-6rem)] w-full">
          <div className="hero-gradient left-[10%] mx-auto flex h-[80vh] w-[95vw] flex-col rounded-xl text-center">
            <motion.div
              variants={headerVariants}
              initial={"hidden"}
              whileInView={"visible"}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex w-full flex-col gap-y-4">
              <h3 className="mx-auto mt-10 text-center font-montserrat text-xl text-slate-100 text-opacity-85">
                Team Section
              </h3>
              <h1 className="mx-auto w-2/3 text-center text-6xl font-bold">Meet the team</h1>
              <h2 className="mx-auto text-center text-3xl text-[#797979]">
                Meet our team of professionals to serve you
              </h2>
            </motion.div>
            <div className="relative mt-10 flex h-full items-center justify-between">
              {images.map((image, index) => (
                <motion.div
                  variants={imageVariants}
                  initial={"hidden"}
                  whileInView={"visible"}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  key={index}>
                  <Image
                    className={`absolute ${
                      index === 0
                        ? "bottom-0 left-0"
                        : index === 1
                          ? "left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
                          : "bottom-0 right-0"
                    }`}
                    src={image.src}
                    width={400}
                    height={400}
                    alt={image.alt}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};
