import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
        </div>
      </Router>
    )
  }
}

export default App;
