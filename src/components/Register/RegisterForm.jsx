import axios from "axios";
import React, { Component } from "react";
import "./RegisterForm.css";
import { Form } from "react-bootstrap";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            email: "",
        };
    }

    async registerRequest(userInfo) {
        userInfo = {
            first_name: userInfo.first_name,
            last_name: userInfo.last_name,
            username: userInfo.username,
            password: userInfo.password,
            email: userInfo.email,
        };
        console.log(userInfo);
        try {
            let response = await axios.post(
                "http://127.0.0.1:8000/api/auth/register/",
                userInfo
            );
            console.log(response.data);
            window.location = "/login";
        } catch (ex) {
            console.log("bad call");
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:
                event.target.type === "number"
                    ? event.target.valueAsNumber
                    : event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.registerRequest(this.state);
    };

    render() {
        const first_name = this.state.first_name;
        const last_name = this.state.last_name;
        const username = this.state.username;
        const password = this.state.password;
        const email = this.state.email;
        return (
            <div>
                <h3>Register for an account here!</h3>
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                    <Form.Group className="mb-3">
                        <input
                            class="m-2"
                            name="first_name"
                            type="text"
                            placeholder="First Name"
                            value={first_name}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <input
                            class="m-2"
                            name="last_name"
                            type="text"
                            placeholder="Last Name"
                            value={last_name}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <input
                            class="m-2"
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <input
                            class="m-2"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <input
                            class="m-2"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <input
                        id="newUserButton"
                        name="submit"
                        type="Submit"
                        value="Complete Registration"
                        className="btn btn-secondary m-2"
                    />
                </Form>
            </div>
        );
    }
}

export default RegisterForm;
