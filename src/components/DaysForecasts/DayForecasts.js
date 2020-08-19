import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { HourForecast } from './HourForecast';

// Displays forecasts for a day
const DayForecasts = ({title, data, ...props}) => {
  const hours = data.map(data => (
    <Col xs="2" key={data.dt}>
      <HourForecast
        dt={data.dt}
        weather={data.weather}
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

export default DayForecasts;