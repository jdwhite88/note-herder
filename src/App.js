import React, { Component } from 'react';

import './App.css';
import {auth} from './base';
import Main from './Main';
import SignIn from './SignIn';

class App extends Component {
  state = {
    uid: null,
  }

  componentWillMount() {
    auth.onAuthStateChanged( (user) => {
      if (user) {
        this.handleAuth(user);
      } 
      else {
        this.handleUnauth();
      }
    });
  }

  render() {
    return (
      <div className="App">
        
        { 
          this.signedIn()
            ? <Main signOut={this.signOut} uid={this.state.uid} /> 
            : <SignIn handleAuth={this.handleAuth} />
        }
        
      </div>
    );
  }

  signedIn = () => {
    return this.state.uid;
  }

  handleAuth = (user) => {
    this.setState({uid: user.uid});
  }

  handleUnauth = () => {
    this.setState({ uid: null });
  }

  signOut = () => {
    
    auth.signOut();
  }
}

export default App;
