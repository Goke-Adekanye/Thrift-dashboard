import React, { useState } from 'react';
import { PeriodicalMembers } from '../../dummyData';
import PageTitle from '../../components/pageTitle';
import PaymentForm from '../../components/paymentForm';
import GridTable from '../../components/gridTable';
import { useFetchList } from '../../hooks';

//MUI
import { Tooltip } from '@material-ui/core';

export default function AjoAnnualMembers() {
  const [data] = useState(PeriodicalMembers);
  const { rowsState, setRowsState } = useFetchList(data, 5);

  //FORM
  const [ajoAmount] = useState('5000');
  const [payFormOpen, setPayFormOpen] = useState(false);
  const [wallet, setWallet] = useState('');

  const walletAmount = 5000;
  const paymentError = ajoAmount !== '' && ajoAmount > walletAmount;

  const handleFormOpen = (id) => {
    setPayFormOpen(id);
  };

  const Columns = [
    { field: 'id', headerName: 'Nos', width: 110 },
    {
      field: 'name',
      headerName: 'Member',
      width: 140,
      renderCell: (params) => <p className='bold'>{params.row.name}</p>,
    },
    {
      field: 'year',
      headerName: 'Year In View',
      width: 165,
      renderCell: (params) => <p className='margin-auto'>{params.row.year}</p>,
    },
    {
      field: 'frequency',
      headerName: 'Payment Frequency',
      width: 200,
      renderCell: (params) => <p className='margin-auto'>{params.row.frequency}</p>,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <Tooltip title='Pay' placement='top'>
            <button
              className='edit-btn cursor-pointer'
              onClick={() => handleFormOpen(params.row.id)}>
              Make Payment
            </button>
          </Tooltip>
        );
      },
    },
  ];

  return (
    <>
      <div className='main-container flow'>
        <PageTitle text='Ajo Members' />

        <GridTable
          data={data}
          rowsState={rowsState}
          setRowsState={setRowsState}
          Columns={Columns}
        />
      </div>

      {payFormOpen && (
        <PaymentForm
          setPayFormOpen={setPayFormOpen}
          wallet={wallet}
          setWallet={setWallet}
          paymentError={paymentError}
          ajoAmount={ajoAmount}
        />
      )}
    </>
  );
}
