import moment from 'moment';

export const forecastsByDays = (forecasts) => (
  forecasts.slice()
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
);