import React from "react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
  { name: "Let's Talk", href: "/contact-us" },
];

export const Navbar = () => {
  return (
    <div className={"flex h-[6rem] justify-between px-16 py-6 font-montserrat text-lg"}>
      <div>Kaliper</div>
      <div className={"flex gap-x-12"}>
        {navLinks.map((navElement) => (
          <div key={navElement.name}>{navElement.name}</div>
        ))}
      </div>
    </div>
  );
};
