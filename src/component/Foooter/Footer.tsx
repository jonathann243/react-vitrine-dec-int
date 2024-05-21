import NavLLink from "./NavLLink";
import SocialLink from "./SocialLink";
// Constantes pour les couleurs et les classes CSS réutilisables

const Footer = () => {
  return (
    <div className="pt-4 bg-white sm:pt-10 lg:pt-12">
      <footer className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-6 border-t border-b md:flex-row">
          {/* Navigation */}
          <NavLLink />
          <SocialLink />
        </div>

        {/* Mention légale */}
        <div className="py-8 text-sm text-center text-gray-400">
          © 2023 - Present JOTECH. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
