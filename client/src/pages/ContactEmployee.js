import { useMemo } from "react";
import Table from "../components/ContactTable";
const ContactEmployee = () => {
  const data = [
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Designer",
      type: "danger",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Arijit",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Devloper",
      type: "primary",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Acountant",
      type: "success",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Hr",
      type: "dark",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Manager",
      type: "danger",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Chairman",
      type: "warning",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Designer",
      type: "danger",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Designer",
      type: "danger",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Arijit",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Devloper",
      type: "primary",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Acountant",
      type: "success",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Hr",
      type: "dark",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Manager",
      type: "danger",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Chairman",
      type: "warning",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Designer",
      type: "danger",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Designer",
      type: "danger",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Arijit",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Devloper",
      type: "primary",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Acountant",
      type: "success",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Hr",
      type: "dark",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Manager",
      type: "danger",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Chairman",
      type: "warning",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Designer",
      type: "danger",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Designer",
      type: "danger",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Arijit",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Devloper",
      type: "primary",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Acountant",
      type: "success",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Hr",
      type: "dark",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Manager",
      type: "danger",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Chairman",
      type: "warning",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
    {
      name: "Genelia Deshmukh",
      email: "genelia@gmail.com",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
      phone: "+123 456 789",
      role: "Designer",
      type: "danger",
      age: 23,
      joiningdate: "12-10-2014",
      salary: 1200,
    },
  ];

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: (row) => {
        return (
          <div className="d-flex">
            <img
              height={34}
              className="rounded-circle"
              src={row.row.original.avatar}
              alt={row.row.original.name}
            />
            <p className="ms-2">{row.row.original.name}</p>
          </div>
        );
      },
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "Role",
      accessor: "role",
      Cell: (row) => (
        <button className={`btn-sx bg-${row.row.original.type}`}>
          {row.row.original.role}
        </button>
      ),
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Joining Data",
      accessor: "joiningdate",
    },
    {
      Header: "Salary",
      accessor: "salary",
      Cell: (row) => {
        return <p>${row.row.original.salary}</p>;
      },
    },
  ];

  return (
    <div className="container-fluid   flex-center">
      <div className="row bg-white m-4 w-100">
        <div className="flex-column col-12 col-sm-12 col-md-4 col-lg-3">
          <div className="header flex-between p-3 border-bottom">
            <h6>ALl Contacts</h6>
            <h6>123</h6>
          </div>
          <div className="list p-3">
            <div className="flex-between">
              <p>Work</p>
              <p> 103</p>
            </div>
            <div className="flex-between">
              <p>Family</p>
              <p> 19</p>
            </div>
            <div className="flex-between">
              <p>Friends </p>
              <p>623</p>
            </div>
            <div className="flex-between">
              <p>Private </p>
              <p>53</p>
            </div>
          </div>
          <button className="btn btn-primary mx-4">add</button>
        </div>

        <div className="flex-column col-12 col-sm-12 col-md-8 col-lg-9">
          <div className="flex-between flex-wrap ">
            <div className="header">
              <h5>Contacts / Employee List</h5>
            </div>

            <div className="   ">
              <div className="header flex-column ">
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control shadow-none border-0  border-bottom mb-3"
                />
                <button className="btn btn-primary rounded-pill mx-2">
                  Add new contact
                </button>
              </div>
            </div>
          </div>
          <Table tableColumns={columns} tableData={data} />
        </div>
      </div>
    </div>
  );
};

export default ContactEmployee;
