import React, {Fragment} from 'react';
import SearchWeatherComponent from './components/SearchWeatherComponent';
import ForecastComponent from './components/ForecastComponent'
import ProgressComponent from './components/ProgressComponent'
import PreferenceComponent from './components/PreferenceComponent'

import { connect } from 'react-redux'

const App = (fetching) => {
  return (
  <Fragment>
    <PreferenceComponent />
    <SearchWeatherComponent />
    {fetching.fetching && <ProgressComponent />}
    {!fetching.fetching && <ForecastComponent />}
  </Fragment>
  )
  };

const mapStateToProps = (state) => {
  return {
    fetching: state.weather.fetching,
  }
}

export default connect(mapStateToProps)(App);