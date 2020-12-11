import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Button from "../../../../components/Button";

import illustration from "../../../../assets/svgs/hero_bizz.svg";

const component = ({ classes }) => {
  // eslint-disable-next-line
  const learnLink = props => <a {...props} href="#fitur" />;

  return (
    <Grid
      alignItems="center"
      className={classes.root}
      container
      justify="center"
    >
      <Grid item md={6} xs={12} className={classes.mobileOrder1}>
        <Grid container alignItems="center">
          <Grid item xs={12} className={classes.spacingRight}>
            <img
              alt=""
              className={clsx(classes.fullWidth, classes.imgFuncDisabled)}
              src={illustration}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} xs={12} className={classes.mobileOrder2}>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <h3 style={{ color: "#848585" }}>MUSIC BIZZ</h3>
          </Grid>
          <Grid item xs={12}>
            <h1 className={classes.header1}>
              Temukan musisi terbaik untuk bisnis dan acaramu!
            </h1>
          </Grid>
          <Grid item xs={12} className={classes.spacingBottom}>
            <p className={classes.width80}>
              <span style={{ fontWeight: "bold" }}>Music Bizz</span> adalah
              platform yang menghubungkan event organizer, pemilik studio musik,
              penyewa dan penjual alat musik dengan para musisi.
            </p>
          </Grid>
          <Grid item xs={12}>
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
  );
};

export default component;
