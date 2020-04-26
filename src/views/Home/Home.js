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
        <div style={{ marginTop: -80}}>
          <HeaderSearch></HeaderSearch>
          <div style={{maxWidth:800, margin:"auto"}}>
            <Typography style={{fontSize:34, color:'#484848', fontWeight:8000, padding:10, marginBottom:0, paddingBottom:0, marginTop: 75, textAlign:'center'}} variant={'h1'}>See how Haven can help</Typography>
            <Typography style={{fontSize:18, color:'#484848', padding:10, marginBottom:0, paddingBottom:0, textAlign:'center', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightMedium">Haven has already helped hundreds of students find the perfect off campus housing. Start your search today!</Box></Typography>
          </div>
          <Container style={{marginTop: 50, margin:'auto'}}>
            <Grid container style={{maxWidth:1000, margin:"auto", marginBottom:0}} spacing={4 }>
              <Grid item lg={4}>
                <Card style={{paddingTop: 20}}>
                  <div style={{width: 200, height: 100, margin: "auto"}}><img src={home} style={{objectFit:'cover', width: "100%", height: "100%", margin:"auto", }}></img></div>
                  <Typography style={{fontSize:28, color:'#484848', fontWeight:8000, padding:10, marginBottom:0, paddingBottom:0, textAlign:'center'}} variant={'h1'}>See how Haven can help</Typography>
                  <Typography style={{fontSize:18, color:'#484848', padding:10, paddingRight:20, paddingLeft:20, marginBottom:0, paddingBottom:0, textAlign:'center', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Haven has already helped hundreds of students find the perfect off campus housing. Start your search today!</Box></Typography>
                  <div style={{ height: 100, width:100, margin: "auto", paddingTop: 20}}><Button style={{width:'100%'}} variant='outlined' color='primary'> Search</Button></div>
                </Card>
              </Grid>

              <Grid item lg={4}>
                  <Card style={{paddingTop: 20}}>
                    <div style={{width: 200, height: 100, margin: "auto"}}><img src={sell} style={{objectFit:'cover', width: "100%", height: "100%", margin:"auto", }}></img></div>
                    <Typography style={{fontSize:28, color:'#484848', fontWeight:8000, padding:10, marginBottom:0, paddingBottom:0, textAlign:'center'}} variant={'h1'}>See how Haven can help</Typography>
                    <Typography style={{fontSize:18, color:'#484848', padding:10, paddingRight:20, paddingLeft:20, marginBottom:0, paddingBottom:0, textAlign:'center', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Haven has already helped hundreds of students find the perfect off campus housing. Start your search today!</Box></Typography>
                    <div style={{ height: 100, width:100, margin: "auto", paddingTop: 20}}><Button style={{width:'100%'}} variant='outlined' color='primary'> Search</Button></div>
                  </Card>
              </Grid>

              <Grid item lg={4}>
                <Card style={{paddingTop: 20}}>
                  <div style={{width: 200, height: 100, margin: "auto"}}><img src={rent} style={{objectFit:'cover', width: "100%", height: "100%", margin:"auto", }}></img></div>
                  <Typography style={{fontSize:28, color:'#484848', fontWeight:8000, padding:10, marginBottom:0, paddingBottom:0, textAlign:'center'}} variant={'h1'}>See how Haven can help</Typography>
                  <Typography style={{fontSize:18, color:'#484848', padding:10, paddingRight:20, paddingLeft:20, marginBottom:0, paddingBottom:0, textAlign:'center', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Haven has already helped hundreds of students find the perfect off campus housing. Start your search today!</Box></Typography>
                  <div style={{ height: 100, width:100, margin: "auto", paddingTop: 20}}><Button style={{width:'100%'}} variant='outlined' color='primary'> Search</Button></div>
                </Card>
                
              </Grid>
            </Grid>
          </Container>
          
          <div style={{maxWidth:800, margin:"auto"}}>
            <Typography style={{fontSize:34, color:'#484848', fontWeight:8000, padding:10, marginBottom:0, paddingBottom:0, marginTop: 75, textAlign:'center'}} variant={'h1'}>Browse Neighborhoods on Haven</Typography>
            <Typography style={{fontSize:18, color:'#484848', fontWeight:0, padding:10, marginBottom:0, paddingBottom:0, marginBottom: 20, textAlign:'center', maxWidth: 800}} variant={'h2'}>Take a deep dive and browse original neighborhood photos, drone footage, resident reviews and local insights to see if the homes or apartments for rent are right for you.</Typography>
          </div>
          <div container style={{maxHeight:500, overflowY:'hidden', display:'flex'}}>
          <Grid item style={{paddingLeft:20, paddingRight:20}}>
              <div style={{overflow:'hidden', width:300, height: 500, borderRadius:10, position: 'relative'}}>
                <img src={home1} style={{objectFit:'cover', width: "100%", height: "100%"}}></img>
                <div className={classes.priceDiv} style={{backgroundColor: 'rgba(0,0,0,0.2)', color: 'black', borderRadius: 8, position:'absolute', top:0, left:0, width:'100%', height:'100%'}}>
                  <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Austin, TX</Box></Typography>
                  <Typography style={{fontSize:24, color:'white', padding:10, marginBottom:0, paddingBottom:0, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h1'}><Box fontWeight="fontWeightMedium">West Campus</Box></Typography>
                </div>
                <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800, bottom:10, left:0, position:'absolute'}} variant={'h2'}><Box fontWeight="fontWeightLight">View neighborhood</Box></Typography>
              </div>
            </Grid>

            <Grid item style={{paddingRight:20}}>
              <div style={{overflow:'hidden', width:300, height: 240, borderRadius:10, position: 'relative'}}>
                <img src={home2} style={{objectFit:'cover', width: "100%", height: "100%"}}></img>
                <div className={classes.priceDiv} style={{backgroundColor: 'rgba(0,0,0,0.2)', color: 'black', borderRadius: 8, position:'absolute', top:0, left:0, width:'100%', height:'100%'}}>
                  <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Austin, TX</Box></Typography>
                  <Typography style={{fontSize:24, color:'white', padding:10, marginBottom:0, paddingBottom:0, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h1'}><Box fontWeight="fontWeightMedium">West Campus</Box></Typography>
                </div>
                <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800, bottom:10, left:0, position:'absolute'}} variant={'h2'}><Box fontWeight="fontWeightLight">View neighborhood</Box></Typography>
              </div>
              <div style={{overflow:'hidden', width:300, height: 240, borderRadius:10, marginTop: 20, position: 'relative'}}>
                <img src={home0} style={{objectFit:'cover', width: "100%", height: "100%"}}></img>
                <div className={classes.priceDiv} style={{backgroundColor: 'rgba(0,0,0,0.2)', color: 'black', borderRadius: 8, position:'absolute', top:0, left:0, width:'100%', height:'100%'}}>
                  <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Austin, TX</Box></Typography>
                  <Typography style={{fontSize:24, color:'white', padding:10, marginBottom:0, paddingBottom:0, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h1'}><Box fontWeight="fontWeightMedium">West Campus</Box></Typography>
                </div>
                <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800, bottom:10, left:0, position:'absolute'}} variant={'h2'}><Box fontWeight="fontWeightLight">View neighborhood</Box></Typography>
              </div>
            </Grid>

            <Grid item style={{ paddingRight:20}}>
              <div style={{overflow:'hidden', width:300, height: 500, borderRadius:10, position: 'relative'}}>
                <img src={home4} style={{objectFit:'cover', width: "100%", height: "100%"}}></img>
                <div className={classes.priceDiv} style={{backgroundColor: 'rgba(0,0,0,0.2)', color: 'black', borderRadius: 8, position:'absolute', top:0, left:0, width:'100%', height:'100%'}}>
                  <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Austin, TX</Box></Typography>
                  <Typography style={{fontSize:24, color:'white', padding:10, marginBottom:0, paddingBottom:0, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h1'}><Box fontWeight="fontWeightMedium">West Campus</Box></Typography>
                </div>
                <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800, bottom:10, left:0, position:'absolute'}} variant={'h2'}><Box fontWeight="fontWeightLight">View neighborhood</Box></Typography>
              </div>
            </Grid>

            <Grid item style={{paddingRight:20}}>
              <div style={{overflow:'hidden', width:300, height: 240, borderRadius:10, position:'relative'}}>
                <img src={home5} style={{objectFit:'cover', width: "100%", height: "100%"}}></img>
                <div className={classes.priceDiv} style={{backgroundColor: 'rgba(0,0,0,0.2)', color: 'black', borderRadius: 8, position:'absolute', top:0, left:0, width:'100%', height:'100%'}}>
                  <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Austin, TX</Box></Typography>
                  <Typography style={{fontSize:24, color:'white', padding:10, marginBottom:0, paddingBottom:0, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h1'}><Box fontWeight="fontWeightMedium">West Campus</Box></Typography>
                </div>
                <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800, bottom:10, left:0, position:'absolute'}} variant={'h2'}><Box fontWeight="fontWeightLight">View neighborhood</Box></Typography>
                </div>
              <div style={{overflow:'hidden', width:300, height: 240, borderRadius:10, marginTop: 20, position:'relative'}}>
                <img src={home6} style={{objectFit:'cover', width: "100%", height: "100%"}}></img>
                <div className={classes.priceDiv} style={{backgroundColor: 'rgba(0,0,0,0.2)', color: 'black', borderRadius: 8, position:'absolute', top:0, left:0, width:'100%', height:'100%'}}>
                  <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Austin, TX</Box></Typography>
                  <Typography style={{fontSize:24, color:'white', padding:10, marginBottom:0, paddingBottom:0, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h1'}><Box fontWeight="fontWeightMedium">West Campus</Box></Typography>
                </div>
                <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800, bottom:10, left:0, position:'absolute'}} variant={'h2'}><Box fontWeight="fontWeightLight">View neighborhood</Box></Typography>
              </div>
            </Grid>

            <Grid item style={{ paddingRight:20}}>
              <div style={{overflow:'hidden', width:300, height: 500, borderRadius:10, position:'relative'}}>
                <img src={home3} style={{objectFit:'cover', width: "100%", height: "100%"}}></img>
                <div className={classes.priceDiv} style={{backgroundColor: 'rgba(0,0,0,0.2)', color: 'black', borderRadius: 8, position:'absolute', top:0, left:0, width:'100%', height:'100%'}}>
                  <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Austin, TX</Box></Typography>
                  <Typography style={{fontSize:24, color:'white', padding:10, marginBottom:0, paddingBottom:0, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h1'}><Box fontWeight="fontWeightMedium">West Campus</Box></Typography>
                </div>
                <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800, bottom:10, left:0, position:'absolute'}} variant={'h2'}><Box fontWeight="fontWeightLight">View neighborhood</Box></Typography>
              </div>
            </Grid>

            <Grid item style={{paddingRight:20}}>
              <div style={{overflow:'hidden', width:300, height: 240, borderRadius:10, position:'relative'}}>
                <img src={home0} style={{objectFit:'cover', width: "100%", height: "100%"}}></img>
                <div className={classes.priceDiv} style={{backgroundColor: 'rgba(0,0,0,0.2)', color: 'black', borderRadius: 8, position:'absolute', top:0, left:0, width:'100%', height:'100%'}}>
                  <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Austin, TX</Box></Typography>
                  <Typography style={{fontSize:24, color:'white', padding:10, marginBottom:0, paddingBottom:0, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h1'}><Box fontWeight="fontWeightMedium">West Campus</Box></Typography>
                </div>
                <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800, bottom:10, left:0, position:'absolute'}} variant={'h2'}><Box fontWeight="fontWeightLight">View neighborhood</Box></Typography>
                </div>
              <div style={{overflow:'hidden', width:300, height: 240, borderRadius:10, marginTop: 20, position:'relative'}}>
                <img src={testPhoto} style={{objectFit:'cover', width: "100%", height: "100%"}}></img>
                <div className={classes.priceDiv} style={{backgroundColor: 'rgba(0,0,0,0.2)', color: 'black', borderRadius: 8, position:'absolute', top:0, left:0, width:'100%', height:'100%'}}>
                  <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800}} variant={'h2'}><Box fontWeight="fontWeightLight">Austin, TX</Box></Typography>
                  <Typography style={{fontSize:24, color:'white', padding:10, marginBottom:0, paddingBottom:0, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h1'}><Box fontWeight="fontWeightMedium">West Campus</Box></Typography>
                </div>
                <Typography style={{fontSize:18, color:'white', padding:10, marginBottom:0, paddingBottom:0, textAlign:'left', maxWidth: 800, bottom:10, left:0, position:'absolute'}} variant={'h2'}><Box fontWeight="fontWeightLight">View neighborhood</Box></Typography>
                </div>
            </Grid>

            
          </div>
          <div style={{maxWidth:800, margin:"auto"}}>
              <Typography style={{fontSize:34, color:'#484848', fontWeight:8000, padding:10, marginBottom:0, paddingBottom:0, marginTop: 75, textAlign:'center', marginBottom:20}} variant={'h1'}>Explore Featured Haven Properties</Typography>
          </div>
          <Container style={{padding:0, maxWidth:1000, margin:'auto' }}>
          <Grid container spacing={3}>
            <Hidden mdUp><Grid item style={{height: 20}}/></Hidden>
        
            {data && data.map((d, index) => (
              <Grid item lg={4} md={6} xl={4} xs={12} sm={12}>
                <Link to={'/property/' + d.id} key={d.id}>
                  <Card 
                        //{...rest}
                        className={clsx(classes.root2)}
                      >
                        <div style={{overflow: 'hidden', position: 'relative'}}>
                          <img src={home5} style={{objectFit:'cover', width: "100%", height: "100%"}}></img>
                        </div>
                        <Typography style={{fontSize:18,color: '#484848', textAlign: 'left', padding: 10, paddingBottom: 0}}  variant={'h5'}>Villas On Nueces</Typography>
                        <Typography style={{fontSize:12, color:'#484848', padding:10, marginBottom:0, paddingBottom:10, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h5'}><Box fontWeight="fontWeightLight">2400 Nueces St</Box></Typography>
                        <div style={{display:'flex', padding:10, paddingTop:0, verticalAlign:'middle', alignItems:'center', paddingBottom:10}}>
                          <Bed style={{opacity:0.6}}/> <Typography style={{ color:'#484848', padding:10, marginBottom:0, paddingBottom:0, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h6'}><Box fontWeight="fontWeightLight">2 beds</Box></Typography>
                          <Bath style={{opacity:0.6}}/> <Typography style={{ color:'#484848', padding:10, marginBottom:0, paddingBottom:0, paddingTop:0, textAlign:'left', maxWidth: 800}} variant={'h6'}><Box fontWeight="fontWeightLight">2 baths</Box></Typography>
                          <Walk style={{opacity:0.6}}/> <Typography style={{ color:'#484848', padding:10, marginBottom:0, paddingBottom:0, paddingTop:0, paddingLeft:5, textAlign:'left', maxWidth: 800}} variant={'h6'}><Box fontWeight="fontWeightLight">10 min walk</Box></Typography>
                        </div>
                        {/* <div style={{width:100, margin: "auto", padding:10}}><Button style={{width:'100%'}} variant='outlined' color='primary'> Search</Button></div> */}
                        <div style={{ zIndex: 101, backgroundColor: "#3F51B5"}}>
                          {/* <Typography style={{color: 'white', textAlign: '#484848', padding: 10}}  variant={'h5'}>Check Availablity</Typography> */}
                        </div>
                    </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
          <div style={{width:300, margin: "auto", padding:10, paddingTop:20}}><Button style={{width:'100%'}} variant='outlined' color='primary'>Load More</Button></div>
          </Container>
            
      
        </div>
      );
    };
  }
  
export default windowSize(Property);
