import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { Fade } from "react-awesome-reveal";

import Paper from "../../../../components/Paper";
import studioBg from "../../../../assets/svgs/studio.svg";
import instrumentsBg from "../../../../assets/svgs/instruments.svg";
import walletBg from "../../../../assets/svgs/wallet.svg";

const component = ({ classes }) => {
  return (
    <div id="fitur">
      <Grid className={classes.root} container justify="center">
        <Grid item xs={12} md={8}>
          <Fade duration="1500" direction="up" triggerOnce>
            <h1 className={clsx(classes.header1, classes.spacingBottom)}>
              Pelajari fitur yang membantu melayani kebutuhan bermusikmu
            </h1>
          </Fade>
        </Grid>
        <Grid className={classes.spacingBottom} item xs={12}>
          <Fade duration="1500" direction="up" triggerOnce>
            <Paper
              prop={{
                style: {
                  paddingBottom: "0"
                }
              }}
            >
              <Grid container justify="space-between" alignItems="center">
                <Grid
                  className={clsx(classes.spacingLeft, classes.mobOrder1)}
                  item
                  xs={12}
                  md={5}
                >
                  <h2>01. Studio</h2>
                  <p className={classes.width60}>
                    Pesan studio dengan mudah tanpa harus datang ke studio
                  </p>
                </Grid>
                <Grid item xs={12} md={5} className={classes.mobOrder2}>
                  <img
                    alt=""
                    className={clsx(classes.fullWidth, classes.imgFuncDisabled)}
                    src={studioBg}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Fade>
        </Grid>
        <Grid className={classes.spacingBottom} item xs={12}>
          <Fade duration="1500" direction="up" triggerOnce>
            <Paper
              prop={{
                style: {
                  paddingBottom: "0"
                }
              }}
            >
              <Grid container justify="space-between" alignItems="center">
                <Grid item xs={12} md={5} className={classes.mobOrder2}>
                  <img
                    alt=""
                    className={clsx(classes.fullWidth, classes.imgFuncDisabled)}
                    src={instrumentsBg}
                  />
                </Grid>
                <Grid item xs={12} md={5} className={classes.mobOrder1}>
                  <h2>02. Instruments</h2>
                  <p className={classes.width60}>
                    Beli dan pinjam alat musik yang kamu butuhkan. Kamu juga
                    bisa meminjamkan alat musikmu lho!
                  </p>
                </Grid>
              </Grid>
            </Paper>
          </Fade>
        </Grid>
        <Grid className={classes.spacingBottom} item xs={12}>
          <Fade duration="1500" direction="up" triggerOnce>
            <Paper
              prop={{
                style: {
                  paddingBottom: "0"
                }
              }}
            >
              <Grid container justify="space-between" alignItems="center">
                <Grid
                  className={clsx(classes.spacingLeft, classes.mobOrder1)}
                  item
                  xs={12}
                  md={5}
                >
                  <h2>03. Wallet</h2>
                  <p className={classes.width60}>
                    Dompet digital sebagai sarana pembayaran penampilan dan
                    pembelian alat musik.
                  </p>
                </Grid>
                <Grid item xs={12} md={5} className={classes.mobOrder2}>
                  <img
                    alt=""
                    className={clsx(classes.fullWidth, classes.imgFuncDisabled)}
                    src={walletBg}
                  />
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
