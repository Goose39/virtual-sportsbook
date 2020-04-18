import Moment from 'moment';
// Check if match has already started. Check to disable betting on matches 
// users may navigate to that have already started
export const checkMatchNotStarted = (match) => {
  let now = Moment();
  return Moment(match.match_start).isAfter(now)
}