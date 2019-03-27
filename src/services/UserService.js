import config from '../services/Config';

const getUserByUsername = function (username) {

  const token = window.localStorage.getItem('token');

  return fetch(`${config.api_root}/users/${username}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
};

const createUser = function (payload) {

  return fetch(`${config.api_root}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return true;
  });
};

export default {
  getUserByUsername,
  createUser,
};
