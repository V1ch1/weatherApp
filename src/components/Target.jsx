import React from "react";

export default function Target(city) {
  console.log(city);
  return (
    <div className="bg-gray-50 mt-20 ">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="">A Coruña</span>
          <span className="ml-10 text-sky-400 mt-5">18º</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
