import React from "react";
import { Link } from "react-router-dom";
import { Button as MuiButton, Typography } from "@material-ui/core";
import "./pagetitle.css";

export default function PageTitle({ text, buttonText, link }) {
  return (
    <div className="userListTop">
      <Typography variant="h4" className="text">
        {text}
      </Typography>
      {buttonText && (
        <Link to={link}>
          <MuiButton size="small" className="muiButton">
            {buttonText}
          </MuiButton>
        </Link>
      )}
    </div>
  );
}
