import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash'
import { styled } from '@material-ui/styles';
import CloudyImage from '../images/cloudy.jpg';
import SnowImage from '../images/snow.jpg';
import ScatteredShowerImage from '../images/scatteredshower.jpg';
import SunnyImage from '../images/sunny.jpg'

import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

const PaperBckGrnd = styled(Paper)({
    height: 160,
    width: 120,
    backgroundImage: props => `url(${props.url})`,
    backgroundSize: '120px 160px'
});

const CustomTypoGraphy = styled(Typography)({
    color: 'white'
});

const ForecastComponent = (props) => {

    const { classes } = props;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={16}>
            {_.isEmpty(props.weatherData) === false && props.weatherData.forecasts.map(value => (
              <Grid key={value.date} item>
                <PaperBckGrnd url={getBackGroundImg(value.text)} >
                <CustomTypoGraphy variant="h5" component="h3">{value.day}</CustomTypoGraphy><br />
                    {/* {value.date}<br /> */}
                    <CustomTypoGraphy variant="h6" component="h6">HIGH / LOW {value.high}/{value.low}<br /><br />
                    {value.text}
                    </CustomTypoGraphy>
                </PaperBckGrnd>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }

 const getBackGroundImg = (condition ) => {

    if ( condition === 'Showers' || condition === 'Rain' || condition === 'Scattered Thunderstorms' ) {
        return ScatteredShowerImage
    } else if ( condition === 'Sunny' || condition === 'Mostly Sunny' ) {
        return SunnyImage;
    } else if ( condition === 'Scattered Showers') {
        return ScatteredShowerImage;
    } else if ( condition === 'Cloudy' || condition === 'Mostly Cloudy' || condition === 'Partly Cloudy') {
        return CloudyImage;
    } else if ( condition === 'Rain And Snow' ) {
        return SnowImage;
    }

 } 

ForecastComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {weatherData: state.weather.weatherData}
}

export default withStyles(styles)(connect(mapStateToProps)(ForecastComponent));