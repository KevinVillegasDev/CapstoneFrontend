import jwtDecode from 'jwt-decode';
import React, {Component} from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import NavigationBar from './Navbar/NavigationBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    componentDidMount() {
        const jwt = localStorage.getItem('access');
        try{
            const user = jwtDecode(jwt);
            this.setState({
                user
            });
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
                    </Switch>
                </div>
                
            </div>
        );
    }
}
                
                
            
 
export default App;
    
    
    
    
    