/* eslint-disable */
import React from "react";
import clsx from "clsx";
import { HashLink as Link } from 'react-router-hash-link';
import Grid from "@material-ui/core/Grid";

import Button from "../../components/Button";
import WhatsApp from "../../assets/svgComps/WhatsApp";
import Instagram from "../../assets/svgComps/Instagram";
import LinkedIn from "../../assets/svgComps/LinkedIn";
import { side1, side2 } from "./constant";

const component = ({ classes }) => {
  // eslint-disable-next-line
  const donwload = props => <a {...props} href="#" />;
  // eslint-disable-next-line
  const donwloadBizz = props => <a {...props} href="#" />;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} style={{ marginBottom: "20px" }}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <h1 className={clsx(classes.header, classes.headerBrand)}>
              Music Hub
            </h1>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container>
              <Grid item xs={6}>
                {side1.map((c, i) => {
                  if (c.link) {
                    return (
                      <Link
                        className={classes.link}
                        key={`side1-${i}`}
                        to={c.url}
                      >
                        {c.title}
                      </Link>
                    );
                  }
                  return (
                    <Link smooth className={classes.link} key={`side1-${i}`} to={c.url}>
                      {c.title}
                    </Link>
                  );
                })}
              </Grid>
              <Grid item xs={6}>
                {side2.map((c, i) => {
                  if (c.link) {
                    return (
                      <Link
                        className={classes.link}
                        key={`side2-${i}`}
                        to={c.url}
                      >
                        {c.title}
                      </Link>
                    );
                  }
                  return (
                    <Link smooth className={classes.link} key={`side2-${i}`} to={c.url}>
                      {c.title}
                    </Link>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <h2 className={classes.header}>Download</h2>
            <Grid container style={{ marginBottom: "20px" }} spacing={2}>
              <Grid item>
                <Button component={donwload} type="contained">
                  Download Music Hub
                </Button>
              </Grid>
              <Grid item>
                <Button component={donwloadBizz} type="outlined-white">
                  Download Bizz untuk owner
                </Button>
              </Grid>
            </Grid>
            <h2 className={classes.header}>Follow Us On</h2>
            <a className={clsx(classes.colorWhite, classes.social)} href="#">
              <WhatsApp />
            </a>
            <a className={clsx(classes.colorWhite, classes.social)} href="#">
              <Instagram />
            </a>
            <a className={clsx(classes.colorWhite, classes.social)} href="#">
              <LinkedIn />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={clsx(classes.colorWhite, classes.divider)}>
        <p>© 2020 Music Hub</p>
        <span>
          Registered in the Directorate General of Intellectual Property of the
          Republic of Indonesia.
        </span>
      </Grid>
    </Grid>
  );
};

export default component;
