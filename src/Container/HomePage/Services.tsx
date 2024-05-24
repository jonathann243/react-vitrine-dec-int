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
      "Découvrez notre service de nettoyage professionnel, adapté à tous les espaces, qu'ils soient résidentiels ou commerciaux. Nous utilisons des produits écologiques et des techniques avancées pour garantir un environnement propre et sain. Notre équipe expérimentée s'engage à fournir un service de qualité supérieure, en mettant l'accent sur la minutie et le souci du détail. Faites confiance à notre expertise pour un espace impeccablement propre qui reflète votre professionnalisme et votre souci du bien-être.",
  },
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
      "Transformez votre espace avec notre service de décoration intérieure. Que vous souhaitiez rafraîchir une pièce ou repenser entièrement votre intérieur, nos designers expérimentés travaillent avec vous pour créer un environnement qui correspond parfaitement à votre style et à vos besoins. Nous combinons esthétique, fonctionnalité et innovation pour concevoir des espaces qui améliorent votre quotidien. Laissez-nous vous aider à réaliser l'intérieur de vos rêves avec créativité et précision.",
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
    <div className="p-16 ">
      <h2 className="p-10 mt-8 mb-auto text-xl font-bold text-gray-800 sm:text-2xl md:text-center lg:text-3xl whitespace-nowrap">
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
                    <p className="mb-4 text-xl leading-relaxed">
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
