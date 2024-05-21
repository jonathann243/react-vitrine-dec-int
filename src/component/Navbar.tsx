import { useState } from "react";
import { Building2, Home, Info, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { id: 1, text: "Accueil", link: "/", icon: <Home /> },
    { id: 2, text: "Company", link: "/company", icon: <Building2 /> },
    { id: 6, text: "Information", link: "/information", icon: <Info /> },
  ];

  const colors = {
    // navbar: "bg-teal-700",
    navbar: "bg-blur-teal-700",
    button: "text-teal-200 border-teal-400 hover:text-white hover:border-white",
    link: "text-white  text-lg font-semibold tracking-tight hover:text-white  tracking-wide border-2 border-transparent hover:border-teal-500  hover:rounded-lg px-5 hover:border-opacity-50",
  };

  return (
    <div className="absolute z-40 w-full backdrop-blur-sm">
      <nav
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 100%)",
        }}
        className={`flex items-center justify-between flex-wrap p-6 ${colors.navbar} border-t-4-0 border-b-2 border-teal-500 border-opacity-35`}
      >
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <span className="text-xl font-semibold tracking-tight">Logo</span>
        </div>
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
        <div
          className={`${
            navOpen ? "block" : "hidden"
          } w-full block flex-initial  lg:flex lg:items-center lg:w-auto menu-animation`}
        >
          <div className="text-sm font-bold lg:flex-grow ">
            {navItems.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${colors.link}`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  {item.text}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
