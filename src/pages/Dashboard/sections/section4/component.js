import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Fade } from "react-awesome-reveal";

import Button from "../../../../components/Button";
import Paper from "../../../../components/Paper";
import { content } from "./constant";
import mockupBg from "../../../../assets/illustration/hub_desktop.jpg";
import mockupMobBg from "../../../../assets/illustration/hub_mobile.jpg";

const component = ({ classes }) => {
  const downloadLink = React.forwardRef((props, ref) => (
    // eslint-disable-next-line
    <a {...props} href="#" ref={ref} />
  ));

  return (
    <div id="manfaat">
      <Grid
        className={classes.root}
        container
        justify="center"
        style={{ position: "relative" }}
      >
        <Grid item xs={12} md={8}>
          <Fade duration="1500" direction="up" triggerOnce>
            <h1 className={clsx(classes.header1, classes.spacingBottom)}>
              Ini manfaat yang bisa kamu dapatkan lewat Music Hub
            </h1>
          </Fade>
        </Grid>
        <Grid className={classes.spacingBottom} item xs={12}>
          <Fade duration="1500" direction="up" triggerOnce>
            <Grid container spacing={3} alignItems="stretch">
              {content.map((c, i) => (
                <Grid key={`manfaat-${i}`} item md={3} xs={6}>
                  <Paper
                    prop={{
                      style: {
                        height: "100%",
                        textAlign: "center"
                      }
                    }}
                  >
                    <img
                      alt=""
                      className={clsx(classes.width50, classes.spacingBottom2)}
                      src={c.img}
                    />
                    <h3 className={classes.header3}>{c.title}</h3>
                    <p className={classes.descText}>{c.desc}</p>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Fade>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="flex-end" className={classes.fullHeight2}>
            <Grid
              item
              md={5}
              xs={12}
              style={{ position: "relative", zIndex: "2" }}
            >
              <Fade duration="1500" direction="right" triggerOnce>
                <Grid container justify="flex-end">
                  <Grid item xs={12}>
                    <h1
                      className={clsx(classes.header1, classes.spacingBottom2)}
                      style={{ textAlign: "right" }}
                    >
                      Download sekarang untuk mencoba Music Hub. Gratis!
                    </h1>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      spacing={2}
                      justify="flex-end"
                      alignItems="center"
                    >
                      <Grid item>
                        <span style={{ marginLeft: "auto" }}>
                          Music Hub - Beta.apk
                        </span>
                      </Grid>
                      <Grid item>
                        <Button
                          component={downloadLink}
                          type="contained"
                          prop={{
                            style: { marginLeft: "30px" }
                          }}
                        >
                          Download Sekarang
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Fade>
            </Grid>
            <Hidden smDown>
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "7%",
                  width: "65%",
                  zIndex: "0"
                }}
              >
                <Fade duration="1500" direction="up" triggerOnce>
                  <img
                    alt=""
                    src={mockupBg}
                    style={{
                      width: "100%"
                    }}
                  />
                </Fade>
              </div>
            </Hidden>
            <Hidden mdUp>
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "110%",
                  zIndex: "0"
                }}
              >
                <Fade duration="1500" direction="up" triggerOnce>
                  <img
                    alt=""
                    src={mockupMobBg}
                    style={{
                      width: "100%"
                    }}
                  />
                </Fade>
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default component;
