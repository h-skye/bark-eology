import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom';

class signupPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const signupInfo = (e) => {
            e.preventDefault(e);

            console.log(e.target.elements.username)
            console.log(e.target.elements.password)
            console.log(e.target.elements.firstName)
            console.log(e.target.elements.lastName)
        }

        return (
            <div>
                <form id="signup" onSubmit={signupInfo}>
                    <input type="text" name="username" class="username" placeholder="Username" />
                    <input type="text" name="password" class="password" placeholder="Password" />
                    <br />
                    <input type="text" name="firstName" class="firstName" placeholder="First Name" />
                    <input type="text" name="lastName" class="lastName" placeholder="Last Name" />
                    <br />
                    <button className="addPetInfo">Add Pet Info</button>
                    <button type="button" className="signup" onClick={() => this.signupInfo()}> Sign Up! </button>
                </form>
            </div>
        )
    }
}

export default withRouter(signupPage);