import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, Box} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import Image from 'material-ui-image'
import testPhoto from './testPhoto.jpg'
import testPhoto2 from './blueapt.jpg'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/scale-out-animation';
import { shadows } from '@material-ui/system';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const useStyles = makeStyles(theme => ({
    root: {
      maxHeight: 500
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
    placeDiv: {
      position: 'absolute',
      top: 0,
      left: 10,
      padding: 10,
    },
    typography: {
      fontSize: 1200,
    },
  }));

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

const PropertyHeader = props => {
    const { className, ...rest } = props;
    const data = ['one', 'two', 'three', 'four'];
    const classes = useStyles();
  
    const slider = (
      <Carousel 
        responsive={responsive} 
        itemClass="carousel-item-padding-40-px"
        draggable={false}
        keyBoardControl={true}
        focusOnSelect={true}
        style={{maxHeight:500}}>
          <div style={{overflow:'hidden', maxHeight:500, paddingRight:5}}><Image src={testPhoto2} style={{objectFit:''}}></Image></div>
          <div style={{overflow:'hidden', maxHeight:500,  paddingRight:5}}><Image src={testPhoto}></Image></div>
          <div style={{overflow:'hidden', maxHeight:500,  paddingRight:5}}><Image src={testPhoto}></Image></div>
          <div style={{overflow:'hidden', maxHeight:500,}}><Image src={testPhoto}></Image></div>
      </Carousel>
    )
        
    return (
        <div 
            {...rest}
            className={clsx(classes.root, className)}
            style={{maxHeight:500}}
        >
          <div style={{overflow: 'hidden', position: 'relative'}}>
            {slider}
            {/* <div className={classes.placeDiv} style={{zIndex: 100, backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', borderRadius: 8}}>
                <Typography style={{color: 'white', fontSize:60}} variant={'h1'}> Hill Top </Typography>
                &nbsp;
                <Typography style={{color: 'white'}} variant={'h4'}> 122 Downward Ave </Typography>
            </div> */}
          </div>
        </div>
    );
  };
  
  PropertyHeader.propTypes = {
    className: PropTypes.string
  };
  
  export default PropertyHeader;
  