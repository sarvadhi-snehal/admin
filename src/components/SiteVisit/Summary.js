import "./Summary.scss";

const Summary = () => {
  const data = [
    {
      name: "New User Visited",
      percent: 75,
      type: "success",
    },
    {
      name: "Returning Users",
      percent: 65,
      type: "info",
    },
    {
      name: "Bounce Rate",
      percent: 25,
      type: "primary",
    },
  ];
  return (
    <div style={{ height: 150 }}>
      <div className="d-flex text-center   w-100 h-100">
        {data.map((item) => (
          <div className="lines w-100" key={item.name}>
            <div className={`outer bg-${item.type}`}>
              <div className="inner">{item.percent}%</div>
            </div>
            <h6 className="text-wrap w-75">{item.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
