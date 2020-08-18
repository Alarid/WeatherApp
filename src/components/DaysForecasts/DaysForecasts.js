import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import moment from 'moment';

import DayForecasts from './DayForecasts';

/**
 * Forecasts for 5 days
 */
const DaysForecasts = (props) => (
  props.forecasts.slice()
    .reduce((days, forecast) => {
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
    }, [])
    .flat()
    .map(f => (
      <Row key={f.title}>
        <Col xs="12">
          <DayForecasts title={f.title} data={f.data} />
        </Col>
      </Row>
    ))
);

export default DaysForecasts;