import React, { useState } from "react";
import { useContext } from "react";
import LocationContext from "../context/Location/LocationContext";
import LocationTarget from "./LocationTarget";

const LocationList = () => {
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(false);
  const { getLocations, searchedLocation, locations, getSelectedLocation } =
    useContext(LocationContext);

  if (searchedLocation && loading) {
    getLocations(searchedLocation);
    setLoading(false);
  }

  return (
    <>
      {searchedLocation !== null ? (
        <table className=" table-fixed m-auto mt-20 w-2/3">
          <thead className="mb-24">
            <tr>
              <th>Ciudad</th>
              <th>País</th>
              <th>Autonomía</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((city, key) => {
              return (
                <tr key={key} className="mb-14">
                  <td>{city.name}</td>
                  {city.country === "ES" && <td>España</td>}
                  <td>{city.state}</td>
                  <td>
                    <button
                      onClick={() => {
                        getSelectedLocation(city.lat, city.lon);
                        setSelectedLocation(true);
                      }}
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

      {selectedLocation && <LocationTarget />}
    </>
  );
};

export default LocationList;
