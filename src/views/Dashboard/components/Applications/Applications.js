import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {Hidden, IconButton,Card, CardContent, Grid, Typography, Avatar, Container, Icon } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import blueapt from './blueapt.jpg'
import Image from 'material-ui-image'
import {connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import {Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
const data = [1,2,3,4,5];
const Applications = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const {applications} = props;
  console.log("applicationsData: ", props);

  return (
    <Grid container spacing={4}>
        <Hidden mdUp><Grid item style={{height: 20}}/></Hidden>
        
        {props.applications && props.applications.map((d, index) => (
          <Grid item lg={12} md={12} xl={12} xs={12} key={d.id}>
          <Link to={'/dashboard/applications/' + d.id} >
              <Card
                {...rest}
                className={classes.root}
                style={{display:'flex'}}
              >   
              <img style={{width:'10%'}} src={blueapt}/>
              <div style={{padding:20}}>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="h1"
                >
                    Villas on Guadalope
                </Typography>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="h5"
                >
                    122 Guadalope Street
                </Typography>
                </div>
                <IconButton style={{marginLeft: 'auto'}}><FavoriteBorderIcon className={classes.icon}></FavoriteBorderIcon></IconButton>
              </Card>
            </Link>
          </Grid>
        ))}
        </Grid>
          );
        
};

Applications.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  //console.log('navBar: ', state);
  return {
    applications: state.firestore.ordered.applications, 
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'applications',
  }
  ])
)(Applications);


