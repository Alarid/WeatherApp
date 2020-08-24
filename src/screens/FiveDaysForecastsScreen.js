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
      search: {
        cityName: '',
        country: null,
        mode: '3hours',
      }
    }
    const base_url = process.env.REACT_APP_API_ENDPOINT || "https://frozen-caverns-00730.herokuapp.com";
    this.API_URL = `${base_url}/api/v1`;
  }

  // Change city name from search bar
  setCityName(val) {
    this.setState({
      search: {
        ...this.state.search,
        cityName: val,
      }
    });
  }

  // Change country from search bar
  setCountry(val) {
    this.setState({
      search: {
        ...this.state.search,
        country: val.length > 0 ? val[0] : null,
      }
    });
  }

  // Change search mode from search bar
  setMode(mode) {
    this.setState({
      search: {
        ...this.state.search,
        mode: mode,
      }
    }, () => { this.searchCity() });
  }

  // Search weather forecast for a city by name
  searchCity() {
    // Clean previous errors and set loading to true
    this.setState({
      errors: [],
      loading: true,
    });

    // fetch data
    const cityName = this.state.search.cityName;
    let country = this.state.search.country;
    country = country ? `,${country.code}` : '';
    return fetch(`${this.API_URL}/weather?city=${cityName}${country}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        const searchMode = this.state.search.mode;
        this.setState({city: data});
        if (searchMode === '3hours') {
          return this.fetchForecast(data.id);
        }
        else if (searchMode === 'hourly') {
          return this.fetchHourly(data.coord.lat, data.coord.lon);
        }
      })
      // Error handling
      .catch(err => {
        const errors = this.state.errors.slice();
        if (err.message === "404") {
          const country = this.state.search.country;
          const inCountry = (country !== null ? ` in ${country.name}` : '');
          errors.push({
            title: 'Not found',
            body: (
              <p>The city <strong>{cityName}</strong> could not be found{inCountry}. Wrong spelling, maybe ?</p>
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
    return fetch(`${this.API_URL}/forecast?id=${id}`)
      .then(response => response.json())
      .then(data => {
        // Save data in state
        this.setState({
          forecasts: data.list,
          loading: false, // loading is finished
        });
      });
  }

  // Fetch the hourly forecast
  fetchHourly(lat, lon) {
    return fetch(`${this.API_URL}/onecall?lat=${lat}&lon=${lon}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          // Reponse is formatted a bit differently than the 3 hours forecast
          forecasts: data.hourly.map(f => ({
            dt: f.dt,
            main: {
              temp: f.temp,
              humidity: f.humidity,
            },
            weather: f.weather,
            wind: {
              speed: f.wind_speed,
            },
          })),
          loading: false,
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
          loaded={this.state.forecasts.length > 0}
          country={this.state.search.country}
          mode={this.state.search.mode}
          searchCity={this.searchCity.bind(this)}
          setCityName={this.setCityName.bind(this)}
          setCountry={this.setCountry.bind(this)}
          setMode={this.setMode.bind(this)}
        />

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