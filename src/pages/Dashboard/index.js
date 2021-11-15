import React from "react";
import "./dashboard.css";
import PortfolioRow from "../../components/portfolioRow";
import TableWidget from "../../components/tableWidget";
import Chart from "../../components/chart";
import { userData } from "../../dummyData";
import PageTitle from "../../components/pageTitle";
// import { Grid } from "@material-ui/core";

export default function Dashboard() {
  return (
    <div className="home-section">
      <PageTitle text="Hi, Welcome.." />
      <PortfolioRow />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <TableWidget />
    </div>
  );
}
