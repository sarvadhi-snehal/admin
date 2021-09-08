import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Notifiction from "./Notifiction";
import { useStyles } from "./style";
import Logo from "./Logo";
const AppBarContainer = ({ open, handleDrawerOpen }) => {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar className={classes.toolbar}>
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
      </Toolbar>
    </AppBar>
  );
};

export default AppBarContainer;
