import React, { useState } from 'react';
import FormField from '../../components/formfields/Formfield';

//MUI
import { TextField, Grid, makeStyles, Button as MuiButton } from '@material-ui/core';
import { Checkbox } from '@mui/material';
import { Close, Check } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  form: {
    ...theme.form,
  },
  root: {
    ...theme.root,
  },
  checkBox: {
    ...theme.root,
    display: 'flex',
    alignItems: 'center',
  },
  tc: {
    textDecoration: 'underline',
  },
}));

export default function Form({ setFormOpen, setPayFormOpen, setLoading }) {
  const [checked, setChecked] = useState(false);
  const [state] = useState({
    firstName: 'James',
    lastName: 'West',
    email: 'jameswest@example.com',
    phone: '08095555578',
  });
  const classes = useStyles();

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  const handleInfooSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setFormOpen('');
      setLoading(false);
      setPayFormOpen(true);
    }, 3000);
  };

  return (
    <div className='shade-container'>
      <div className='inner flex flex-col flow flow--space-small'>
        <div className='close-icon__container flex'>
          <Close className='close-icon cursor-pointer' onClick={() => setFormOpen(null)} />
        </div>

        <form name='contact' method='POST' className='flex flex-col'>
          <Grid container className={classes.form}>
            <Grid item xs={12} className={classes.root}>
              <TextField {...FormField.firstname} value={state.firstName} />
            </Grid>
            <Grid item xs={12} className={classes.root}>
              <TextField {...FormField.lastname} value={state.lastName} />
            </Grid>
            <Grid item xs={12} className={classes.root}>
              <TextField {...FormField.email} value={state.email} />
            </Grid>
            <Grid item xs={12} className={classes.root}>
              <TextField {...FormField.phone} value={state.phone} />
            </Grid>
            <Grid item xs={12} className={classes.root}>
              <TextField {...FormField.guarantor} />
            </Grid>
            <Grid item xs={12} className={classes.checkBox}>
              <Checkbox
                checked={checked}
                onChange={handleCheck}
                style={{ color: '#062863', '&.Mui-checked': { color: '#062863' } }}
              />

              <span>
                I agree to the{' '}
                <a className={classes.tc} href='##' target='_blank' rel='noopener noreferrer'>
                  Terms and Conditions
                </a>
              </span>
            </Grid>

            <Grid item xs={12}>
              <MuiButton
                className='bold mui-btn proceed'
                onClick={handleInfooSubmit}
                disabled={!checked}
                startIcon={<Check />}>
                Apply
              </MuiButton>
              <MuiButton
                className='bold mui-btn cancel'
                startIcon={<Close />}
                onClick={() => setFormOpen(null)}>
                Cancel
              </MuiButton>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
