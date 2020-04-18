import config from '../config';
import TokenService from './token-service';

const AuthApiService = {
  // Check if user already exists (Registration)
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(res =>
      (!res.ok) 
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  // Check user credentials (Login Attemt)
  postLogin({ user_name, password }) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ user_name, password }),
    })
    .then(res =>
      (!res.ok) 
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .then(res => {
      TokenService.saveAuthToken(res.authToken);
      return res
    })
  },
};

export default AuthApiService;
