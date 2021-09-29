import Table from "./Table";
const SupportTable = () => {
  const data = [
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "New",
      type: "warning",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Jeneliya desusa",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to change colors",
      status: "Complete",
      type: "success",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Jeneliya desusa",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to change colors",
      status: "Complete",
      type: "success",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Pending",
      type: "dark",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Complete",
      type: "sucess",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,
      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "New",
      type: "warning",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Complete",
      type: "sucess",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "New",
      type: "warning",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Jeneliya desusa",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to change colors",
      status: "Complete",
      type: "success",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Jeneliya desusa",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to change colors",
      status: "Complete",
      type: "success",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Pending",
      type: "dark",
      assignto: "Jonathan",
      date: "14-10-2017",
    },

    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Complete",
      type: "sucess",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "New",
      type: "warning",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Jeneliya desusa",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to change colors",
      status: "Complete",
      type: "success",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Jeneliya desusa",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to change colors",
      status: "Complete",
      type: "success",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Pending",
      type: "dark",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Complete",
      type: "sucess",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,
      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "New",
      type: "warning",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Complete",
      type: "sucess",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "New",
      type: "warning",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Jeneliya desusa",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to change colors",
      status: "Complete",
      type: "success",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Jeneliya desusa",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to change colors",
      status: "Complete",
      type: "success",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Pending",
      type: "dark",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Complete",
      type: "sucess",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,
      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "New",
      type: "warning",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Complete",
      type: "sucess",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "New",
      type: "warning",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Jeneliya desusa",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to change colors",
      status: "Complete",
      type: "success",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Jeneliya desusa",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to change colors",
      status: "Complete",
      type: "success",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Pending",
      type: "dark",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Complete",
      type: "sucess",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,
      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "New",
      type: "warning",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Complete",
      type: "sucess",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "New",
      type: "warning",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Jeneliya desusa",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to change colors",
      status: "Complete",
      type: "success",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Jeneliya desusa",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to change colors",
      status: "Complete",
      type: "success",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Pending",
      type: "dark",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Complete",
      type: "sucess",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,
      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "New",
      type: "warning",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
    {
      id: 123,

      name: "Ritesh Deshmukh",
      avatar:
        "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",

      custemail: "genelia@gmail.com",
      subject: "How to customize the template?",
      status: "Complete",
      type: "sucess",
      assignto: "Jonathan",
      date: "14-10-2017",
    },
  ];

  const columns = [
    {
      Header: "ID #",
      accessor: "id",
    },
    {
      Header: "Open By",
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
      Header: "Cust. Email",
      accessor: "custemail",
    },
    {
      Header: "Subject",
      accessor: "subject",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: (row) => {
        return (
          <button className={`btn-sx bg-${row.row.original.type}`}>
            {row.row.original.status}
          </button>
        );
      },
    },
    {
      Header: "Assign To",
      accessor: "assignto",
    },
    {
      Header: "Date",
      accessor: "date",
    },
  ];
  return (
    <div className=" overflow-auto bg-white  d-flex align-items-center flex-column p-4">
      <Table tabledata={data} tabelcolumns={columns} />
    </div>
  );
};

export default SupportTable;
