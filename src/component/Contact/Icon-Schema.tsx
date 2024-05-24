import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  user_name: Yup.string().required(
    "Le nom complet est obligatoire est obligatoire"
  ),
  user_email: Yup.string()
    .email("Le nom complet est obligatoire est obligatoire")
    .required("Email is required"),
  message: Yup.string().required(
    "Le nom complet est obligatoire est obligatoire"
  ),
});
export function PhoneSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 mr-2 sm:mr-6"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </svg>
  );
}

export function PhonSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 mr-2 sm:mr-6"
    >
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
    </svg>
  );
}
