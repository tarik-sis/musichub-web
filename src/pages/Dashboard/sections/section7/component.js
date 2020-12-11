import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { Fade } from 'react-awesome-reveal';

const component = ({ classes }) => {
  return (
    <div>
      <Grid
        className={clsx(classes.root, classes.fullHeight)}
        container
        justify='center'
        alignItems='center'
        style={{ position: 'relative' }}
      >
        <Grid item xs={12} md={7}>
          <Fade duration='1500' direction='up' triggerOnce>
            <Grid container justify='center'>
              <Grid
                className={classes.spacingBottom}
                item
                xs={12}
                style={{
                  position: 'relative',
                  padding: '100px 0',
                }}
              >
                <h1 className={clsx(classes.quotes, classes.quote1)}>"</h1>
                <h1 className={clsx(classes.header1, classes.width80)}>
                  High expectations are the key to everything.
                </h1>
                <h1 className={clsx(classes.quotes, classes.quote2)}>"</h1>
              </Grid>
              <Grid item>
                <p className={classes.person}>Sam Walton, Walmart Founder</p>
              </Grid>
            </Grid>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default component;
