import React from 'react';
import UserContext from '../../contexts/UserContext';
import AuthService from '../../services/AuthService';
import TopBar from '../../components/TopBar/TopBar';
import Utils from '../../services/Utils';

import './SignIn.css';

class SignIn extends React.Component {

  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateLinks = this.generateLinks.bind(this);
  }

  generateLinks() {

    let links = [];

    if (Utils.isTokenActive(window.localStorage.getItem('token'))) {

      links = [
        { name: 'Feed',     target: '/feed'     },
        { name: 'Notes',    target: '/notes'    },
        { name: 'Sign Out', target: '/sign-out' },
      ];

    } else {

      links = [
        { name: 'Feed',    target: '/feed'    },
        { name: 'Sign Up', target: '/sign-up' },
        { name: 'Sign In', target: '/sign-in' },
      ];
    }

    return links;
  }

  handleSubmit(ev) {

    ev.preventDefault();

    const { username, password } = ev.target;

    // console.log('IOU form validation');

    return AuthService
      .login(username.value, password.value)
      .then((resp) => {
        this.context.logIn(resp.token);
        this.props.history.push('/notes');
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }

  render() {

    return (
      <div id="SignIn">
        <TopBar links={this.generateLinks()} />

        <div className="dialog">

        <h2>Sign In</h2>

        <ul id="demo-credentials">
          <li>Demo username: <strong>homer</strong></li>
          <li>Demo password: <strong>password</strong></li>
        </ul>

        <form autoComplete="off" onSubmit={this.handleSubmit} >

          <input type="text" id="username" placeholder="Username" />
          <input type="password" id="password" placeholder="Password" />
          <button type="submit">Sign In</button>

        </form>

      </div>

    </div>
    );
  }
}

export default SignIn;
