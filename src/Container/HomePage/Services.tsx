// Todo : Page dédiée aux services de nettoyage
// Todo : Page dédiée aux services de décoration intérieure
// Todo : Description détaillée des services de décoration (design d'intérieur, aménagement, etc.)
// Todo : Liste des avantages et des caractéristiques clés
// Todo : Galerie de photos de réalisations précédentes
// Todo : Avantages de chaque service. || Tarification (si possible).
// Todo : Témoignages ou exemples de clients satisfaits pour chaque service.

// Text content
import Lottie from "react-lottie";
import x from "../../assets/AnimationClean.json";
import x2 from "../../assets/Animation - 1111111111111112.json";
const CONTENT = [
  {
    name: "Décoration intérieure",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: x2,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    moreInfo:
      "Confrontés à des espaces qui ne répondent pas à vos attentes esthétiques ou fonctionnelles ? Notre service de décoration intérieure transforme tout challenge en opportunité. Collaborant étroitement avec vous, nos designers créent des intérieurs sur mesure qui allient style, confort et innovation, pour un quotidien amélioré et un espace qui vous ressemble vraiment.",
  },
  {
    name: "Service de nettoyage",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: x,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    moreInfo:
      "Face aux défis de maintenir des espaces propres et sains, notre service de nettoyage professionnel offre une solution sur mesure pour les environnements résidentiels et commerciaux. Utilisant des produits écologiques et des techniques de pointe, notre équipe expérimentée garantit un cadre impeccable, reflétant votre engagement envers le bien-être et le professionnalisme.",
  },
  // Add more objects for more content sections
];

// Color scheme
const COLORS = {
  textGray: "text-gray-600",
  bgGray: "bg-gray-200",
  textGrayDark: "text-gray-900",
  bgIndigo: "bg-indigo-500",
  textIndigo: "text-indigo-500",
  borderGray: "border-gray-200",
};

export default function Services() {
  return (
    <div>
      <h2 className="p-10 mb-auto text-xl font-bold text-center text-gray-800 sm:text-2xl md:text-center lg:text-3xl whitespace-nowrap">
        NOS SERVICES
      </h2>

      <section className={`${COLORS.textGray} body-font`}>
        <div className="container flex flex-col px-5 mx-auto">
          <div className="mx-auto lg:w-5/6">
            {CONTENT.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col mt-10 sm:flex-row">
                  <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
                    <Lottie
                      options={item.defaultOptions}
                      height={180}
                      width={180}
                    />
                    <div className="flex flex-col items-center justify-center text-center">
                      <h2
                        className={`mt-4 text-2xl font-medium ${COLORS.textGrayDark} title-font`}
                      >
                        {item.name}
                      </h2>
                      <div
                        className={`w-12 h-1 mt-2 mb-4 ${COLORS.bgIndigo} rounded`}
                      ></div>
                    </div>
                  </div>
                  <div
                    className={`pt-4 mt-4 text-center border-t ${COLORS.borderGray} sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left`}
                  >
                    <p className="mb-4 text-xl leading-relaxed text-justify">
                      {item.moreInfo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
