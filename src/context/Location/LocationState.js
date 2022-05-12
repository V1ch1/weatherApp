import React, { useReducer } from "react";
import LocationReducer from "./LocationReducer";
import LocationContext from "./LocationContext";
import axios from "axios";

const LocationState = (props) => {
  const initialState = {
    locations: [],
    selectedLocation: null,
    SearchedLocation: null,
  };

  const [state, dispatch] = useReducer(LocationReducer, initialState);

  const findedLocation = (city) => {
    dispatch({
      type: "SEARCHED_LOCATIONS",
      payload: city,
    });
  };

  const getLocations = async (location) => {
    const res = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=d4bcc7ec6184dd6b1295f79f76f0106c`
    );

    dispatch({
      type: "GET_LOCATIONS",
      payload: res.data,
    });
  };

  const getSelectedLocation = async ({ lat, lon }) => {
    const res = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d4bcc7ec6184dd6b1295f79f76f0106c`
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
        SearchedLocation: state.SearchedLocation,
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
