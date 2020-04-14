import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter, Router } from "react-router";
import "./App.css";
import SportsbookContext from "../../SportsbookContext";
import Welcome from '../Welcome/Welcome';
import UpComingMatches from '../UpComingMatches/UpComingMatches';
import Navbar from '../Navbar/Navbar';
import MatchList from '../MatchList/MatchList';
import Betslip from '../BetSlip/Betslip';
import MatchView from '../MatchView/MatchView';
import BetList from '../BetList/BetList';
import { v4 as uuidv4 } from 'uuid';
import TokenService from '../../services/token-service';
import MatchesApiService from '../../services/matches-api-service';
import BetsApiService from '../../services/bets-api-service';
import BalanceApiService from '../../services/balance-api-service';
import PrivateRoute from '../Utils/PrivateRoute';

class App extends React.Component {

  state = {
    user: null, 
    balance: null,
    loggedIn: false,
    betslipDisplay: true, 
    sportListDisplay: false,
    bets: [],
    matches: {},
    betHistory: [],
    selectedMatchId: "", 
    upcomingMatches: [],
  }

  componentDidMount() {
    // Get list of upcoming matches
    MatchesApiService.getMatches()
    .then(res => { 
      this.setState({
        matches: res
      })
    }); 
    //Get upcoming matches
    MatchesApiService.getUpcomingMatches()
    .then(matches => {
      this.setState({
        upcomingMatches: matches
      })
    }); 

    // if user has an existing token, refresh login to get new token and balance
    if (TokenService.hasAuthToken()) {
      const{ user_name, user_id} = TokenService.readJwtToken()

      return this.refreshBalance(user_id)
      .then(res => {
        this.setState({
          user_name: user_name,
          loggedIn: true,
          balance: res
        })
        return BetsApiService.getUserBets(user_id)
        .then(bets => {
          this.setState({
            betHistory: bets,
          })
        })
      })
    };    
      
  }

  refreshBalance = () => {
    const{ user_id} = TokenService.readJwtToken()
    return BalanceApiService.getUserBalance(user_id)
      .then(balance => {
        this.setState({
          balance: balance.user_balance
        })
      })
  };

  reloadBalance = () => {
    const{ user_id} = TokenService.readJwtToken()
    return BalanceApiService.relaodUserBalance(user_id)
      .then(balance =>
        this.setState({
        balance: balance.user_balance
      })
    )};


  createBet = (sport, league, team, price, matchId, match_desc, teamId) => {
    const newBets = [...this.state.bets];
    newBets.push({
      betId: uuidv4(),
      sport: sport,
      league: league, 
      team: team, 
      price: price, 
      stake: 0, 
      matchId: matchId,
      match_desc: match_desc,
      teamId: teamId
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
      let newBalance = this.state.balance;
      let promises = [];
      const{ user_id } = TokenService.readJwtToken()

      for (let i=0; i < bets.length; i++) {

        if (bets[i].stake > 0) {
          let bet = {
            user_id: user_id, 
            team_id: bets[i].teamId, 
            price: bets[i].price, 
            bet_stake: bets[i].stake, 
            match_id: bets[i].matchId,
            match_desc: bets[i].match_desc
          }
          promises.push(
            BetsApiService.placeBet(bet)
            .then(bet => {
              bets.splice(i, 1)
            })
            .catch(error => console.log(error))
            )
        }
      }

      return Promise.all(promises)
      .then(result  => {
        this.setState({ 
          bets: bets, 
          balance: newBalance - betTotal 
        })
      })

      
    }
  }

  handleSetUser = (user, balance) => {
    this.setState({
      user: user,
      balance: balance,
      loggedIn: true
    });
  };

  handleUserlogout = () => {
    TokenService.clearAuthToken();
    this.setState({
      loggedIn: false,
      balance: null,
      user: null, 
      betHistory: []
    })
  }

  render() {
    const contextValue = {
      createBet: this.createBet,
      removeBet: this.removeBet,
      handleBetAmount: this.handleBetAmount,
      bets: this.state.bets,
      matches: this.state.matches,
      upcomingMatches: this.state.upcomingMatches
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
            render={() => <Navbar 
                            user={this.state.user} 
                            balance={this.state.balance} 
                            bets={this.state.bets} 
                            loggedIn={this.state.loggedIn} 
                            handleSetUser={this.handleSetUser} 
                            handleUserlogout={this.handleUserlogout} 
                            reloadBalance={this.reloadBalance} 
                            refreshBalance={this.refreshBalance}
                          />}
          />
          <main>          
            <MatchList matches={this.state.matches}/>
            <div className="console">
              <Switch>
                <Route
                  path={'/'}
                  exact
                  component={Welcome} 
                  />}
                />
                <Route
                  path={'/match/:matchId'}
                  component={MatchView}
                />
                <PrivateRoute
                  path={'/history'}
                  component={BetList}
                />
                <Route component={UpComingMatches} />
              </Switch>
            </div>
            <Betslip 
              bets={this.state.bets} 
              balance={this.state.balance} 
              handleStake={this.handleStake} 
              removeBet={this.removeBet} 
              placeBet={this.placeBet} 
              loggedIn={this.state.loggedIn}
            />
          </main>
        </div>
      </>
    </SportsbookContext.Provider>
    );
  }
}

export default withRouter(App);