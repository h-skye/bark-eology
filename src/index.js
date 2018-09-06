import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import accountLogin from './components/accountLogin'
import signupPage from './components/signupPage';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            default: false
        }
        this.redirectSignUp = this.redirectSignUp.bind(this);
    }

    
    redirectSignUp = () => {
        this.props.history.push("/signup");
    }

    render () {

        // const ownerInfo = (e) => {
        //     e.preventDefault();
        //     console.log('my event is ', e)
    
        //     const username = e.target.elements.username.value
        //     const password = e.target.elements.password.value
        //     // const dogBreed = e.target.elements.dogBreed.value
    
        //     console.log('what is my username', username)
        //     console.log('what is my password', password)
        //     // console.log('what is my dogBreed', dogBreed);
        // } 

        return (
            
            <Router>
                <div>
                    <Route exact path="/" component={accountLogin} />
                    <Route path="/signup" component={signupPage} />
                </div>
            </Router>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("content"));