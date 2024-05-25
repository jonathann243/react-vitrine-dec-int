import { Building2, Home, Info, Mail, Shield } from "lucide-react";

import { Link, To } from "react-router-dom";

const navItems: NavItem[] = [
  { id: 1, text: "Accueil", link: "/", icon: <Home /> },
  { id: 4, text: "Entreprise", link: "/company", icon: <Building2 /> },
  { id: 3, text: "Informations", link: "/information", icon: <Info /> },
  { id: 2, text: "Contact", link: "/contact", icon: <Mail /> },
  { id: 5, text: "Confidentialité", link: "/company", icon: <Shield /> },
];
interface NavItem {
  id: number;
  text: string;
  link: string;
  icon: JSX.Element;
}

const NavLLinks = () => (
  <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
    {navItems.map((item) => (
      <Link
        to={
          {
            pathname: item.link,
            state: { scroll: "top" },
          } as To
        }
        key={item.id}
        className={`block `}
        onClick={() => console.log(`Navigating to ${item.text}`)}
      >
        <div className="flex items-center gap-3 text-gray-500 transition duration-100 hover:text-green-800 active:text-green-800">
          {item.icon}
          {item.text}
        </div>
      </Link>
    ))}
  </nav>
);

export default NavLLinks;
