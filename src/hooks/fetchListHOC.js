import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

function FetchListHOC(WrappedComponenet, data, size, columns) {
  return function FFF() {
    const [rowsState, setRowsState] = useState({
      page: 0,
      pageSize: size ? size : 7,
      rows: [],
      loading: false,
    });

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

    let tableList = (
      <DataGrid
        rowsPerPageOptions={[5, 10]}
        autoHeight
        disableSelectionOnClick
        columns={columns}
        pagination
        rowCount={data.length}
        {...rowsState}
        paginationMode='server'
        onPageChange={(page) => setRowsState((prev) => ({ ...prev, page }))}
        onPageSizeChange={(pageSize) => setRowsState((prev) => ({ ...prev, pageSize }))}
        className='box-shadow-2 border-radius-1'
      />
    );
    return <WrappedComponenet tableList={tableList} />;
  };
}

export default FetchListHOC;
