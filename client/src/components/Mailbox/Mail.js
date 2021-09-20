import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { GrAttachment } from "react-icons/gr";
import "./toolbar.scss";
const Mail = () => {
  return (
    <div className="bg-white ">
      <h3 className="border-bottom p-3 ">Your message title goes here</h3>
      <div className="border-bottom p-4">
        <div className="sender py-4 d-flex">
          <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
          <div className="name ps-3">
            <h5 className="m-0">Pranav Kumar</h5>
            <p className="small-font text-scondary">
              From: jonathan@domain.com
            </p>
          </div>
        </div>
        <div className="mail py-4 ">
          <h6>Dear User</h6>
          <p className="fw-light pt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem.Nulla consequat massa quis enim. Donec pede justo, fringilla
            vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi.
          </p>
          <p className="fw-light">
            enean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
            luctus pulvinar,
          </p>
        </div>
      </div>

      <div className=" p-4">
        <h6 className="my-3">
          <GrAttachment className="me-3" /> Attachments (3)
        </h6>
        <div className="row attachments">
          <div className="col-sm-12 col-md-3 col-lg-2 border-4">
            <img
              src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img1.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
            <img
              src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img2.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2">
            <img
              src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img3.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <p className="px-4">click here to Reply or Forward</p>
    </div>
  );
};
export default Mail;
