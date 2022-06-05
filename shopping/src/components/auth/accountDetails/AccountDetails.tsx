import React from "react";
import { useSelector } from "react-redux";
import firebase from "firebase";
import { RootState } from "../../../redux/reducers";
import { Button } from "@material-ui/core";

const AccountPanel = () => {
  const currentUser = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  currentUser && console.log(currentUser.email);
  return (
    <div className="accountPanel">
      <p className="accountPanel-currentUser">{currentUser?.email}</p>
      <Button onClick={handleLogout}>WYLOGUJ SIĘ</Button>
    </div>
  );
};

export default AccountPanel;
