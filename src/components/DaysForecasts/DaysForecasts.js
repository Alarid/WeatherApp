import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DayForecasts from './DayForecasts';
import { forecastsByDays } from '../../utils/forecasts';

/**
 * Forecasts for 5 days
 */
export default function DaysForecasts({forecasts}) {
  return forecastsByDays(forecasts)
    .flat()
    .map(f => (
      <Row key={f.title}>
        <Col xs="12">
          <DayForecasts title={f.title} data={f.data} />
        </Col>
      </Row>
    ));
}

DaysForecasts.propTypes = {
  forecasts: PropTypes.array.isRequired,
}