import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { formSchema } from "./Icon-Schema";
import ButtonComponent from "../ButtonComponent";

interface SubmissionResult {
  type: "success" | "error";
  message: string;
}

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [submissionResult, setSubmissionResult] =
    useState<SubmissionResult | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = form.current;
    if (!formElement) return;

    const formValues = {
      user_name: formElement.user_name.value,
      user_email: formElement.user_email.value,
      message: formElement.message.value,
    };

    formSchema
      .validate(formValues)
      .then(() => {
        emailjs
          .sendForm("service_mdexu09", "template_id2227f", formElement, {
            publicKey: "p7v9GVzI9t0-xBqvJ",
          })
          .then(
            () => {
              setSubmissionResult({
                type: "success",
                message: "Message sent successfully!",
              });
            },
            (error) => {
              setSubmissionResult({
                type: "error",
                message: "Failed to send message. Please try again later.",
              });
              console.error("FAILED...", error.text);
            }
          );
      })
      .catch((error) => {
        setErrors(error.errors);
        console.error("Validation failed...", error.errors);
      });
  };

  return (
    <form
      ref={form}
      className="flex flex-col px-8 py-6 space-y-6 bg-white rounded-lg shadow-xl md:py-6 md:px-6"
      onSubmit={sendEmail}
    >
      <h2 className="mb-4 text-xl font-semibold text-gray-800">
        Contactez-nous
      </h2>
      <label className="block">
        <span className="mb-1 text-gray-700">Nom complet</span>
        <input
          name="user_name"
          type="text"
          placeholder="Leroy Jenkins"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </label>
      <label className="block">
        <span className="mb-1 text-gray-700">Courriel</span>
        <input
          type="email"
          placeholder="leroy@jenkins.com"
          name="user_email"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </label>
      <label className="block">
        <span className="mb-1 text-gray-700">Message</span>
        <textarea
          name="message"
          placeholder="Décrivez votre besoin ici..."
          className="block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        ></textarea>
      </label>
      {errors.length > 0 && <p className="text-red-600">{errors[0]}</p>}

      {submissionResult && (
        <p
          className={
            submissionResult.type === "success"
              ? "text-green-600"
              : "text-red-600"
          }
        >
          {submissionResult.message}
        </p>
      )}

      <ButtonComponent text="Submit" />
    </form>
  );
}
