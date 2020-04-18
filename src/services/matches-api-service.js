import config from '../config';

const MatchesApiService = {
  // Get all matches that have not yet started (MatchList)
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
  // Get list of 10 matches that are soonest to start (/upcoming)
  getUpcomingMatches() {
    return fetch(`${config.API_ENDPOINT}/matches/upcoming`, {
      method: 'GET'
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .catch(error => error)
  },
  // Get a match by it match_is (match/:matchId) 
  getMatchById(match_id) {
    return fetch(`${config.API_ENDPOINT}/matches/match/${match_id}`, {
      method: 'GET'
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .catch(error => error)
  },
}

export default MatchesApiService;