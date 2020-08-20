import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchBar from '../components/Filters/SearchBar';
import CityInfos from '../components/CityInfos/CityInfos';
import DaysForecasts from '../components/DaysForecasts/DaysForecasts';

class FiveDaysForecasts extends React.Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      forecasts: [],
      errors: [],
      loading: false,
    }
    this.API_URL = 'https://api.openweathermap.org/data/2.5';
    this.API_KEY = 'df2559d034397d56f781912295987543';
  }

  // Component did mount
  componentDidMount() {
    this.searchCity('London');
  }

  // Search weather forecast for a city by name
  searchCity(name, code) {
    // Clean previous errors and set loading to true
    this.setState({
      errors: [],
      loading: true,
    });

    // fetch data
    const q = name + (code !== null ? `,${code}` : '');
    return fetch(`${this.API_URL}/weather?q=${q}&units=metric&appid=${this.API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        this.setState({city: data});
        return this.fetchForecast(data.id);
      })
      // Error handling
      .catch(err => {
        const errors = this.state.errors.slice();
        if (err.message === "404") {
          errors.push({
            title: 'Not found',
            body: (
              <p>The city <strong>{name}</strong> could not be found. Wrong spelling, maybe ?</p>
            ),
          });
        }
        else {
          console.log(err);
        }

        this.setState({
          errors: errors,
          city: null,
          forecasts: [],
          loading: false,
        });
      });

  }

  // Fetch the 5 day forecast for city <id>
  fetchForecast(id) {
    return fetch(`${this.API_URL}/forecast?id=${id}&units=metric&appid=${this.API_KEY}`)
      .then(response => response.json())
      .then(data => {
        // Save data in state
        this.setState({
          forecasts: data.list,
          loading: false, // loading is finished
        });
      });
  }

  // Render errors stored in state
  renderErrors() {
    return this.state.errors.map(err => (
      <Alert variant="danger" dismissible key={err}>
        <Alert.Heading> {err.title} </Alert.Heading>
        {err.body}
      </Alert>
    ));
  }

  // Render city informations if there is a city in state
  renderCityInfos() {
    const city = this.state.city;
    if (!city) {
      return '';
    }

    const weatherInfos = {
      weather: city.weather,
      main: city.main,
      wind: city.wind,
    };

    return (
      <CityInfos
        name={city.name}
        lat={city.coord.lat}
        lon={city.coord.lon}
        country={city.sys.country}
        sunrise={city.sys.sunrise}
        sunset={city.sys.sunset}
        weatherInfos={weatherInfos} />
    )
  }

  // Render the view
  render() {
    const errors = this.renderErrors();
    const cityInfos = this.renderCityInfos();

    return (
      <React.Fragment>
        <SearchBar
          loading={this.state.loading}
          searchCity={this.searchCity.bind(this)} />

        <div className="errors my-3">
          {errors}
        </div>

        <Row className="mt-3">
          <Col xs="4"> {cityInfos} </Col>

          <Col xs="8">
            <DaysForecasts forecasts={this.state.forecasts} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default FiveDaysForecasts;