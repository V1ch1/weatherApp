import React, { useEffect, useState } from "react";
import { useContext } from "react";
import LocationContext from "../context/Location/LocationContext";

const LocationList = () => {
  const [loading, setLoading] = useState(true);
  const { getLocations, SearchedLocation, locations } =
    useContext(LocationContext);

  if (SearchedLocation && loading) {
    getLocations(SearchedLocation);
    setLoading(false);
  }

  return (
    <>
      {SearchedLocation !== null ? (
        <table className=" table-fixed m-auto mt-20 w-2/3">
          <thead className="mb-24">
            <tr>
              <th>Ciudad</th>
              <th>País</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((city, key) => {
              return (
                <tr key={key} className="mb-14">
                  <td>{city.name}</td>
                  <td>{city.country}</td>
                  <td>{city.state}</td>
                  <td>
                    <button
                      // onClick={() => handleClick(city)}
                      className="inline-flex items-center h-10 justify-center ml-8 my-1 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
                    >
                      Seleccionar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="m-auto mt-20"></div>
      )}
    </>
  );
};

export default LocationList;
