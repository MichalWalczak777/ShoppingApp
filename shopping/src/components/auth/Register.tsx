import { Button, TextField } from "@material-ui/core";
import firebase from "../../firebase";
import React from "react";
import {useState} from "react";

const Register = () => {

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
            <form className='auth-form' onSubmit={handleSubmit}>
                    <TextField className='auth-input auth-materialComponent' size ='small' type="email" name="email" label="Email" variant="outlined" onChange={handleChange} />
                    <TextField className='auth-input auth-materialComponent' size ='small' type="password" name="password" label="Hasło" variant="outlined" onChange={handleChange} />
                    <TextField className='auth-input auth-materialComponent' size ='small' type="password" name="passwordRepeated" label="Powtórz hasło" variant="outlined" onChange={handleChange} />
                    <Button className='auth-button auth-buttonPrimary auth-materialComponent' variant = 'contained' color= 'primary' onClick={handleSubmit}>ZAŁÓŻ KONTO</Button>
                    <Button className='auth-button auth-buttonSecondary auth-materialComponent' variant = 'outlined' color= 'primary' onClick={handleSubmit}>ZAŁÓŻ KONTO</Button>
            </form>
    );
}

export default Register;