import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import SignIn from './SignIn';

class App extends Component {
  state = {
    uid: null,
  }

  render() {
    return (
      <div className="App">
        
        { 
          this.signedIn()
            ? <Main signOut={this.signOut} /> 
            : <SignIn handleAuth={this.handleAuth} />
        }
        
      </div>
    );
  }

  signedIn = () => {
    return this.state.uid;
  }

  handleAuth = () => {
    this.setState({uid: 'jdw'});
  }

  signOut = () => {
    this.setState({ uid: null });
  }
}

export default App;
