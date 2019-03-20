import jwtDecode from 'jwt-decode';
import config from '../services/Config';

const safeJwtDecode = function (jwt) {

  try {
    return jwtDecode(jwt);
  } catch (err) {
    return undefined;
  }
};


class TokenService {

  constructor(props) {

    this.timeoutId   = null;

    this.setToken    = this.setToken.bind(this);
    this.getToken    = this.getToken.bind(this);
    this.deleteToken = this.getToken.bind(this);
  }

  setToken(token) {

    console.log(`Set Token: ${token}`);

    // Persist token
    window.localStorage.setItem('token', token);

    const payload = safeJwtDecode(token);

    // If token has a expiration time
    if (payload.exp) {

      const expirationTime = (payload.exp * 1000) - Date.now();
      const refreshTime    = expirationTime - (10 * 1000);

      // Schedule a refresh request
      this.timeoutId = setTimeout(() => {


        return fetch(`${config.api_root}/auth/refresh`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }

          return res.json();
        })
        .then((body) => {

          // do it again
          this.setToken(body.token);
        })
        .catch((err) => {

          // delete existing auth token
          this.deleteToken();
        });

      }, refreshTime);
    }
  }

  getToken() {
    return window.localStorage.getItem('token');
  }

  deleteToken() {
    clearTimeout(this.timeoutId);
    window.localStorage.removeItem('token');
  }
}

const createTokenService = function () {

  return new TokenService();
};

export default {
  createTokenService,
}
