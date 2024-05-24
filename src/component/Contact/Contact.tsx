// Todo : Page dédiée aux services de nettoyage
// Todo : Page dédiée aux services de décoration intérieure
// Todo : Description détaillée des services de décoration (design d'intérieur, aménagement, etc.)
// Todo : Liste des avantages et des caractéristiques clés
// Todo : Galerie de photos de réalisations précédentes
// Todo : Avantages de chaque service. || Tarification (si possible).
// Todo : Témoignages ou exemples de clients satisfaits pour chaque service.

import { PhoneSVG, PhonSvg } from "./Icon-Schema";
import ContactForm from "./Contact-form";

export default function Contact() {
  const title = "Contactez-nous dès aujourd'hui";
  const subtitle = "Joignez-nous";
  const formDescription =
    "Remplissez le formulaire pour commencer une conversation";
  const address = "Adresse fictive, 9999 Ville";
  const phoneNumber = "514-668-2168";
  const email = "contact@entreprise.com";

  return (
    <div>
      <section className="p-6 bg-green-30 dark:bg-gray-100 dark:text-gray-900">
        <h2 className="p-6 mb-auto text-2xl font-bold text-gray-800 md:text-center md:mb-12 lg:text-3xl">
          {title}
        </h2>
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="px-6 py-6 md:py-6 md:px-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              {subtitle}
            </h3>
            <p className="pt-2 pb-4">{formDescription}</p>
            <div className="space-y-4">
              <p className="flex items-center">
                {/* Address SVG */}
                <span>{address}</span>
              </p>
              <p className="flex items-center">
                {/* Phone SVG */}
                <PhonSvg />
                <a
                  href={`tel:${phoneNumber}`}
                  className="font-semibold text-green-900 hover:text-green-900"
                >
                  {phoneNumber}
                </a>
              </p>
              <p className="flex items-center">
                <PhoneSVG />
                <a
                  href={`mailto:${email}`}
                  className="font-semibold text-green-900 hover:text-green-500"
                >
                  {email}
                </a>
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
