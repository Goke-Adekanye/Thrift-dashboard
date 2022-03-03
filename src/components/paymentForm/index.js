import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//MUI
import { TextField, Grid, makeStyles, Button as MuiButton, Snackbar } from '@material-ui/core';
import { Alert } from '@mui/material';
import { Close, Check, AttachMoney } from '@material-ui/icons';
import FormField from '../formfields/Formfield';

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
  setPayFormOpen,
  wallet,
  setWallet,
  ajoAmount,
}) {
  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(false);

  //FORM

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <div className='shade-container'>
      <div className='inner flex flex-col flow flow--space-small'>
        <div className='close-icon__container flex'>
          <Close className='close-icon cursor-pointer' onClick={() => setPayFormOpen(false)} />
        </div>

        <form name='contact' method='POST' className='flex flex-col'>
          <Grid container className={classes.form}>
            <Grid item xs={12}>
              <TextField
                {...FormField.amount}
                value={ajoAmount}
                helperText={
                  paymentError &&
                  'You have insufficient funds for this transaction, kindly load wallet.'
                }
                error={paymentError ? true : false}
                className={classes.root}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...FormField.wallet}
                value={wallet}
                className={classes.root}
                onChange={(e) => setWallet(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              {paymentError ? (
                <Link to='/'>
                  <MuiButton className='bold mui-btn proceed' startIcon={<AttachMoney />}>
                    Load Wallet
                  </MuiButton>
                </Link>
              ) : (
                <MuiButton
                  className='bold mui-btn proceed'
                  onClick={() => setOpenAlert(true)}
                  startIcon={<Check />}
                  disabled={ajoAmount === '' || wallet === ''}>
                  Pay Ajo
                </MuiButton>
              )}

              <MuiButton
                className='bold mui-btn cancel'
                startIcon={<Close />}
                onClick={() => setPayFormOpen(false)}>
                Cancel
              </MuiButton>
            </Grid>
          </Grid>
        </form>
        <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleClose} severity='success'>
            Payment successful!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
