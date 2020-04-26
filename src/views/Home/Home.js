import React, {Component} from 'react';
import { makeStyles } from '@material-ui/styles';
import {Button, Grid, Typography, Hidden, Container, Card, Box } from '@material-ui/core';
import windowSize from 'react-window-size';
import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders,
  Filter,
  PropertyList,
  MapContainer,
  PropertyHeader,
  Amenities,
  FloorPlans, 
  PropertyTitle,
  SideSticky,
  HeaderSearch,
} from './components';
import Image from 'material-ui-image'
import Location from './components/Location/Location';
import Carousel from 'react-multi-carousel';
import testPhoto from './blueapt.jpg'
import home from './Buy_a_home.png'
import rent from './Rent_a_home.png'
import sell from './Sell_a_home.png'
import home0 from './white-architectural-baroque-building-1000985.jpg'
import home1 from './yellow-concrete-house-2102587.jpg'
import home2 from './brown-white-and-gray-houses-near-road-2816323.jpg'
import home3 from './colorful-houses-3221215.jpg'
import home4 from './aerial-view-of-road-in-the-middle-of-trees-1173777.jpg'
import home5 from './bird-s-eye-view-of-swimming-pool-and-slides-1291448.jpg'
import home6 from './white-boat-on-body-of-water-945460.jpg'

import Bed from '@material-ui/icons/Hotel';
import Bath from '@material-ui/icons/Bathtub';
import Walk from '@material-ui/icons/DirectionsWalk'


import {Link} from 'react-router-dom'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/scale-out-animation';
import clsx from 'clsx';
makeStyles(theme => ({
  root: {
    padding: theme.spacing(0), maxWidth: 800, 
    placeDiv: {
        position: 'absolute',
        //top: 20,
        right: 20, 
        width: 175,
        padding: 10,
      }
  },
  root2: {
    padding: theme.spacing(0), width: 800, 
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

const data = [1,2,3,4,5,6];

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
    <div data-src={testPhoto}/>
   </AwesomeSlider>
)

class Property extends Component {
  render(){
    const classes = makeStyles
    console.log('props1: ', this.props)
      return (
        <div style={{ marginTop: -80,}}>
          <HeaderSearch></HeaderSearch>
          <div style={{maxWidth:600, margin:"auto"}}>
            <Typography style={{fontWeight:500, color:'#1A64F2', padding:10, marginTop: 75, marginBottom:0, paddingBottom:0, textAlign:'center', maxWidth: 600}} variant={'h4'}><Box>How it works?</Box></Typography>
            <Typography style={{fontSize:34, fontWeight:900, padding:10, marginBottom:0, paddingBottom:0, textAlign:'center'}} variant={'h1'}>A Safer Way to Shop.</Typography>
            <Typography style={{fontWeight:1, color:'#6A7280', padding:10, marginBottom:0, paddingBottom:0, textAlign:'center', maxWidth: 600}} variant={'h4'}><Box>We want to reduce people’s exposure to the COVID-19 by letting everyone know whether the items they’re looking for are available in their nearest supermarket or not.</Box></Typography>
          </div>
          <Container style={{marginTop: 50, margin:'auto'}}>
            <Grid container style={{maxWidth:1000, margin:"auto", marginBottom:0}} spacing={4 }>
              <Grid item lg={4}>
                <Card style={{paddingTop: 20}}>
                  <div style={{width: 200, height: 100, margin: "auto"}}><img src={home} style={{objectFit:'cover', width: "100%", height: "100%", margin:"auto", }}></img></div>
                  <Typography style={{fontSize:28, color:'#484848', fontWeight:8000, padding:10, marginBottom:0, paddingBottom:0, textAlign:'center'}} variant={'h1'}>Plan Ahead</Typography>
                  <Typography style={{fontSize:18, color:'#484848', padding:10, paddingRight:20, paddingLeft:20, marginBottom:0, paddingBottom:0, textAlign:'center', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Find all the items you need and reduce unnecessary trips. We’ll let you know the best time to shop so you can avoid crowds and limited stock.</Box></Typography>
                  <div style={{ height: 100, width:100, margin: "auto", paddingTop: 20}}><Button style={{width:'100%'}} variant='outlined' color='primary'> Search</Button></div>
                </Card>
              </Grid>

              <Grid item lg={4}>
                  <Card style={{paddingTop: 20}}>
                    <div style={{width: 200, height: 100, margin: "auto"}}><img src={sell} style={{objectFit:'cover', width: "100%", height: "100%", margin:"auto", }}></img></div>
                    <Typography style={{fontSize:28, color:'#484848', fontWeight:8000, padding:10, marginBottom:0, paddingBottom:0, textAlign:'center'}} variant={'h1'}>Explore Your Community</Typography>
                    <Typography style={{fontSize:18, color:'#484848', padding:10, paddingRight:20, paddingLeft:20, marginBottom:0, paddingBottom:0, textAlign:'center', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Find supermarkets and small businesses that meet your needs. Connect with your community and find exciting opportunities!</Box></Typography>
                    <div style={{ height: 100, width:100, margin: "auto", paddingTop: 20}}><Button style={{width:'100%'}} variant='outlined' color='primary'> Search</Button></div>
                  </Card>
              </Grid>

              <Grid item lg={4}>
                <Card style={{paddingTop: 20}}>
                  <div style={{width: 200, height: 100, margin: "auto"}}><img src={rent} style={{objectFit:'cover', width: "100%", height: "100%", margin:"auto", }}></img></div>
                  <Typography style={{fontSize:28, color:'#484848', fontWeight:8000, padding:10, marginBottom:0, paddingBottom:0, textAlign:'center'}} variant={'h1'}>Help Your Neighborhood</Typography>
                  <Typography style={{fontSize:18, color:'#484848', padding:10, paddingRight:20, paddingLeft:20, marginBottom:0, paddingBottom:0, textAlign:'center', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Serve your neighborhood and the elderly by completing basic tasks. Become a trusted helper and gain badges/rewards.</Box></Typography>
                  <div style={{ height: 100, width:100, margin: "auto", paddingTop: 20}}><Button style={{width:'100%'}} variant='outlined' color='primary'> Search</Button></div>
                </Card>
                
              </Grid>
            </Grid>
          </Container>
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
        </div>
      );
    };
  }
  
export default windowSize(Property);
