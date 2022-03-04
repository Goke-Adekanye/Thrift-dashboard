import React, { useState } from 'react';
import PageTitle from '../../components/pageTitle';
import { PeriodicalMembers } from '../../dummyData';
import PaymentForm from '../../components/paymentForm';
import AppOrderTimeline from '../../components/timeline';
import { useFetchList } from '../../hooks';

//MUI
import { DataGrid } from '@material-ui/data-grid';
import { Tooltip } from '@material-ui/core';
import { Menu, MenuItem } from '@mui/material';
import { FormatListBulleted } from '@mui/icons-material';

export default function AjoPeriodicalMembers() {
  const [data] = useState(PeriodicalMembers);
  const { rowsState, setRowsState } = useFetchList(data, 5);

  //FORM
  const [ajoAmount] = useState('5000');
  const [payFormOpen, setPayFormOpen] = useState(false);
  const [wallet, setWallet] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const walletAmount = 5000;
  const paymentError = ajoAmount !== '' && ajoAmount > walletAmount;

  const handleFormOpen = (id) => {
    setPayFormOpen(id);
  };

  //ANCHOR POP-UP
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
      field: 'position',
      headerName: 'Collection Position',
      width: 200,
      renderCell: (params) => <p className='margin-auto'>{params.row.position}</p>,
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
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Tooltip title='Pay' placement='top'>
              <button
                className='edit-btn cursor-pointer'
                onClick={() => handleFormOpen(params.row.id)}>
                Make Payment
              </button>
            </Tooltip>

            <>
              <Tooltip title='Payment History' placement='top'>
                <span
                  className='icon-span flex align-justify__center cursor-pointer'
                  onClick={handleClick}>
                  <FormatListBulleted className='icon-font' />
                </span>
              </Tooltip>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    borderRadius: 4,
                    boxShadow:
                      'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                <MenuItem>
                  <AppOrderTimeline />
                </MenuItem>
              </Menu>
            </>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className='main-container flow'>
        <PageTitle text='Ajo Members' />

        <DataGrid
          rowsPerPageOptions={[5, 10]}
          autoHeight
          disableSelectionOnClick
          columns={Columns}
          pagination
          rowCount={data.length}
          {...rowsState}
          paginationMode='server'
          onPageChange={(page) => setRowsState((prev) => ({ ...prev, page }))}
          onPageSizeChange={(pageSize) => setRowsState((prev) => ({ ...prev, pageSize }))}
          className='box-shadow-2 border-radius-1'
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
