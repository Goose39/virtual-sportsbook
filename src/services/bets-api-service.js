import config from '../config';

const BetsApiService = {
  getUserBets({ user_name }) {
    return fetch(`${config.API_ENDPOINT}/bets`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_name, password }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        IdleService.regiserIdleTimerResets()
        return res
      })
  },
}

export default BetsApiService;