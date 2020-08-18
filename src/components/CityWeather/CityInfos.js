import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import moment from 'moment';
import { countries } from 'country-data-list';

import WeatherIcon from './WeatherIcon';
import WeatherInfos from './WeatherInfos';

import './city-infos.css';

// Renders country label, name and emoji
const country = (code) => (
  <React.Fragment>{countries[code].emoji} {countries[code].name}</React.Fragment>
)

// Renders city's current weather
const Weather = (props) => {
  const data = props.city;
  const weather = data.weather.slice().pop();
  return (
    <div className="d-flex flex-row">
      <WeatherIcon icon={weather.icon} desc={weather.description}/>
      <WeatherInfos data={data} marginTop/>
    </div>
  )
}

/**
 * CityInfos
 * Display informations about a city
 */
class CityInfos extends React.Component {

  renderTimestamp(time) {
    return moment.unix(time).format('H:mm A');
  }

  render() {
    const city = this.props.city;
    if (!city) {
      return '';
    }

    return (
      <Card className="city-infos shadow-sm">
        <Card.Body className="pb-0">
          <Card.Title>{city.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Lat: {city.coord.lat}, Lng: {city.coord.lon}
          </Card.Subtitle>
          <Weather city={city}/>
        </Card.Body>
        <ListGroup className="list-group-flush infos">
          <ListGroup.Item> <label>Country</label> {country(city.sys.country)} </ListGroup.Item>
          {/* <ListGroup.Item>
            <label>Population</label> {numeral(city.population).format('0,0')}
          </ListGroup.Item> */}
          <ListGroup.Item>
            <label>Sunrise</label> {this.renderTimestamp(city.sys.sunrise)}
          </ListGroup.Item>
          <ListGroup.Item>
            <label>Sunset</label> {this.renderTimestamp(city.sys.sunset)} 
          </ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }

}

export default CityInfos;