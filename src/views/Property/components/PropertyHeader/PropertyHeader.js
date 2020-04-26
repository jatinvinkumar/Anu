import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, Box,
          CardActionArea, CardMedia} from '@material-ui/core';
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
    media: {
      height: 140,
    }
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

  const groceryItemList = [
    { title: 'Grade A Horizon Eggs', price: 3.63, imageURL: 'https://s3.amazonaws.com/grazecart/dutchmeadowsfarm/images/1496424467_5931a0134b6b8.jpg' },
    { title: 'Cage Free White Organic Eggs', price: 1.78, imageURL: 'https://media.treehugger.com/assets/images/2018/04/white_eggs_in_carton.jpg.860x0_q70_crop-scale.jpg' },
    { title: 'Cuties Clementine Oranges', price: 4.17, imageURL: 'https://www.kroger.com/product/images/large/front/0005410722101' },
  ];

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
        style={{maxHeight:800}}>
          {
            groceryItemList.map((item,index) => {
              return (
                <Card className={classes.root} style={{marginRight: 30}}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.imageURL}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Price: ${item.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              )
            })
          }
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
  