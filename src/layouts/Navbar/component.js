import React from "react";
import clsx from "clsx";
import { HashLink as Link } from "react-router-hash-link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

import { navlinks } from "./constant";
import SideDrawer from "../SideDrawer";
import Button from "../../components/Button";

const component = ({ classes }) => {
  // eslint-disable-next-line
  const AppLink = props => <a href="#" {...props} />;

  const renderNavLink = () => {
    return navlinks.map(({ title, path, link }) => {
      const location = window.location.pathname;
      const active = location.includes(path);
      if (link) {
        return (
          <Link
            to={path}
            key={title}
            className={clsx(classes.linkText, {
              [classes.linkActive]: active
            })}
          >
            <ListItem>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        );
      }
      if (location.includes("/musicbizz/") && path === "#tim") {
        return null;
      }
      return (
        <Link
          smooth
          to={path}
          key={title}
          className={clsx(classes.linkText, {
            [classes.linkActive]: active
          })}
        >
          <ListItem>
            <ListItemText primary={title} />
          </ListItem>
        </Link>
      );
    });
  };

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar style={{ padding: "0" }}>
        <Container className={clsx(classes.navDisplayFlex, classes.container)}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/" className={classes.logo}>
              Music Hub
            </Link>
            <Hidden smDown>
              <List
                className={classes.navDisplayFlex}
                component="nav"
                aria-labelledby="main navigation"
              >
                {renderNavLink()}
              </List>
            </Hidden>
          </div>
          <Hidden smDown>
            <Button type="outlined" component={AppLink}>
              Coba Sekarang
            </Button>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navlinks={navlinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default component;
