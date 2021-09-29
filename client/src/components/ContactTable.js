import { useMemo } from "react";

import { useTable, usePagination } from "react-table";
const ContactTable = ({ tableColumns, tableData }) => {
  const data = useMemo(() => tableData, [tableData]);
  const columns = useMemo(() => tableColumns, [tableColumns]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },

    usePagination
  );
  return (
    <div className="overflow-auto m-3">
      <div className="  ">
        <table
          class="w-100 table table-hover table-bordered "
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                <th>No</th>
                {headerGroup.headers.map((column, i) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  <td className=" p-2">{i + 1}</td>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className="p-2">
                        <p className="w-100 text-nowrap">
                          {" "}
                          {cell.render("Cell")}
                        </p>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex-center p-2 flex-column">
        <nav aria-label="Page navigation ">
          <ul class="pagination pagination-sm">
            <li class="page-item">
              <button
                className="page-link"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                {"<<"}
              </button>
            </li>
            <li class="page-item">
              <button
                className="page-link"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                {"<"}
              </button>
            </li>
            <li class="page-item">
              <button onClick={() => gotoPage(0)} class="page-link">
                1
              </button>
            </li>
            <li class="page-item">
              <button onClick={() => gotoPage(1)} class="page-link">
                2
              </button>
            </li>
            <li class="page-item">
              <button onClick={() => gotoPage(3)} class="page-link">
                3
              </button>
            </li>

            <li class="page-item">
              <button
                className="page-link"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                {">"}
              </button>
            </li>
            <li class="page-item">
              <button
                className="page-link"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {">>"}
              </button>
            </li>
          </ul>
        </nav>
        <button className="btn-sx bg-orange">
          {" "}
          {pageIndex + 1} of {pageOptions.length}
        </button>
      </div>
    </div>
  );
};

export default ContactTable;
