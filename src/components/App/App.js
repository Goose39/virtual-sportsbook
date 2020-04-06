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
import BetList from '../BetHistory/BetList/BetList';
import generateMatch from '../../helpers/generateMatch';
import { v4 as uuidv4 } from 'uuid';
import { sportsData } from "../../store";
import { matches } from "../../store";

class App extends React.Component {

  state = {
    user: "Guest", 
    balance: 1000,
    bets: [],
    matches: matches,
    betHistory: [],
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

  createBet = (sport, league, team, price, matchId) => {
    const newBets = [...this.state.bets];
    newBets.push({
      betId: uuidv4(),
      sport: sport,
      league: league, 
      team: team, 
      price: price, 
      betAmount: 0, 
      matchId: matchId,
    })

    this.setState({
      bets: newBets
    })
  }

  handleBetAmount = (betId, betAmount) => {
    console.log(betId, betAmount)
    let newBets = [...this.state.bets];
    console.log(newBets)

    for (let i = 0; i < newBets.length; i++) {
      console.log(newBets[i].betId, betId)
      if ( newBets[i].betId == betId)
        {
          console.log(newBets[i])
          newBets[i].betAmount = parseInt(betAmount);
        }
    }

    console.log(newBets)

    this.setState({
      bets: newBets
    });
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
            render={() => <Navbar user={this.state.user} balance={this.state.balance} bets={this.state.bets}/>}
          />
          <main>          
            <MatchList matches={this.state.matches}/>
            <div className="console">
              <Switch>
                <Route
                  path='/welcome'
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
                  render={() => <BetList 
                                  bets={this.state.bets} 
                                  matches={this.state.matches}  
                                />}
                />
              </Switch>
            </div>
            <Betslip bets={this.state.bets} handleBetAmount={this.handleBetAmount}/>
          </main>
        </div>
      </>
    </SportsbookContext.Provider>
    );
  }
}

export default withRouter(App);