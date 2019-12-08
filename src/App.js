import React from "react";
import { Provider } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import store from "./redux/store";
import CitySearchInput from "./container/CitySearchInput";
import CityList from "./components/CityList";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Container>
          <Row>
            <Col>
              <h1>Weather Monster</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <CitySearchInput />
            </Col>
          </Row>
          <CityList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
