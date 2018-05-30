import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import './App.css';
import {auth} from './base';
import Main from './Main';
import SignIn from './SignIn';

class App extends Component {
  state = {
    uid: null,
  }

  componentWillMount() {
    const uid = localStorage.getItem('uid');
    if (uid) {
      this.setState({ uid });
    }
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
        <Switch>
          <Route path="/sign-in" render={() => (
            this.signedIn()
              ? <Redirect to="/notes" /> 
              : <SignIn handleAuth={this.handleAuth} />
          )} />
          <Route path="/notes" render={navProps => (
            this.signedIn()
              ? <Main 
                  signOut={this.signOut} 
                  uid={this.state.uid} 
                  {...navProps}
                /> 
              : <Redirect to="/sign-in" />
          )} />
          <Route render={() => (
            this.signedIn()
              ? <Redirect to="/notes" /> 
              : <Redirect to="/sign-in" />
          )}  />
        </Switch>
        
      </div>
    );
  }

  signedIn = () => {
    return this.state.uid;
  }

  handleAuth = (user) => {
    this.setState({uid: user.uid});
    localStorage.setItem('uid', user.uid)
  }

  handleUnauth = () => {
    this.setState({ uid: null });
    localStorage.removeItem('uid');
  }

  signOut = () => {
    
    auth.signOut();
  }
}

export default App;
