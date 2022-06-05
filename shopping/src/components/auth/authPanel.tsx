import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Login from "./Login";
import Register from "./Register";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { Redirect } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return <div>{value === index && <Box> {children} </Box>}</div>;
}

const AuthPanel = () => {
  const isAuthenticated = Boolean(
    useSelector((state: RootState) => state.auth)
  );
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, value: number) => {
    setValue(value);
  };

  return isAuthenticated ? (
    <Redirect to={"/accountDetails"} />
  ) : (
    <div className="auth">
      <div className="auth-mobile">
        <AppBar
          elevation={0}
          className="authPanel-appBar"
          color="secondary"
          position="static"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            variant="fullWidth"
            indicatorColor="secondary"
          >
            <Tab label="ZALOGUJ SIĘ" />
            <Tab label="ZAŁÓŻ KONTO" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Register />
        </TabPanel>
      </div>
      <div className="auth-desktop">
        <div className="auth-loginPanel">
          <h3> Zaloguj się </h3>
          <Login />
        </div>
        <div className="auth-desktopMiddleSpace" />
        <div className="auth-registerPanel">
          <h3> Załóż konto </h3>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default AuthPanel;
