import React, { useState } from "react";
import PageTitle from "../../components/pageTitle";
import { PeriodicalMembers } from "../../dummyData";
import PaymentForm from "../../components/paymentForm";
//MUI
import { DataGrid } from "@material-ui/data-grid";
import { Tooltip } from "@material-ui/core";

export default function AjoAnnualMembers(props) {
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
      field: "year",
      headerName: "Year In View",
      width: 165,
      renderCell: (params) => {
        return <div className="totalEstatesDiv">{params.row.year}</div>;
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
          <Tooltip title="Pay" placement="top">
            <button
              className="userListEdit"
              onClick={() => handleFormOpen(params.row.id)}
            >
              Make Payment
            </button>
          </Tooltip>
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
