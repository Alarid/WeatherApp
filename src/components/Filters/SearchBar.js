import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import CountryList from './CountryList';

export default function SearchBar({ searchCity, loading }) {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState([]);

  const search = (e) => {
    e.preventDefault();
    searchCity(cityName, (country.length ? country.pop().code : null));
  };

  return (
    <Form inline onSubmit={search}>
      <Form.Control
        type="search"
        placeholder="City name"
        className="mr-2"
        onChange={(e) => { setCityName(e.target.value) }}/>

      <CountryList selectCountry={setCountry} />

      <Button
        type="submit"
        disabled={loading}>
          { loading ? 'Searching...' : 'Search' }
      </Button>
    </Form>
  );
}


SearchBar.propTypes = {
  searchCity: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

SearchBar.defaultProps = {
  loading: false,
}