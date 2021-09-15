import jwtDecode from 'jwt-decode';
import React, {Component} from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import NavigationBar from './Navbar/NavigationBar';
import RegisterForm from './Register/RegisterForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({
                user
            });
            console.log(user)
        } catch {

        }
    }


    
    
    render() { 
        const user = this.state.user
        return ( 
            <div>
                <NavigationBar user={user} />
                <div>
                    <Switch>
                        <Route path='/login' component={LoginPage} />
                        <Route path='/register' component={RegisterForm} />
                    </Switch>
                </div>
                
            </div>
        );
    }
}
                
                
            
 
export default App;
    
    
    
    
    