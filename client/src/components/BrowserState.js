import React from "react";
import { FaFirefox } from "react-icons/fa";
import { FaSafari } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";
import { FaOpera } from "react-icons/fa";
import { FaEdge } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import Card from "./UI/ThreeCard";
const data = [
  {
    name: " Google Chrome",
    status: 23,
    Icon: FaChrome,
    type: "primary",
    src: "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/google-chrome.svg",
  },
  {
    name: "Mozila Firefox",
    status: 15,
    Icon: FaFirefox,
    type: "success",
    src: "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/firefox-browser.svg",
  },
  {
    name: "Apple Safari",
    status: 7,
    Icon: FaSafari,
    type: "orange",
    src: "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/safari.svg",
  },
  {
    name: "Internet Explorer",
    status: 9,
    Icon: FaInternetExplorer,
    type: "warning",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/18/Internet_Explorer_10%2B11_logo.svg",
  },
  {
    name: "Opera mini",
    status: 23,
    Icon: FaOpera,
    type: "danger",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Opera_Mini_2015_icon.svg",
  },
  {
    name: "Microsoft edge",
    status: 9,
    Icon: FaEdge,
    type: "info",
    src: "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/edge-browser.svg",
  },
];

const BrowserState = () => {
  return (
    <Card title="Browser State">
      <div className=" flex-column  px-3 ">
        {data.map((browser) => {
          const { name, status, src, type } = browser;
          return (
            <div className="d-flex p-3  align-items-center " key={name}>
              {/* <div> */}
              <img src={src} alt="browwser icon" style={{ width: "2rem" }} />
              {/* </div> */}
              <p className="fs-6 ms-3">{name}</p>
              <button type="button" className={`btn-s bg-${type} ms-auto`}>
                {status.toString().length < 0 ? "0" + status : status}%
              </button>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default BrowserState;
