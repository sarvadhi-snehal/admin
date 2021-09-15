import clsx from "clsx";

import AppBar from "@material-ui/core/AppBar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Notifiction from "./Notifiction";
import { useStyles } from "./style";
import Logo from "./Logo";
import { useSelector } from "react-redux";
const AppBarContainer = ({ open, handleDrawerOpen }) => {
  const classes = useStyles();
  const headerColor = useSelector((state) => state.headerColor);
  console.log(typeof headerColor);
  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <div
          className={classes.toolbar}
          style={{ backgroundColor: headerColor }}
        >
          <Logo open={open} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <input
            type="text"
            className={`${classes.searchInput}  d-md-block d-lg-block d-none`}
            placeholder="Search and enter"
          />
          <Notifiction />
        </div>
      </AppBar>
    </>
  );
};

export default AppBarContainer;
