interface ButtonProps {
  text: string;
}
export default function ButtonComponent({ text }: ButtonProps) {
  return (
    <>
      <button
        className={`p-4 mb-6 mt-6 bg-green-700 font-semibold text-white transition-all duration-500 transform hover:scale-110   rounded hover:border-2 hover:border-green-500 hover:text-white`}
      >
        {text}
      </button>
    </>
  );
}
