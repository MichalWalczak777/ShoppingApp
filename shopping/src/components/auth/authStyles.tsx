import { makeStyles } from "@material-ui/core";

const authStyles = makeStyles(() => ({
    authInput: {
      width: "100%",
      marginBottom:"20px"
    },
    authForm: {
        margin: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    authPanel: {
      marginTop: '56px'
    }
}));

export default authStyles;