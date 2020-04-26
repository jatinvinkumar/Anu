import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/styles';
import { Button, Collapse, Grid, Typography, Avatar, Container, Table, TableBody, TableContainer, TableHead, TableRow, TableCell} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    class UnitRow extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
              toggleFilters: false,
            };
        }
        render(){
            const useStyles = makeStyles(theme => ({
                root: {
                    paddingTop: 56,
                    }
                }
            ));
            const classes = useStyles;
            const toggleMoreFilters = () =>{
                var toggle = this.state.toggleFilters;
                this.setState({...this.state, ['toggleFilters']:!toggle})
                console.log(this.state)
            }
            return(
                    <Paper elevation={1} style={{backgroundColor:'white', padding:10, paddingLeft:20}}>
                        <Grid container direction="row" alignItems="center" justify = "center">
                            <Grid item lg={3} md={3} sm={3}>
                                <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                                variant="body1"
                                >
                                Loft 2x2
                                </Typography>
                            </Grid>
                            <Grid item lg={3} md={3} sm={3}>
                                <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                                variant="body1"
                                >
                                    $1,400/mo
                                </Typography>
                            </Grid>
                            <Grid item lg={3} md={3} sm={3}>
                                <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                                variant="body1"
                                displayInline
                                style={{height:"100%"}}
                                >
                                    $800/mo
                                </Typography>
                            </Grid>
                            <Grid item lg={2} md={2} sm={2}>
                                <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                                variant="body1"
                                >
                                    <Button variant="contained" color="primary" disableElevation>Apply</Button>
                                </Typography>
                            </Grid>
                            <Grid item lg={1} md={1} sm={1}>
                                <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                                variant="body1"
                                >
                                    <Button id="toggler" style={{textAlign:'left'}} onClick={toggleMoreFilters}><ExpandMoreIcon/></Button>
                                </Typography>
                            </Grid>
                    </Grid>
                    
                    <Collapse toggler='#toggler' in={this.state.toggleFilters}>
                        <div>Hello</div>
                    </Collapse>
                </Paper>
            )
        }
    }

    export default UnitRow;