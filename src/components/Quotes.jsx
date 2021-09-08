import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
export default function Quotes({ className }) {
  const [qoute, setQoute] = useState({
    qoute: null,
    author: null,
  });

  const getQuotes = () =>
    fetch(`https://breaking-bad-quotes.herokuapp.com/v1/quotes`)
      .then((response) => response.json())
      .then((data) => {
        setQoute({
          qoute: data[0].quote,
          author: data[0].author,
        });
      });
  useEffect(() => {
    const setTime = setInterval(function () {
      getQuotes();
    }, 10000);

    return () => {
      clearInterval(setTime);
    };
  }, [qoute]);

  return (
    <div className="bg-light mt-4 w-100" style={{ height: 230 }}>
      <div className="orange-color h-100  w-100 text-white  flex-column text-white  mt-2 me-2 p-4">
        <div className="overflow-hidden p-2">
          <p className="h5">{qoute.qoute}</p>
        </div>
        <div className="mt-auto d-flex">
          <Avatar
            style={{ height: "3rem", width: "3rem" }}
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <span className="ms-3 flex-column justify-content-center">
            <h5 className="m-0">{qoute.author}</h5>
            <span className="caption">actor</span>
          </span>
        </div>
      </div>
    </div>
  );
}
