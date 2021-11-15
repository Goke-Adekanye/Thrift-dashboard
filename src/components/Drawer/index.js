import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
//MUI
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Menu,
  Notifications,
  Security,
  PeopleOutline,
  PermIdentity,
  Add,
  CallToAction,
  LineStyle,
} from "@material-ui/icons";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Badge, makeStyles } from "@material-ui/core";
import { Typography } from "@mui/material";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    color: "#212B36",
    backgroundColor: "#FFF",
  },
  logoLg: {
    display: "none",
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: "flex",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  active: {
    color: "#000 !important",
    position: "relative",
    backgroundColor: "#f8f9fa !important",

    "&::before": {
      top: 0,
      right: 0,
      width: 3,
      bottom: 0,
      content: '""',
      position: "absolute",
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: "#212529",
    },
  },
  itemGroup: {
    display: "flex",
    flexDirection: "column",
  },
  group2: {
    display: "none",
  },
  show: {
    display: "block",
  },
}));

function ResponsiveDrawer(props) {
  const [toggleShow, setToggleShow] = useState(false);
  const [toggleShow2, setToggleShow2] = useState(false);
  const [toggleShow3, setToggleShow3] = useState(false);

  const pathname = props?.location?.pathname;
  const classes = useStyles();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Link to="/">
          <ListItem button className={pathname === "/" && classes.active}>
            <ListItemIcon>
              <LineStyle />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="h6" style={{ fontSize: 13 }}>
                  Dashboards
                </Typography>
              }
            />
          </ListItem>
        </Link>

        <div className={classes.itemGroup}>
          <ListItem button onClick={() => setToggleShow(!toggleShow)}>
            <ListItemIcon>
              <PermIdentity />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="h6" style={{ fontSize: 13 }}>
                  Admins
                </Typography>
              }
            />
          </ListItem>

          <div className={`${classes.group2} ${toggleShow && classes.show}`}>
            <Link to="/admin/admins">
              <ListItem
                button
                className={pathname === "/admin/admins" && classes.active}
              >
                <ListItemIcon>
                  <CallToAction />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography type="h6" style={{ fontSize: 13 }}>
                      View Admins
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
            <Link to="/admin/admins/add">
              <ListItem
                button
                className={pathname === "/admin/admins/add" && classes.active}
              >
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography type="h6" style={{ fontSize: 13 }}>
                      Add Admins
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          </div>
        </div>

        <div className={classes.itemGroup}>
          <ListItem button onClick={() => setToggleShow2(!toggleShow2)}>
            <ListItemIcon>
              <PeopleOutline />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="h6" style={{ fontSize: 13 }}>
                  Estate Managers
                </Typography>
              }
            />
          </ListItem>

          <div className={`${classes.group2} ${toggleShow2 && classes.show}`}>
            <Link to="/admin/managers">
              <ListItem
                button
                className={pathname === "/admin/managers" && classes.active}
              >
                <ListItemIcon>
                  <CallToAction />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography type="h6" style={{ fontSize: 13 }}>
                      View Managers
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
            <Link to="/admin/managers/add">
              <ListItem
                button
                className={pathname === "/admin/managers/add" && classes.active}
              >
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography type="h6" style={{ fontSize: 13 }}>
                      Add Managers
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          </div>
        </div>

        <div className={classes.itemGroup}>
          <ListItem button onClick={() => setToggleShow3(!toggleShow3)}>
            <ListItemIcon>
              <Security />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="h6" style={{ fontSize: 13 }}>
                  Security Company
                </Typography>
              }
            />
          </ListItem>

          <div className={`${classes.group2} ${toggleShow3 && classes.show}`}>
            <Link to="/admin/companies">
              <ListItem
                button
                className={pathname === "/admin/companies" && classes.active}
              >
                <ListItemIcon>
                  <CallToAction />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography type="h6" style={{ fontSize: 13 }}>
                      View Security Companies
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
            <Link to="/admin/companies/add">
              <ListItem
                button
                className={
                  pathname === "/admin/companies/add" && classes.active
                }
              >
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography type="h6" style={{ fontSize: 13 }}>
                      Add Security Companies
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          </div>
        </div>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.logoLg}>
            SESA DIGITAL
          </Typography>
          {/* <Typography variant="h6" className={classes.logoSm}>
            SESA
          </Typography> */}
          <div className={classes.icons}>
            <Badge badgeContent={2} color="secondary" className={classes.badge}>
              <Notifications />
            </Badge>
            <Avatar
              alt="Remy Sharp"
              src="https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_9.jpg"
            />
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(ResponsiveDrawer);
