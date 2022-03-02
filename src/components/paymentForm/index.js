import React, { useState } from "react";
import { Link } from "react-router-dom";
//MUI
import {
  TextField,
  Grid,
  makeStyles,
  Button as MuiButton,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@mui/material";
import { Close, Check, AttachMoney } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  form: {
    ...theme.form,
  },
  root: {
    ...theme.root,
  },
}));

export default function PaymentForm({
  paymentError,
  payFormOpen,
  setPayFormOpen,
  wallet,
  setWallet,
  ajoAmount,
}) {
  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(false);

  //FORM

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <div className={`apply-container ${payFormOpen && "show"}`}>
      <div className="form-container">
        <div className="close-icon-container">
          <Close className="close-icon" onClick={() => setPayFormOpen(false)} />
        </div>

        <form name="contact" method="POST">
          <Grid container className={classes.form}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="amount"
                label="Amount"
                value={ajoAmount}
                helperText={
                  paymentError &&
                  "You have insufficient funds for this transaction, kindly load wallet."
                }
                error={paymentError ? true : false}
                className={classes.root}
                focused
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="wallet"
                label="Enter Wallet"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                className={classes.root}
                focused
              />
            </Grid>

            <Grid item xs={12}>
              {paymentError ? (
                <Link to="/">
                  <MuiButton
                    style={{
                      marginRight: 15,
                      backgroundColor: "#062863",
                      fontWeight: 600,
                      color: "#FFF",
                      padding: "5px 15px",
                    }}
                    startIcon={<AttachMoney />}
                  >
                    Load Wallet
                  </MuiButton>
                </Link>
              ) : (
                <MuiButton
                  style={{
                    marginRight: 15,
                    backgroundColor: "#062863",
                    fontWeight: 600,
                    color: "#FFF",
                    padding: "5px 15px",
                  }}
                  onClick={() => setOpenAlert(true)}
                  startIcon={<Check />}
                  disabled={ajoAmount === "" || wallet === ""}
                >
                  Pay Ajo
                </MuiButton>
              )}

              <MuiButton
                style={{
                  backgroundColor: "rgb(243, 62, 62)",
                  fontWeight: 600,
                  color: "#FFF",
                  padding: "5px 15px",
                }}
                startIcon={<Close />}
                onClick={() => setPayFormOpen(false)}
              >
                Cancel
              </MuiButton>
            </Grid>
          </Grid>
        </form>
        <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={handleClose} severity="success">
            Payment successful!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
