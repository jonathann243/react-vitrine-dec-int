import { useState, FC } from "react";
import { Building2, Home, Info, Mail, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItem {
  id: number;
  text: string;
  link: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { id: 1, text: "Accueil", link: "/", icon: <Home /> },
  { id: 4, text: "Entreprise", link: "/company", icon: <Building2 /> },
  { id: 3, text: "Informations", link: "/information", icon: <Info /> },
  { id: 2, text: "Contact", link: "/contact", icon: <Mail /> },
];
import { useParams } from "react-router-dom";

const Navbar: FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const params = useParams();
  if (Object.values(params).includes("")) {
    console.log("Un ou plusieurs paramètres de route sont vides:", params);
  } else {
    console.log("Tous les paramètres de route sont remplis:", params);
  }

  const colors = {
    navbar: "bg-black",
    button: "text-teal-200 border-teal-400 hover:text-white hover:border-white",
    link: "text-white text-lg font-semibold tracking-tight hover:text-white tracking-wide border-2 border-transparent hover:border-teal-500 hover:rounded-lg px-5 hover:border-opacity-50",
  };

  return (
    <div
      className={`${
        Object.values(params).includes("")
          ? "absolute z-40 w-full backdrop-blur-sm"
          : "bg-black"
      }`}
    >
      <nav
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 100%)",
        }}
        className={`flex items-center justify-between flex-wrap p-6 ${colors.navbar}`}
      >
        <Logo />
        <MenuButton navOpen={navOpen} setNavOpen={setNavOpen} colors={colors} />
        <NavLinks navOpen={navOpen} colors={colors} />
      </nav>
    </div>
  );
};

const Logo: FC = () => (
  <div className="flex items-center flex-shrink-0 mr-6 text-white">
    <span className="text-xl font-semibold tracking-tight">Logo</span>
  </div>
);

interface MenuButtonProps {
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
  colors: { [key: string]: string };
}

const MenuButton: FC<MenuButtonProps> = ({ navOpen, setNavOpen, colors }) => (
  <div className="block lg:hidden">
    <button
      onClick={() => setNavOpen(!navOpen)}
      className={`flex items-center px-3 py-2 border rounded ${colors.button}`}
    >
      {navOpen ? (
        <X size={24} aria-label="Close menu" />
      ) : (
        <Menu size={24} aria-label="Open menu" />
      )}
    </button>
  </div>
);

interface NavLinksProps {
  navOpen: boolean;
  colors: { [key: string]: string };
}

import { useLocation } from "react-router-dom";

const NavLinks: FC<NavLinksProps> = ({ navOpen, colors }) => {
  const location = useLocation();

  return (
    <div
      className={`${
        navOpen ? "block" : "hidden"
      } w-full block flex-initial lg:flex lg:items-center lg:w-auto`}
    >
      <div className="text-sm font-bold lg:flex-grow">
        {navItems.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
              colors.link
            } ${
              location.pathname === item.link
                ? "border-b-4 border-green-800 rounded-lg p-1 border-opacity-50"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              {item.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
