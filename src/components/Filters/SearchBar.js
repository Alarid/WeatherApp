import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import CountryList from './CountryList';
import ForecastMode from './ForecastMode';

export default function SearchBar({ loading, loaded, mode, searchCity, setCityName, setCountry, setMode }) {
  const [cityName, setName] = useState('');

  const search = (e) => {
    e.preventDefault();
    searchCity();
  };

  const changeCityName = (e) => {
    setName(e.target.value);
    setCityName(e.target.value);
  }

  return (
    <Form inline onSubmit={search}>
      <Form.Control
        type="search"
        placeholder="City name"
        className="mr-2"
        value={cityName}
        onChange={changeCityName}
      />

      <CountryList selectCountry={setCountry} />

      <Button
        type="submit"
        disabled={loading || cityName===''}
        className="mr-5"
        style={{width: '125px'}}
      >
        { loading ? 'Searching...' : 'Search' }
      </Button>

      <div className="ml-auto">
        <ForecastMode
          mode={mode}
          changeMode={setMode}
          hidden={!loaded}
        />
      </div>
    </Form>
  );
}

SearchBar.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool, // are there forecasts showing ?
  mode: PropTypes.string.isRequired,
  searchCity: PropTypes.func.isRequired,
  setCityName: PropTypes.func.isRequired,
  setCountry: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  loading: false,
  loaded: false,
}