import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, CardContent, Grid, Typography, Avatar, Container } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import { MapContainer } from 'views/Property/components';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: 20
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
    height: 20,
    width: 20
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
  }
}));
const data = [1,2,3,4];
const Location = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={classes.root}
      style={{overflow:'hidden', maxWidth:800, padding:0}}
      
    >
        <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              style={{padding:20, paddingBottom:10}}
              variant="h5"
          >
              Distance to UT Tower 0.8mi
          </Typography>
          <MapContainer
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDyi3-sGMcazywC1itfue3gs3SbMI17E4Q&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `200px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            style={{borderRadius:8}}
  />
    </Card>
  );
};

Location.propTypes = {
  className: PropTypes.string
};

export default Location;
