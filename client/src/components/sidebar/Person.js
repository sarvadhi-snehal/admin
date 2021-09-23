import { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Flip from "react-reveal/Flip";
import { Person as PersonIcon } from "react-bootstrap-icons";
import { Wallet2 } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";
import { Power } from "react-bootstrap-icons";
import { logout } from "../../Store/actions/action";
import { useDispatch } from "react-redux";
const Person = ({ open }) => {
  const dispatch = useDispatch();

  const [result, setResult] = useState(
    JSON.parse(localStorage.getItem("userObj"))
  );

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
  useEffect(() => {
    const token = result?.token;
    setResult(JSON.parse(localStorage.getItem("userObj")));
  }, [result]);

  const body = (
    <div className="dropdown w-75">
      <label
        className="btn d-block dropdown-toggle border-none "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ color: "grey" }}
      >
        {result === null ? "user" : result?.user.name}
      </label>
      <Flip right>
        <ul
          className="dropdown-menu mt-5 overflow-hidden "
          aria-labelledby="dropdownMenuButton1"
        >
          {action.map((menu) => (
            <a className="dropdown-item p-2" href="nowhere" key={menu.name}>
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

          <label
            onClick={() => dispatch(logout())}
            className="dropdown-item  p-2"
          >
            <Power className="me-1" />
            Logout
          </label>
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
              alt={result?.user === null ? "user" : result?.user.name}
              src={result?.user === null ? "" : result?.user.imageUrl}
            />
          </div>
          {body}
        </div>
      ) : (
        <ListItem button>
          <ListItemIcon>
            <Avatar
              alt={result?.user === null ? "user" : result?.user.name}
              src={result?.user === null ? "" : result?.user.imageUrl}
            />
          </ListItemIcon>
        </ListItem>
      )}
    </>
  );
};

export default Person;
