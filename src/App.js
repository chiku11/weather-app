import React, {Fragment} from 'react';
import SearchWeatherComponent from './components/SearchWeatherComponent';
import ForecastComponent from './components/ForecastComponent'
import ProgressComponent from './components/ProgressComponent'

import { connect } from 'react-redux'

const App = (fetching) => {
  return (
  <Fragment>
    <SearchWeatherComponent />
    {fetching.fetching && <ProgressComponent />}
    <ForecastComponent />
  </Fragment>
  )
  };

const mapStateToProps = (state) => {
  return {
    fetching: state.weather.fetching,
  }
}

export default connect(mapStateToProps)(App);