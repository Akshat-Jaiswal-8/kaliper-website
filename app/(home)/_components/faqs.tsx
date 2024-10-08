"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/app/(home)/constant";
import { cn } from "@/lib/utils";

export const Faqs = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleAccordionAction = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={"lg:w-[80%] xl:w-[70%]"}>
      <h1 className="mb-20 font-poppins font-bold lg:text-4xl xl:text-5xl">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col gap-y-8">
        {faqs.map((faq) => (
          <div
            className="cursor-pointer border-b border-b-[#60606080] pb-8"
            onClick={() => handleAccordionAction(faq.id)}
            key={faq.id}>
            <div className="flex items-center justify-between transition-all duration-300">
              <h1 className="px-1 text-base font-light lg:text-base xl:text-lg">{faq.question}</h1>
              <span>
                <ChevronDown
                  className={cn("transition-all duration-300", openId === faq.id && "rotate-180")}
                />
              </span>
            </div>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                openId === faq.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
              )}>
              <p className="mt-6 px-1">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
