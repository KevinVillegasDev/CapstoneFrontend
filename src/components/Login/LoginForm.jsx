import React, { useState } from "react";
import LoginUser from "./LoginUserHook";
import { Form, Button } from "react-bootstrap";

const LoginForm = ({ loginUser }) => {
    //form variables
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const user = {};

    //stores user input in post request format and sends back to login page
    const handleSubmit = (event) => {
        event.preventDefault();

        //logging in with custom hook
        LoginUser(username, password);

        //resets form
        setUserName("");
        setPassword("");
    };

    //login form
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>
                <input type="submit" value="Login" class="btn btn-primary" />
            </Form>
        </div>
    );
};

export default LoginForm;
