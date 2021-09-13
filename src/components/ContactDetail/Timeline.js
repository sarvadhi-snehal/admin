import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Profile from "./Profile";
import Setting from "./Setting";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ContactTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8 flex-column h-100 mt-4 ">
      <div className="bg-white ">
        <div position="static" className="border-bottom">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Timeline" {...a11yProps(0)} />
            <Tab label="Profile" {...a11yProps(1)} />
            <Tab label="Setting" {...a11yProps(2)} />
          </Tabs>
        </div>
        <TabPanel value={value} index={0}>
          timeline
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Setting />
        </TabPanel>
      </div>
    </div>
  );
}
