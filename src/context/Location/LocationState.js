import React, { useReducer } from "react";
import LocationReducer from "./LocationReducer";
import LocationContext from "./LocationContext";
import axios from "axios";

const LocationState = (props) => {
  const initialState = {
    locations: [],
    selectedLocation: null,
    searchedLocation: null,
    findedLocation: null,
  };

  const [state, dispatch] = useReducer(LocationReducer, initialState);

  const findedLocation = (city) => {
    dispatch({
      type: "SEARCHED_LOCATIONS",
      payload: city,
    });
  };

  const getLocations = async (location) => {
    const arr = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=f9a8b731ede23577ff6c06b5fad1367e`
    );

    dispatch({
      type: "GET_LOCATIONS",
      payload: new Array(arr.data[0]),
    });
  };

  const getSelectedLocation = async (lat, lon) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f9a8b731ede23577ff6c06b5fad1367e`
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
        getSelectedLocation,
        findedLocation,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationState;
