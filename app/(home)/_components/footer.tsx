import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = (): React.ReactNode => {
  return (
    <section className={"container mx-auto w-[90%] rounded-xl bg-[#171717]"}>
      <main className={"flex items-center justify-between pb-10"}>
        <div>
          <Image src={"/png/logo.png"} height={85} width={170} alt={"Kaliper logo"} />
          <div className={"mt-10 flex h-full flex-col items-start gap-y-3"}>
            <p className={"font-semibold text-[#ECECEC]"}>Work with us!!!</p>
            <p className={"font-semibold text-[#ECECEC] text-opacity-80"}>
              Contact us Today or Request a callback.
            </p>
            <button
              className={"mt-4 rounded-lg bg-white px-4 py-2 font-inter font-semibold text-black"}>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=918299513060&text=Hii%20Amit%20&type=phone_number&app_absent=0"
                }>
                Request a call
              </Link>
            </button>
          </div>
        </div>
        <div>
          <h3 className={"font-inter text-xl font-semibold text-[#FFFFFF]"}>Company</h3>
          <div
            className={
              "mt-4 flex flex-col gap-y-3 font-inter text-base font-normal text-[#FFFFFF]"
            }>
            <p>Services</p>
            <p>Blog</p>
            <p>FAQs</p>
            <p>About Us</p>
          </div>
        </div>
        <div>
          <h3 className={"font-inter text-xl font-semibold text-[#FFFFFF]"}>Follow Us</h3>
          <div
            className={
              "mt-4 flex flex-col gap-y-3 font-inter text-base font-normal text-[#FFFFFF]"
            }>
            <Link
              href={"https://www.linkedin.com/company/kaliper/"}
              className={"relative flex gap-x-2"}>
              <Image
                src={"/svg/linkedin.svg"}
                className={"whitespace-nowrap"}
                alt={"linkedin logo"}
                height={24}
                width={24}></Image>
              <span>Linkedin</span>
            </Link>
            <Link href={"https://x.com/home?lang=en"} className={"flex items-center gap-x-2"}>
              <Image src={"/svg/twitter.svg"} alt={"twitter logo"} height={24} width={24}></Image>
              Twitter
            </Link>
            <Link
              href={"https://www.instagram.com/kalipertech/"}
              className={"flex items-center gap-x-2"}>
              <Image
                src={"/svg/instagram.svg"}
                alt={"instagram logo"}
                height={24}
                width={24}></Image>
              Instagram
            </Link>
            <Link href={"https://www.facebook.com/"} className={"flex items-center gap-x-2"}>
              <Image src={"/svg/facebook.svg"} alt={"facebook logo"} height={24} width={24}></Image>
              Facebook
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};
