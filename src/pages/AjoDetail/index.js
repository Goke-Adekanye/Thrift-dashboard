import React from "react";
import { useHistory } from "react-router-dom";
import faker from "faker";
import { fDate } from "../../utils/formatTime";
import "./AjoDetail.css";

export default function AjoDetail() {
  const history = useHistory();
  return (
    <div className="details-section">
      <div className="detail-container">
        <div className="left-div">
          <div className="border-container">
            <h2 className="h2-header">Amount</h2>
            <span className="span-details">₦5000.00</span>
          </div>

          <div className="flex-c">
            <div className="mini border-container">
              <div className="sub">
                <p className="sub-ptitle">Ajo Name</p>
                <p className="sub-ptitle tx">XYZ Savings</p>
              </div>
            </div>
            <div className="mini border-container">
              <div className="sub">
                <p className="sub-ptitle">Creator's Name</p>
                <p className="sub-ptitle tx">James Emeka</p>
              </div>
            </div>
            <div className="mini border-container">
              <div className="sub">
                <p className="sub-ptitle">Duration</p>
                <p className="sub-ptitle tx">6 Months</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-div">
          <div className="border-container">
            <h2 className="h2-header">Time Frame</h2>
            <span className="span-details fw-light">
              {fDate(faker.date.past())}
              {" - "} {fDate(faker.date.past())}
            </span>
          </div>
        </div>
      </div>

      <div className="bottom-div">
        <button
          onClick={() => history.push("/ajo/join")}
          className="bottom-btn"
        >
          BACK
        </button>
      </div>
    </div>
  );
}
