import { useState } from "react";
import backgroundImage3 from "../../../assets/professional-hero-.png";
const HeroReact2 = () => {
  const [title, setTitle] = useState("We are always here to serve you.");

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 50%), url(${backgroundImage3})`,
        backgroundBlendMode: "multiply",
      }}
      className="min-h-screen relative flex flex-col bg-[url('./assets/image1.png')]  bg-no-repeat w-full bg-cover bg-left-bottom sm:bg-center"
    >
      <div className="absolute w-full h-full bg-black/60"></div>
      <div className="flex justify-between sm:justify-end gap-3.5 items-center pt-5 sm:pt-5 z-3"></div>
      <div className="min-h-[calc(100vh-69px)] sm:min-h-[calc(100vh-63px)] flex items-center justify-center px-1 z-0">
        <div className="flex flex-col gap-2.5 pb-3 sm:min-w-[448px] max-w-md">
          <h1 className="text-3xl font-semibold tracking-wider text-center text-orange-600 sm:text-4xl">
            Votre Vision Notre Mission
          </h1>
          <h1 className="mx-auto mt-1 text-xl text-center text-white transition-all duration-500 ease-in-out sm:text-2xl w-fit">
            {title}
          </h1>
          <div className="flex flex-col items-center justify-center gap-5 mt-2 sm:gap-7">
            <div className="flex items-center justify-center gap-4 w-fit">
              <div
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md cursor-pointer hover:shadow-orange-600 group"
                onMouseEnter={() => setTitle("Order Your Favorite Food")}
                onMouseLeave={() =>
                  setTitle("We are always here to serve you.")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="25"
                  height="25"
                >
                  <path d="M142.07,512H369.93a77,77,0,0,0,75.31-61.76l36.29-181.53H30.47L66.76,450.23A77,77,0,0,0,142.07,512ZM307.2,345.54a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm288-192.07H427.7L287.18,12.9a44.12,44.12,0,0,0-62.36,0L84.3,153.47H44.8a44.82,44.82,0,0,0,0,89.63H467.2a44.82,44.82,0,0,0,0-89.63Zm-346.7,0L242.92,31a18.52,18.52,0,0,1,26.16,0L391.5,153.47Z" />
                </svg>
              </div>
            </div>
            <div className="flex justify-center min-w-[100px] sm:min-w-[360px] !max-w-[200px] sm:max-w-[360px]">
              <div className="flex bg-white py-2.5 pl-2 pr-1 rounded-l-lg items-center gap-1.5 w-full max-w-[280px] sm:max-w-xl">
                <input
                  type="text"
                  className="py-1 outline-none max-w-[156px] sm:max-w-none placeholder:text-xs sm:placeholder:text-sm"
                  placeholder="Street Address, City, State"
                />
              </div>
              <button
                className="px-6 py-1 text-base font-semibold text-white bg-orange-600 rounded-r-lg shadow-md lg:text-lg "
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroReact2;
