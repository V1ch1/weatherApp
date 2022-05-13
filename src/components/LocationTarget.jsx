import React from "react";
import { useContext } from "react";
import LocationContext from "../context/Location/LocationContext";

export default function LocationTarget() {
  const { selectedLocation } = useContext(LocationContext);
  console.log(selectedLocation);

  return (
    <>
      {selectedLocation ? (
        <div className="bg-gray-50 my-8">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ">
              <span className="">{selectedLocation.name} </span>
              <span className=" text-sky-600">
                {Math.trunc(selectedLocation.main.temp - 273)}º
              </span>
            </h2>
            <div className="block mt-3 ">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl ">
                Temperatura mínima:{" "}
                {Math.trunc(selectedLocation.main.temp_min - 273)}º
              </h2>
            </div>
            <div className="block mt-3 ">
              <h2 className="block text-xl font-bold tracking-tight text-gray-900 sm:text-xl ">
                Temperatura máxima:{" "}
                {Math.trunc(selectedLocation.main.temp_max - 273)}º
              </h2>
            </div>
            <div className="mt-8 block  lg:mt-0 lg:flex-shrink-0 lg:items-center">
              <div className="inline-flex rounded-md shadow ">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-black"
                >
                  Ver más{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 my-8">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl py-"></h2>
            <div className="block">Hola</div>
            <div className="mt-8 block  lg:mt-0 lg:flex-shrink-0 lg:items-center">
              <div className="inline-flex rounded-md shadow ">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-black"
                >
                  Ver más{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
