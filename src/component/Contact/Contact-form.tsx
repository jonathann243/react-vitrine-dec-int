import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { formSchema } from "./Icon-Schema";

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

    console.log(errors);

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
      className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
      onSubmit={sendEmail}
    >
      {/* Form fields */}
      <label className="block">
        <span className="mb-1">Nom complet </span>
        <input
          name="user_name"
          type="text"
          placeholder="Leroy Jenkins"
          className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
        />
      </label>
      <label className="block">
        <span className="mb-1">Courriel </span>
        <input
          type="email"
          placeholder="leroy@jenkins.com"
          name="user_email"
          className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
        />
      </label>
      <label className="block">
        <span className="mb-1">Message</span>
        <textarea
          name="message"
          className="block w-full bg-gray-100 rounded-md focus:ring focus:ring-opacity-75 "
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
      <button
        type="submit"
        className="self-center px-8 py-3 text-2xl text-white bg-blue-500 rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600 hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
