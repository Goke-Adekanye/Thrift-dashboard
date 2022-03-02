import { useState } from "react";
import PageTitle from "../../components/pageTitle";
import { userRows } from "../../dummyData";
import PaymentForm from "../../components/paymentForm";
import Loader from "../../components/loader";
import UserListIcon from "../../components/userListIcon";

//MUI
import { DataGrid } from "@material-ui/data-grid";
import {
  Tooltip,
  TextField,
  Grid,
  makeStyles,
  Button as MuiButton,
} from "@material-ui/core";
import { Checkbox } from "@mui/material";
import { Close, Check, Visibility } from "@material-ui/icons";
import { PeopleAlt } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  form: {
    ...theme.form,
  },
  root: {
    ...theme.root,
  },
  checkBox: {
    ...theme.root,
    display: "flex",
    alignItems: "center",
  },
  tc: {
    textDecoration: "underline",
  },
}));

export default function JoinAjo() {
  const walletAmount = 5000;
  const [loading, setLoading] = useState(false);

  const classes = useStyles();
  const [data] = useState(userRows);
  const [FormOpen, setFormOpen] = useState("");
  const [payFormOpen, setPayFormOpen] = useState(false);

  //FORM1
  const [firstName] = useState("James");
  const [lastName] = useState("West");
  const [email] = useState("jameswest@example.com");
  const [phone] = useState("08095555578");
  //FORM2
  const [ajoAmount] = useState("5000");
  const [wallet, setWallet] = useState("");

  const paymentError = ajoAmount !== "" && ajoAmount > walletAmount;

  const [checked, setChecked] = useState(false);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleInfooSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setFormOpen("");
      setLoading(false);
      setPayFormOpen(true);
    }, 3000);
  };

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const columns = [
    {
      field: "admin",
      headerName: "Ajo Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <h6 className="userListName">{params.row.name}</h6>
          </div>
        );
      },
    },
    { field: "category", headerName: "Category", width: 140 },
    { field: "creatorName", headerName: "Creator's Name", width: 180 },
    {
      field: "TotalEstates",
      headerName: "Members",
      width: 140,
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
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Tooltip title="Join" placement="top">
              <button
                className="userListEdit"
                onClick={() => setFormOpen(params.row.id)}
              >
                Apply
              </button>
            </Tooltip>

            <UserListIcon
              title="view"
              link={"/ajo/detail/" + params.row.id}
              icon={<Visibility className="userListIcon" />}
            />
            <UserListIcon
              title="members"
              link={`/ajo/members/${params.row.category}/` + params.row.id}
              icon={<PeopleAlt className="userListIcon" />}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="userList">
        <PageTitle text="Ajo List" />

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

      <div className={`apply-container ${FormOpen && "show"}`}>
        <div className="form-container">
          <div className="close-icon-container">
            <Close className="close-icon" onClick={() => setFormOpen("")} />
          </div>

          <form name="contact" method="POST">
            <Grid container className={classes.form}>
              <Grid item xs={12} className={classes.root}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  type="text"
                  name="firstname"
                  label="First Name"
                  value={firstName}
                  focused
                />
              </Grid>
              <Grid item xs={12} className={classes.root}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  type="text"
                  name="lastname"
                  label="Last Name"
                  value={lastName}
                  focused
                />
              </Grid>
              <Grid item xs={12} className={classes.root}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  type="email"
                  name="email"
                  label="Email"
                  value={email}
                  focused
                />
              </Grid>
              <Grid item xs={12} className={classes.root}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  type="text"
                  name="phone"
                  label="Phone"
                  value={phone}
                  focused
                />
              </Grid>
              <Grid item xs={12} className={classes.root}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  type="text"
                  name="guarantor"
                  label="Guarantor's Name"
                  focused
                />
              </Grid>
              <Grid item xs={12} className={classes.checkBox}>
                <Checkbox
                  checked={checked}
                  onChange={handleCheck}
                  inputProps={{ "aria-label": "controlled" }}
                  sx={{
                    color: "#062863",
                    "&.Mui-checked": {
                      color: "#062863",
                    },
                  }}
                />

                <span>
                  I agree to the{" "}
                  <a
                    className={classes.tc}
                    href="##"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and Conditions
                  </a>
                </span>
              </Grid>

              <Grid item xs={12}>
                <MuiButton
                  style={{
                    marginRight: 15,
                    backgroundColor: "#062863",
                    fontWeight: 600,
                    color: "#FFF",
                    padding: "5px 15px",
                  }}
                  onClick={handleInfooSubmit}
                  disabled={!checked}
                  startIcon={<Check />}
                >
                  Apply
                </MuiButton>
                <MuiButton
                  style={{
                    backgroundColor: "rgb(243, 62, 62)",
                    fontWeight: 600,
                    color: "#FFF",
                    padding: "5px 15px",
                  }}
                  startIcon={<Close />}
                  onClick={() => setFormOpen("")}
                >
                  Cancel
                </MuiButton>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>

      {loading && <Loader />}

      {/* PAY AJO POPUP */}
      <PaymentForm
        payFormOpen={payFormOpen}
        setPayFormOpen={setPayFormOpen}
        wallet={wallet}
        setWallet={setWallet}
        paymentError={paymentError}
        ajoAmount={ajoAmount}
      />
      {/* END OF PAY AJO POPUP */}
    </>
  );
}
