import React from 'react';
import { countries } from 'country-data-list';
import { Typeahead } from 'react-bootstrap-typeahead';

export default function CountryList({selectCountry}) {
  const options = countries.all
    .filter(country => country.status === 'assigned')
    .map(country => ({
      code: country.alpha2,
      name: country.name,
    }));

  return (
    <Typeahead
      id="country-selector"
      labelKey="name"
      onChange={selectCountry}
      options={options}
      placeholder="Choose a country..."
      className="mr-2"
    />
  )
}
