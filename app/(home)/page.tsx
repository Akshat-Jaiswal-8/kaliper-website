import React from "react";
import { Hero } from "@/app/(home)/_components/hero";
import { Features } from "@/app/(home)/_components/features";
import { Blogs } from "@/app/(home)/_components/blogs";
import { Team } from "@/app/(home)/_components/team";
import { Industries } from "@/app/(home)/_components/industries";
import { ContactUs } from "@/app/(home)/_components/contact-us";
import { Faq } from "@/app/(home)/_components/faq";
import { Footer } from "@/app/(home)/_components/footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Blogs />
      <Team />
      <Industries />
      <ContactUs />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
