import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import UserContext from '../../contexts/UserContext';
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import SignOut from '../SignOut/SignOut';
import Feed from '../Feed/Feed'
import Notes from '../Notes/Notes';
import AuthService from '../../services/AuthService';
import Utils from '../../services/Utils';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.maintainAuthTimeout = null;

    this.maintainAuth = this.maintainAuth.bind(this);
    this.destroyAuth  = this.destroyAuth.bind(this);
  }

  componentDidMount() {

    const previouslyExistingToken = window.localStorage.getItem('token');

    if (previouslyExistingToken) {

      const payload = Utils.parseToken(previouslyExistingToken);

      if (payload.exp) {

        const expirationTime        = payload.exp * 1000
        const tenSecondsInTheFuture = Date.now() + (10 * 1000);

        // as long as it's got 10 secs left of life, we'll use it
        if (expirationTime >= tenSecondsInTheFuture) {
           return this.maintainAuth(previouslyExistingToken);
        }
      }

      // otherwise...
      this.destroyAuth();
    }
  }

  componentWillUnmount() {

    clearTimeout(this.maintainAuthTimeout);
  }

  maintainAuth(token) {

    console.log(`Got Token: ${token}`);

    // Persist token
    window.localStorage.setItem('token', token);

    const payload = Utils.parseToken(token);

    // If token has a expiration time
    if (payload.exp) {

      const expirationTime = (payload.exp * 1000) - Date.now();
      const refreshTime    = expirationTime - (10 * 1000);

      // TODO - clear any previous timeoutIds
      clearTimeout(this.maintainAuthTimeout);

      // Schedule a refresh request
      this.maintainAuthTimeout = setTimeout(() => {

        AuthService
          .refresh(token)
          .then((body) => {

            // do it again
            this.maintainAuth(body.token);
          })
          .catch((err) => {

            // delete existing auth token
            this.destroyAuth();
          });

      }, refreshTime);
    }
  }

  destroyAuth() {

    clearTimeout(this.maintainAuthTimeout);

    window.localStorage.removeItem('token');

    console.log('Destroy Token');
  }

  render() {

    return (
      <UserContext.Provider value={{ logIn: this.maintainAuth, logOut: this.destroyAuth }} >
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-out' component={SignOut} />
          <Route path='/feed' component={Feed} />
          <Route path='/notes' component={Notes} />
        </BrowserRouter>
      </UserContext.Provider>
    );
  }
}

export default App;
