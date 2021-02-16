import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const StartPage = () => {


    const useStyles = makeStyles(() => ({
        button: {
            border: '1.5px solid white',
            borderRadius: '5px',
            color: 'white',
            zIndex: 2
        }
    }));

    const {button} = useStyles();

    return (
        <div className="startPage">
            <div className="startPage-imageWrapper startPage-imageWoman">
                <h2>KOBIETA</h2>
                <Button className={button} color="primary" variant="outlined">Zobacz więcej<ArrowForwardIcon/></Button>
            </div>
            <div className="startPage-imageWrapper startPage-imageMan">
                <h2>MĘŻCZYZNA</h2>
                <Button className={button} color="primary" variant="outlined">Zobacz więcej<ArrowForwardIcon/></Button>            </div>
            <div className="startPage-imageWrapper startPage-imageKids">
                <h2>DZIECKO</h2>
                <Button className={button} color="primary" variant="outlined">Zobacz więcej<ArrowForwardIcon/></Button>            </div>
        </div>
    );
}

export default StartPage;