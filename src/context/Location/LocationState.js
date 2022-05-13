import baseAxios from "axios";
import React, { useReducer } from "react";
import LocationContext from "./LocationContext";
import LocationReducer from "./LocationReducer";

const axios = baseAxios.create({
  baseURL: "https://api.openweathermap.org/",
  params: {
    appid: "f9a8b731ede23577ff6c06b5fad1367e"
  }
})

const LocationState = (props) => {
  const initialState = {
    locations: [],
    selectedLocation: null,
    searchedLocation: null,
    findedLocation: null,
  };

  const [state, dispatch] = useReducer(LocationReducer, initialState);

  const getLocations = async (location) => {
    const arr = await axios.get(
      `/geo/1.0/direct?q=${location}&limit=5`
    );

    dispatch({
      type: "GET_LOCATIONS",
      payload: arr.data.filter(({ country }) => country === "ES"),
    });
  };

  const getSelectedLocation = async (lat, lon) => {
    dispatch({
      type: "GETTING_SELECTED_LOCATION"
    });

    const res = await axios.get(
      `/data/2.5/weather`,
      {
        params: {
          lat,
          lon
        }
      }
    );

    dispatch({
      type: "GET_SELECTED_LOCATION",
      payload: res.data,
    });
  };

  return (
    <LocationContext.Provider
      value={{
        locations: state.locations,
        selectedLocation: state.selectedLocation,
        searchedLocation: state.searchedLocation,
        getLocations,
        getSelectedLocation
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationState;
