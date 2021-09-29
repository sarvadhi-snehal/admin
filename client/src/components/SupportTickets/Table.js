import { useMemo } from "react";
import { useTable, usePagination } from "react-table";

import "./table.scss";
const Table = ({ tabelcolumns, tabledata }) => {
  const data = useMemo(() => tabledata, [tabledata]);
  const columns = useMemo(() => tabelcolumns, [tabelcolumns]);
  //
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
    <>
      <table {...getTableProps()} className="table border w-100 table-hover">
        <thead>
          {/* <tr className="tr ">
          <th className="p-3 " scope="col">
            ID #
          </th>
          <th className="p-3 " scope="col">
            Open By
          </th>
          <th className="p-3 " scope="col">
            Cust. Email
          </th>
          <th className="p-3 " scope="col">
            Subject
          </th>
          <th className="p-3 " scope="col">
            Status
          </th>
          <th className="p-3 " scope="col">
            Assign To
          </th>
          <th className="p-3 " scope="col">
            Date
          </th>
        </tr> */}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="p-3 " scope="col" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* <tbody> */}
        {/*{data.map((item, i) => {
          const { avatar, name } = item.OpenedBy;

          return (
            <tr key={i}>
              <td lassName="td">{item.ID}</td>
              <td className="td ">
                //<img src={avatar} alt={name} className="img-fluid" /> 
                <label className="ms-2  text-orange ">{name}</label>
              </td>
              <td lassName="td">{item.CustEmail}</td>

              <td lassName="td">{item.Sbuject}</td>
              <td lassName="td">
                <button className="page-link"   className={`btn-sx bg-${item.type}`}>
                  {item.Status}
                </button>
              </td>

              <td lassName="td">{item.Assignto}</td>
              <td lassName="td">{item.date}</td>
            </tr>
          );
        })}
      </tbody>*/}
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
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
              <button onClick={() => gotoPage(2)} class="page-link">
                3
              </button>
            </li>
            <li class="page-item">
              <button onClick={() => gotoPage(3)} class="page-link">
                4
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
    </>
  );
};

export default Table;
