import React from "react";
// Todo : Histoire de votre entreprise.
// Todo : Présentation détaillée  (histoire, mission, valeurs)
// Todo : Valeurs et engagements envers les clients.
// Todo : L'équipe  : présentation des membres clés de votre équipe et de leur expertise.
// Todo : Tout autre élément qui renforce la confiance des visiteurs envers votre entreprisPrésentation de l'équipe (photos, biographies)

const testimonials = [
  {
    quote:
      "I've been using this product for over a year now, and it has completely transformed the way I work. The features are intuitive, and the support team is always responsive and helpful.",
    name: "John McCulling",
    role: "CEO / Datadrift",
    image:
      "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=112",
  },
  {
    quote:
      "The user interface is clean and modern, making it easy to navigate and find what I need. The customization options are also impressive, allowing me to tailor the experience to my specific needs.",
    name: "Kate Berg",
    role: "CFO / Dashdash",
    image:
      "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112",
  },
  {
    quote:
      "I've tried several similar products, but this one stands out for its reliability and performance. It has become an essential tool in my workflow, and I highly recommend it to anyone looking for a top-notch solution.",
    name: "Greg Jackson",
    role: "CTO / Uptime",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500",
  },
];

export default function About() {
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 md:mb-12 lg:text-3xl">
          What our customers say
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8"
            >
              <div className="text-center text-gray-600">
                {testimonial.quote}
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="w-12 h-12 overflow-hidden bg-gray-100 rounded-full shadow-lg md:h-14 md:w-14">
                  <img
                    src={testimonial.image}
                    loading="lazy"
                    alt={`${testimonial.name}'s photo`}
                    className="object-cover object-center w-full h-full"
                  />
                </div>

                <div>
                  <div className="text-sm font-bold text-center text-indigo-500 sm:text-left md:text-base">
                    {testimonial.name}
                  </div>
                  <p className="text-sm text-center text-gray-500 sm:text-left md:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
