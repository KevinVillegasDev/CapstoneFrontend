import jwtDecode from 'jwt-decode';
import React, {Component} from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import NavigationBar from './Navbar/NavigationBar';
import RegisterForm from './Register/RegisterForm';
import MakeSearch from './Search/MakeSearch';
import Profile from './Profile/Profile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm: ''
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
        const handleChange = (event) => {
            this.setState({
                searchTerm: event.target.value
            });
        }

        return ( 
            <div>
                <NavigationBar user={user} />
                <div>                   
                    <Switch>
                        <Route path='/profile' render={props => {
                            if(!user){
                                return <Redirect to="/login" />;
                            } else {
                                return <Profile {...props} user={user} />
                            }
                                
                        }}
                        />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/register' component={RegisterForm} />
                        <Route path='/search' component={MakeSearch} />
                    </Switch>
                    
                </div>
                
            </div>
        );
    }
}
                
                
            
 
export default App;
    
    
    
    
    