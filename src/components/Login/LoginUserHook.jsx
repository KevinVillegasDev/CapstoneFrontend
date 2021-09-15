import axios from "axios";



//this component logs in the user, decodes the token and returns user info
const LoginUser = (username, password) => {
    const userCredentials = {
        username: username,
        password: password,
    }

    //login user by passing in credentials
    async function makeLoginRequest(userCredentials) {
        try{
            let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', userCredentials);
            localStorage.setItem('token', response.data.access);
            console.log("good login");
            console.log(localStorage)
            console.log(response.data.access);
            window.location = '/';
        }
        catch(err){
            console.log(err)
        }

    }
    //starts posting user info as soon as hook is called
    makeLoginRequest(userCredentials)


}
 
export default LoginUser;