import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Fade } from "react-awesome-reveal";

import Button from "../../../../components/Button";

const component = ({ classes }) => {
  const downloadLink = React.forwardRef((props, ref) => (
    // eslint-disable-next-line
    <a {...props} href="#" ref={ref} />
  ));
  const learnLink = React.forwardRef((props, ref) => (
    // eslint-disable-next-line
    <Link {...props} to="/musicbizz/" ref={ref} />
  ));

  return (
    <div id="fitur">
      <Grid
        className={classes.root}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} md={7}>
          <Fade duration="1500" direction="left" triggerOnce>
            <h4 style={{ color: "#848585" }}>MUSIC BIZZ</h4>
            <h1 className={classes.header1}>
              Butuh musisi untuk hadir di eventmu?
            </h1>
            <p>
              Yuk download Music Bizzmu Sekarang! Lalu nikmati suasana event dan
              bisnismu dengan musisi-musisi yang berkualitas.
            </p>
          </Fade>
        </Grid>
        <Grid item xs={12} md={5}>
          <Fade duration="1500" direction="right" triggerOnce>
            <Grid
              className={classes.buttonMobile}
              container
              justify="center"
              spacing={2}
            >
              <Grid item>
                <Button component={downloadLink} type="contained">
                  Download Music Bizz
                </Button>
              </Grid>
              <Grid item>
                <Button component={learnLink} type="outlined">
                  Pelajari Lebih Lanjut
                </Button>
              </Grid>
            </Grid>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default component;
