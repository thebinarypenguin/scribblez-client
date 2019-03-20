import config from '../services/Config';


const getGlobalFeed = function () {

  return fetch(`${config.api_root}/feed`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    });
};

const getUserFeed = function (username) {

  return fetch(`${config.api_root}/feed/${username}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    });
};

export default {
  getGlobalFeed,
  getUserFeed,
};
