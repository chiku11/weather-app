import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux'
import fetchLocationWeather from '../actions/weatherAction'

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
    { value: 'sunnyvale,ca', label: 'sunnyvale' },
    { value: 'schaumburg,il', label: 'schaumburg    ' },
    { value: 'newark,nj', label: 'newark' }
  ]; 

const SearchWeatherComponent = (props) => {
    const { classes } = props;

    const [selectedOption,setselectedOption] = useState(null)


    const handleChange = (selectedOption) => {
        setselectedOption(selectedOption);
        props.fetchWeatherData(selectedOption.value);
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeatherData: (city) => (fetchLocationWeather(city , dispatch))
    }
} 

export default withStyles(styles)(connect(null, mapDispatchToProps)(SearchWeatherComponent));