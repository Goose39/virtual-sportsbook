import config from '../config';
import TokenService from './token-service';

const BetsApiService = {
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
    .catch(error => console.log(error))
  },
  placeBet(bet) {
    return fetch(`${config.API_ENDPOINT}/bets`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      }, // JWT TOKEN
      body: JSON.stringify(bet),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .catch(error => console.log(error))
  }
}

export default BetsApiService;