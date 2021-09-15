import React from "react";
const data = [
  {
    invoice: 53431,
    user: "Steve N. Horton",
    orderdate: " Oct 22, 2014",

    amount: "45.00",
    status: "Paid",
    type: "success",
  },
  {
    invoice: 53432,
    user: "Charles S Boyle",
    orderdate: "  Oct 24, 2014",

    amount: "45.00",
    status: "Paid",
    type: "success",
  },
  {
    invoice: 53431,
    user: "Steve N. Horton",
    orderdate: " Oct 24, 2014",

    amount: "245.30",
    status: "Shipped",
    type: "primary",
  },
  {
    invoice: 53433,
    user: "Lucy Doe",
    orderdate: " Oct 25, 2014",

    amount: "38.00",
    status: "Shipped",
    type: "primary",
  },
  {
    invoice: 53434,
    user: "Teresa L. Doe",
    orderdate: " Oct 15, 2014",

    amount: "77.99",
    status: "Shipped",
    type: "primary",
  },
  {
    invoice: 53435,
    user: "Steve N. Horton",
    orderdate: " Oct 22, 2014",

    amount: "18.00",
    status: "Paid",
    type: "success",
  },
  {
    invoice: 53435,
    user: "Scott S. Calabrese",
    orderdate: " Oct 22, 2014",

    amount: "45.00",
    status: "Paid",
    type: "warning",
  },
];
const OrderStatus = () => {
  return (
    <article className="bg-white mt-4  mx-3 overflow-auto">
      <div className="order-status p-4">
        <h6 className="p3">ORDER STATUS</h6>
      </div>
      <table className="table table-striped ">
        <thead className="b-0">
          <tr>
            <th scope="col">Invoice</th>
            <th scope="col">User</th>
            <th scope="col">Order date</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.invoice}</td>
              <td>{item.user}</td>
              <td className="text-secondary">{item.orderdate}</td>
              <td>${item.amount}</td>
              <td>
                <label className={`bg-${item.type} text-white btn-sx`}>
                  {item.status}
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};

export default OrderStatus;
