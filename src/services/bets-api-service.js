import config from '../config';
import TokenService from './token-service';

const BetsApiService = {
  // Get bet history of logged in user
  getUserBets(user_id) {
    return fetch(`${config.API_ENDPOINT}/bets/${user_id}`, {
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
  // Save bet to logged in user account
  placeBet(bet) {
    return fetch(`${config.API_ENDPOINT}/bets`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(bet),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .catch(error => error)
  }
}

export default BetsApiService;