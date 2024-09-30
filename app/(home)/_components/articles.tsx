import React from "react";
import { articlesCard, articlesCardProps } from "@/app/(home)/constant";
import Image from "next/image";
import Link from "next/link";

export const Articles = (): React.ReactNode => {
  return (
    <>
      <section className="container relative mx-auto mb-10 mt-20 font-montserrat">
        <div
          className={
            "absolute -top-[30%] left-20 h-[60%] w-[80%] rounded-full bg-[#8AA2D080] opacity-40 blur-3xl"
          }
        />
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-center text-4xl font-bold">How we can help you</h1>
          <p className="text-center font-extralight text-[#D9D9D9]">
            Using powerful, industry-specific software solutions, our team can help you achieve your
            business goals.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-4 gap-6">
          {articlesCard.map((eachArticleCard: articlesCardProps) => (
            <div
              key={eachArticleCard.src}
              className="flex h-60 w-60 cursor-pointer items-center justify-center rounded-xl border border-[#41557280] transition-all duration-200 hover:z-30 hover:scale-110 hover:shadow-md hover:shadow-[#50C2FA]">
              <div className="flex flex-col items-center gap-y-6">
                <Image src={eachArticleCard.src} alt={eachArticleCard.src} height={30} width={30} />
                <p className="font-light text-[#ECECEC]">{eachArticleCard.heading}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="from-30 pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#171717] from-50% to-transparent" />
      </section>
      <div className="relative z-20 mx-auto w-full text-center">
        <button className="rounded-full border border-[#E6E6E60D] bg-[#E6E6E60D] px-4 py-1">
          <Link href="/" className="font-inter text-sm font-semibold">
            More Articles
          </Link>
        </button>
      </div>
    </>
  );
};
