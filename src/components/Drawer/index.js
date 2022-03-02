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
import { Menu, Notifications, Home, PersonAdd, Add } from "@material-ui/icons";
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
    fontWeight: 700,
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
    color: "#062863 !important",
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
      backgroundColor: "#062863",
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
              <Home className={pathname === "/" && classes.active} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  type="h6"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  Home
                </Typography>
              }
            />
          </ListItem>
        </Link>

        <Link to="/ajo/join">
          <ListItem
            button
            className={pathname === "/ajo/join" && classes.active}
          >
            <ListItemIcon>
              <PersonAdd
                className={pathname === "/ajo/join" && classes.active}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  type="h6"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  Join Ajo
                </Typography>
              }
            />
          </ListItem>
        </Link>

        <Link to="/ajo/create">
          <ListItem
            button
            className={pathname === "/ajo/create" && classes.active}
          >
            <ListItemIcon>
              <Add className={pathname === "/ajo/create" && classes.active} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  type="h6"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  Create Ajo
                </Typography>
              }
            />
          </ListItem>
        </Link>
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
            AJO
          </Typography>
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
              backgroundColor: "#062863 !important",
              color: "#FFF !important",
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
              backgroundColor: "#062863 !important",
              color: "#FFF !important",
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
