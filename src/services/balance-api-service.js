import config from '../config';
import TokenService from './token-service';

const BalanceApiService = {
  // Get user balance
  getUserBalance(user_id) {
    return fetch(`${config.API_ENDPOINT}/users/${user_id}/balance`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .catch(error => error)
  },
  // Reset user balance to 1000
  reloadUserBalance(user_id) {
    return fetch(`${config.API_ENDPOINT}/users/${user_id}/balance`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .catch(error => error)
  },
}

export default BalanceApiService;