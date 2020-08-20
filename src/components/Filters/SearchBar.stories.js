import React from 'react';
import { action } from '@storybook/addon-actions';

import SearchBar from './SearchBar';

export default {
  component: SearchBar,
  title: 'Filters/Search Bar',
};

const actionsData = {
  searchCity: action('searchCity'),
  setCityName: action('setCityName'),
  setCountry: action('setCountry'),
  setMode: action('setMode'),
}

const searchBarData = {
  loading: false,
  loaded: false,
  mode: '3hours',
};

export const Default = () => (
  <SearchBar {...searchBarData} {...actionsData} />
);

export const Loading = () => (
  <SearchBar
    {...searchBarData}
    loading={true}
    {...actionsData}
  />
);

export const Loaded = () => (
  <SearchBar
    {...searchBarData}
    loaded={true}
    {...actionsData}
  />
)