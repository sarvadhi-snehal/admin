import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Speedometer, MenuApp, Inbox } from "react-bootstrap-icons";
import { ListItem } from "./style";
import "./style.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(8),
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
  const [selectedIndex, setSelectedIndex] = useState();
  const classes = useStyles();
  const [open, setOpen] = useState({});
  const [isselescted, setIsSelected] = useState({});

  const handleClick = (key) => {
    !isClose ? setOpen({ [key]: false }) : setOpen({ [key]: !open[key] });
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
      Icon: MenuApp,
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
              className="item"
            >
              <ListItemIcon className="menu">
                <Icon size={20} />
              </ListItemIcon>

              <ListItemText primary={menuItem.name} />

              {menuItem.links && (
                <>
                  <span className={classes.items}>{menuItem.links.length}</span>
                  {open[key] ? <ExpandLess /> : <ExpandMore />}
                </>
              )}
            </ListItem>
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
          </List>
        );
      })}
    </>
  );
}
