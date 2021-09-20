import React from "react";

const Setting = () => {
  return (
    <form action="#">
      <div className="row my-3">
        <div className="col p-1">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control border-0 shadow-none border-bottom"
            placeholder="Full name"
            aria-label="Full name"
            required
          />
        </div>
      </div>
      <div className="row my-3">
        <div className="col p-1">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control border-0 shadow-none border-bottom"
            placeholder="Email"
            aria-label="Email"
            required
          />
        </div>
      </div>
      <div className="row my-3">
        <div className="col p-1">
          <label className="form-label">Phone no</label>
          <input
            type="text"
            name="phone"
            className="form-control border-0 shadow-none border-bottom"
            placeholder="Phone"
            aria-label="Phone"
          />
        </div>
      </div>
      <div className="row my-3">
        <div className="col p-1">
          <label className="form-label">Subject</label>
          <input
            type="text"
            name="subject"
            className="form-control border-0 shadow-none border-bottom"
            placeholder="Subject"
            aria-label="Subject"
            required
          />
        </div>
      </div>
      <div className="row my-3">
        <div className="col p-1">
          <label className="form-label">Message</label>
          <textarea
            type="text"
            name="message"
            className="form-control border-0 shadow-none border-bottom"
            placeholder="Message"
            aria-label="Message"
            rows="5"
            required
          ></textarea>
        </div>
      </div>
      <div className="row my-3">
        <div className="col p-1">
          <p className="form-label">Select Country</p>
          <select
            name="country"
            id=""
            className="form-control border-bottom border-0 shadow-none"
          >
            <option value="london">London</option>
            <option value="india">India</option>
            <option value="Usa">Usa</option>
            <option value="Canada">China</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn btn-success mt-2">
        Update Profile
      </button>
    </form>
  );
};

export default Setting;
