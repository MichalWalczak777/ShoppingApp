import React from "react";
import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import firebase from "../../firebase";

const Login = () => {

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
            <form className='auth-form' onSubmit={handleSubmit}>
                    <TextField className='auth-input auth-materialComponent' size ='small' type="email" name="email" label="Email" variant="outlined" onChange={handleChange} />
                    <TextField className='auth-input auth-materialComponent' size ='small' type="password" name="password" label="Hasło" variant="outlined" onChange={handleChange} />
                    <Button className='auth-button auth-materialComponent' variant = 'contained' color = 'primary' onClick={handleSubmit}>ZALOGUJ SIĘ</Button>
            </form>
        </div>
        )
}

export default Login;