import React, { useContext, useState } from "react";
import LocationContext from "../context/Location/LocationContext";

export default function InputFindLocation() {
  const [location, setLocation] = useState("");

  const { getLocations } = useContext(LocationContext);

  return (
    <>
      <div className="h-1 m-auto mt-8">
        <div className="relative mt-1">
          <div>
            <input
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              value={location}
              name="localization"
              id="localization"
              className="inline-flex h-10 pr-12 border-2 border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 pl-7 sm:text-sm"
              placeholder="Busca por ciudad"
            />
            <button
              onClick={() => {
                getLocations(location);
                setLocation("");
              }}
              className="inline-flex items-center justify-center h-10 px-5 py-3 ml-8 text-base font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-sky-400 hover:bg-sky-500 focus:outline-none focus:shadow-outline-blue"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
