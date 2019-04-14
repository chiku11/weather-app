import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash'

import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 160,
    width: 120,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

const ForecastComponent = (props) => {

    const { classes } = props;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={16}>
            {_.isEmpty(props.weatherData) === false && props.weatherData.forecasts.map(value => (
              <Grid key={value.date} item>
                <Paper className={classes.paper} >
                <Typography variant="h5" component="h3">{value.day}</Typography><br />
                    {/* {value.date}<br /> */}
                    <Typography variant="h6" component="h6">HIGH / LOW</Typography>{value.high}/{value.low}<br /><br />
                    {value.text}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }

ForecastComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    console.dir(state.weather.weatherData);
    return {weatherData: state.weather.weatherData}
}

export default withStyles(styles)(connect(mapStateToProps)(ForecastComponent));