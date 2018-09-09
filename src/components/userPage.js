import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

class userPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div id="userPage">
                <h1> User Page Under Construction </h1>
            </div>
        )
    }
}

export default withRouter(userPage);