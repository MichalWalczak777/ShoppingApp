import { Button } from "@material-ui/core";
import React from "react";
import {useState, useRef} from "react";

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

    const handleSubmit = (e: React.FormEvent)=> {
        e.preventDefault();
    }

    return (
        <div className="login container">
            <h2>Załóż konto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Hasło</label>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password-repeat">Powtórz hasło</label>
                    <input type="password" name="passwordRepeated" id="password-repeat" onChange={handleChange}/>
                </div>
            </form>
            <div>
                <Button onClick={handleSubmit}>ZAŁÓŻ KONTO</Button>
            </div>
        </div>

    );
}

export default Register;