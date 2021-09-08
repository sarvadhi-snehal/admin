import React from "react";

const ContactCard = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-4 h-100 ">
      <div className="my-4 bg-white flex-column " style={{ height: "75vh" }}>
        <div className=" h-75 flex-center position-relative ">
          <div className="bg position-absolute w-100 h-100 " />

          <img
            className="content img-fluid rounded-circle w-25"
            src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg"
            alt=""
          />
        </div>
        <div className="info flex-between h-25 px-5 text-center">
          <div>
            <h5>12K</h5>
            <h6>Followers</h6>
          </div>
          <div>
            <h5>420</h5>
            <h6>Following</h6>
          </div>
          <div>
            <h5>128</h5>
            <h6>Tweets</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
