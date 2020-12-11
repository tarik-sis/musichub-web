import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { Fade } from "react-awesome-reveal";

import Paper from "../../../../components/Paper";
import { content } from "./constant";
import WhatsApp from "../../../../assets/svgComps/WhatsApp";
import Instagram from "../../../../assets/svgComps/Instagram";
import LinkedIn from "../../../../assets/svgComps/LinkedIn";

const component = ({ classes }) => {
  return (
    <div id="tim">
      <Grid
        className={clsx(classes.root, classes.fullHeight)}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} md={8}>
          <Fade duration="1500" direction="up" triggerOnce>
            <h1 className={clsx(classes.header1, classes.spacingBottom)}>
              Tim di balik Music Hub
            </h1>
          </Fade>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="stretch" justify="center">
            {content.map((c, i) => {
              const aD = [250, 500, 750];
              return (
                <Grid key={`tim-${i}`} item md={4} sm={6} xs={12}>
                  <Fade
                    delay={aD[i]}
                    duration="1500"
                    direction="up"
                    triggerOnce
                  >
                    <Paper
                      prop={{
                        style: {
                          height: "100%",
                          textAlign: "center",
                          background: "none",
                          boxShadow: "none"
                        }
                      }}
                    >
                      <img
                        alt=""
                        className={clsx(
                          classes.width90,
                          classes.imgFuncDisabled
                        )}
                        src={c.img}
                      />
                      <h3 className={classes.header3}>{c.name}</h3>
                      <p className={classes.descText}>{c.role}</p>
                      <span
                        className={clsx(classes.quotes, classes.spacingBottom2)}
                      >
                        {c.quotes}
                      </span>
                      <div>
                        <a
                          className={classes.social}
                          href={c.social.wa}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <WhatsApp />
                        </a>
                        <a
                          className={classes.social}
                          href={c.social.ig}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Instagram />
                        </a>
                        <a
                          className={classes.social}
                          href={c.social.li}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <LinkedIn />
                        </a>
                      </div>
                    </Paper>
                  </Fade>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default component;
