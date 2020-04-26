import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/styles';
import { Card, FormControl, Menu, MenuItem, Select, Grid, Typography, Avatar, Container, Table, TableBody, TableContainer, TableHead, TableRow, TableCell} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import Paper from '@material-ui/core/Paper';
import UnitRow from './UnitRow'
import SplitButton from './SplitButton'

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
    height: 48,
    width: 48
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
}));
const classes = useStyles;
const UnitRowHeader = (
    <Paper elevation={0} style={{backgroundColor:'transparent', padding:10}}>
      <Grid container>
        <Grid item lg={3} md={3} sm={3}>
          <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          variant="body1"
          >
            Unit Name
          </Typography>
        </Grid>
        <Grid item lg={3} md={3} sm={3}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            variant="body1"
            >
              Bed Price
          </Typography>
        </Grid>
        <Grid item lg={3} md={3} sm={3}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            variant="body1"
            >
              Unit Price
            </Typography>
        </Grid>
      </Grid>
    </Paper>
  
  )

const FloorPlans = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    > 
      
        <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h5"
          >
              Available FloorPlans:
          </Typography>
        <SplitButton/>
      
       
       <Container style={{backgroundColor: "#F6F9FB", padding:20, marginTop:20, borderRadius:6}}>
          <Grid>
            <Grid item style={{marginTop:20}}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="h5"
                style={{fontWeight:500}}
              >
                2 beds | 2 baths:
              </Typography>
              {UnitRowHeader}
              <UnitRow></UnitRow>
              &nbsp;
              <UnitRow></UnitRow>
              &nbsp;
              <UnitRow></UnitRow>
            </Grid>
            &nbsp;
            <Grid item style={{marginTop:20}}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="h5"
                style={{fontWeight:500}}
              >
                3 beds | 2 baths:
              </Typography>
              {UnitRowHeader}
              <UnitRow></UnitRow>
              &nbsp;
              <UnitRow></UnitRow>
            </Grid>
          </Grid>
       </Container>
    </Card>
  );
};

FloorPlans.propTypes = {
  className: PropTypes.string
};

export default FloorPlans;
