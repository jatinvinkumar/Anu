import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { IconButton,Card, CardContent, Grid, Typography, Avatar, Container, Icon } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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
const data = [1,2,3,4,5];
const PropertyTitle = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={classes.root}
      style={{display:'flex'}}
    >
        <div>
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
  );
};

PropertyTitle.propTypes = {
  className: PropTypes.string
};

export default PropertyTitle;
