import config from '../config';

const MatchesApiService = {
  getMatches() {
    return fetch(`${config.API_ENDPOINT}/matches`, {
      method: 'GET'
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
}

export default MatchesApiService;