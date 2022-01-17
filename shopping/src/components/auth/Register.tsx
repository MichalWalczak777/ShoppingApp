import { Button, TextField } from "@material-ui/core";
import firebase from "../../firebase";
import React from "react";
import {useState, useRef} from "react";
import authStyles from "./authStyles";

const Register = () => {

    const {authInput, authForm} = authStyles();
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
                    <TextField className={authInput} type="password" name="password" label="Hasło" variant="outlined" onChange={handleChange} />
                    <TextField className={authInput} type="password" name="passwordRepeated" label="Powtórz hasło" variant="outlined" onChange={handleChange} />
                    <Button variant = 'contained' color= 'primary' onClick={handleSubmit}>ZAŁÓŻ KONTO</Button>
            </form>
        </div>

    );
}

export default Register;