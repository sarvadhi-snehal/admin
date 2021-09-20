import React from "react";
import Table from "./Table";
const SupportTable = () => {
  const data = [
    {
      ID: 123,
      OpenedBy: {
        name: "Ritesh Deshmukh",
        avatar:
          "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      },
      CustEmail: "genelia@gmail.com",
      Sbuject: "How to customize the template?",
      Status: "New",
      type: "warning",
      Assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      ID: 123,
      OpenedBy: {
        name: "Jeneliya desusa",
        avatar:
          "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      },
      CustEmail: "genelia@gmail.com",
      Sbuject: "How to change colors",
      Status: "Complete",
      type: "success",
      Assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      ID: 123,
      OpenedBy: {
        name: "Jeneliya desusa",
        avatar:
          "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      },
      CustEmail: "genelia@gmail.com",
      Sbuject: "How to change colors",
      Status: "Complete",
      type: "success",
      Assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      ID: 123,
      OpenedBy: {
        name: "Ritesh Deshmukh",
        avatar:
          "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      },
      CustEmail: "genelia@gmail.com",
      Sbuject: "How to customize the template?",
      Status: "Pending",
      type: "dark",
      Assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      ID: 123,
      OpenedBy: {
        name: "Ritesh Deshmukh",
        avatar:
          "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      },
      CustEmail: "genelia@gmail.com",
      Sbuject: "How to customize the template?",
      Status: "Complete",
      type: "sucess",
      Assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      ID: 123,
      OpenedBy: {
        name: "Ritesh Deshmukh",
        avatar:
          "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      },
      CustEmail: "genelia@gmail.com",
      Sbuject: "How to customize the template?",
      Status: "New",
      type: "warning",
      Assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      ID: 123,
      OpenedBy: {
        name: "Ritesh Deshmukh",
        avatar:
          "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      },
      CustEmail: "genelia@gmail.com",
      Sbuject: "How to customize the template?",
      Status: "Complete",
      type: "sucess",
      Assignto: "Jonathan",
      date: "14-10-2017",
    },
  ];
  return (
    <div className=" bg-white  d-flex align-items-center flex-column">
      <div className="overflowY-auto w-100">
        <Table data={data} />
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#sdfsd" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#ffasd">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#ffasd">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#ffasd">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#fdf" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SupportTable;
