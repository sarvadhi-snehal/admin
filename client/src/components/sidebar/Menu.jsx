import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import { Link } from "react-router-dom";

import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Speedometer, MenuApp, Inbox, People } from "react-bootstrap-icons";
import { ListItem } from "./style";
import { useSelector } from "react-redux";
import "./style.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(8),
  },
  nested2: {
    paddingLeft: theme.spacing(3),
  },
  item: {
    position: "relative",
  },
  items: {
    backgroundColor: "#4DC0C8",
    padding: "0.2rem  0.7rem",
    borderRadius: "0.7rem",
    color: "White",
  },
}));

export default function NestedList({ isClose }) {
  const sidebarColor = useSelector((state) => state.sidebarColor);

  const [selectedIndex, setSelectedIndex] = useState();

  const classes = useStyles();
  const [open, setOpen] = useState({});

  const handleClick = (key) => {
    setOpen({ [key]: !open[key] });
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const menu = [
    {
      name: "Dashboard",
      key: "dashboard",
      Icon: Speedometer,
      links: [
        {
          href: "/",
          name: "Minimal",
        },
        {
          href: "/analytical",
          name: "Analitical",
        },
        {
          href: "/demographical",
          name: "Demographical",
        },
        {
          href: "/morden",
          name: "Morden",
        },
      ],
    },
    {
      name: "Users",
      key: "users",
      Icon: People,
      links: null,
    },
    {
      name: "Apps",
      key: "apps",
      Icon: MenuApp,

      links: [
        {
          href: "/calender",
          name: "Calander",
        },
        {
          href: "/chat",
          name: "Chat App",
        },
        {
          href: "/support",
          name: "Support Ticket",
        },
        {
          href: "/contact",
          name: "Contact / Employee",
        },
        {
          href: "/contact2",
          name: "Contact Grid",
        },
        {
          href: "/contact3",
          name: "Contact Detail",
        },
      ],
    },
    {
      name: "Inbox",
      key: "inbox",
      Icon: Inbox,

      links: [
        {
          href: "/mailbox",
          name: "Mailbox ",
        },
        {
          href: "/mailboxdetail",
          name: "Mailbox Detail",
        },
        {
          href: "/composemail",
          name: "Compose Mail",
        },
      ],
    },
  ];

  return (
    <>
      {menu.map((menuItem, index) => {
        const { key, Icon } = menuItem;

        return (
          <List className={classes.root} key={menuItem.name}>
            <ListItem
              button
              component={key === "users" && Link}
              to={key === "users" && key}
              selected={selectedIndex === index}
              onClick={(event) => {
                handleListItemClick(event, index);
                handleClick(key);
              }}
              className={` ${!isClose ? "item" : ""}`}
            >
              <Icon size={20} className="menu " />

              {isClose && (
                <ListItemText className="ms-2" primary={menuItem.name} />
              )}

              {!isClose && (
                <div
                  className=" hover-menu  mt-0"
                  style={{
                    backgroundColor: sidebarColor,
                  }}
                >
                  <ListItemText
                    primary={menuItem.name}
                    className="d-block p-1 ms-3  mb-0"
                  />
                  <List component="div" disablePadding className="ms-3">
                    {menuItem.links &&
                      menuItem.links.map((item, index) => (
                        <ListItem
                          key={item.name}
                          button
                          component={Link}
                          to={item.href}
                          selected={selectedIndex === index * 5 + 25}
                          onClick={(event) => {
                            handleListItemClick(event, index * 5 + 25);
                          }}
                          className={classes.nested2}
                        >
                          {" "}
                          <ListItemText primary={item.name} />
                        </ListItem>
                      ))}
                  </List>
                </div>
              )}

              {isClose && menuItem.links && (
                <>
                  <span className={classes.items}>{menuItem.links.length}</span>
                  {open[key] ? <ExpandLess /> : <ExpandMore />}
                </>
              )}
            </ListItem>
            {isClose && (
              <Collapse in={open[key]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menuItem.links &&
                    menuItem.links.map((item, index) => (
                      <ListItem
                        key={item.name}
                        button
                        component={Link}
                        to={item.href}
                        selected={selectedIndex === index * 5 + 25}
                        onClick={(event) => {
                          handleListItemClick(event, index * 5 + 25);
                        }}
                        className={[classes.nested]}
                      >
                        {" "}
                        <ListItemText primary={item.name} />
                      </ListItem>
                    ))}
                </List>
              </Collapse>
            )}
          </List>
        );
      })}
    </>
  );
}
