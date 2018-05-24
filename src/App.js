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
        this.handleAuth();
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

  handleUnauth = () => {
    this.setState({ uid: null });
  }

  signOut = () => {
    
    auth.signOut();
  }
}

export default App;
