import React from 'react';
import Container from 'react-bootstrap/Container';

import './App.css';
import FiveDaysForecasts from './screens/FiveDaysForecastsScreen';

const App = () => (
  <React.Fragment>
    <div className="header text-white shadow-lg py-3 w-100">
      <Container>
        <h1>Weather App</h1>
        <h5>3 hours / hourly forecasts for a city !</h5>
      </Container>
    </div>

    <Container className="content bg-white mt-3 p-3 rounded">
      <FiveDaysForecasts/>
    </Container>
  </React.Fragment>
);

export default App;
