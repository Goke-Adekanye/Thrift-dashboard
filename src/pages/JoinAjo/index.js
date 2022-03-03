import { useState } from 'react';
import PageTitle from '../../components/pageTitle';
import { userRows } from '../../dummyData';
import PaymentForm from '../../components/paymentForm';
import Loader from '../../components/loader';
import UserListIcon from '../../components/userListIcon';
import FormField from '../../components/formfields/Formfield';

//MUI
import { DataGrid } from '@material-ui/data-grid';
import { Tooltip, TextField, Grid, makeStyles, Button as MuiButton } from '@material-ui/core';
import { Checkbox } from '@mui/material';
import { Close, Check, Visibility } from '@material-ui/icons';
import { PeopleAlt } from '@mui/icons-material';

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

export default function JoinAjo() {
  const walletAmount = 5000;
  const [loading, setLoading] = useState(false);

  const classes = useStyles();
  const [data] = useState(userRows);
  const [formOpen, setFormOpen] = useState(null);
  const [payFormOpen, setPayFormOpen] = useState(false);

  //FORM1
  const [firstName] = useState('James');
  const [lastName] = useState('West');
  const [email] = useState('jameswest@example.com');
  const [phone] = useState('08095555578');
  //FORM2
  const [ajoAmount] = useState('5000');
  const [wallet, setWallet] = useState('');

  const paymentError = ajoAmount !== '' && ajoAmount > walletAmount;

  const [checked, setChecked] = useState(false);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleInfooSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setFormOpen('');
      setLoading(false);
      setPayFormOpen(true);
    }, 3000);
  };

  const Button = ({ type }) => {
    return <button className={'type-btn ' + type}>{type}</button>;
  };

  const columns = [
    {
      field: 'admin',
      headerName: 'Ajo Name',
      width: 200,
      renderCell: (params) => <p className='bold'>{params.row.name}</p>,
    },
    { field: 'category', headerName: 'Category', width: 140 },
    { field: 'creatorName', headerName: "Creator's Name", width: 180 },
    {
      field: 'TotalEstates',
      headerName: 'Members',
      width: 140,
      renderCell: (params) => <p className='margin-auto'>{params.row.TotalEstates}</p>,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => <Button type={params.row.status} />,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Tooltip title='Join' placement='top'>
              <button
                className='edit-btn cursor-pointer'
                onClick={() => setFormOpen(params.row.id)}>
                Apply
              </button>
            </Tooltip>

            <UserListIcon
              title='view'
              link={'/ajo/detail/' + params.row.id}
              icon={<Visibility className='icon-font' />}
            />
            <UserListIcon
              title='members'
              link={`/ajo/members/${params.row.category}/` + params.row.id}
              icon={<PeopleAlt className='icon-font' />}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className='main-container flow '>
        <PageTitle text='Ajo List' />

        <DataGrid
          autoHeight
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={7}
          className='box-shadow-2 border-radius-1'
        />
      </div>

      {formOpen && (
        <div className='shade-container'>
          <div className='inner flex flex-col flow flow--space-small'>
            <div className='close-icon__container flex'>
              <Close className='close-icon cursor-pointer' onClick={() => setFormOpen(null)} />
            </div>

            <form name='contact' method='POST' className='flex flex-col'>
              <Grid container className={classes.form}>
                <Grid item xs={12} className={classes.root}>
                  <TextField {...FormField.firstname} value={firstName} />
                </Grid>
                <Grid item xs={12} className={classes.root}>
                  <TextField {...FormField.lastname} value={lastName} />
                </Grid>
                <Grid item xs={12} className={classes.root}>
                  <TextField {...FormField.email} value={email} />
                </Grid>
                <Grid item xs={12} className={classes.root}>
                  <TextField {...FormField.phone} value={phone} />
                </Grid>
                <Grid item xs={12} className={classes.root}>
                  <TextField {...FormField.guarantor} />
                </Grid>
                <Grid item xs={12} className={classes.checkBox}>
                  <Checkbox
                    checked={checked}
                    onChange={handleCheck}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{
                      color: '#062863',
                      '&.Mui-checked': {
                        color: '#062863',
                      },
                    }}
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
                    className='bold mui-btn'
                    style={{ marginRight: 15, backgroundColor: '#062863' }}
                    onClick={handleInfooSubmit}
                    disabled={!checked}
                    startIcon={<Check />}>
                    Apply
                  </MuiButton>
                  <MuiButton
                    className='bold mui-btn'
                    style={{ backgroundColor: 'rgb(243, 62, 62)' }}
                    startIcon={<Close />}
                    onClick={() => setFormOpen(null)}>
                    Cancel
                  </MuiButton>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      )}

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
