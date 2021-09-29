import React from "react";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
const Setting = () => {
  return (
    <form action="#">
      <div className="row my-3">
        <div className="col p-1 flex-column">
          <label className="form-label">First Name</label>

          <TextField color="secondary" />
        </div>
      </div>
      <div className="row my-3">
        <div className="col p-1 flex-column">
          <label className="form-label">Email</label>
          <TextField color="secondary" />
        </div>
      </div>
      <div className="row my-3">
        <div className="col p-1 flex-column">
          <label className="form-label">Phone no</label>
          <TextField color="secondary" />
        </div>
      </div>
      <div className="row my-3">
        <div className="col p-1 flex-column">
          <label className="form-label">Subject</label>
          <TextField color="secondary" />
        </div>
      </div>
      <div className="row my-3">
        <div className="col p-1 flex-column">
          <label className="form-label">Message</label>
          <TextField color="secondary" multiline rows={4} row={4} />
        </div>
      </div>
      <div className="row my-3">
        <div className="col p-1 flex-column">
          <p className="form-label">Select Country</p>
          <NativeSelect name="country" color="secondary">
            <option value="london">London</option>
            <option value="india">India</option>
            <option value="Usa">Usa</option>
            <option value="Canada">China</option>
          </NativeSelect>
        </div>
      </div>
      <button type="submit" className="btn btn-success mt-2">
        Update Profile
      </button>
    </form>
  );
};

export default Setting;
