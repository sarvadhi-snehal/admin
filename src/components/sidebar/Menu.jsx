import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Speedometer } from "react-bootstrap-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(8),
    "&:hover": {
      color: "green",
    },
  },
  items: {
    backgroundColor: "#4DC0C8",
    padding: "0.2rem  0.7rem",
    borderRadius: "0.7rem",
    color: "White",
  },
  item: {
    color: "grey",
    "&:hover": {
      color: "orange",
    },
    fontFamily: "Poppins",
  },
  activeLink: {
    color: "orange",
  },
}));

export default function NestedList({ isClose }) {
  const classes = useStyles();
  const [open, setOpen] = useState({});
  const [isselescted, setIsSelected] = useState({});

  const handleClick = (key) => {
    setOpen({ [key]: !open[key] });
  };
  const SelectedMenu = (item) => {
    console.log(item);
    setIsSelected({ [item]: !isselescted[item] });
  };

  const menu = [
    {
      name: "Dashboard",
      key: "dashboard",
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
      name: "Apps",
      key: "apps",

      links: [
        {
          href: "/dashboard",
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
      {menu.map((menuItem) => {
        const { key } = menuItem;

        return (
          <List className={classes.root}>
            <ListItem
              button
              onClick={() => handleClick(key)}
              className={[classes.item, open[key] && classes.activeLink]}
            >
              <ListItemIcon color="inherit">
                <Speedometer size={20} color="inherit" />
              </ListItemIcon>
              <ListItemText primary={menuItem.name} />
              <span className={classes.items}> {menuItem.links.length}</span>
              {open[key] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open[key]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menuItem.links.map((item) => (
                  <ListItem
                    button
                    component="a"
                    href={item.href}
                    onClick={() => SelectedMenu(item.name)}
                    className={[
                      classes.nested,
                      isselescted[item.name] && classes.activeLink,
                    ]}
                  >
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
