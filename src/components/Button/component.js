/* eslint-disable */
import React from 'react';
import Button from '@material-ui/core/Button';

const Component = ({ classes, children, type, component, prop }) => {
  switch (type) {
    case 'outlined':
      return (
        <Button
          {...prop}
          className={classes.outlined}
          variant='outlined'
          component={component}
        >
          {children}
        </Button>
      );
    case 'outlined-white':
      return (
        <Button
          {...prop}
          className={classes.outlinedWhite}
          variant='outlined'
          component={component}
        >
          {children}
        </Button>
      );
    case 'contained':
      return (
        <Button
          {...prop}
          className={classes.contained}
          variant='contained'
          component={component}
        >
          {children}
        </Button>
      );
    default:
      return (
        <Button
          {...prop}
          className={classes.contained}
          variant='contained'
          component={component}
        >
          {children}
        </Button>
      );
  }
};

export default Component;
