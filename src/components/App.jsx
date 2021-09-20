import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import NavigationBar from "./Navbar/NavigationBar";
import RegisterForm from "./Register/RegisterForm";
import MakeSearch from "./Search/MakeSearch";
import Profile from "./Profile/Profile";
import RecipeGenerator from "./RecipeGenerator/RecipeGenerator";
import IngredientSearch from "./RecipeByIngredient/IngredientSearch";
import Home from "./HomePage/Home";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
        };
    }

    componentDidMount() {
        const jwt = localStorage.getItem("token");
        try {
            const user = jwtDecode(jwt);
            this.setState({
                user,
            });
            console.log(user);
        } catch {}
    }

    render() {
        const user = this.state.user;

        return (
            <div>
                <NavigationBar user={user} />
                <div>
                    <Switch>
                        <Route
                            path="/profile"
                            render={(props) => {
                                if (!user) {
                                    return <Redirect to="/login" />;
                                } else {
                                    return <Profile {...props} user={user} />;
                                }
                            }}
                        />
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/search" component={MakeSearch} />
                        <Route
                            path="/generaterecipe"
                            component={RecipeGenerator}
                        />
                        <Route
                            path="/pantrysearch"
                            component={IngredientSearch}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
