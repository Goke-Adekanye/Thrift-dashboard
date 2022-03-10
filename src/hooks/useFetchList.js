import { useEffect, useState } from 'react';

const useFetchList = (data, size) => {
  const [rowsState, setRowsState] = useState({
    page: 0,
    pageSize: size ? size : 5,
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

  return { rowsState, setRowsState };
};

export default useFetchList;
