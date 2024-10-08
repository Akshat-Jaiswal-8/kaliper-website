import { MessageCircle } from "lucide-react";
import Link  from "next/link";
import React from "react";

export const Footer = (): React.ReactNode => {
  return (
    <section className={"mx-auto h-full w-[90%] rounded-xl bg-[#1012144D] bg-opacity-30 p-2 px-6"}>
      <h1 className={"mb-10 text-center text-2xl font-light"}>Follow Us</h1>
      <h1 className={"flex justify-center gap-x-4 text-3xl font-normal"}>
        <Link href={'https://www.linkedin.com/company/kaliper/'}>Linkedin</Link>
        <Link href={'https://www.instagram.com/kalipertech/'}>Instagram</Link>
        <Link href={'https://www.facebook.com/'}>Facebook</Link>
        <Link href={'https://x.com/home?lang=en'}>X</Link>
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
        Plot No 38, Bhagwan Das, Alok Puri Kalyanpur Lko, Kalyanpur(Lucknow), Uttar Pradesh India 226022
        </p>
        <div className={"flex flex-col gap-y-2 text-xs"}>
          <button
            className={
              "rounded-lg border bg-white py-2 font-inter text-sm font-semibold text-black"
            }>
           <a href="tel:+918299513060"> Request a call</a>
          </button>
          <Link className={"flex gap-x-1 items-center"} href={'https://api.whatsapp.com/send/?phone=918299513060&text=Hii%20Amit%20&type=phone_number&app_absent=0'}> <MessageCircle color="#00eb71" strokeWidth={1} /> <span className={"text-green-500"}>Connect Us On Whatsapp</span></Link>
          <p className={"font-inter text-sm font-semibold"}>+918299513060</p>
          <a href="mailto:amit.verma@kaliper.in">amit.verma@kaliper.in</a>
        </div>
      </div>
    </section>
  );
};
