import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);
  const {auth} = props;
  console.log("navBarProps", props);
  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
          style={{height:60}}
            alt="Logo"
            src="/images/logos/logoWhite.png"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <RouterLink to="/home">
          <Hidden mdDown>
            <Button color="white" style={{color:'white'}}>
              Home
            </Button>
          </Hidden>
        </RouterLink>
        <RouterLink to="/propertySearch">
          <Hidden mdDown>
            <Button color="white" style={{color:'white'}}>
              Search
            </Button>
          </Hidden>
        </RouterLink>
        {auth.uid ? 
        <RouterLink to="/dashboard">
          <Hidden mdDown>
            <Button color="white" style={{color:'white'}}>
              Dashboard
            </Button>
          </Hidden>
        </RouterLink>
        :  
        <RouterLink to="/sign-in">
          <Hidden mdDown>
            <Button color="white" style={{color:'white'}}>
              Sign In
            </Button>
          </Hidden>
        </RouterLink>}
        
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  //console.log('navBar: ', state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Topbar);
