import React from "react";
import Card from "./Card";
import Accordian from "./Accordian";
import Carousel from "./Carousel";
import List from "./List";
const NotificationInfo = () => {
  return (
    <>
      <Card title="CAROUSEL">
        <Carousel />
      </Card>
      <Card title="ACCORDION">
        <Accordian />
      </Card>
      <Card title="CONTACT US">
        <form>
          <div className="mb-3">
            <input
              type="name"
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <textarea
              id=""
              name=""
              rows="5"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Card>
      <Card title="Life style">
        <List />
      </Card>
    </>
  );
};

export default NotificationInfo;
