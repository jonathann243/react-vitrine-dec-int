import React from "react";
import { User, Globe, Shield, FileText, PhoneCall } from "lucide-react";

const informationCollectionData = [
  {
    icon: <User className="inline-block mr-2" />,
    text: "Informations fournies par l'utilisateur lors de l'inscription ou de la communication avec nous.",
  },
  {
    icon: <Shield className="inline-block mr-2" />,
    text: "Informations collectées automatiquement sur votre utilisation de nos services.",
  },
  {
    icon: <FileText className="inline-block mr-2" />,
    text: "Informations obtenues de sources tierces.",
  },
];

const informationUsageData = [
  { text: "Fournir et améliorer nos services." },
  {
    text: "Communiquer avec vous à propos de votre compte ou de nos services.",
  },
  { text: "Conduire des recherches et des analyses." },
];

const informationSharingData = [
  {
    text: "Avec des prestataires de services qui nous aident à fournir nos services.",
  },
  { text: "En réponse à des processus légaux ou pour protéger nos droits." },
  {
    text: "Dans le cadre de transactions d'entreprise, comme une fusion ou une vente d'actifs.",
  },
];

const userRightsData = [
  { text: "Accéder à vos informations personnelles." },
  { text: "Demander la correction ou la suppression de vos informations." },
  { text: "Retirer votre consentement à l'utilisation de vos données." },
];

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl p-5 mx-auto text-gray-800 bg-white">
      <h1 className="my-6 text-4xl font-bold text-center text-green-600 ">
        Politique de Confidentialité
      </h1>
      <p className="mb-6 text-lg text-center md:text-justify lg:text-justify">
        Chez [Nom de l'Entreprise], nous nous engageons à protéger la vie privée
        de nos utilisateurs. Cette politique de confidentialité explique comment
        nous collectons, utilisons, partageons et protégeons les informations
        personnelles.
      </p>

      <div className="p-5 mb-5 text-left bg-gray-100 rounded-lg shadow-md card md:text-justify lg:text-justify">
        <h2 className="flex items-center mb-3 text-2xl font-semibold text-green-700">
          <Globe className="w-6 h-6 mr-2" /> Collecte d'Informations
        </h2>
        <ul className="pl-8 list-disc">
          {informationCollectionData.map((item, index) => (
            <li key={index}>
              {item.icon}
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5 mb-5 text-left bg-gray-100 rounded-lg shadow-md card md:text-justify lg:text-justify">
        <h2 className="flex items-center mb-3 text-2xl font-semibold text-green-700">
          <User className="w-6 h-6 mr-2" /> Utilisation des Informations
        </h2>
        <ul className="pl-8 list-disc">
          {informationUsageData.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>

      <div className="p-5 mb-5 text-left bg-gray-100 rounded-lg shadow-md card md:text-justify lg:text-justify">
        <h2 className="flex items-center mb-3 text-2xl font-semibold text-green-700">
          <Shield className="w-6 h-6 mr-2" /> Partage des Informations
        </h2>
        <ul className="pl-8 list-disc">
          {informationSharingData.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>

      <div className="p-5 mb-5 text-left bg-gray-100 rounded-lg shadow-md card md:text-justify lg:text-justify">
        <h2 className="flex items-center mb-3 text-2xl font-semibold text-green-700">
          <FileText className="w-6 h-6 mr-2" /> Sécurité
        </h2>
        <p>
          Nous appliquons des mesures de sécurité strictes pour protéger vos
          informations contre l'accès non autorisé ou la perte.
        </p>
      </div>

      <div className="p-5 mb-5 text-left bg-gray-100 rounded-lg shadow-md card md:text-justify lg:text-justify">
        <h2 className="flex items-center mb-3 text-2xl font-semibold text-green-700">
          <PhoneCall className="w-6 h-6 mr-2" /> Vos Droits
        </h2>
        <ul className="pl-8 list-disc">
          {userRightsData.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>

      <div className="p-5 mb-5 text-left bg-gray-100 rounded-lg shadow-md card md:text-justify lg:text-justify">
        <h2 className="flex items-center mb-3 text-2xl font-semibold text-green-700">
          <PhoneCall className="w-6 h-6 mr-2" /> Contact
        </h2>
        <p>
          Pour toute question relative à cette politique, veuillez nous
          contacter à{" "}
          <a href="/contact" className="text-green-700 hover:text-green-500">
            contact@entreprise.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
