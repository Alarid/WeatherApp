import React from 'react';
import Container from 'react-bootstrap/Container';
import CityWeather from '../CityWeather/CityWeather';
import './App.css';

const App = () => (
  <React.Fragment>
    <div className="header text-white shadow-lg py-3 w-100">
      <Container>
        <h1>Weather App</h1>
        <h5>5 Days / 3 Hours Forecast</h5>
      </Container>
    </div>

    <Container className="content bg-white mt-3 p-3 rounded">
      <CityWeather/>
    </Container>
  </React.Fragment>
);

export default App;
