import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "./UI/SmallCard";
import { Fade } from "react-awesome-reveal";
export default function Quotes({ className }) {
  const [qoute, setQoute] = useState({
    qoute: null,
    author: null,
  });
  const [fade, setFade] = useState(false);

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
      setFade(true);
    }, 1000);

    return () => {
      clearInterval(setTime);
    };
  }, [qoute]);

  return (
    <Card className="orange-color text-white flex-column ">
      <div className="overflow-hidden p-2">
        <Fade direction="right">
          <p className="h5">{qoute.qoute}</p>
        </Fade>
      </div>
      <div className="mt-auto d-flex">
        <Avatar
          style={{ height: "3rem", width: "3rem" }}
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Fade direction="right">
          <div className="ms-3 mt-auto flex-column justify-content-center">
            <h5 className="m-0">{qoute.author}</h5>
            <span className="caption">actor</span>
          </div>
        </Fade>
      </div>
    </Card>
  );
}
