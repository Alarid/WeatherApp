import React from 'react';
import CountryList from './CountryList';
import { action } from '@storybook/addon-actions';


export default {
  component: CountryList,
  title: 'Filters/Country List',
  decorators: [story => (<div style={{width: '400px'}}>{story()}</div>)]
};

export const Default = () => (
  <CountryList selectCountry={action('selectCountry')} />
);