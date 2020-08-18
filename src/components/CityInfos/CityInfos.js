import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import moment from 'moment';
import { countries } from 'country-data-list';

import WeatherIcon from '../Weather/WeatherIcon';
import WeatherInfos from '../Weather/WeatherInfos';

import './city-infos.css';

// Renders country label, name and emoji
const country = (code) => (
  <React.Fragment>{countries[code].emoji} {countries[code].name}</React.Fragment>
)


// Renders sunrise / sunset timestamps
const renderTimestamp = (time) => moment.unix(time).format('H:mm A');


// Renders city's current weather
const Weather = (props) => {
  if (props.infos.weather.length === 0) {
    return '';
  }
  const weather = props.infos.weather.slice().pop();
  return (
    <div className="d-flex flex-row">
      <WeatherIcon icon={weather.icon} desc={weather.description}/>
      <WeatherInfos infos={props.infos} marginTop/>
    </div>
  )
}

/**
 * CityInfos
 * Display informations about a city
 */
const CityInfos = (props) => (
  <Card className="city-infos shadow-sm">
    <Card.Body className="pb-0">
      <Card.Title>{props.name}</Card.Title>

      <Card.Subtitle className="mb-2 text-muted">
        Lat: {props.lat}, Lon: {props.lon}
      </Card.Subtitle>

      <Weather infos={props.weatherInfos}/>
    </Card.Body>
    <ListGroup className="list-group-flush infos">
      <ListGroup.Item>
        <label>Country</label> {country(props.country)}
      </ListGroup.Item>

      <ListGroup.Item>
        <label>Sunrise</label> {renderTimestamp(props.sunrise)}
      </ListGroup.Item>

      <ListGroup.Item>
        <label>Sunset</label> {renderTimestamp(props.sunset)} 
      </ListGroup.Item>
    </ListGroup>
  </Card>
);



export default CityInfos;