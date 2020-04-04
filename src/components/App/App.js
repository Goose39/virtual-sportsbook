import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import "./App.css"
import SportsbookContext from "../../SportsbookContext";
import Welcome from '../Welcome/Welcome';
import Sportsbook from '../Sportsbook/Sportsbook';
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
  }

  componentDidMount() {
    generateMatch(sportsData);
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
          <Switch>
            <Route
              path='/'
              exact
              render={({ history }) => <Welcome 
                                          handleSetUser={(user, balance) => this.handleSetUser(user, balance)}
                                          goToSports={() => history.push('/sport')} 
                                        />}
            />
            <Route
              path='/sport'
              render={() => <Sportsbook 
                              user={this.state.user} 
                              balance={this.state.balance} 
                              bets={this.state.bets} 
                              matches={this.state.matches} 
                              createBet={this.createBet}  
                            />}
            />
          </Switch>
        </div>
      </>
    </SportsbookContext.Provider>
    );
  }
}

export default withRouter(App);