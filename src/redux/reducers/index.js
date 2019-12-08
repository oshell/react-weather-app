import { ADD_CITY, REMOVE_CITY } from "../actionTypes";

const initialState = {
  selectedCities: []
};

function tempratureSorting(a, b) {
  return a.main.temp < b.main.temp ? 1 : -1;
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CITY: {
      const cityAdded = state.selectedCities.filter(
        c => c.id === action.payload.city.id
      ).length;

      const updatedCities = cityAdded
        ? state.selectedCities
        : [...state.selectedCities, action.payload.city].sort(
            tempratureSorting
          );

      return {
        selectedCities: updatedCities
      };
    }
    case REMOVE_CITY: {
      return {
        selectedCities: state.selectedCities
          .filter(c => parseInt(c.id) !== parseInt(action.payload.id))
          .sort(tempratureSorting)
      };
    }
    default:
      return state;
  }
}
