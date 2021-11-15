import React from "react";
import { Link } from "react-router-dom";
import AppOrderTimeline from "../../../components/timeline";
import profile from "../../images/no_user.png";
//MUI
import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";

export default function ManagerDetails() {
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
