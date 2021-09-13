import Avatar from "@material-ui/core/Avatar";
import { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Flip from "react-reveal/Flip";
import { Person as PersonIcon } from "react-bootstrap-icons";
import { Wallet2 } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";
import { Power } from "react-bootstrap-icons";
import contextProvider from "../../Store";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
const Person = ({ open }) => {
  const { state, dispatch } = useContext(contextProvider);

  const history = useHistory();

  const responseGoogle = () => {
    dispatch({ type: "logout" });
    history.push("/login");
    // console.log("logout");
  };
  const action = [
    {
      name: "Profile",
      Icon: PersonIcon,
    },
    {
      name: "My Balance",
      Icon: Wallet2,
    },
    {
      name: "Inbox",
      Icon: Envelope,
    },
  ];

  const body = (
    <div className="dropdown ">
      <label
        className="btn d-block dropdown-toggle border-none "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ color: "grey" }}
      >
        {!state.loading && state.user.name}
      </label>
      <Flip right>
        <ul
          className="dropdown-menu mt-5 "
          aria-labelledby="dropdownMenuButton1"
        >
          {action.map((menu) => (
            <a className="dropdown-item p-2" href="nowhere">
              <menu.Icon className="me-1" />
              {menu.name}
            </a>
          ))}
          <hr />

          <a className="dropdown-item p-2" href="#nowhere">
            <Gear className="me-1" />
            Account Setting
          </a>

          <hr />
          <GoogleLogout
            clientId="962281289281-o8jti4ni3imnsljch6j4i4pqp6ppb4mb.apps.googleusercontent.com"
            render={(renderProps) => (
              <label
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="dropdown-item  p-2"
              >
                <Power className="me-1" />
                Logout
              </label>
            )}
            buttonText="Logout"
            onLogoutSuccess={responseGoogle}
          ></GoogleLogout>
        </ul>
      </Flip>
    </div>
  );

  return (
    <>
      {open ? (
        <div className="d-flex align-items-center flex-column justify-content-center pt-4 pb-5">
          <div className="avatar">
            <Avatar
              alt={!state.loading && state.user.name}
              src={!state.loading && state.user.imageUrl}
            />
          </div>
          {body}
        </div>
      ) : (
        <ListItem button>
          <ListItemIcon>
            <Avatar
              alt={!state.loading && state.user.name}
              src={!state.loading && state.user.imageUrl}
            />
          </ListItemIcon>
        </ListItem>
      )}
    </>
  );
};

export default Person;
