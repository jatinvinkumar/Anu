import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, Container } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';

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
const Amenities = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={classes.root}
    >
        <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h5"
          >
              Amenities:
          </Typography>
      <Grid
        container
        justify="space-between"
      >
        {data.map((d, index) => (
          <Grid item 
          lg={3}
          sm={6}
          xl={3}
          xs={12}>
            <div style={{display:'flex', verticalAlign:'middle', alignItems:'center'}}>
              <FitnessCenterOutlinedIcon className={classes.icon} />
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                  variant="body1"
                  style={{paddingLeft:15}}
                >
                  OutDoor Gym
                </Typography>
            </div>
          </Grid>
        ))}
        </Grid>
    </Card>
  );
};

Amenities.propTypes = {
  className: PropTypes.string
};

export default Amenities;
