import React from "react";

//ToDO: Galerie de photos mettant en valeur les réalisations précédentes (nettoyage et décoration)
//ToDO: Possibilité de filtrer les photos par type de service Galerie de photos et/ou vidéos de vos projets précédents.
// ToDO: Descriptions des projets avec les défis rencontrés et les solutions apportées.
// ToDO: Réactions des clients (le cas échéant)
import img11 from "../../assets/personnes-qui-s-occupent-du-nettoyage-bureaux.jpg"; //11
import img22 from "../../assets/portfolioIMG/2150453317.jpg"; //22//32
import img12 from "../../assets/portfolioIMG/Cleaningmen.jpg"; //12
import img41 from "../../assets/portfolioIMG/conception-salle-interieure-fauteuil-plantes-pot_23-2149427991.jpg"; //41
import imgBigo from "../../assets/portfolioIMG/man-with-cleaning-products2.jpg"; //13//23
import img31 from "../../assets/portfolioIMG/image1.png"; //31
import img32 from "../../assets/portfolioIMG/2150453317.jpg"; //22 //32
import img21 from "../../assets/portfolioIMG/portrait-homme-faisant-taches-menageres-participant-au-nettoyage-maison_23-2151468781.jpg"; // 21
import img30 from "../../assets/portfolioIMG/salon-luxe-loft-rendu-3d-etagere-pres-table-manger_105762-2053.jpg"; //30
import img42 from "../../assets/portfolioIMG/orange_paint_boy.jpg"; //42

export default function Portfolio() {
  return (
    <div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={imgBigo}
            alt=""
            className="object-cover w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img11}
            // src="https://source.unsplash.com/random/200x200/?0"
          />
          <img
            alt=""
            className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img12}
            // src="https://source.unsplash.com/random/200x200/?1"
          />
          <img
            alt=""
            className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            // src="https://source.unsplash.com/random/200x200/?2"
            src={img21}
          />
          <img
            alt=""
            className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            // src="https://source.unsplash.com/random/200x200/?3"
            src={img22}
          />
          {/*----------------*/}
          <img
            alt=""
            className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            // src="https://source.unsplash.com/random/200x200/?4"
            src={img31}
          />
          <img
            alt=""
            className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img32}
            //src="https://source.unsplash.com/random/200x200/?5"
          />
          <img
            alt=""
            className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img41}
            //src="https://source.unsplash.com/random/200x200/?6"
          />
          <img
            alt=""
            className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img42}
            //src="https://source.unsplash.com/random/200x200/?7"
          />
          <img
            src={img30}
            // src="https://source.unsplash.com/random/302x302/"
            alt=""
            className="object-cover w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
}
