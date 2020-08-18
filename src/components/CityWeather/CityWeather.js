import React from 'react';
import SearchBar from './SearchBar';
import CityInfos from './CityInfos';
import Alert from 'react-bootstrap/Alert';
import Forecasts from './Forecasts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';

/**
 * City Weather container
 */
class CityWeather extends React.Component {

  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      forecasts: [],
      errors: [],
    }
    this.API_URL = 'https://api.openweathermap.org/data/2.5';
    this.API_KEY = 'df2559d034397d56f781912295987543';
  }

  // Component did mount
  componentDidMount() {
    this.searchCity('London');
  }

  // Search weather forecast for a city by name
  searchCity(name) {
    // Clean previous errors
    this.setState({errors: []});

    // fetch data
    fetch(`${this.API_URL}/weather?q=${name}&units=metric&appid=${this.API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        this.setState({city: data});
        this.fetchForecast(data.id);
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

        this.setState({errors: errors});
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
        });
        // this.getForecastsByDay();
      });
  }

  // Returns an dictionnary (key = dayOfYear, value = forecast)
  getForecastsByDay() {
    return this.state.forecasts.slice().reduce((days, forecast) => {
      const date = moment.unix(forecast.dt);
      const dayOfYear = date.dayOfYear().toString();
      if (!days[dayOfYear]) {
        days[dayOfYear] = {
          title: +dayOfYear === moment().dayOfYear() ? "Today" : date.format('dddd'),
          data: [],
        };
      }
      days[dayOfYear].data.push(forecast);
      return days;
    }, []).flat();
  }

  // Render the component
  render() {
    const errors = this.state.errors.map(err => (
      <Alert variant="danger" dismissible key={err}>
        <Alert.Heading> {err.title} </Alert.Heading>
        {err.body}
      </Alert>
    ));

    let forecasts = this.getForecastsByDay().map(f => (
      <Row key={f.title}>
        <Col xs="12">
          <Forecasts title={f.title} data={f.data} />
        </Col>
      </Row>
    ));

    return (
      <div className="city-weather">
        <SearchBar
          searchCity={this.searchCity.bind(this)}
        />

        <div className="errors my-3"> {errors} </div>

        <Row className="mt-3">
          <Col xs="4">
            <CityInfos
              city={this.state.city}/>
          </Col>

          <Col xs="8">
            {forecasts}
          </Col>
        </Row>
      </div>
    );
  }

}

export default CityWeather;