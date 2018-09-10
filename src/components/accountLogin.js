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
        this.loginInfo = this.loginInfo.bind(this);
        this.redirectSignUp = this.redirectSignUp.bind(this);
    }

    loginInfo(e) {
        e.preventDefault();

        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        // const dogBreed = e.target.elements.dogBreed.value
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: username,
                password: password,
            })
        }).then((response) => console.log(response)); 
    } 

    redirectSignUp = () => {
        this.props.history.push("/signup");
    }

    render() {

        return (
            <form id="accountLogin" onSubmit={this.loginInfo}>
                <input type="text" name="username" class="username" placeholder="Username" />
                <input type="text" name="password" class="password" placeholder="Password" />
                <br />
                <button className="login"> Login </button>
                <button type="button" className="signup" onClick={() => this.redirectSignUp()}> New User? </button>
            </form>
        )
    }
}

export default withRouter(accountLogin);