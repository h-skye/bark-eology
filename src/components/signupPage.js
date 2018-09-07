import React from "react";
import { 
    ReactDOM,
    render
} from "react-dom";
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
        // this.signupInfo = this.signupInfo.bind(this);
    }
    signupInfo(e) {
        e.preventDefault();
        const data = new FormData(event.target);

        console.log('my data is', data);

        const username = e.target.elements.username.value.trim();
        const password = e.target.elements.password.value.trim();
        const email = e.target.elements.email.value.trim();
        const firstName = e.target.elements.firstName.value.trim();
        const lastName =  e.target.elements.lastName.value.trim();

        const dogName = e.target.elements.dogName.value.trim();
        const dogBday = e.target.elements.dogBday.value;
        const dogBreed = e.target.elements.dogBreed.value;

        console.log(e.target.elements.username.value)
        console.log(e.target.elements.password.value)
        console.log(e.target.elements.firstName.value)
        console.log(e.target.elements.lastName.value)

        console.log(e.target.elements.dogName.value)
        console.log(e.target.elements.dogBday.value)
        console.log(e.target.elements.dogBreed.value)


    }

    render() {


        return (

                <form id="signup" onSubmit={this.signupInfo}>
                    <input type="text" name="username" class="username" placeholder="Username" />
                    <input type="text" name="password" class="password" placeholder="Password" />
                    <br />
                    <input type="text" name="email" class="email" placeholder="E-mail" />
                    <input type="text" name="firstName" class="firstName" placeholder="First Name" />
                    <input type="text" name="lastName" class="lastName" placeholder="Last Name" />
                    <br />
                    <h2> Optional Fields </h2>
                    <p> Please fill out if you have a dog. </p>
                    <input type="text" name="dogName" class="dogName" placeholder="Dog Name" />
                    <input type="text" name="dogBday" class="dogBday" placeholder="Birthdate MM/YYYY" />
                    <input type="text" name="dogBreed" class="dogBreed" placeholder="Breed Type" />
                    <br />
                    {/* <button className="addPetInfo">Add Pet Info</button> */}
                    <button className="signup"> Sign Up! </button>
                </form>

        )
    }
}

export default withRouter(signupPage);