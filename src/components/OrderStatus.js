import React from "react";
import { FaPlane } from "react-icons/fa";
const data = [
  {
    invoice: 53431,
    user: "Steve N. Horton",
    orderdate: " Oct 22, 2014",
    trackingNumber: null,
    amount: "45.00",
    status: "Paid",
    type: "success",
  },
  {
    invoice: 53432,
    user: "Charles S Boyle",
    orderdate: "  Oct 24, 2014",
    trackingNumber: "CGX0089734531",
    amount: "45.00",
    status: "Paid",
    type: "success",
  },
  {
    invoice: 53431,
    user: "Steve N. Horton",
    orderdate: " Oct 24, 2014",
    trackingNumber: "CGX0089734532",

    amount: "245.30",
    status: "Shipped",
    type: "primary",
  },
  {
    invoice: 53433,
    user: "Lucy Doe",
    orderdate: " Oct 25, 2014",
    trackingNumber: "CGX0089734533",

    amount: "38.00",
    status: "Shipped",
    type: "primary",
  },
  {
    invoice: 53434,
    user: "Teresa L. Doe",
    orderdate: " Oct 15, 2014",
    trackingNumber: null,
    amount: "77.99",
    status: "Shipped",
    type: "primary",
  },
  {
    invoice: 53435,
    user: "Steve N. Horton",
    orderdate: " Oct 22, 2014",
    trackingNumber: null,
    amount: "18.00",
    status: "Paid",
    type: "success",
  },
  {
    invoice: 53435,
    user: "Scott S. Calabrese",
    orderdate: " Oct 22, 2014",
    trackingNumber: null,
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
      <div className="overflow-auto  ">
        <table className="table table-striped ">
          <thead className="b-0">
            <tr className="tr text-center">
              <th scope="col">Invoice</th>
              <th scope="col">User</th>
              <th scope="col">Order date</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Tracking Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="tr text-center">
                <td>{item.invoice}</td>
                <td>{item.user}</td>
                <td className="text-secondary">{item.orderdate}</td>
                <td>${item.amount}</td>
                <td>
                  <label className={`bg-${item.type} text-white btn-sx`}>
                    {item.status}
                  </label>
                </td>
                <td>
                  {item.trackingNumber && <FaPlane />}{" "}
                  {item.trackingNumber == null ? "-" : item.trackingNumber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default OrderStatus;
