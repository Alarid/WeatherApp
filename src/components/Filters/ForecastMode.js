import React from 'react';
import PropTypes from 'prop-types';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function ForecastMode({mode, changeMode, hidden}) {
  if (hidden) {
    return '';
  }

  return (
    <ToggleButtonGroup
      type="radio"
      name="forecastMode"
      value={mode}
      onChange={changeMode}
    >
      <ToggleButton value="3hours">
        3 hours
      </ToggleButton>
      <ToggleButton value="hourly">
        Hourly
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

ForecastMode.propTypes = {
  mode: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
}