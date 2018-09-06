import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

class accountLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    redirectSignUp = () => {
        this.props.history.push("/signup");
    }

    render() {

        const loginInfo = (e) => {
            e.preventDefault();
            console.log('my event is ', e)
    
            const username = e.target.elements.username.value
            const password = e.target.elements.password.value
            // const dogBreed = e.target.elements.dogBreed.value
    
            console.log('what is my username', username)
            console.log('what is my password', password)
            // console.log('what is my dogBreed', dogBreed);
        } 

        return (
            <form id="accountLogin" onSubmit={loginInfo}>
                <input type="text" name="username" class="username" placeholder="Username" />
                <input type="text" name="password" class="password" placeholder="Password" />
                <br />
                <button className="login">Login</button>
                <button className="signup" onClick={() => this.redirectSignUp()}> New User? </button>
            </form>
        )
    }
}

export default withRouter(accountLogin);