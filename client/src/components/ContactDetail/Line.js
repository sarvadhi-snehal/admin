import React from "react";
import Avatar from "@material-ui/core/Avatar";
const data = [
  {
    name: "John Doe",
    title: "assign a new task",
    avatar:
      "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
    images: [
      "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img1.jpg",
      "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img2.jpg",
      "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img3.jpg",
      "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img4.jpg",
    ],
    comments: 2,
    like: 5,
    time: "5 minutes ago",
    link: "Design Weblayout",
    btn: null,
    boxText: null,
    body: null,
  },
  {
    name: "John Doe",
    avatar:
      "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg",
    images: [
      "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img1.jpg",
    ],
    title: null,
    comments: 2,
    like: 5,
    time: "5 minutes ago",
    link: null,
    btn: "Design weblayout",
    boxText: null,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    name: "John Doe",
    avatar:
      "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
    images: null,
    title: null,
    comments: 2,
    like: 5,
    time: "5 minutes ago",
    link: null,
    btn: null,
    boxText: null,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper",
  },
  {
    name: "John Doe",
    avatar:
      "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg",
    images: null,
    title: null,
    comments: 2,
    like: 5,
    time: "5 minutes ago",
    link: null,
    btn: null,
    boxText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
    body: null,
  },
];
const Line = () => {
  const style = {
    root: {
      position: "relative",
    },
    avatar: {
      position: "absolute",

      left: -20,
    },
  };
  return (
    <div className="p-4">
      <div className=" p-4 ">
        <div className="border-start">
          {data.map((item) => (
            <div className="px-3" style={style.root}>
              <Avatar src={item.avatar} style={style.avatar} />

              <div className="px-3">
                <p>
                  {item.name} <span>{item.time}</span>
                </p>
                <p className="d-flex">
                  {item.title} <p className="text-orange ms-2">{item.link}</p>
                </p>
                <div className="row d-flex ">
                  {item.images &&
                    item.images.map((img) => (
                      <div className="col-12 col-lg-3 col-md-6 col-sm-12 col-xs-12 my-3">
                        <img src={img} alt="post " className="img-fluid" />
                      </div>
                    ))}
                  <div className="col my-3  col-lg-8 col-sm-12 col-xs-12">
                    <p>{item.body}</p>
                    {item.btn && (
                      <button className="btn mt-4 btn-success rounded-3">
                        {item.btn}
                      </button>
                    )}
                    {item.boxText && (
                      <p className="p-4 border">{item.boxText}</p>
                    )}
                  </div>
                </div>
              </div>
              {!item.boxText && <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Line;
