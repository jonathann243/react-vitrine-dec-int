import { useState } from "react";
import backgroundImage2 from "../../../assets/versatile-interior-designer.png";

// Constantes pour le texte
const DEFAULT_TITLE = "We are always here to serve you.";
const MISSION_TEXT =
  "POUR TOUJ BESOINS DE SERVICE DE NEAGE OU DE DECORATION INTERIEUR ";

// Constantes pour les couleurs

const WHITE = "text-white";

const HeroReact1 = () => {
  const PrimaryColor = "green-700";
  const title = DEFAULT_TITLE;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 100%), url(${backgroundImage2})`,
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
            className={`text-lg tracking-tight text-center italic text-white font-mono sm:text-xl`}
          >
            {MISSION_TEXT}
          </h1>

          <button
            className={`p-4 mb-6 mt-6 bg-green-700 font-semibold text-white transition-all duration-500 transform hover:scale-110   rounded hover:border-2 hover:border-green-500 hover:text-white`}
          >
            Nous joindre
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroReact1;
