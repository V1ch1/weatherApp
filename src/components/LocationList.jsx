import React, { useContext } from "react";
import LocationContext from "../context/Location/LocationContext";
import LocationTarget from "./LocationTarget";

const LocationList = () => {
  const { searchedLocation, locations, getSelectedLocation } =
    useContext(LocationContext);

  return (
    <>

      <table className="w-2/3 m-auto mt-20 table-fixed ">
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
                  <td>{city.country}</td>
                  <td>{city.state}</td>
                  <td>
                    <button
                      onClick={() => {
                        getSelectedLocation(city.lat, city.lon);
                      }}
                      className="inline-flex items-center justify-center h-10 px-5 py-3 my-1 ml-8 text-base font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-sky-400 hover:bg-sky-500 focus:outline-none focus:shadow-outline-blue"
                    >
                      Seleccionar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
      </table>

      <LocationTarget />
    </>
  );
};

export default LocationList;
