import {
  AppBar,
  Avatar,
  Badge,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Notifications } from "@material-ui/icons";

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
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          SESA DIGITAL
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          SESA
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
  );
};

export default Navbar;
