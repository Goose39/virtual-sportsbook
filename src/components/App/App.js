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
      console.log(newMatches[sport].leagues[league])
      newMatches[sport].leagues[league].push(match);
      console.log(newMatches[sport].leagues[league])
    }

    this.setState({
      matches: newMatches
    })
    
  }

  createBet = (tournament, team, price) => {
    const newBets = [...this.state.bets];
    newBets.push({
      tournament: tournament, 
      team: team, 
      price: price 
    })
    this.setState({
      bets: newBets
    })
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
    }
  return (
    <SportsbookContext.Provider value={contextValue}>
      <>
        <header role="banner">
          <h1 className="app_name">Virtual Sportsbook</h1>
        </header>
        <div className='App'>
          <nav>
            <Route
              path='/'
              render={() => <Navbar user={this.state.user} balance={this.state.balance} bets={this.state.bets}/>}
            />
          </nav>
          <main>          
            <MatchList matches={this.state.matches}/>
            <div className="console">
              <Switch>
                <Route
                  path='/welcome'
                  exact
                  render={({history}) => <Welcome 
                    handleSetUser={(user, balance) => this.handleSetUser(user, balance)}
                    goToSports={() => history.push('/sport')} 
                  />}
                />
                <Route
                  path='/match/:matchId'
                  render={() => <MatchView 
                    tournament="UEFA Champions League" 
                    home_team="Bayern" 
                    home_odd={1.73} 
                    away_team="Chelsea" 
                    away_odd={2.0} 
                    createBet={this.props.createBet}
              />}
                />
                <Route
                  path='/history'
                  render={() => <BetList 
                    bets={this.state.bets} 
                    matches={this.state.matches} 
                    createBet={this.createBet}  
                  />}
                />
              </Switch>
            </div>
            <Betslip bets={this.state.bets} />
          </main>
        </div>
      </>
    </SportsbookContext.Provider>
    );
  }
}

export default withRouter(App);