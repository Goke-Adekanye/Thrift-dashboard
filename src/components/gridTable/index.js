import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const GridTable = ({ data, rowsState, setRowsState, Columns }) => {
  return (
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
  );
};

export default GridTable;
