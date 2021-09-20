import "./toolbar.scss";

import {
  InboxFill,
  ExclamationOctagonFill,
  TrashFill,
  FolderFill,
  ForwardFill,
  ArrowClockwise,
} from "react-bootstrap-icons";
const ToolBar = ({ className }) => {
  return (
    <ul className={`d-flex flex-wrap  toolbar ${className}`}>
      <li>
        <InboxFill />
      </li>
      <li>
        <ExclamationOctagonFill />
      </li>
      <li className="me-3">
        <TrashFill />
      </li>

      <li>
        <button
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          className="dropdown-toggle"
        >
          <FolderFill />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>Dropdown Link</li>
          <li>Dropdown Link</li>
        </ul>
      </li>

      <li className="me-3">
        <button
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          className="dropdown-toggle "
        >
          <ForwardFill />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li>Dropdown Link</li>
          <li>Dropdown Link</li>
        </ul>
      </li>

      <li>
        <ArrowClockwise />
      </li>

      <li>
        <button
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          className="dropdown-toggle more"
        >
          More
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>Dropdown Link</li>
          <li>Dropdown Link</li>
        </ul>
      </li>
    </ul>
  );
};

export default ToolBar;
