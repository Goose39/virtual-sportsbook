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
    .catch(error => console.log(error))
  },
  getUpcomingMatches() {
    return fetch(`${config.API_ENDPOINT}/matches/upcoming`, {
      method: 'GET'
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .catch(error => console.log(error))
  },
  getMatchById(match_id) {
    return fetch(`${config.API_ENDPOINT}/matches/match/${match_id}`, {
      method: 'GET'
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .catch(error => console.log(error))
  },
}

export default MatchesApiService;