import { HashLink as Link } from "react-router-hash-link";
import ButtonComponent from "../../../component/ButtonComponent";

// Constantes pour le texte
const MISSION_TEXT =
  "Sublimez votre espace : innovation et élégance en design intérieur";

const HeroReact1 = ({ backgroundImage }: { backgroundImage: string }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1) 10%), url(${backgroundImage})`,
        backgroundBlendMode: "multiply",
      }}
      className="relative flex flex-col w-full min-h-screen bg-left-bottom bg-no-repeat bg-cover sm:bg-center"
    >
      <div className="absolute w-full h-full bg-black/60"></div>
      <div className="flex justify-between sm:justify-end gap-3.5 items-center pt-5 sm:pt-5 z-3"></div>
      <div className="min-h-[calc(100vh-69px)] sm:min-h-[calc(100vh-63px)] flex items-center justify-center px-1 z-0">
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.0) 80%)",
          }}
          className="flex flex-col gap-2.5 pb-3 w-full max-w-4xl border-b-2 p-3 animate-fadeIn mx-auto"
        >
          <h1
            className={`text-xl tracking-widest text-center italic text-white font-semibold font-mono md:text-4xl sm:text-xl`}
          >
            {MISSION_TEXT}
          </h1>
          <Link to="/#contact" smooth>
            <ButtonComponent text="Nous joindre" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroReact1;
