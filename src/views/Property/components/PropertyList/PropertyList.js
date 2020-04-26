import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, Box} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import Image from 'material-ui-image'
import testPhoto from './blueapt.jpg'
import not_found from './not_found.png'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/scale-out-animation';
import { shadows } from '@material-ui/system';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  },
  image:{
    objectFit: "cover"
  },
  priceDiv: {
    position: 'absolute',
    top: 20,
    left: 20, 
    padding: 10,
  },
  placeDiv: {
    position: 'absolute',
    bottom: 20,
    right: 20, 
    width: 175,
    padding: 10,
  }
}));

const PropertyList = props => {
  const { className, ...rest } = props;
  const data = ['one', 'two', 'three', 'four'];
  const classes = useStyles();

  const slider = (
    <AwesomeSlider animation="scaleOutAnimation"  cssModule={AwesomeSliderStyles}
    name="images"
    cssModule={AwesomeSliderStyles}
    animation="scaleOutAnimation"
    organicArrows={['--organicArrows']}
    bullets={['--bullets']} 
    style={{height: 200}}
    >
      <div style={{backgroundColor:'transparent'}} backgroundColor={'black'} data-src={testPhoto}/>
      <div data-src={not_found}/>
      <div data-src={testPhoto}/>
     </AwesomeSlider>
  )

  return (
      <Grid container spacing={4}>
        {data.map((d, index) => (
          <Grid item lg={6} md={6} xl={6} xs={12}>
              <Card 
                {...rest}
                className={clsx(classes.root, className)}
                style={{}}
              >
                <div style={{overflow: 'hidden', position: 'relative'}}>
                  {slider}
                  <div className={classes.priceDiv} style={{display:'flex', zIndex: 100,backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', borderRadius: 8}}>
                    <Typography style={{color: 'white'}} variant={'body1'}>from </Typography>
                    &nbsp;
                    <Typography style={{color: 'white'}} variant={'h6'}> $1,000 </Typography>
                    &nbsp;
                    <Typography style={{color: 'white'}} variant={'body1'}> per month</Typography>
                  </div>
                  <div className={classes.placeDiv} style={{zIndex: 100,backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', borderRadius: 8}}>
                    <Typography style={{color: 'white'}} variant={'h4'}> Hill Top </Typography>
                    <Typography style={{color: 'white'}} variant={'body1'}>122 Geimen Ave</Typography>
                  </div>
                </div>
                <div style={{ zIndex: 101, backgroundColor: "#3F51B5"}}>
                  <Typography style={{color: 'white', textAlign: 'center', padding: 10}}  variant={'h5'}>Check Availablity</Typography>
                </div>
              </Card>
          </Grid>
      ))}
    </Grid>
  );
};

PropertyList.propTypes = {
  className: PropTypes.string
};

export default PropertyList;
