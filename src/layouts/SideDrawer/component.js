import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Menu from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const StyledDrawer = withStyles(() => ({
  paper: {
    backgroundColor: "#F9701F"
  }
}))(Drawer);

const Component = ({ classes, navlinks }) => {
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const sideDrawerList = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.top}>
        <Link to="/" className={classes.logo}>
          Music Hub
        </Link>
        <IconButton aria-label="menu" onClick={toggleDrawer("right", false)}>
          <CloseIcon style={{ color: "white" }} />
        </IconButton>
      </div>
      <List component="nav">
        {navlinks.map(({ title, path }) => {
          const location = window.location.pathname;
          if (location.includes("/musicbizz/") && path === "#tim") {
            return null;
          }
          return (
            <Link smooth to={path} key={title} className={classes.linkText}>
              <ListItem button>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu style={{ color: "#F9701F" }} />
      </IconButton>
      <StyledDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right")}
      </StyledDrawer>
    </>
  );
};

export default Component;
