import { Button, TextField } from "@material-ui/core";
import firebase from "../../firebase";
import React from "react";
import {useState, useRef} from "react";
import useStyles from "./authStyles";

const Register = () => {

    const {authInput, authForm} = useStyles();
    const [fields, setFields] = useState(
        {
            email: "",
            password: "",
            passwordRepeated: ""
    });

    const handleChange = (e: React.ChangeEvent<{ name: string, value: string }>) =>{
        const {name, value} = e.target;
        setFields(prev => ({
            ...prev,
            [name] : value}));
    }

    const validateData = () =>{
        return (fields.password === fields.passwordRepeated);
    }

    const handleSubmit = (e: React.FormEvent)=> {
        e.preventDefault();
        validateData() && firebase.auth().createUserWithEmailAndPassword(fields.email, fields.password);
    }

    return (
        <div className="login container">
            <form className={authForm} onSubmit={handleSubmit}>
                    <TextField className={authInput} type="email" name="email" label="Email" variant="outlined" onChange={handleChange} />
                    <TextField className={authInput} type="password" name="password" label="Password" variant="outlined" onChange={handleChange} />
                    <TextField className={authInput} type="password" name="passwordRepeated" label="Repeat password" variant="outlined" onChange={handleChange} />
                    <Button onClick={handleSubmit}>ZAŁÓŻ KONTO</Button>
            </form>
        </div>

    );
}

export default Register;