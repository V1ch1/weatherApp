import React, { useState } from "react";
import { useContext } from "react";
import LocationContext from "../context/Location/LocationContext";

export default function InputFindLocation() {
  const [location, setLocation] = useState("");

  const { findedLocation } = useContext(LocationContext);

  return (
    <>
      <div className="m-auto mt-8 h-1">
        <div className="mt-1 relative">
          <div>
            <input
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              value={location}
              name="localization"
              id="localization"
              className="focus:ring-sky-500 focus:border-sky-500 h-10 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md shadow-sm border-2 inline-flex"
              placeholder="Busca por ciudad"
            />
            <button
              onClick={() => {
                findedLocation(location);
                setLocation("");
              }}
              className="inline-flex items-center h-10 justify-center ml-8 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
