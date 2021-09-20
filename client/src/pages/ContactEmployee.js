import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  contact: {
    borderRight: "1px solid grey",
    [theme.breakpoints.down("sm")]: {
      borderRight: 0,
      width: "100%",
    },
  },
}));
const ContactEmployee = () => {
  const classes = useStyles();
  return (
    <div className="container-fluid bg-light flex-center">
      <div className="row d-flex p-4 w-100">
        <div className={`${classes.contact} bg-white flex-column`}>
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
          <button className="btn btn-info mx-4">add</button>
        </div>
      </div>

      <div className="bg-white  flex-between w-100">
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6  ">
          <div className="header">Contacts / Employee List</div>
        </div>
        <div className="col-sm-12 col-xs-12 col-md-3 col-lg-4   ">
          <div className="header flex-column ">
            <input
              type="text"
              name=""
              id=""
              className="form-control shadow-none border-0  border-bottom mb-3"
            />
            <button className="btn btn-info rounded-pill mx-2">
              Add new contact
            </button>
          </div>
        </div>

        {/* TODO : talle     */}
      </div>
    </div>
  );
};

export default ContactEmployee;
