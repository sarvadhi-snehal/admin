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
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
const Person = ({ open }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.user);

  const [profile, setProfile] = useState(user);
  //   JSON.parse(localStorage.getItem("profile")).user
  // );
  // console.log(profile);

  // useEffect(() => {
  //   setProfile(JSON.parse(localStorage.getItem("profile")).user);
  // }, [profile?.token]);

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
        {profile === null ? "user" : profile?.name}
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
            onClick={() => dispatch(logout(history))}
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
              alt={profile === null ? "user" : profile?.name}
              src={
                profile === null
                  ? ""
                  : profile.imageUrl ||
                    `http://localhost:4000/admin/${profile?.avatar}`
              }
            />
          </div>
          {body}
        </div>
      ) : (
        <ListItem button>
          <ListItemIcon>
            <Avatar
              alt={profile?.user === null ? "user" : profile?.name}
              src={
                profile?.user === null
                  ? ""
                  : profile.imageUrl ||
                    `http://localhost:4000/admin/${profile?.avatar}`
              }
            />
          </ListItemIcon>
        </ListItem>
      )}
    </>
  );
};

export default Person;
