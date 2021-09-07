import React from "react";
import Box from "@material-ui/core/Box";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CreateIcon from "@material-ui/icons/Create";
import SettingsIcon from "@material-ui/icons/Settings";
import LayersIcon from "@material-ui/icons/Layers";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
const useStyles = makeStyles((theme) => ({
  box: {
    minWidth: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
  },
  btn: {
    color: "white",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "lighten(red, 20%)",
    borderRadius: "50%",
    color: "#fff",
    padding: "0.5em 0.75em",
    position: "relative",
    '&::before' :{
      content: '',
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      animation: "pulse 1s ease infinite",
      borderRadius: "50%",
      border: "4px double lighten(red, 20%)",
    }
  }
}))
const Notifiction = () => {
  const classes = useStyles()
  return (
    <Box ml="auto" className={classes.box}>
      <Button className={classes.btn}>
      
          <MailOutlineIcon />
     
      </Button>

      <Button className={classes.btn}>
        
          <CreateIcon />
        
      </Button>

      <Button className={classes.btn}>
        <LayersIcon />
      </Button>
      <Button className={classes.btn}>
        <SettingsIcon />
      </Button>
    </Box>
  )
}

export default Notifiction
