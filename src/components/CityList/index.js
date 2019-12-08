import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCity } from "../../redux/actions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './index.css';

export default () => {
  const selectedCities = useSelector(state => state.selectedCities);
  const dispatch = useDispatch();

  function remove(e) {
    const id = e.target.dataset.id;
    dispatch(removeCity(id));
  }
  return (
    <Row>
      {selectedCities.map(city => {
        return (
          <Col xs={12} md={4} key={city.id}>
            <Card className="weather-card">
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>
                  {city.weather[0].description }<br />
                  temperature: {city.main.temp}
                </Card.Text>
                <Button  data-id={city.id} variant="danger" onClick={remove}>Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
