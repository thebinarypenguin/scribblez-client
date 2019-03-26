import jwtDecode from 'jwt-decode';


const parseToken = function (jwt) {

  try {
    return jwtDecode(jwt);
  } catch (err) {
    return undefined;
  }
};

const isTokenActive = function (jwt) {

  const payload = parseToken(jwt);

  if (payload && payload.exp && (payload.exp * 1000) > Date.now()) {
    return true;
  }

  return false;
}

export default {
  parseToken,
  isTokenActive,
};
