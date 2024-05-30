// Premiere version Hero avec image de fond et div de font Sur le Background

import { HashLink as Link } from "react-router-hash-link";
import ButtonComponent from "../../../component/ButtonComponent";

// Constantes pour le texte
const MISSION_TEXT =
  "Pour tous vos besoins de service de nettoyage ou de décoration intérieure.";

const HeroReact1 = ({ backgroundImage }: { backgroundImage: string }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 100%), url(${backgroundImage})`,
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
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) 8%)",
          }}
          className="flex flex-col gap-2.5 pb-3 sm:min-w-[448px] md:max-w-2xl border-b-2 p-3 animate-fadeIn"
        >
          <h1
            className={`text-lg tracking-tight text-center italic text-white font-mono sm:text-3xl`}
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
