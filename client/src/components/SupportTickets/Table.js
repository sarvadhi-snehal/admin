import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./table.scss";
const Table = ({ data }) => {
  return (
    <table className="table border table-hover">
      <thead>
        <tr className="tr ">
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
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          const { avatar, name } = item.OpenedBy;

          return (
            <tr key={i}>
              <td lassName="td">{item.ID}</td>
              <td className="td ">
                {/* <img src={avatar} alt={name} className="img-fluid" /> */}
                <label className="ms-2  text-orange ">{name}</label>
              </td>
              <td lassName="td">{item.CustEmail}</td>

              <td lassName="td">{item.Sbuject}</td>
              <td lassName="td">
                <button className={`btn-sx bg-${item.type}`}>
                  {item.Status}
                </button>
              </td>

              <td lassName="td">{item.Assignto}</td>
              <td lassName="td">{item.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
