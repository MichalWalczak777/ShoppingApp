import firebase from "../../firebase";

export const login = (user: firebase.User | null) => {
  return {
    type: "CHANGE_AUTH_STATUS",
    payload: user,
  };
};
