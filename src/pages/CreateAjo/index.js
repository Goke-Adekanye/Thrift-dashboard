import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormField from '../../components/formfields/Formfield';

//MUI
import { Button, Grid, makeStyles, Snackbar, TextField } from '@material-ui/core';
import { Add, Check, Close } from '@material-ui/icons';
import { Alert } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  formTitle: {
    ...theme.formTitle,
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
  const [category, setCategory] = useState('default');
  const [categoryType, setCategoryType] = useState('default');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const Select = ({ category }) => {
    return (
      <Grid item xs={12} sm={6} lg={6}>
        <select
          value={categoryType}
          onChange={(e) => setCategoryType(e.target.value)}
          className='classic'>
          <option value='default'>Select {category} Collection Type</option>
          <option value='daily'>daily</option>
          <option value='weekly'>weekly</option>
          <option value='monthly'>monthly</option>
        </select>
      </Grid>
    );
  };

  return (
    <section className='main-container'>
      <div className='box-shadow-1 box-shadow-1'>
        <div className={classes.formTitle}>
          <Add />
          <p className='fs-300 bold margin-left-1'>Create New Ajo</p>
        </div>

        {/* FORM  */}
        <form name='contact' method='POST'>
          <Grid container spacing={4} className='padding-2'>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField {...FormField.ajoname} className={classes.root} />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField {...FormField.creatorsname} className={classes.root} />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField {...FormField.email} className={classes.root} />
            </Grid>

            <Grid item xs={12} sm={6} lg={6}>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='classic'>
                <option value='default'>Select Collection Category</option>
                <option value='periodical'>periodical</option>
                <option value='annual'>annual</option>
                <option value='product'>product</option>
              </select>
            </Grid>
            {category === 'periodical' ? (
              <Select category={category} />
            ) : category === 'annual' ? (
              <Select category={category} />
            ) : category === 'product' ? (
              <Grid item xs={12} sm={6} lg={6}>
                <TextField {...FormField.product} className={classes.root} />
              </Grid>
            ) : (
              ''
            )}

            <Grid item xs={12} sm={6} lg={6}>
              <TextField {...FormField.amount} className={classes.root} />
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
                placeholderText='Select duration'
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={12}>
              <Button
                className='bold mui-btn proceed'
                onClick={() => setOpenAlert(true)}
                startIcon={<Check />}>
                Create
              </Button>
              <Button className='bold mui-btn cancel' startIcon={<Close />}>
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
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity='success'>
          Ajo created successfully!
        </Alert>
      </Snackbar>
      {/* END OF MUI ALERT  */}
    </section>
  );
}
