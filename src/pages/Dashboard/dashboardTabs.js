import React, { useState } from 'react';
//MUI
import { Tab, Tabs, makeStyles, Tooltip } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  tabs: {
    marginBottom: '20px',
    color: '#062863',

    '& .MuiTabs-indicator': {
      backgroundColor: '#062863',
    },
    '& .Mui-selected': {
      backgroundColor: '#f8f9fa',
    },
  },
}));

export default function DashboardTabs({ data }) {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState('all');
  const [rowsState, setRowsState] = useState({
    page: 0,
    pageSize: 2,
    rows: [],
    loading: false,
  });

  // console.log(rowsState.rows);
  let myData;
  if (tabValue === 'all') {
    myData = data;
  } else if (tabValue === 'credit') {
    myData = data.filter((item) => item.type === 'credit');
  } else {
    myData = data.filter((item) => item.type === 'debit');
  }

  const Field = ({ field }) => {
    return (
      <div className='align-justify__center flex'>
        <h6 className='fs-200'>{field}</h6>
      </div>
    );
  };

  const Button = ({ type }) => {
    return <button className={'type-btn ' + type}>{type}</button>;
  };

  const Columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      renderCell: (params) => <Field field={params.row.name} />,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 150,
      renderCell: (params) => <Field field={params.row.amount} />,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 120,
      renderCell: (params) => <Button type={params.row.type} />,
    },
    {
      field: 'time',
      headerName: 'Date',
      width: 120,
      renderCell: (params) => <Field field={params.row.time} />,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <Tooltip title='details' placement='top'>
            <button className='edit-btn cursor-pointer'>Details</button>
          </Tooltip>
        );
      },
    },
  ];

  //  * Simulates server data loading
  //Send to server from client:  and page number(page) and number of records on page(pageSize)
  const loadServerRows = (page, pageSize) =>
    //Send to client from server: records between from, to
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(myData.slice(page * pageSize, (page + 1) * pageSize));
      }, 1000); // simulate network latency
    });

  //useEffect
  useEffect(() => {
    let active = true;

    (async () => {
      setRowsState((prev) => ({ ...prev, loading: true }));
      const newRows = await loadServerRows(rowsState.page, rowsState.pageSize);

      if (!active) {
        return;
      }

      setRowsState((prev) => ({ ...prev, loading: false, rows: newRows }));
    })();

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowsState.page, rowsState.pageSize, data]);

  return (
    <div>
      <Tabs
        value={tabValue}
        className={classes.tabs}
        onChange={(event, newValue) => setTabValue(newValue)}>
        <Tab value='all' label='all' />
        <Tab value='credit' label='credit' />
        <Tab value='debit' label='debit' />
      </Tabs>

      {tabValue === 'all' ? (
        <DataGrid
          rowsPerPageOptions={[2, 5, 10]}
          autoHeight
          disableSelectionOnClick
          columns={Columns}
          pagination
          rowCount={myData.length}
          {...rowsState}
          paginationMode='server'
          onPageChange={(page) => setRowsState((prev) => ({ ...prev, page }))}
          onPageSizeChange={(pageSize) => setRowsState((prev) => ({ ...prev, pageSize }))}
          className='box-shadow-2 border-radius-1'
        />
      ) : tabValue === 'credit' ? (
        <DataGrid
          rowsPerPageOptions={[2, 5, 10]}
          autoHeight
          disableSelectionOnClick
          columns={Columns}
          pagination
          rowCount={myData.length}
          {...rowsState}
          paginationMode='server'
          onPageChange={(page) => setRowsState((prev) => ({ ...prev, page }))}
          onPageSizeChange={(pageSize) => setRowsState((prev) => ({ ...prev, pageSize }))}
          className='box-shadow-2 border-radius-1'
        />
      ) : (
        <DataGrid
          rowsPerPageOptions={[2, 5, 10]}
          autoHeight
          disableSelectionOnClick
          columns={Columns}
          pagination
          rowCount={myData.length}
          {...rowsState}
          paginationMode='server'
          onPageChange={(page) => setRowsState((prev) => ({ ...prev, page }))}
          onPageSizeChange={(pageSize) => setRowsState((prev) => ({ ...prev, pageSize }))}
          className='box-shadow-2 border-radius-1'
        />
      )}
    </div>
  );
}
