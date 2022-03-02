import React, { useState } from "react";
import PageTitle from "../../components/pageTitle";
import { PeriodicalMembers } from "../../dummyData";
import PaymentForm from "../../components/paymentForm";
import AppOrderTimeline from "../../components/timeline";

//MUI
import { DataGrid } from "@material-ui/data-grid";
import { Tooltip } from "@material-ui/core";
import { Menu, MenuItem } from "@mui/material";
import { FormatListBulleted } from "@mui/icons-material";

export default function AjoPeriodicalMembers() {
  const [data] = useState(PeriodicalMembers);

  //FORM
  const [ajoAmount] = useState("5000");
  const [payFormOpen, setPayFormOpen] = useState(false);
  const [wallet, setWallet] = useState("");

  const walletAmount = 5000;
  const paymentError = ajoAmount !== "" && ajoAmount > walletAmount;

  const handleFormOpen = (id) => {
    setPayFormOpen(id);
    console.log(id);
  };

  //ANCHOR POP-UP
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const columns = [
    { field: "id", headerName: "Nos", width: 110 },
    {
      field: "name",
      headerName: "Member",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <h6 className="userListName">{params.row.name}</h6>
          </div>
        );
      },
    },
    {
      field: "position",
      headerName: "Collection Position",
      width: 200,
      renderCell: (params) => {
        return <div className="totalEstatesDiv">{params.row.position}</div>;
      },
    },
    {
      field: "frequency",
      headerName: "Payment Frequency",
      width: 200,
      renderCell: (params) => {
        return <div className="totalEstatesDiv">{params.row.frequency}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Tooltip title="Pay" placement="top">
              <button
                className="userListEdit"
                onClick={() => handleFormOpen(params.row.id)}
              >
                Make Payment
              </button>
            </Tooltip>

            <>
              <Tooltip title="Payment History" placement="top">
                <span className="iconSpan" onClick={handleClick}>
                  <FormatListBulleted className="userListIcon" />
                </span>
              </Tooltip>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    borderRadius: 4,
                    boxShadow:
                      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <AppOrderTimeline />
                </MenuItem>
              </Menu>
            </>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="userList">
        <PageTitle text="Ajo Members" />

        <DataGrid
          autoHeight
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={7}
          checkboxSelection
          className="muiTable"
        />
      </div>

      <PaymentForm
        payFormOpen={payFormOpen}
        setPayFormOpen={setPayFormOpen}
        wallet={wallet}
        setWallet={setWallet}
        paymentError={paymentError}
        ajoAmount={ajoAmount}
      />
    </>
  );
}
