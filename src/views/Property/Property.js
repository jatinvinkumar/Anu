import React, {Component} from 'react';
import { makeStyles } from '@material-ui/styles';
import {Button, Grid, Typography, Hidden, Container, Card } from '@material-ui/core';
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
  SideSticky
} from './components';
import './Property.css';
import Location from './components/Location/Location';

makeStyles(theme => ({
  root: {
    padding: theme.spacing(0), maxWidth: 800, 
  }
}));

const isDesktop = 0;
class Property extends Component {
  render(){
    console.log('props: ', this.props)
    if(isDesktop == 0){
      return (
        <div Container>
          <PropertyHeader></PropertyHeader>
          <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{width:800}}>
              <Grid style={{padding:30, paddingRight:10}} container >
                  <Grid item lg={12}>
                    <PropertyTitle style={{marginBottom:30}}/>
                    <Amenities style={{marginBottom:30, marginTop:30}}/>
                    <FloorPlans style={{marginBottom:30}}/>
                    <Location style={{marginBottom:30}}/>
                    <div style={{marginTop:50}}>
                      <Typography
                          color="textSecondary"
                          gutterBottom
                          style={{paddingBottom:10, fontWeight:400, fontSize:20}}
                          variant="h5"
                      >
                          Similar Properties:
                      </Typography>
                      <PropertyList></PropertyList>
                      &nbsp;
                      <Button variant="outlined" color="primary" style={{width:"100%"}}>Load More</Button>
                    </div>
                    
                  </Grid>
              </Grid>
            </div>
            <div className="StickyC" style={{padding:30, paddingLeft:0, position:'sticky', height:400, top:60}}>
              <SideSticky style={{width:350}}></SideSticky>
            </div>
            
          </div>
          
            
        </div>
          
      );
    } else {
        return(
            <div></div>
        );
    }
  };
  }
  
export default windowSize(Property);
