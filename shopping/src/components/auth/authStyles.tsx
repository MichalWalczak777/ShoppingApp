import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    authInput: {
      width: "100%",
      marginBottom:"20px"
    },
    authForm: {
        margin: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
}));

export default useStyles;