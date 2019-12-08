import reducer from './';
import { addCity, removeCity } from "../actions";

const cityMocks = [
  { id: 123, name: 'foo', main: { temp: 5 } },
  { id: 234, name: 'bar', main: { temp: 7 } },
  { id: 555, name: 'baz', main: { temp: 6 } },
];

let state = {
  selectedCities: []
};

it("Test root reducer", () => {
  const foo = cityMocks[0];
  const bar = cityMocks[1];
  const baz = cityMocks[2];

  // cities can be added
  state = reducer(state, addCity(foo));
  expect(state.selectedCities.length).toEqual(1);

  // no duplicates
  state = reducer(state, addCity(foo));
  expect(state.selectedCities.length).toEqual(1);

  // sorted by temprature
  state = reducer(state, addCity(bar));
  state = reducer(state, addCity(baz));
  expect(state.selectedCities[0].id).toEqual(bar.id);
  expect(state.selectedCities.length).toEqual(3);

  // can be removed
  state = reducer(state, removeCity(bar.id));
  expect(state.selectedCities.length).toEqual(2);
  // sorted after removing
  expect(state.selectedCities[0].id).toEqual(baz.id);
});
