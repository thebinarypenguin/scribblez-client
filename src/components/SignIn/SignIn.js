import React from 'react';
import UserContext from '../../contexts/UserContext';
import AuthService from '../../services/AuthService';

import './SignIn.css';

class SignIn extends React.Component {

  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {

    ev.preventDefault();

    const { username, password } = ev.target;

    console.log('IOU form validation');

    return AuthService
      .login(username.value, password.value)
      .then((resp) => {
        this.context.logIn(resp.token);
        this.props.history.push('/');
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }

  render() {

    return (
      <div id="site-container">

      <div id="sign-in-container">

        <h2>Sign In</h2>

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
