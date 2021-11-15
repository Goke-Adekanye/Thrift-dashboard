import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppOrderTimeline from "../../../components/timeline";
import profile from "../../images/no_user.png";
//MUI
import { Button, Tab, Tabs, makeStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  tabs: {
    color: "#212B36",

    "& .MuiTabs-indicator": {
      backgroundColor: "#212B36",
    },
    "& .Mui-selected": {
      backgroundColor: "#f8f9fa",
    },
  },
}));

export default function CompanyShow() {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState("AssignPermission");

  return (
    <div className="profile_section">
      <div className="profile_container">
        <div item className="image_container">
          <img src={profile} alt="pic" />
        </div>
        <div className="timeline_container">
          <AppOrderTimeline totalEstates />
        </div>
      </div>

      <div className="tabs_container">
        <Tabs
          value={tabValue}
          className={classes.tabs}
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab value="AssignPermission" label="Permissions" />
          <Tab value="AssignEstate" label="Estates" />
        </Tabs>

        {tabValue === "AssignPermission" ? (
          <div className="permission_container">PERMISSIONS</div>
        ) : (
          <div className="estate_container">ESTATES</div>
        )}
      </div>

      <div className="profile-button">
        <Link to="/admin/admins">
          <Button
            style={{
              backgroundColor: "rgb(243, 62, 62)",
              fontWeight: 600,
              color: "#FFF",
              padding: "5px 15px",
            }}
            startIcon={<Close />}
          >
            Cancel
          </Button>
        </Link>
      </div>
    </div>
  );
}
