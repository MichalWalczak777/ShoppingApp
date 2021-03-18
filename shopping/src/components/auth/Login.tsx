import React, { useEffect } from "react";
import { useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { FullscreenExitTwoTone } from "@material-ui/icons";
import useStyles from "./authStyles";

const Login = () => {

    const {authInput, authForm} = useStyles();
    const [fields, setFields] = useState(
        {
            email: "",
            password: ""
    });

    const handleChange = (e: React.ChangeEvent<{ name: string, value: string }>) =>{
        const {name, value} = e.target;
        setFields(prev => ({
            ...prev,
            [name] : value}));
    }
    
    const handleSubmit = (e: React.FormEvent)=> {
        e.preventDefault();
    }


    return (

        <div>
            <form className={authForm} onSubmit={handleSubmit}>
                    <TextField className={authInput} type="email" name="email" label="Email" variant="outlined" onChange={handleChange} />
                    <TextField className={authInput} type="password" name="password" label="Password" variant="outlined" onChange={handleChange} />
                    <Button onClick={handleSubmit}>ZALOGUJ SIĘ</Button>
            </form>
        </div>
        )
}

export default Login;