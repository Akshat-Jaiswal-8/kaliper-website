"use client";
import React, { useState } from "react";
import { articlesCard, articlesCardProps } from "@/app/(home)/constant";
import Image from "next/image";
import { motion } from "framer-motion";

export const Industries = (): React.ReactNode => {
  const [viewAll, setViewAll] = useState<boolean>(false);

  const [cardLength, setCardLength] = useState<number>(8);
  const handleViewAll = () => {
    setViewAll(!viewAll);
    setCardLength(viewAll ? 8 : articlesCard.length);
  };

  return (
    <>
      <section className="mb-30 relative mx-auto mt-20 flex h-full w-full flex-col px-6 font-montserrat">
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-center text-4xl font-bold">How we can help you</h1>
          <p className="text-center font-extralight text-[#D9D9D9]">
            Using powerful, industry-specific software solutions, our team can help you achieve your
            business goals.
          </p>
        </div>
        <div className="mx-auto mt-20 grid grid-cols-4 gap-12">
          {articlesCard.slice(0, cardLength).map((eachArticleCard: articlesCardProps) => (
            <div
              key={eachArticleCard.src}
              className="flex cursor-pointer items-center justify-center rounded-xl border border-[#41557280] transition-all duration-200 hover:z-30 hover:scale-110 hover:shadow-md hover:shadow-[#50C2FA] lg:h-48 lg:w-48 xl:h-60 xl:w-60">
              <div className="flex flex-col items-center gap-y-6">
                <Image src={eachArticleCard.src} alt={eachArticleCard.src} height={30} width={30} />
                <p className="mx-auto text-center font-light text-[#ECECEC]">
                  {eachArticleCard.heading}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!viewAll && (
          <motion.div
            transition={{ duration: 2.5 }}
            className="from-30 pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#171717] from-50% to-transparent"
          />
        )}
      </section>
      <div className="relative z-20 mx-auto mt-10 w-full text-center">
        <button
          onClick={handleViewAll}
          className="rounded-full border border-[#FFFFFF] bg-[#E6E6E60D] px-4 py-2 font-inter text-sm font-semibold focus:outline-none">
          View All
        </button>
      </div>
    </>
  );
};
