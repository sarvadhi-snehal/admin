import React from "react";
import { FaFirefox } from "react-icons/fa";
import { SiMozilla } from "react-icons/si";
import { FaSafari } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";
import { FaOpera } from "react-icons/fa";
import { FaEdge } from "react-icons/fa";

const data = [
  {
    name: " Google Chrome",
    status: 23,
    Icon: FaFirefox,
  },
  {
    name: "Mozila Firefox",
    status: 15,
    Icon: SiMozilla,
  },
  {
    name: "Apple Safari",
    status: 7,
    Icon: FaSafari,
  },
  {
    name: "Internet Explorer",
    status: 9,
    Icon: FaInternetExplorer,
  },
  {
    name: "Opera mini",
    status: 23,
    Icon: FaOpera,
  },
  {
    name: "Microsoft edge",
    status: 9,
    Icon: FaEdge,
  },
];

const BrowserState = () => {
  return (
    <div className="bg-white mt-4 ">
      <ul>
        {data.map((browser) => {
          const { name, status, Icon } = browser;
          return (
            <li>
              {" "}
              <Icon /> {name}{" "}
              <button type="button" class="btn-s">
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
