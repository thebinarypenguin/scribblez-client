import React from 'react';
import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';
import UserContext from '../../contexts/UserContext';

import './SignUp.css';

class SignUp extends React.Component {

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

    const payload = {
      real_name: ev.target['full-name'].value,
      username: ev.target['username'].value,
      password: ev.target['password'].value,
    };

    console.log('IOU form validation');

    return UserService
      .createUser(payload)
      .then(() => {
        return AuthService.login(payload.username, payload.password);
      })
      .then((resp) => {
        console.log(resp)
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

      <div id="sign-up-container">

        <h2>Sign Up</h2>

        <form autoComplete="off" onSubmit={this.handleSubmit}>

          <input type="text" id="full-name" placeholder="Name" />
          <input type="text" id="username" placeholder="Username" />
          <input type="password" id="password" placeholder="Password" />
          <input type="text" id="password-confirmation" placeholder="Confirm Password" />
          <button type="submit">Sign Up</button>

        </form>

      </div>

    </div>
    );
  }
}

export default SignUp;