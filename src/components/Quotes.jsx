import React, { useEffect, useState } from "react";

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
    <div className=" orange-color w-100 text-white max-vh-50  mt-4 ">
      <p className="h6">{qoute.qoute}</p>
      <div>
        <div alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <span>{qoute.author}</span>
      </div>
    </div>
  );
}
