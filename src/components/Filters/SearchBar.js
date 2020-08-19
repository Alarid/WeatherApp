import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function SearchBar({ searchCity, loading }) {
  const [cityName, setCityName] = useState('');

  const search = (e) => {
    e.preventDefault();
    searchCity(cityName);
  };

  return (
    <Form inline onSubmit={search}>
      <Form.Control
        type="search"
        placeholder="City name"
        className="mr-2"
        onChange={(e) => { setCityName(e.target.value) }}/>

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