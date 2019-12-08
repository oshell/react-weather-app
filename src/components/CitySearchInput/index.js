import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./index.css";

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const initialCities = [
  "Berlin",
  "Dhaka",
  "Shanghai",
  "Lagos",
  "Mumbai",
  "Tokyo",
  "Moscow",
  "Seoul",
  "London",
  "Shenzhen"
];

const blurDebounce = 200;

export default props => {
  const placeholder = "type the name of a city";
  const [input, setInput] = useState("");
  const [hasFocus, setHasFocus] = useState(false);
  const [cities, setCities] = useState(initialCities);

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleFocus(e) {
    setHasFocus(true);
  }
  function handleBlur(e) {
    setTimeout(() => {
      setHasFocus(false);
    }, blurDebounce);
  }

  useEffect(() => {
    const normalizedCities = initialCities.map(c => c.toLowerCase());

    setCities(
      normalizedCities.filter(c => c.includes(input.toLowerCase())).map(capitalize)
    );
  }, [input]);

  return (
    <Form className="city-search-input-wrapper">
      <Form.Group controlId="search">
        <Form.Control
          data-testid="city-search-input"
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          value={input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
        />
      </Form.Group>
      {hasFocus && (
        <ul data-testid="city-search-results">
          {cities.map(city => (
            <li
              key={city}
              data-value={city}
              onClick={props.handleSelect}
              data-testid="city-search-result"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </Form>
  );
};
