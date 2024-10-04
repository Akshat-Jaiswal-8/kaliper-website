import React from "react";
import { Address } from "@/app/(home)/_components/address";
import { faqs } from "@/app/(home)/constant";
import { ChevronDown } from "lucide-react";

export const Faq = (): React.ReactNode => {
  return (
    <section className={"mx-auto mb-20 flex w-[90%] items-center gap-x-16 px-6"}>
      <Address />
      <div>
        <h1 className={"mb-20 font-poppins text-5xl font-bold"}>Frequently Asked Questions</h1>
        <div className={"flex flex-col gap-y-8"}>
          {faqs.map((faq, index) => (
            <div key={index} className={"flex justify-between border-b border-b-[#60606080] pb-8"}>
              <h1 className={"font-light xl:text-lg"}>{faq.question}</h1>
              <span>
                <ChevronDown />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
