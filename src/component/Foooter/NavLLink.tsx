import React from "react";

interface NavLinkProps {
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text }) => (
  <a
    href="#"
    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
    onClick={() => console.log(text)}
  >
    {text}
  </a>
);

const NavLLinks = () => (
  <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
    <NavLink text="About" />
    <NavLink text="Investor Relations" />
    <NavLink text="Jobs" />
    <NavLink text="Press" />
    <NavLink text="Blog" />
  </nav>
);

export default NavLLinks;
