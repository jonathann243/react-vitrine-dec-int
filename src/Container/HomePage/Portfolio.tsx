// Galerie de photos et vidéos mettant en valeur les réalisations précédentes (nettoyage et décoration)
// Possibilité de filtrer les photos par type de service
// Descriptions des projets avec les défis rencontrés et les solutions apportées.
// Réactions des clients (le cas échéant)
import { useState } from "react";
import img11 from "../../assets/personnes-qui-s-occupent-du-nettoyage-bureaux.jpg";
import img22 from "../../assets/portfolioIMG/2150453317.jpg";
import img12 from "../../assets/portfolioIMG/Cleaningmen.jpg";
import img41 from "../../assets/portfolioIMG/conception-salle-interieure-fauteuil-plantes-pot_23-2149427991.jpg";
import imgBigo from "../../assets/portfolioIMG/man-with-cleaning-products2.jpg";
import img31 from "../../assets/portfolioIMG/image1.png";
import img32 from "../../assets/portfolioIMG/2150453317.jpg";
import img21 from "../../assets/portfolioIMG/portrait-homme-faisant-taches-menageres-participant-au-nettoyage-maison_23-2151468781.jpg";
import img30 from "../../assets/portfolioIMG/salon-luxe-loft-rendu-3d-etagere-pres-table-manger_105762-2053.jpg";
import img42 from "../../assets/portfolioIMG/orange_paint_boy.jpg";

interface Image {
  src: string;
  alt: string;
  category: string;
}

const images: Image[] = [
  {
    src: imgBigo,
    alt: "Homme avec produits de nettoyage",
    category: "Nettoyage",
  },
  { src: img11, alt: "Nettoyage de bureaux", category: "Nettoyage" },
  { src: img12, alt: "Personnel de nettoyage", category: "Nettoyage" },
  {
    src: img21,
    alt: "Homme faisant des tâches ménagères",
    category: "Nettoyage",
  },
  { src: img22, alt: "Nettoyage professionnel", category: "Nettoyage" },
  { src: img31, alt: "Image de nettoyage", category: "Nettoyage" },
  { src: img32, alt: "Nettoyage intensif", category: "Nettoyage" },
  { src: img41, alt: "Conception d'intérieur", category: "Décoration" },
  { src: img42, alt: "Peinture d'intérieur", category: "Décoration" },
  { src: img30, alt: "Salon de luxe", category: "Décoration" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("Tous");
  const [selectedImg, setSelectedImg] = useState<Image | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredImages = images.filter(
    (image) => filter === "Tous" || image.category === filter
  );

  const handleImageClick = (img: Image) => {
    setSelectedImg(img);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <section className="py-6 bg-gray-100 dark:bg-gray-200 dark:text-gray-30">
        <div className="container mx-auto">
          <h2 className="mb-auto text-xl font-bold text-gray-800 p-7 sm:text-2xl md:text-center lg:text-3xl whitespace-nowrap">
            NOS RÉALISATIONS
          </h2>
          <div className="flex justify-center mb-4">
            <button
              className={`p-2 mx-2 rounded-lg shadow-lg ${
                filter === "Tous"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setFilter("Tous")}
            >
              Tous
            </button>
            <button
              className={`p-2 mx-2 rounded-lg shadow-lg ${
                filter === "Nettoyage"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setFilter("Nettoyage")}
            >
              Nettoyage
            </button>
            <button
              className={`p-2 mx-2 rounded-lg shadow-lg ${
                filter === "Décoration"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setFilter("Décoration")}
            >
              Décoration
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            {filteredImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full shadow-sm cursor-pointer rounded-xl min-h-48 dark:bg-gray-500 aspect-square"
                onClick={() => handleImageClick(img)}
              />

            ))}
          </div>
        </div>
        {showModal && selectedImg && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-4 bg-white rounded-lg">
              <img
                src={selectedImg.src}
                alt={selectedImg.alt}
                className="h-[500px] max-w-full"
              />
              <button
                onClick={closeModal}
                className="p-2 mt-4 text-white bg-red-500 rounded"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
