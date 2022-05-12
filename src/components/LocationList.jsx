import React, { useEffect, useState } from "react";
import { useContext } from "react";
import LocationContext from "../context/Location/LocationContext";

const LocationList = () => {
  const { getLocations, SearchedLocation, locations } =
    useContext(LocationContext);
  console.log(SearchedLocation);

  useEffect(() => {
    getLocations(SearchedLocation);
  }, [SearchedLocation]);

  return (
    <>
      <table className=" table-fixed m-auto mt-20 w-2/3">
        <thead className="mb-10">
          <tr>
            <th>Ciudad</th>
            <th>País</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((city, key) => {
            return (
              <tr key={key} className="mb-10">
                <td>{city.name}</td>
                <td>{city.country}</td>
                <td>{city.state}</td>
                {/* <button
                  onClick={() => handleClick(city)}
                  className="inline-flex items-center h-10 justify-center ml-8 my-1 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
                >
                  Seleccionar
                </button> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default LocationList;
