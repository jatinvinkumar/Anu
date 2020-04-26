import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Container
      {...rest}
      className={clsx(classes.root, className)} style={{marginLeft:270}}
    >
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href=""
          target="_blank"
        >
          Myfi 2020
        </Link>
        {" All Rights Reserved"}
      </Typography>
      <Typography variant="caption">
        Created with love for the environment. Let's tackle COVID-19 together!
      </Typography>
    </Container>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
