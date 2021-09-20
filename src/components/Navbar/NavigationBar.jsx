import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";

const NavigationBar = ({ user }) => {
    return (
        <div id="navbar">
            <a href="/" id="homelink" class="nav-link">
                {" "}
                Recipe's Galore
            </a>
            <dl class="nav nav-tabs">
                {!user && (
                    <React.Fragment>
                        <dd class="nav-item">
                            <Link
                                to="/login"
                                class="nav-link active"
                                id="navtabs"
                            >
                                Login
                            </Link>
                        </dd>
                        <dd class="nav-item">
                            <Link
                                to="/register"
                                class="nav-link active"
                                id="navtabs"
                            >
                                Register
                            </Link>
                        </dd>
                    </React.Fragment>
                )}
                {user && (
                    <React.Fragment>
                        <dd class="nav-item">
                            <Link
                                to="/profile"
                                class="nav-link active"
                                id="navtabs"
                            >
                                Profile
                            </Link>
                        </dd>
                        <dd class="nav-item">
                            <Link
                                to="/search"
                                class="nav-link active"
                                id="navtabs"
                            >
                                Search
                            </Link>
                        </dd>
                        <dd class="nav-item">
                            <Link
                                to="/generaterecipe"
                                class="nav-link active"
                                id="navtabs"
                            >
                                Recipe Generator
                            </Link>
                        </dd>
                        <dd class="nav-item">
                            <Link
                                to="/pantrysearch"
                                class="nav-link active"
                                id="navtabs"
                            >
                                What's in your fridge?
                            </Link>
                        </dd>
                        <dd class="nav-item" id="navtabs">
                            <Logout />
                        </dd>
                    </React.Fragment>
                )}
            </dl>
        </div>
    );
};

export default NavigationBar;
