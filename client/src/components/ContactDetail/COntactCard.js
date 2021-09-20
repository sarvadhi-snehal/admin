import React from "react";
import { Facebook } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";
const COntactCard = () => {
  return (
    <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 flex-column h-100 mb-4">
      <div className="me my-4 text-white  ">
        <div className="overlay w-100 h-100">
          <img
            src="https://www.licious.in/blog/wp-content/uploads/2021/02/crabss-750x750.jpg"
            alt=""
            className="img-fluid h-100 w-100"
          />
        </div>
        <div className="content position-absolute  flex-center flex-column w-100 text-center">
          <div>
            <img
              src="https://material-ui.com/static/images/avatar/1.jpg"
              alt="avatr user"
              className="img-fluid rounded-circle"
            />
          </div>
          <h5 className="m-0">James Anderson</h5>
          <p className="">@jamesandre</p>
          <p className="w-75">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
      </div>
      <div className="contactme  bg-white p-3">
        <div className="address">
          <p className="small-font">Email address</p>
          <p> hannagover@gmail.com</p>
          <p className="small-font">Phone</p>
          <p> +91 654 784 547</p>
          <p className="small-font">Address</p>
          <p> 71 Pilgrim Avenue Chevy Chase, MD 20815</p>
        </div>
        <div className="map ">
          <iframe
            title="my affre"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14880.009571757613!2d72.787469!3d21.1920639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7e7e4a15d5b51e2!2sSarvadhi%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1631265847142!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="social-link">
          <p className="small-font">Social Profile</p>
          <div className="btn-group" role="group" aria-label="">
            <button
              type="button"
              className="btn btn-light border m-1 rounded-circle"
            >
              <Facebook />
            </button>
            <button
              type="button"
              className="btn btn-light border m-1 rounded-circle"
            >
              <Twitter />
            </button>
            <button
              type="button"
              className="btn btn-light border m-1 rounded-circle"
            >
              <Youtube />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default COntactCard;
