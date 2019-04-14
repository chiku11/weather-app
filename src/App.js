import React, {Fragment} from 'react';
import SearchWeatherComponent from './components/SearchWeatherComponent';
import ForecastComponent from './components/ForecastComponent'

const App = () => (

  <Fragment>
    <SearchWeatherComponent />
    <ForecastComponent />
  </Fragment>
);

export default App