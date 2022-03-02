import React, { useState } from "react";
import "./CreateAjo.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//MUI
import {
  Button,
  Grid,
  makeStyles,
  Snackbar,
  TextField,
} from "@material-ui/core";
import { Add, Check, Close } from "@material-ui/icons";
import { Alert } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  section: {
    ...theme.section,
    marginTop: 20,
  },
  container: {
    ...theme.container,
  },
  formTitle: {
    ...theme.formTitle,
  },
  icon: {
    ...theme.icon,
  },
  formText: {
    ...theme.formText,
  },
  form: {
    ...theme.form,
  },
  label: {
    ...theme.label,
  },
  uploadIcon: {
    ...theme.uploadIcon,
  },
  root: {
    ...theme.root,
  },
}));

export default function AddAdmin() {
  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  //FORM FIELDS
  const [category, setCategory] = useState(10);
  const [categoryType, setCategoryType] = useState(10);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.formTitle}>
          <Add className={classes.titleIcon} />
          <h1 className={classes.formText}>Create New Ajo</h1>
        </div>

        {/* FORM  */}
        <form name="contact" method="POST">
          <Grid container spacing={4} className={classes.form}>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="ajoname"
                label="Ajo Name"
                className={classes.root}
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="creatorsname"
                label="Creators Name"
                className={classes.root}
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="email"
                name="max"
                label="Max Members"
                className={classes.root}
                focused
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={6}>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="classic"
              >
                <option value={10}>Select Collection Category</option>
                <option value="periodical">periodical</option>
                <option value="annual">annual</option>
                <option value="product">product</option>
              </select>
            </Grid>
            {category === "periodical" ? (
              <Grid item xs={12} sm={6} lg={6}>
                <select
                  value={categoryType}
                  onChange={(e) => setCategoryType(e.target.value)}
                  className="classic"
                >
                  <option value={10}>Select Periodical Collection Type</option>
                  <option value="daily">daily</option>
                  <option value="weekly">weekly</option>
                  <option value="monthly">monthly</option>
                </select>
              </Grid>
            ) : category === "annual" ? (
              <Grid item xs={12} sm={6} lg={6}>
                <select
                  value={categoryType}
                  onChange={(e) => setCategoryType(e.target.value)}
                  className="classic"
                >
                  <option value={10}>Select Annual Collection Type</option>
                  <option value="daily">daily</option>
                  <option value="weekly">weekly</option>
                  <option value="monthly">monthly</option>
                </select>
              </Grid>
            ) : category === "product" ? (
              <Grid item xs={12} sm={6} lg={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  type="text"
                  name="producttoshare"
                  label="Enter Product"
                  className={classes.root}
                  focused
                />
              </Grid>
            ) : (
              ""
            )}

            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="amount"
                label="Select Amount.. (e.g 5000)"
                className={classes.root}
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <DatePicker
                selectsRange={true}
                minDate={new Date()}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                placeholderText="Select duration"
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={12}>
              <Button
                style={{
                  marginRight: 15,
                  backgroundColor: "#062863",
                  fontWeight: 600,
                  color: "#FFF",
                  padding: "5px 15px",
                }}
                onClick={() => setOpenAlert(true)}
                startIcon={<Check />}
              >
                Create
              </Button>
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
            </Grid>
          </Grid>
        </form>
        {/* END OF FORM  */}
      </div>
      {/* MUI ALERT  */}
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success">
          Ajo created successfully!
        </Alert>
      </Snackbar>
      {/* END OF MUI ALERT  */}
    </section>
  );
}
