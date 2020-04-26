import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { IconButton,Card, CardContent, Grid, Typography, Avatar, Container, Icon } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import blueapt from './blueapt.jpg'
import Image from 'material-ui-image'

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
const Application = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={classes.root}
      style={{display:'flex'}}
    >   
    <Grid container direction='row' alignItems='center' style={{maxHeight:200}}>
        <Grid item lg={2} sm={2} xs={2} style={{overflow:'hidden', height:200}}>
            <img style={{ height:200, objectFit:'contain'}} src={blueapt}/>
        </Grid>
        <Grid item lg={10}>
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
                    style={{fontWeight:200}}
                >
                    122 Guadalope Street
                </Typography>
                &nbsp;
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="h5"
                >
                    Unit: The Texan 2x2
                </Typography>
                <div style={{display:'flex', alignItems:'middle'}}>
                    <FavoriteBorderIcon className={classes.icon} style={{fontWeight:200, }}></FavoriteBorderIcon>
                    <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="h5"
                    style={{fontWeight:200, paddingLeft: 5}}
                    >
                        2 Beds
                    </Typography>

                    <FavoriteBorderIcon className={classes.icon} style={{fontWeight:200, marginLeft:10}}></FavoriteBorderIcon>
                    <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="h5"
                    style={{fontWeight:200, paddingLeft: 5}}
                    >
                        2 Baths
                    </Typography>
                </div>
                
            </div>
            
        </Grid>
    </Grid>
    </Card>
  );
};

Application.propTypes = {
  className: PropTypes.string
};

export default Application;
