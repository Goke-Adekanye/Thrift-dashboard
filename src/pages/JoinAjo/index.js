import { useEffect, useState } from 'react';
import PageTitle from '../../components/pageTitle';
import { userRows } from '../../dummyData';
import Form from './_form';
import PaymentForm from '../../components/paymentForm';
import Loader from '../../components/loader';
import UserListIcon from '../../components/userListIcon';

//MUI
import { DataGrid } from '@material-ui/data-grid';
import { Tooltip } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import { PeopleAlt } from '@mui/icons-material';

export default function JoinAjo() {
  const walletAmount = 5000;
  const [loading, setLoading] = useState(false);

  const [data] = useState(userRows);
  const [formOpen, setFormOpen] = useState(null);
  const [payFormOpen, setPayFormOpen] = useState(false);
  const [rowsState, setRowsState] = useState({
    page: 0,
    pageSize: 7,
    rows: [],
    loading: false,
  });

  //FORM2
  const [ajoAmount] = useState('5000');
  const [wallet, setWallet] = useState('');

  const paymentError = ajoAmount !== '' && ajoAmount > walletAmount;

  const Button = ({ type }) => {
    return <button className={'type-btn ' + type}>{type}</button>;
  };

  const Columns = [
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

  //  * Simulates server data loading
  //Send to server from client:  and page number(page) and number of records on page(pageSize)
  const loadServerRows = (page, pageSize) =>
    //Send to client from server: records between from, to
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.slice(page * pageSize, (page + 1) * pageSize));
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
    <>
      <div className='main-container flow '>
        <PageTitle text='Ajo List' />

        <DataGrid
          rowsPerPageOptions={[7, 14]}
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

      {formOpen && (
        <Form setFormOpen={setFormOpen} setPayFormOpen={setPayFormOpen} setLoading={setLoading} />
      )}
      {loading && <Loader />}

      {/* PAY AJO POPUP */}
      {payFormOpen && (
        <PaymentForm
          setPayFormOpen={setPayFormOpen}
          wallet={wallet}
          setWallet={setWallet}
          paymentError={paymentError}
          ajoAmount={ajoAmount}
        />
      )}
      {/* END OF PAY AJO POPUP */}
    </>
  );
}
