import React, { useState } from 'react';
import GridTable from '../../components/gridTable';
//MUI
import { Tab, Tabs, makeStyles, Tooltip } from '@material-ui/core';
import { useFetchList } from '../../hooks';

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
  const [tabValue, setTabValue] = useState('all');
  const classes = useStyles();

  let myData =
    tabValue === 'credit'
      ? data.filter((item) => item.type === 'credit')
      : tabValue === 'debit'
      ? data.filter((item) => item.type === 'debit')
      : data;

  const { rowsState, setRowsState } = useFetchList(myData, 2);
  // console.log(rowsState.rows);

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

      <GridTable data={data} rowsState={rowsState} setRowsState={setRowsState} Columns={Columns} />
    </div>
  );
}
