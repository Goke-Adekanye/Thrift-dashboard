import React from "react";
import "./portfolioItem.css";

function PortfolioItems({ title, value, icon, second, third }) {
  return (
    <div className={`PortfolioItems ${second && "second"} ${third && "third"}`}>
      <span className="icon">{icon}</span>
      <div>{title}</div>
      <span className="value">{value}</span>
    </div>
  );
}

export default PortfolioItems;
