import {
  GET_LOCATIONS,
  GET_SELECTED_LOCATION,
  SEARCHED_LOCATIONS,
} from "../types";

function LocationReducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locations: payload,
      };
    case GET_SELECTED_LOCATION:
      return {
        ...state,
        selectedLocation: payload,
      };
    case SEARCHED_LOCATIONS:
      return {
        ...state,
        searchedLocation: payload,
      };
    default:
      return state;
  }
}

export default LocationReducer;
