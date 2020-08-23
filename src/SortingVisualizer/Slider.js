import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 100,
  },
});

export function valuetext(value) {
    console.log(value)
    // return value
    return `${value}`;
  
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{position:'absolute',left:'70px',top:'24px'}}>
      <Typography id="discrete-slider" gutterBottom>
        Size of Array
      </Typography>
      <Slider
        defaultValue={50}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={50}
        marks={true}
        min={50}
        max={300}
      />
    </div>
  );
}
