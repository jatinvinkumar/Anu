import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, Box, Button, Container} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import Image from 'material-ui-image'
import testPhoto from './blueapt.jpg'
import not_found from './not_found.png'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/scale-out-animation';
import { shadows } from '@material-ui/system';
import { Link } from 'react-router-dom'
import home5 from './brian-yurasits-7lzc2Yg-oVM-unsplash.jpg'


import Bed from '@material-ui/icons/Hotel';
import Bath from '@material-ui/icons/Bathtub';
import Walk from '@material-ui/icons/DirectionsWalk'
import ScheduleIcon from '@material-ui/icons/Schedule';
import PeopleIcon from '@material-ui/icons/People';
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
  const data = ['one', 'two', 'three', 'four', 'j', 'k', 'thrkee', 'k'];
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
            <Link to={'/property/' + d.id} key={d.id}>
                  <Card 
                        //{...rest}
                        className={clsx(classes.root2)}
                      >
                        <div style={{overflow: 'hidden', position: 'relative'}}>
                          <img src={home5} style={{objectFit:'cover', width: "100%", height: "100%"}}></img>
                        </div>
                        <div style={{display:'flex', width:'100%', justifyContent:'space-between' }}>
                          <div>
                            <Typography style={{fontSize:18,color: '#484848', textAlign: 'left', padding: 10, paddingBottom: 0}}  variant={'h5'}>Rebuilding Community Garden</Typography>
                            <Typography style={{fontSize:12, color:'#484848', padding:10, marginBottom:0, paddingBottom:10, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h5'}><Box fontWeight="fontWeightLight">2400 Nueces St</Box></Typography>
                          </div>
                          <div style={{display: 'flex'}}>
                            <Typography style={{fontSize:14,color: '#484848', textAlign: 'right', padding: 10, paddingBottom: 0, marginRight:0}}  variant={'h5'}>Aug 8th 4pm</Typography>
                          </div>
                          

                        </div>
                        
                        <div style={{display:'flex', padding:10, paddingTop:0, verticalAlign:'middle', alignItems:'center', justifyContent:'space-between'}}>
                        <div style={{display: 'flex', verticalAlign:'middle', alignItems:'center'}}><PeopleIcon color={'#484848'} style={{opacity:0.6, color:'#484848'}}/> <Typography style={{fontSize:14, color:'#484848', padding:10, marginBottom:0, paddingBottom:0, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h5'}><Box fontWeight="fontWeightMedium">24 people are going</Box></Typography></div>
                          <Button variant="outlined" color="secondary">
                            Interested
                          </Button>
                        </div>
                        <div style={{ zIndex: 101, backgroundColor: "#3F51B5"}}>
                          {/* <Typography style={{color: 'white', textAlign: '#484848', padding: 10}}  variant={'h5'}>Check Availablity</Typography> */}
                        </div>
                    </Card>
            </Link>
          </Grid>
      ))}
      <Container
          className={clsx(classes.root,)} style={{marginTop:50, paddingBottom:50}}>
            <Typography variant="body1">
              &copy;{' '}
              <Link
                component="a"
                href=""
                target="_blank"
              >
                Myfi 2020
              </Link>
              {" All Rights Reserved"}
            </Typography>
            <Typography variant="caption">
              Created with love for the environment. Let's tackle COVID-19 together!
            </Typography>
          </Container>
    </Grid>
  );
};

PropertyList.propTypes = {
  className: PropTypes.string
};

export default PropertyList;
