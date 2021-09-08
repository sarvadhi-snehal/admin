import { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { GoogleLogout } from "react-google-login";
import { useStyles } from "./style";
import { useHistory } from "react-router-dom";
import loginContext from "../../Store";

const SiteLinks = () => {
  const classes = useStyles();
  const history = useHistory();
  const { dispatch, state } = useContext(loginContext);

  const responseGoogle = () => {
    dispatch({ type: "logout" });
    history.push("/");
  };
  return (
    <List>
      <ListItem button className={classes.hover}>
        <ListItemIcon>
          <RadioButtonUncheckedIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Documents" />
      </ListItem>

      <GoogleLogout
        clientId="962281289281-o8jti4ni3imnsljch6j4i4pqp6ppb4mb.apps.googleusercontent.com"
        render={(renderProps) => (
          <ListItem
            button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className={classes.hover}
          >
            <ListItemIcon>
              <RadioButtonUncheckedIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItem>
        )}
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
      ></GoogleLogout>

      <ListItem button className={classes.hover}>
        <ListItemIcon>
          <RadioButtonUncheckedIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="FAQ" />
      </ListItem>
    </List>
  );
};

export default SiteLinks;
