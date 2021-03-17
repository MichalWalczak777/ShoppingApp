import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";

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
    }


    return (

        <div>
            <h2>Zaloguj się</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Hasło</label>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                </div>
            </form>
            <Button onClick={handleSubmit}>ZALOGUJ SIĘ</Button>
        </div>
        )
}

export default Login;