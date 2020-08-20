import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { HourForecast } from './HourForecast';

// Displays forecasts for a day
export default function DayForecasts({title, data}) {
  const hours = data
    .filter(data => data.weather.length > 0)
    .map(data => (
      <Col xs="3" key={data.dt}>
        <HourForecast
          dt={data.dt}
          weather={data.weather.slice().pop()}
          temp={data.main.temp}
          humidity={data.main.humidity}
          wind={data.wind.speed}/>
      </Col>
    ))

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Row noGutters> {hours} </Row>
      </Card.Body>
    </Card>
  )
}

DayForecasts.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      main: PropTypes.string.isRequired,
    })).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
  })),
};