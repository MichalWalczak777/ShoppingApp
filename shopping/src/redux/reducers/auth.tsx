import { Action, Reducer } from "redux";
import firebase from "firebase";

const authReducer: Reducer<firebase.User | null, Action<any>> = (
  state = null,
  action: any
) => {
  switch (action.type) {
    case "CHANGE_AUTH_STATUS":
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
