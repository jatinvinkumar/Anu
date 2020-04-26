import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { IconButton,Card, CardContent, Grid, Typography, Avatar, Container, Icon, Button, ButtonGroup } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';

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
    >
            <Grid container direction="column" alignItems="center" style={{width:'100%'}}>
            <Grid item lg={12}>
            <div style={{display:"flex", justifyContent:"center", verticalAlign:'middle', alignItems:'baseline'}}>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="h5"
                    style={{fontWeight:100}}
                >
                    from
                </Typography>
                &nbsp;
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="h2"
                    style={{fontWeight:400}}
                >
                    $550
                </Typography>
                &nbsp;
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="h5"
                    style={{fontWeight:100}}
                >
                    /month
                </Typography>
            </div>
            <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="h5"
                    style={{ width:"center", textAlign:"center"}}
                >
                    Leases by the bed
                </Typography>
            </Grid>
            &nbsp;
            <Grid item lg={12}>
                <Container style={{backgroundColor:"", borderRadius:8,}}>
                    
                </Container>
            </Grid>
            <Grid item lg={12}>
                <Button style={{width:250}} variant="outlined" color="primary">
                <Grid container >
                    <Grid item lg={2} style={{verticalAlign:'middle', alignItems:'center'}}>
                        <ThreeDRotationIcon/>&nbsp; 
                    </Grid>
                    <Grid item lg={10}>
                        Take a Property Tour
                    </Grid>
                </Grid>
                
                </Button>
            </Grid>
            &nbsp;
            <Grid item lg={12}>
                <Button style={{width:250}} variant="contained" color="primary">
                <Grid container >
                    <Grid item lg={2} style={{verticalAlign:'middle', alignItems:'center'}}>
                        <HelpOutlineIcon/>&nbsp; 
                    </Grid>
                    <Grid item lg={10}>
                        Ask a Question
                    </Grid>
                </Grid>
                
                </Button>
            </Grid>
        </Grid>
           
    </Card>
  );
};

PropertyTitle.propTypes = {
  className: PropTypes.string
};

export default PropertyTitle;
