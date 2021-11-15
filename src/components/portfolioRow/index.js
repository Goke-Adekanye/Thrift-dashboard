import React from "react";
import "./portfolioRow.css";
import { PersonAdd, Security, Person } from "@material-ui/icons";
import PortfolioItems from "../portfolioitem";

function PortfolioRow() {
  return (
    <div className="PortfolioRow">
      <PortfolioItems
        title="Admins"
        value="3"
        icon={<PersonAdd className="sidebarIcon" />}
      />
      <PortfolioItems
        title="Estate Managers"
        value="4"
        icon={<Person className="sidebarIcon" />}
        second
      />
      <PortfolioItems
        title="Security Companies"
        value="1"
        icon={<Security className="sidebarIcon" />}
        third
      />
    </div>
  );
}

export default PortfolioRow;
