import {
  Home,
  Building,
  Briefcase,
  Hammer,
  Paintbrush, // Modifié ici
  Palette,
} from "lucide-react";
const colorIcon = "text-green-800";
const services = [
  {
    title: "Nettoyage Ménager",
    description:
      "Service de nettoyage spécialisé pour maintenir la propreté de vos espaces commerciaux. Nettoyage régulier et ponctuel adapté à vos besoins.",
    icon: <Home className={`w-6 h-6 mb-2 ${colorIcon}`} />,
  },
  {
    title: "Nettoyage de Bureaux",
    description:
      "Entretien quotidien ou hebdomadaire de vos bureaux pour un environnement de travail sain. Désinfection des surfaces les plus touchées pour garantir l'hygiène.",
    icon: <Building className={`w-6 h-6 mb-2 ${colorIcon}`} />,
  },
  {
    title: "Nettoyage Résidentiel",
    description:
      "Nettoyage minutieux de votre domicile pour un intérieur impeccable. Services de nettoyage réguliers ou ponctuels selon vos préférences.",
    icon: <Briefcase className={`w-6 h-6 mb-2 ${colorIcon}`} />,
  },
  {
    title: "Nettoyage Après Construction",
    description:
      "Nettoyage en profondeur pour enlever les débris et la poussière après des travaux de construction. Services adaptés pour préparer vos locaux à être utilisés immédiatement.",
    icon: <Hammer className={`w-6 h-6 mb-2 ${colorIcon}`} />,
  },
  {
    title: "Décoration et Peinture d'Intérieur",
    description:
      "Peinture intérieure pour rafraîchir et moderniser vos espaces. Utilisation de peintures de haute qualité pour une finition durable et esthétique.",
    icon: <Paintbrush className={`w-6 h-6 mb-2 ${colorIcon}`} />,
  },
  {
    title: "Consultation en Décoration",
    description:
      "Conseils personnalisés en décoration pour harmoniser votre intérieur. Sélection de couleurs et de styles adaptés à vos goûts et à votre espace.",
    icon: <Palette className={`w-6 h-6 mb-2 ${colorIcon}`} />,
  },
];

export default function HomeDesc() {
  return (
    <div className="p-5 bg-gray-100">
      <h2 className="mb-6 text-2xl font-bold text-center">Nos Services</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105"
          >
            {service.icon}
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
