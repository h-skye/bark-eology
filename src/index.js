import React from "react";
import ReactDOM from "react-dom";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from 'react-router-dom';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            default: false
        }
    }

    


    render () {

        const ownerInfo = (e) => {
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
            <div>
                <form id="accountLogin" onSubmit={ownerInfo}>
                    <input type="text" name="username" class="username" placeholder="Username" />
                    <input type="text" name="password" class="password" placeholder="Password" />
                    {/* <input type="text" name="dogBreed" class="dogBreed" placeholder="Dog Breed" /> */}
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("content"));