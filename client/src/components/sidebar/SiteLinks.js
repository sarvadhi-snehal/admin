import { useState } from "react";
import List from "@material-ui/core/List";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { useStyles, ListItem } from "./style";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/actions/action";
import "./style.scss";
const SiteLinks = ({ open }) => {
  const [selectedIndex, setSelectedIndex] = useState();
  const [isShown, setShown] = useState(false);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(logout());
    history.push("/login");
  };
  return (
    <List>
      <ListItem
        button
        selected={selectedIndex === 20}
        onClick={(event) => handleListItemClick(event, 20)}
      >
        <ListItemIcon className="hover-menu">
          <RadioButtonUncheckedIcon color="secondary" />
        </ListItemIcon>

        {open && <ListItemText className="menu" primary="Documents" />}
      </ListItem>

      <ListItem
        buttonRef
        className={classes.hover}
        selected={selectedIndex === 111}
        onClick={(event) => {
          onClick();
          handleListItemClick(event, 111);
        }}
      >
        <ListItemIcon>
          <RadioButtonUncheckedIcon color="error" />
        </ListItemIcon>
        <ListItemText primary="Log out" />{" "}
      </ListItem>

      <ListItem
        button
        className={classes.hover}
        selected={selectedIndex === 22}
        onClick={(event) => handleListItemClick(event, 22)}
      >
        <ListItemIcon>
          <RadioButtonUncheckedIcon color="primary" className="menu" />
        </ListItemIcon>
        <ListItemText primary="FAQ" className="hover-item" />
        {open && <ListItemText primary="FAQ" />}
      </ListItem>
    </List>
  );
};

export default SiteLinks;
