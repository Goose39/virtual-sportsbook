import Moment from 'moment';

export const checkMatchNotStarted = (match) => {
  let now = Moment();
  return Moment(match.match_start).isAfter(now)
}