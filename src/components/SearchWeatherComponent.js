import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux'
import fetchLocationWeather, {fetchLocationViaLatAndLon} from '../actions/weatherAction'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

const options = [
    { value: 'schaumburg,il', label: 'Schaumburg' },
    { value: 'SanFrancisco,ca', label: 'San Francisco' },
    { value: 'Rolling meadows,il', label: 'Rolling Meadows' },
    { value: 'Richmond,va', label: 'Richmond' },
    { value: 'Mclean,va', label: 'Mclean' },
  ]; 

const SearchWeatherComponent = (props) => {
    const { classes } = props;
    
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          }
    }

    const showPosition = (position) => {
        console.log("Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude);
        props.fetchLocationViaLatAndLon(position.coords.latitude,position.coords.longitude, props.unit)
    }

    useEffect(() => {
        getLocation();
      }, []);

    const [selectedOption,setselectedOption] = useState(null)


    const handleChange = (selectedOption) => {
        setselectedOption(selectedOption);
        props.fetchWeatherData(selectedOption.value, props.unit);
      }

    return (
        <div className={classes.root}>
            <Grid container spacing={24}
                  justify="center"
                  alignItems="center" 
            > 
                <Grid item xs={12}>
                    <Select
                        value={selectedOption}
                        onChange={handleChange}
                        options={options}
                    />
                </Grid>
            </Grid>
        </div>
    )
  }

const mapStateToProps = (state) => {
    return {
        unit: state.weather.u
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeatherData: (city, unit) => (fetchLocationWeather(city , unit, dispatch)),
        fetchLocationViaLatAndLon: (lat, lon, unit) => (fetchLocationViaLatAndLon(lat, lon, unit, dispatch))
    }
} 

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SearchWeatherComponent));