import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const StartPage = () => {

    const useStyles = makeStyles(() => ({
        button: {
            border: '1.5px solid white',
            borderRadius: '5px',
            color: 'white',
            zIndex: 2
        },
        buttonLabel: {
            paddingRight: '8px'
        }
    }));

    const {button, buttonLabel} = useStyles();

    return (
        <div className="startPage">
            <div className="startPage-imageWrapper startPage-imageWoman">
                <h2>KOBIETA</h2>
                <Button className={button} color="primary" variant="outlined" component={Link} to="/woman"><span className={buttonLabel}>Zobacz więcej</span><ArrowForwardIcon/></Button>
            </div>
            <div className="startPage-imageWrapper startPage-imageMan">
                <h2>MĘŻCZYZNA</h2>
                <Button className={button} color="primary" variant="outlined" component={Link} to="/man"><span className={buttonLabel}>Zobacz więcej</span><ArrowForwardIcon/></Button>
            </div>
            <div className="startPage-imageWrapper startPage-imageKids">
                <h2>DZIECKO</h2>
                <Button className={button} color="primary" variant="outlined" component={Link} to="/kid"><span className={buttonLabel}>Zobacz więcej</span><ArrowForwardIcon/></Button>
            </div>
        </div>
    );
}

export default StartPage;