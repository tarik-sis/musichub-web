import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { Fade } from 'react-awesome-reveal';

import Paper from '../../../../components/Paper';
import studioBg from '../../../../assets/svgs/sewa_studio.svg';
import instrumentsBg from '../../../../assets/svgs/jual_sewa_alat_musik.svg';

const component = ({ classes }) => {
  return (
    <div id='fitur'>
      <Grid className={classes.root} container justify='center'>
        <Grid item xs={12} md={8}>
          <Fade duration='1500' direction='up' triggerOnce>
            <h1 className={clsx(classes.header1, classes.spacingBottom)}>
              Pelajari fitur yang membantu melayani bisnis musikmu
            </h1>
          </Fade>
        </Grid>
        <Grid className={classes.spacingBottom} item xs={12}>
          <Fade duration='1500' direction='up' triggerOnce>
            <Paper
              prop={{
                style: {
                  paddingBottom: '0',
                },
              }}
            >
              <Grid container justify='space-between' alignItems='center'>
                <Grid
                  className={clsx(classes.spacingLeft, classes.mobOrder1)}
                  item
                  xs={12}
                  md={5}
                >
                  <h2>01. Sewakan studio</h2>
                  <p className={classes.width60}>
                    Sewakan studiomu di platform kami supaya lebih mudah
                    dijangkau oleh lebih banyak pelanggan lagi
                  </p>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  className={clsx(classes.mobOrder2, classes.spacingRight)}
                >
                  <img
                    alt=''
                    className={clsx(classes.fullWidth, classes.imgFuncDisabled)}
                    src={studioBg}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Fade>
        </Grid>
        <Grid className={classes.spacingBottom} item xs={12}>
          <Fade duration='1500' direction='up' triggerOnce>
            <Paper
              prop={{
                style: {
                  paddingBottom: '0',
                },
              }}
            >
              <Grid container justify='space-between' alignItems='center'>
                <Grid item xs={12} md={5} className={classes.mobOrder2}>
                  <img
                    alt=''
                    className={clsx(classes.fullWidth, classes.imgFuncDisabled)}
                    src={instrumentsBg}
                  />
                </Grid>
                <Grid item xs={12} md={5} className={classes.mobOrder1}>
                  <h2>02. Jual & sewa alat musik</h2>
                  <p className={classes.width60}>
                    Dapatkan passive income dengan menyewakan alat musik yang
                    tidak terpakai, atau kamu juga bisa menjualnya di sini.
                  </p>
                </Grid>
              </Grid>
            </Paper>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default component;
