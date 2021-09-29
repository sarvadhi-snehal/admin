import { Fragment, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { Gear, X } from "react-bootstrap-icons";
import { panelColor, sideBar } from "../../Store/actions/action";
import { useDispatch } from "react-redux";

const people = [
  {
    user: "Varun Dhavan",
    img: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
    status: "online",
    type: "success",
  },
  {
    user: "Genelia Deshmukh",
    img: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg",
    status: "Away",
    type: "warning",
  },
  {
    user: "Ritesh Deshmukh",
    img: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/5.jpg",
    status: "Busy",
    type: "danger",
  },
  {
    user: "Arijit Sinh",
    img: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/8.jpg",
    status: "Offline",
    type: "secondary",
  },
  {
    user: "Govinda Star",
    img: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg",
    status: "online",
    type: "success",
  },
  {
    user: "John Abraham",
    img: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
    status: "online",
    type: "success",
  },
  {
    user: "Hritik Roshan",
    img: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/6.jpg",
    status: "online",
    type: "success",
  },
];
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  header: {
    height: theme.spacing(8),

    backgroundColor: "orange",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
    color: "white",
  },
}));
const ServicePannel = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const colors = ["dimgrey", "green", "red", "blue", "orchid", "turquoise"];
  const size = "3rem";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="p-0">
        <div className={classes.header}>
          <ListItemText primary="Service Pannel" />
          <label htmlFor="" onClick={toggleDrawer("right", false)}>
            <X fontSize={25} />
          </label>
        </div>
        <div className=" p-4">
          <h6>With Light sidebar</h6>
          <div className="flex-between flex-wrap">
            {colors.map((text, index) => (
              <div
                className="m-2"
                style={{ backgroundColor: text, width: size, height: size }}
                key={index}
                onClick={() => {
                  dispatch(panelColor(text));
                  dispatch(sideBar("white"));
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className=" p-4">
          <h6>With Dark sidebar</h6>
          <div className="flex-between flex-wrap">
            {colors.map((text, index) => (
              <div
                className="m-2"
                style={{ backgroundColor: text, width: size, height: size }}
                key={index}
                onClick={() => {
                  dispatch(panelColor(text));
                  dispatch(sideBar("black"));
                }}
              >
                <div className="bg-dark h-100 w-25"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Divider />
      <div className="p-4">
        <h6>Chat options</h6>
        {people.map((person, index) => (
          <div key={index} className="d-flex py-3">
            <div className="w-25">
              <img
                src={person.img}
                alt="avatr"
                className="img-fluid rounded-circle w-75"
              />
            </div>
            <div>
              <p className="m-0      ">{person.user}</p>
              <p className={`small-font text-${person.type}`}>
                {person.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="scroll overflow-auto">
      <Fragment>
        <label className="btn text-white" onClick={toggleDrawer("right", true)}>
          <Gear />
        </label>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          className="p-0 m-0"
        >
          {list("right")}
        </Drawer>
      </Fragment>
    </div>
  );
};

export default ServicePannel;
