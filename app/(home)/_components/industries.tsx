"use client";
import React, { useState } from "react";
import { articlesCard, articlesCardProps } from "@/app/(home)/constant";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const Industries = (): React.ReactNode => {
  const [viewAll, setViewAll] = useState<boolean>(false);

  const handleViewAll = () => {
    setViewAll(!viewAll);
  };

  return (
    <>
      <section className="mb-30 relative mx-auto mt-20 flex h-full w-full flex-col px-6 font-montserrat">
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-center text-4xl font-bold 2xl:text-5xl">How we can help you</h1>
          <p className="text-center font-extralight text-[#D9D9D9] 2xl:text-xl">
            Using powerful, industry-specific software solutions, our team can help you achieve your
            business goals.
          </p>
        </div>
        <motion.div
          className="mx-auto mt-20 grid grid-cols-4 gap-12 pb-4"
          layout={"preserve-aspect"}>
          <AnimatePresence initial={false}>
            {articlesCard.map(
              (eachArticleCard: articlesCardProps, index: number) =>
                (viewAll || index < 8) && (
                  <motion.div
                    key={eachArticleCard.src}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1, zIndex: 10, boxShadow: "0 0 10px 1px #50C2FA" }}
                    transition={{ duration: 0.3 }}
                    className="flex cursor-pointer items-center justify-center rounded-xl border border-[#41557280] shadow-md shadow-transparent lg:h-48 lg:w-48 xl:h-60 xl:w-60">
                    <motion.div className="flex flex-col items-center gap-y-6">
                      <Image
                        src={eachArticleCard.src}
                        alt={eachArticleCard.src}
                        height={30}
                        width={30}
                      />
                      <p className="mx-auto text-center font-light text-[#ECECEC]">
                        {eachArticleCard.heading}
                      </p>
                    </motion.div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {!viewAll && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#171717] from-30% to-transparent"
            />
          )}
        </AnimatePresence>
      </section>
      <div className="relative z-20 mx-auto mt-10 w-full text-center">
        <button
          onClick={handleViewAll}
          className="rounded-full border border-[#FFFFFF] bg-[#E6E6E60D] px-4 py-2 font-inter text-sm font-semibold focus:outline-none">
          {viewAll ? "View Less" : "View All"}
        </button>
      </div>
    </>
  );
};
