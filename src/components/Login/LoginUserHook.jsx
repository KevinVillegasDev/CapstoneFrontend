import axios from "axios";



//this component logs in the user, decodes the token and returns user info
const LoginUser = (username, password) => {
    const userCredentials = {
        username: username,
        password: password,
    }

    //login user by passing in credentials
    async function makeLoginRequest(userCredentials) {
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', userCredentials);
        if(response){
            //store token in browser
            localStorage.setItem('token', response.data.token);
            console.log("good login");
            console.log(response.data.token);
            window.location = '/';
            return localStorage;
        } else {
            console.log("bad api call");
        }
    }
    //starts posting user info as soon as hook is called
    makeLoginRequest(userCredentials)


}
 
export default LoginUser;