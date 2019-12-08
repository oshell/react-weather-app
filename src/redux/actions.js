import { ADD_CITY, REMOVE_CITY } from "./actionTypes";

export const addCity = city => ({
  type: ADD_CITY,
  payload: { city }
});

export const removeCity = id => ({
  type: REMOVE_CITY,
  payload: { id }
});
