import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import jwtDecode from 'jwt-decode';
import UserContext from '../../contexts/UserContext';
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import SignOut from '../SignOut/SignOut';
import Feed from '../Feed/Feed'
import Notes from '../Notes/Notes';
import AuthService from '../../services/AuthService';

import './App.css';
import UserService from '../../services/UserService';

const safeJwtDecode = function (jwt) {

  try {
    return jwtDecode(jwt);
  } catch (err) {
    return undefined;
  }
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user : null, // don't think i need this, maybe replace with a contextValue object
    };

    this.maintainAuthTimeout = null;

    this.maintainAuth = this.maintainAuth.bind(this);
    this.destroyAuth  = this.destroyAuth.bind(this);
  }

  componentDidMount() {

    const previouslyExistingToken = window.localStorage.getItem('token');

    if (previouslyExistingToken) {

      const payload = safeJwtDecode(previouslyExistingToken);

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

    const payload = safeJwtDecode(token);

    UserService
      .getUserByUsername(payload.username)
      .then((user) => {

        // Save user data, prob too much data
        this.setState({ user });
      })
      .then(() => {

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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  destroyAuth() {

    clearTimeout(this.maintainAuthTimeout);

    window.localStorage.removeItem('token');

    this.setState({ user: null });

    console.log('Destroy Token');
  }

  render() {

    // TODO move into state to prevent unnecessary renders
    const contextValue = {};

    contextValue.user   = this.state.user;
    contextValue.logIn  = this.maintainAuth;
    contextValue.logOut = this.destroyAuth;

    return (
      <UserContext.Provider value={contextValue} >
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
