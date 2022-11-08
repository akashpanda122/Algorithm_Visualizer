import React from "react";

const Footer = () => {
  return (
    <div className="min-h-[64px] w-full py-4 px-5 fixed bottom-0 flex flex-wrap justify-between items-center text-center bg-white shadow-[0_-2px_1px_-1px_rgba(0,0,0,0.2)]">
      <section>
        Designed and built with <span className="text-xl text-red-500">♥ </span>
        {/*by{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-gray-800 underline"
        >
          Akash Panda
  </a>*/}
      </section>
      {/*<section className="inline-flex justify-end flex-grow">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-gray-800 underline"
        >
          Code
        </a>
  </section>*/}
    </div>
  );
};

export default Footer;
