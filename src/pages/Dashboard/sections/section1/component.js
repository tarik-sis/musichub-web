import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Button from "../../../../components/Button";

import illustration from "../../../../assets/svgs/hero.svg";

const component = ({ classes }) => {
  const downloadLink = React.forwardRef((props, ref) => (
    // eslint-disable-next-line
    <a {...props} href="#" ref={ref} />
  ));
  const learnLink = React.forwardRef((props, ref) => (
    // eslint-disable-next-line
    <a {...props} href="#fitur" ref={ref} />
  ));

  return (
    <Grid
      alignItems="center"
      className={classes.root}
      container
      justify="center"
    >
      <Grid item md={6} xs={12} className={classes.mobileOrder2}>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <h1 className={classes.header1}>
              Cari tempat tampil, dan mainkan musikmu.
            </h1>
          </Grid>
          <Grid item xs={12} className={classes.spacingBottom}>
            <p className={classes.width80}>
              <span style={{ color: "#F9701F" }}>Music Hub</span> adalah
              platform yang menghubungkan musisi dengan event
              organizer maupun business owner.
            </p>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  component={downloadLink}
                  type="contained"
                  prop={{
                    style: { width: "220px" }
                  }}
                >
                  download sekarang
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={learnLink}
                  type="outlined"
                  prop={{
                    style: { width: "220px" }
                  }}
                >
                  pelajari lebih lanjut
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} xs={12} className={classes.mobileOrder1}>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <img
              alt=""
              className={clsx(classes.fullWidth, classes.imgFuncDisabled)}
              src={illustration}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default component;
