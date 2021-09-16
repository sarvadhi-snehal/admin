import React from "react";

const Table = ({ id, open, cust, subject, assign, status, date }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID #</th>
          <th scope="col">Open By</th>
          <th scope="col">Cust. Email</th>
          <th scope="col">Subject</th>
          <th scope="col">Status</th>
          <th scope="col">Assign To</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{id}</th>
          <td>{open}</td>
          <td>{cust}</td>
          <td>{subject}</td>
          <td>{subject}</td>
          <td>
            <button class="btn-sx">{status}</button>
          </td>

          <td>{assign}</td>
          <td>{date}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
