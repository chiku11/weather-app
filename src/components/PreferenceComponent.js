import React, {useState} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import {setUnitPreference} from '../actions/weatherAction'

const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  });

const PreferenceComponent = (props) => {

    const { classes } = props;
    const [celsius, setCelsius] = useState(false);
    const [expanded, setExpanded] = useState(null);

    const handleChange = () => event => {
        setCelsius(event.target.checked);
        if( event.target.checked ){
            props.setUnitPreferece('c');
        } else {
            props.setUnitPreferece('f');
        }
      };

    const handlePanelChange = panel => (event, expanded) => {
            setExpanded(expanded ? panel : false);
      };  
    return (
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handlePanelChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>General settings</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <FormControl component="fieldset">
                <FormLabel component="legend"> &nbsp;&nbsp;Preferences: </FormLabel>
                <FormControlLabel
                    control={
                    <Switch
                        checked={celsius}
                        onChange={handleChange()}
                    />
                    }
                    label="Celsius"
                />
                </FormControl>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        setUnitPreferece: (unit) => setUnitPreference(unit, dispatch),
    }
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(PreferenceComponent));