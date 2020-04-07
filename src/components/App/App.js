import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import "./App.css"
import SportsbookContext from "../../SportsbookContext";
import Welcome from '../Welcome/Welcome';
import Navbar from '../Navbar/Navbar';
import MatchList from '../MatchList/MatchList';
import Betslip from '../BetSlip/Betslip';
import MatchView from '../MatchView/MatchView';
import BetList from '../BetList/BetList';
import generateMatch from '../../helpers/generateMatch';
import { v4 as uuidv4 } from 'uuid';
import { sportsData } from "../../store";
import { matches } from "../../store";

class App extends React.Component {

  state = {
    user: "Guest", 
    balance: 1000,
    betslipDisplay: true, 
    sportListDisplay: false,
    bets: [],
    matches: matches,
    betHistory: [
      {
        betId: uuidv4(),
        sport: "Soccer",
        league: "Premier League", 
        team: "Chelsea", 
        price: 1.9, 
        stake: 1000,
        return: 1900, 
        matchId: "c2a78009-f79f-43c3-86f1-3a3ff1f71160",
        matchDesc: "Chelsea v Leicester City",
        status: "Open",
      },
    ],
    selectedMatchId: ""
  }

  componentDidMount() {
    const newMatches = {...this.state.matches};
    for (let i = 1; i <= 50; i++) {
      let newMatch = generateMatch(sportsData);
      let {sport, league, match} = newMatch;
      newMatches[sport].leagues[league].push(match);
    }

    this.setState({
      matches: newMatches
    })
  }

  createBet = (sport, league, team, price, matchId, matchDesc) => {
    const newBets = [...this.state.bets];
    newBets.push({
      betId: uuidv4(),
      sport: sport,
      league: league, 
      team: team, 
      price: price, 
      stake: 0, 
      matchId: matchId,
      matchDesc: matchDesc,
    })

    this.setState({
      bets: newBets
    })
  }

  handleStake = (betId, stake) => {
    let newBets = [...this.state.bets];

    for (let i = 0; i < newBets.length; i++) {
      if ( newBets[i].betId == betId ) {
          if (!isNaN(stake)) {
            newBets[i].stake = stake;
          } else {
            newBets[i].stake = 0;
          } 
        }
      }
    
    this.setState({
      bets: newBets
    });
  }

  removeBet = (betId) => {
    const newBets = [...this.state.bets];
    
    for (let i = 0; i < newBets.length; i++) {
      if ( newBets[i].betId == betId)
        {
         newBets.splice(i, 1)
        }
    }

    this.setState({
      bets: newBets
    })
  }

  placeBet = (betTotal) => {
    if (betTotal > 0) {
      let bets = [...this.state.bets];
      let newHistory = [...this.state.betHistory];

      for (let i=0; i < bets.length; i++) {
        if (bets[i].stake > 0) {
          let bet = {
            betId: bets[i].betId,
            sport: bets[i].sport,
            league: bets[i].league, 
            team: bets[i].team, 
            price: 1.9, 
            stake: bets[i].stake,
            return: bets[i].price*bets[i].stake, 
            matchId: bets[i].matchId,
            matchDesc: bets[i].matchDesc,
            status: "Open",
          }
          newHistory.push(bet)
        }
      }

      this.setState({
        betHistory: newHistory,
        bets: []
      })
    }
  }

  handleSetUser = (user, balance) => {
    this.setState({
      user: user,
      balance: balance
    });
  };

  render() {
    const contextValue = {
      createBet: this.createBet,
      removeBet: this.removeBet,
      handleBetAmount: this.handleBetAmount,
      bets: this.state.bets,
      matches: this.state.matches,
    }
  return (
    <SportsbookContext.Provider value={contextValue}>
      <>
        <header role="banner">
          <h1 className="app_name">Virtual Sportsbook</h1>
        </header>
        <div className='App'>
          <Route
            path='/'
            render={() => <Navbar user={this.state.user} balance={this.state.balance} bets={this.state.bets} loggedIn="true"/>}
          />
          <main>          
            <MatchList matches={this.state.matches}/>
            <div className="console">
              <Switch>
                <Route
                  path='/'
                  exact
                  component={Welcome} 
                  />}
                />
                <Route
                  path='/match/:matchId'
                  component={MatchView}
                />
                <Route
                  path='/history'
                  render={() => <BetList bets={this.state.betHistory} />}
                />
              </Switch>
            </div>
            <Betslip bets={this.state.bets} balance={this.state.balance} handleStake={this.handleStake} removeBet={this.removeBet} placeBet={this.placeBet} />
          </main>
        </div>
      </>
    </SportsbookContext.Provider>
    );
  }
}

export default withRouter(App);