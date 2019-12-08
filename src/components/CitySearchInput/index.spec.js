import React from "react";
import CitySearchInput from "./";
import {
  render,
  fireEvent,
  getByTestId,
  getAllByTestId,
  queryByTestId,
  within,
  wait
} from "@testing-library/react";

it("Test search input", async () => {
  const { container } = render(<CitySearchInput />);
  const input = getByTestId(container, "city-search-input");

  // initially hsearch results are hidden
  expect(queryByTestId(container, "city-search-results")).toBeNull();

  input.focus();
  // show 10 cities on focus
  await wait(() => {
    const list = getByTestId(container, "city-search-results");
    const elements = within(list).getAllByTestId("city-search-result");
    expect(elements.length).toEqual(10);
  });

  const value = "Berlin";
  const eventMock = {
    target: { value }
  };

  // controlled input
  fireEvent.change(input, eventMock);
  expect(input.value).toEqual(value);

  // show only city with match
  await wait(() => {
    const list = getByTestId(container, "city-search-results");
    const elements = within(list).getAllByTestId("city-search-result");
    expect(elements.length).toEqual(1);
  });

  eventMock.target.value = "beRliN";
  fireEvent.change(input, eventMock);

  // search is case-insensitive
  await wait(() => {
    const list = getByTestId(container, "city-search-results");
    const elements = within(list).getAllByTestId("city-search-result");
    expect(elements.length).toEqual(1);
  });
});
