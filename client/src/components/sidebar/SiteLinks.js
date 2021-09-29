import { useState } from "react";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { ListItem } from "./style";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/actions/action";
import "./style.scss";
const SiteLinks = ({ open }) => {
  const sidebarColor = useSelector((state) => state.sidebarColor);
  const [selectedIndex, setSelectedIndex] = useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(logout(history));
  };

  const link = [
    {
      name: "Documents",
      index: 20,
      color: "secondary",
    },
    {
      name: "Log out",
      index: 111,
      color: "secondary",
    },
    {
      name: "FAQ",
      index: 22,
      color: "primary",
    },
  ];
  return (
    <List>
      {link.map((item) => (
        <ListItem
          key={item.index}
          button
          selected={selectedIndex === item.index}
          onClick={(event) => {
            if (item.index === 22) {
              onClick();
            }
            handleListItemClick(event, item.index);
          }}
          className={` ${!open ? "item" : ""}`}
        >
          <RadioButtonUncheckedIcon color={item.color} />
          <ListItemText
            className={!open ? "hover-menu p-2 mt-0 " : "ms-2"}
            primary={item.name}
            style={{ backgroundColor: sidebarColor }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default SiteLinks;
