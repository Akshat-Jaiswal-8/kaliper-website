import React from "react";

export const Footer = (): React.ReactNode => {
  return (
    <section className={"mx-auto h-full w-[90%] rounded-xl bg-[#1012144D] bg-opacity-30 p-2 px-6"}>
      <h1 className={"mb-10 text-center text-2xl font-light"}>Follow Us</h1>
      <h1 className={"flex justify-center gap-x-4 text-3xl font-normal"}>
        <span>Linkedin</span>
        <span>Instagram</span>
        <span>Facebook</span>
        <span>Twitter</span>
      </h1>
      <div className={"my-10"}>
        <p className={"mb-4 font-inter text-xs font-semibold text-[#ECECEC] text-opacity-60"}>
          INFORMATION
        </p>
        <div className={"flex flex-col font-inter leading-relaxed"}>
          <p>FAQ</p>
          <p>Partners</p>
          <p>Blog</p>
          <p>Contacts</p>
        </div>
      </div>
      <div className={"flex w-full items-center justify-between"}>
        <p className={"w-[15%] font-inter text-sm font-semibold"}>
          1901 Thornridge Cir. Shiloh, Hawaii 81063
        </p>
        <div className={"flex flex-col gap-y-2 text-xs"}>
          <button
            className={
              "rounded-lg border bg-white py-2 font-inter text-sm font-semibold text-black"
            }>
            Request a call
          </button>
          <p className={"font-inter text-sm font-semibold"}>+1 (999) 999-99-99</p>
          <p>info@logoipsum.com</p>
        </div>
      </div>
    </section>
  );
};
