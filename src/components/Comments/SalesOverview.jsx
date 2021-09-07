import "./salse.scss";

const rows = [
  {
    id: 1,
    Name: "Snow",
    status: "sale",
    date: "April 18, 2017",
    price: "$24",
    variant: "success",
  },
  {
    id: 2,
    Name: "Lannister",
    status: "extended",
    date: "April 19, 2017",
    price: "$1250",
    variant: "primary",
  },
  {
    id: 3,
    Name: "Lannister",
    status: "extended",
    date: "April 19, 2017",
    price: "$1250",
    variant: "primary",
  },
  {
    id: 4,
    Name: "Stark",
    status: "tax",
    date: "April 20, 2017",
    price: "-$24",
    variant: "danger",
  },
  {
    id: 5,
    Name: "Targaryen",
    status: "sale",
    date: "April 21, 2017",
    price: "$24",
    variant: "success",
  },
  {
    id: 6,
    Name: "Melisandre",
    status: "sale",
    date: "April 22, 2017",
    price: "-$14",
    variant: "success",
  },
  {
    id: 7,
    Name: "Clifford",
    status: "member",
    date: "April 23, 2017",
    price: "$64",
    variant: "success",
  },
  {
    id: 8,
    Name: "Frances",
    status: "extended",
    date: "April 18, 2017",
    price: "$1250",
    variant: "primary",
  },
];

const SalesOverview = () => {
  return (
    <div className="col col-sm-12 col-md-6  mt-4  bg-white">
      <div className="bg-white p-4 flex-between">
        <div>
          <h6>Salse Overview</h6>
          <p>Check the monthly sales</p>
        </div>

        <form variant="outlined">
          <select className="form-select">
            <option name="January">January</option>
            <option name="February">February</option>
            <option name="March" selected>
              March
            </option>
            <option name="April">April</option>
          </select>
        </form>
      </div>
      <div className="flex-between p-4 bg-light w-100">
        <div>
          <h6>March 2017</h6>
          <p>Report for this month</p>
        </div>
        <div>
          <h1 className="text-success text-center">$3,690</h1>
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr className="tr">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className="tr">
              <th scope="row">{row.id}</th>
              <td>{row.Name}</td>
              <td>
                <button className={`btn-s  bg-${row.variant}`}>
                  {row.status}
                </button>
              </td>
              <td>{row.date}</td>
              <td className={`text-${row.variant}`}>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesOverview;
