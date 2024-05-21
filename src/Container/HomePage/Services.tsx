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
    description:
      "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    moreInfo:
      "Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.",
  },
  {
    name: "Decauration interieur",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: x2,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    description:
      "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    moreInfo:
      "Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.",
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
      <h2 className="mb-auto text-2xl font-bold text-center text-gray-800 md:mb-12 lg:text-3xl">
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
