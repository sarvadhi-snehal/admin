import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./toolbar.scss";
import { Paperclip } from "react-bootstrap-icons";
const Compose = () => {
  return (
    <div className="w-100">
      <h3 className="mb-3">Compose New Message</h3>
      <form class="row g-3 needs-validation d-flex justify-content-between">
        <div class="col-12">
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            placeholder="TO:"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-12">
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            placeholder="Subject:"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-12  my-4">
          <Editor wrapperClassName="wrapper" editorClassName="editor" />
        </div>
        <div class="col-12 mb-3">
          <p className="fs-5 mb-3">
            <Paperclip className="me-3" />
            Attachments
          </p>
          <div dropdown="copy" className="dropzone p-5 text-center bg-white">
            <p className="">Drop files here to upload</p>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-success me-3" type="submit">
            Send
          </button>
          <button class="btn btn-dark" type="reset">
            Discard
          </button>
        </div>
      </form>
    </div>
  );
};

export default Compose;
