import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Speedometer } from "react-bootstrap-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  items: {
    backgroundColor: "#4DC0C8",
    padding: "0.2rem  0.7rem",
    borderRadius: "0.7rem",
    color: "White",
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const menu = [
    {
      name: "dashboard",
      links: [
        {
          href: "/minimal",
          name: "Minimal",
        },
        {
          href: "/analytical",
          name: "Analitical",
        },
        {
          href: "/",
          name: "Demographical",
        },
        {
          href: "/",
          name: "Morden",
        },
      ],
    },

    {
      name: "Apps",
      links: [
        {
          href: "/dashboard",
          name: "Calander",
        },
        {
          href: "/",
          name: "Chat App",
        },
        {
          href: "/",
          name: "Support Ticket",
        },
        {
          href: "/",
          name: "Contact /Employee",
        },
        {
          href: "/",
          name: "Contact Grid",
        },
        {
          href: "/",
          name: "Contact Detail",
        },
      ],
    },
    {
      name: "Inbox",
      links: [
        {
          href: "/dashboard",
          name: "Mailbox ",
        },
        {
          href: "/",
          name: "Mailbox Detail",
        },
        {
          href: "/",
          name: "Compose Mail",
        },
      ],
    },
  ];

  return (
    <>
      {menu.map((menuItem) => (
        <List className={classes.root}>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <Speedometer size={20} />
            </ListItemIcon>
            <ListItemText primary={menuItem.name} />{" "}
            <span className={classes.items}> {menuItem.links.length}</span>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menuItem.links.map((item) => (
                <ListItem
                  button
                  component="a"
                  href={item.href}
                  className={classes.nested}
                >
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      ))}
    </>
  );
}
