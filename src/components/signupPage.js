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
        return (
            <div>
                Test for signupPage
                <form id="signup">
                    
                </form>
            </div>
        )
    }
}

export default withRouter(signupPage);