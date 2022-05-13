import React, { useContext } from "react";
import LocationContext from "../context/Location/LocationContext";

export default function LocationTarget() {
  const { selectedLocation } = useContext(LocationContext);

  return (
    <>
      {selectedLocation ? (
        <div className="my-8 bg-gray-50">
          <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
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
            <div className="block mt-8 lg:mt-0 lg:flex-shrink-0 lg:items-center">
              <div className="inline-flex rounded-md shadow ">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-sky-400 hover:bg-black"
                >
                  Ver más{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : selectedLocation === null ? (
        <div className="my-8 bg-gray-50">
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl py-"></h2>
              <div className="block">Selecciona una ciudad</div>
            </div>
          </div>

        ) :
          <div className="my-8 bg-gray-50">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl py-"></h2>
              <div className="block">Cargando</div>
          </div>
        </div>
      }
    </>
  );
}
