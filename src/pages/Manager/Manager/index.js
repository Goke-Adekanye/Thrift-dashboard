import { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/pageTitle";
import { userRows } from "../../../dummyData";
//MUI
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Settings } from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";

export default function Manager() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const columns = [
    {
      field: "admin",
      headerName: "Estate Manager",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            <h6 className="userListName">{params.row.username}</h6>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "phone",
      headerName: "Phone",
      width: 140,
    },
    {
      field: "TotalEstates",
      headerName: "Total-Estates",
      width: 150,
      renderCell: (params) => {
        return <div className="totalEstatesDiv">{params.row.TotalEstates}</div>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="widgetLgStatus">
            <Button type={params.row.status} />
          </div>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Tooltip title="Details" placement="top">
              <Link to={"/admin/managers/details/" + params.row.id}>
                <button className="userListEdit">Details</button>
              </Link>
            </Tooltip>
            <Tooltip title="Delete" placement="top">
              <span className="iconSpan">
                <DeleteOutline
                  className="userListIcon"
                  onClick={() => handleDelete(params.row.id)}
                />
              </span>
            </Tooltip>

            <Tooltip title="Edit" placement="top">
              <Link to={"/admin/managers/edit/" + params.row.id}>
                <span className="iconSpan">
                  <Edit className="userListIcon" />
                </span>
              </Link>
            </Tooltip>
            <Tooltip title="Permissions" placement="top">
              <span className="iconSpan">
                <Settings className="userListIcon" />
              </span>
            </Tooltip>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <PageTitle
        text="Estate Manager"
        buttonText="new Estate Manager"
        link="/admin/managers/add"
      />

      <DataGrid
        autoHeight
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={6}
        checkboxSelection
        className="muiTable"
      />
    </div>
  );
}
