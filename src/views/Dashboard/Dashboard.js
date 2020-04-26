import React, {Component} from 'react';
import { makeStyles } from '@material-ui/styles';
import {Button, Grid, Typography, Hidden, Container, Card, AppBar, Tabs, Tab, TabPanel} from '@material-ui/core';
import windowSize from 'react-window-size';
import { TabBar } from './components';

makeStyles (theme => ({
  root: {
    padding: theme.spacing(0), maxWidth: 800, 
  }
}));

const isDesktop = 0;
class Dashboard extends Component {
  
  render(){
    const classes = makeStyles;
    console.log('propsDash: ', this.props)
    if(isDesktop == 0){
      return (
        <div>
          <TabBar id={this.props.match.params.id} />
        </div>
      );
    } else {
        return(
            <div></div>
        );
    }
  };
  }
  
export default windowSize(Dashboard);
