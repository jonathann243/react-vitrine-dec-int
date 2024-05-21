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
  const title = "Contact us today";
  const subtitle = "Get in touch";
  const formDescription = "Fill in the form to start a conversation";
  const address = "Fake address, 9999 City";
  const phoneNumber = "5146682168";
  const email = "contact@business.com";

  return (
    <div>
      <h2 className="mb-auto text-2xl font-bold text-center text-gray-800 md:mb-12 lg:text-3xl">
        {title}
      </h2>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h3 className="mb-auto text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
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
                  className="text-blue-500 hover:text-blue-700"
                >
                  {phoneNumber}
                </a>
              </p>
              <p className="flex items-center">
                {/* Email SVG */}
                <PhoneSVG />
                <a
                  href={`mailto:${email}`}
                  className="text-blue-500 hover:text-blue-700"
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
