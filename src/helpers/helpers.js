import { oddsPairs } from "..store/";

export const priceMatch = function(home, away) {
  let odds = {
    "home_odd": null,
    "away_odd": null
  }

  //Get home and away rankings
  const homeRank = home.rank
  const awayRank = away.rank

  //Calc difference in strength
  teamDiff = Math.abs(Math.floor((homeRank - 1 - awayRank)));

  //Get odds pair for stregth difference
  let pair = oddsPairs[teamDiff]
  
  if (homeRanking < awayRanking) {
    odds.home_odd = pair.fav
    odds.away_odd = pair.underdog
  } else {
    odds.home_odd = pair.underdog
    odds.away_odd = pair.fav
  }

  return odds
}