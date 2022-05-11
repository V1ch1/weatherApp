import React, { useState, useEffect } from "react";
import axios from "axios";
import ListLocation from "./ListLocation";

export default function InputFindLocation() {
  const [value, setValue] = useState();
  const [citys, setCitys] = useState(null);

  const baseURL = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=d4bcc7ec6184dd6b1295f79f76f0106c`;

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCitys(response.data);
      console.log(response.data);
    });
  }, [value]);

  return (
    <>
      <div className="m-auto mt-8 h-1">
        <div className="mt-1 relative">
          <div>
            <input
              onChange={(e) => setValue(e.target.value)}
              type="text"
              name="localization"
              id="localization"
              className="focus:ring-sky-500 focus:border-sky-500 h-10 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md shadow-sm border-2 inline-flex"
              placeholder="Busca por ciudad"
            />
            <button className="inline-flex items-center h-10 justify-center ml-8 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out">
              Buscar
            </button>
          </div>
        </div>
      </div>
      {citys !== null ? <ListLocation props={citys} state={setCitys} /> : null}
    </>
  );
}
