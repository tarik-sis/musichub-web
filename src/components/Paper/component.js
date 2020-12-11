import React from 'react';
import Paper from '@material-ui/core/Paper';

const component = ({ classes, children, prop }) => {
  return (
    <Paper {...prop} className={classes.root}>
      {children}
    </Paper>
  );
};

export default component;
