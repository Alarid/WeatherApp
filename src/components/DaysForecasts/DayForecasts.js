import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import moment from 'moment';

import WeatherIcon from '../Weather/WeatherIcon';
import WeatherInfos from '../Weather/WeatherInfos';


// Card for an individual forefacst
const HourForecast = (props) => {
  if (props.data.weather.length === 0) return '';
  const data = props.data;
  const weather = data.weather.slice().pop();
  const hour = moment.unix(data.dt).format('HH:mm A');
  const infos = {
    weather: data.weather,
    main: data.main,
    wind: data.wind,
  };

  return (
    <Card className="py-3 text-center mb-2 mr-2">
      <strong>{hour}</strong>
      <WeatherIcon icon={weather.icon} desc={weather.description} center/>
      <WeatherInfos infos={infos} center />
    </Card>
  );
};

// Displays forecasts for a day
const DayForecasts = (props) => {
  const hours = props.data.map(data => (
    <Col xs="2" key={data.dt}>
      <HourForecast data={data} />
    </Col>
  ))

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Row noGutters> {hours} </Row>
      </Card.Body>
    </Card>
  )
}

export default DayForecasts;