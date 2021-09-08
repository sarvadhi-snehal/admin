import React from "react";
import { FaFirefox } from "react-icons/fa";
import { SiMozilla } from "react-icons/si";
import { FaSafari } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";
import { FaOpera } from "react-icons/fa";
import { FaEdge } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";

const data = [
  {
    name: " Google Chrome",
    status: 23,
    Icon: FaChrome,
    type: "primary",
  },
  {
    name: "Mozila Firefox",
    status: 15,
    Icon: FaFirefox,
    type: "success",
  },
  {
    name: "Apple Safari",
    status: 7,
    Icon: FaSafari,
    type: "orange",
  },
  {
    name: "Internet Explorer",
    status: 9,
    Icon: FaInternetExplorer,
    type: "warning",
  },
  {
    name: "Opera mini",
    status: 23,
    Icon: FaOpera,
    type: "danger",
  },
  {
    name: "Microsoft edge",
    status: 9,
    Icon: FaEdge,
    type: "info",
  },
];

const BrowserState = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-4  ">
      <ul className="my-4 text- star bg-white p-4 " style={{ height: "75vh" }}>
        <h6 className="p-3">
          <strong>Browser State</strong>
        </h6>
        {data.map((browser) => {
          const { name, status, Icon, type } = browser;
          return (
            <li className="d-flex w-100 p-3 align-items-center ">
              {" "}
              <Icon
                size="2em"
                className={`text-${type} `}
                style={{ color: "ligthblue", marginRight: 20 }}
              />{" "}
              {name}{" "}
              <button type="button" class={`btn-s bg-${type} ms-auto`}>
                {status.toString().length < 0 ? "0" + status : status}%
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BrowserState;
