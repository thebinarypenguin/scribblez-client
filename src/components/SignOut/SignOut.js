import React from 'react';
import UserContext from '../../contexts/UserContext';

class SignOut extends React.Component {

  static contextType = UserContext;

  componentDidMount() {
    this.context.logOut();
    this.props.history.push('/');
  }

  render() {

    return false;
  }
}

export default SignOut;
