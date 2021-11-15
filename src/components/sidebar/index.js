import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  BarChart,
  ExitToApp,
  LineStyle,
  MailOutline,
  PeopleOutline,
  PermIdentity,
  Settings,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "calc(100vh - 58px)",
    color: "#fff",
    paddingTop: theme.spacing(1),
    backgroundColor: "#000",
    position: "sticky",
    top: "58px",
    left: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      borderRight: "1px solid #ece7e7",
      paddingRight: "0",
      paddingLeft: "0",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(0),
      cursor: "pointer",
      padding: "15px 20px",
      color: "rgb(99, 115, 129)",
      "&:hover": {
        backgroundColor: "#f1f3f5",
      },
    },
  },
  active: {
    color: "#000",
    position: "relative",
    background: "#f8f9fa",

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

    [theme.breakpoints.down("sm")]: {
      color: "#FFF",
      background: "black",
    },
  },

  itemGroup: {
    display: "flex",
    flexDirection: "column",
  },

  group2: {
    display: "none",
    marginLeft: "50px",
  },
  show: {
    display: "block",
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = (props) => {
  const pathname = props?.location?.pathname;
  const [toggleShow, setToggleShow] = useState(false);
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Link as={NavLink} to="/">
        {/* <div className={classes.item + " " + classes.active}> */}
        <div
          className={`${classes.item} ${pathname === "/" && classes.active}`}
        >
          <LineStyle className={classes.icon} />
          <Typography className={classes.text}>Dashboard</Typography>
        </div>
      </Link>

      <div className={classes.itemGroup}>
        <div
          className={classes.item}
          onClick={() => setToggleShow(!toggleShow)}
        >
          <PermIdentity className={classes.icon} />
          <Typography className={classes.text}>Users</Typography>
        </div>

        <div className={`${classes.group2} ${toggleShow && classes.show}`}>
          <Link as={NavLink} to="/admins">
            <div
              className={`${classes.item} ${
                pathname === "/admins" && classes.active
              }`}
            >
              <Typography className={classes.text}>Admins</Typography>
            </div>
          </Link>
          <Link as={NavLink} to="/agents">
            <div
              className={`${classes.item} ${
                pathname === "/agents" && classes.active
              }`}
            >
              <Typography className={classes.text}>Agents</Typography>
            </div>
          </Link>
        </div>
      </div>

      <Link as={NavLink} to="/admin/managers">
        {/* <div className={classes.item + " " + classes.active}> */}
        <div
          className={`${classes.item} ${
            pathname === "/admin/managers" && classes.active
          }`}
        >
          <PeopleOutline className={classes.icon} />
          <Typography className={classes.text}>Estate Managers</Typography>
        </div>
      </Link>
      <div className={classes.item}>
        <BarChart className={classes.icon} />
        <Typography className={classes.text}>Reports</Typography>
      </div>
      <div className={classes.item}>
        <MailOutline className={classes.icon} />
        <Typography className={classes.text}>Mail</Typography>
      </div>

      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default withRouter(Leftbar);
