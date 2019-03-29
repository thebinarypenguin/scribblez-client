import React from 'react';
import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';
import UserContext from '../../contexts/UserContext';
import TopBar from '../../components/TopBar/TopBar';
import Utils from '../../services/Utils';


import './SignUp.css';

class SignUp extends React.Component {

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

    const payload = {
      real_name     : ev.target['full-name'].value,
      email_address : ev.target['email_address'].value,
      username      : ev.target['username'].value,
      password      : ev.target['password'].value,
    };

    // console.log('IOU form validation');

    return UserService
      .createUser(payload)
      .then(() => {
        return AuthService.login(payload.username, payload.password);
      })
      .then((resp) => {
        // console.log(resp)
        this.context.logIn(resp.token);
        this.props.history.push('/notes');
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }

  render() {

    return (
      <div id="SignUp">

        <TopBar links={this.generateLinks()} />

        <div className="dialog">

          <h2>Sign Up</h2>

          <form autoComplete="off" onSubmit={this.handleSubmit}>

            <input type="text" id="full-name" placeholder="Name" />
            <input type="text" id="email_address" placeholder="Email Address" />
            <input type="text" id="username" placeholder="Username" />
            <input type="password" id="password" placeholder="Password" />
            <input type="password" id="password-confirmation" placeholder="Confirm Password" />
            <button type="submit">Sign Up</button>

          </form>

      </div>

    </div>
    );
  }
}

export default SignUp;
