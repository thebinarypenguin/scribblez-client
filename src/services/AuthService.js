import config from '../services/Config';

const login = function (username, password) {

  return fetch(`${config.api_root}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
};

const refresh = function (token) {

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
  });
};

export default {
  login,
  refresh,
};
