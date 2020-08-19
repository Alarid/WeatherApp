import React from 'react';
import { action } from '@storybook/addon-actions';

import SearchBar from './SearchBar';

export default {
  component: SearchBar,
  title: 'Search Bar',
};

const actionsData = {
  searchCity: action('searchCity'),
}

export const Default = () => (
  <SearchBar {...actionsData} />
);

export const Loading = () => (
  <SearchBar loading={true} {...actionsData} />
);