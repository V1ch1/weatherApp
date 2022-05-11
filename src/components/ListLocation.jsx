import React, { useState, useEffect } from "react";
import axios from "axios";
import Target from "./Target";

export default function ListLocation(props) {
  //citySelected es la ciudad seleccionada desde el botón
  const [citySelected, setCitySelected] = useState(null);

  //city contiene las ciudades que se van a mostrar
  const citys = props.props;
  //setCitys es el estado del componente principal para actualizarlo a limpio
  const setCitys = props.state;

  const handleClick = (props) => {
    console.log(props);

    //setCitys limpia el estado de la lista de ciudades
    setCitys(null);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=d4bcc7ec6184dd6b1295f79f76f0106c`
      )
      .then((response) => {
        setCitySelected(response.data);
        console.log(response.data);
      });
    console.log(citySelected);
  };

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
          {citys.map((city, key) => {
            return (
              <tr key={key} className="mb-10">
                <td>{city.name}</td>
                <td>{city.country}</td>
                <td>{city.state}</td>
                <button
                  onClick={() => handleClick(city)}
                  className="inline-flex items-center h-10 justify-center ml-8 my-1 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
                >
                  Seleccionar
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
      {citySelected !== null ? <Target props={citySelected} /> : null}
    </>
  );
}
