import React, { useEffect } from "react";
import { useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { FullscreenExitTwoTone } from "@material-ui/icons";
import authStyles from "./authStyles";
import firebase from "../../firebase";

const Login = () => {

    const {authInput, authForm} = authStyles();
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
        firebase.auth().signInWithEmailAndPassword(fields.email, fields.password);
    }


    return (

        <div>
            <form className={authForm} onSubmit={handleSubmit}>
                    <TextField className={authInput} type="email" name="email" label="Email" variant="outlined" onChange={handleChange} />
                    <TextField className={authInput} type="password" name="password" label="Hasło" variant="outlined" onChange={handleChange} />
                    <Button variant = 'contained' color = 'primary' onClick={handleSubmit}>ZALOGUJ SIĘ</Button>
            </form>
        </div>
        )
}

export default Login;