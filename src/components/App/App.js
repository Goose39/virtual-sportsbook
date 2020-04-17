import React from 'react';
import { withRouter } from "react-router";
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import SportsbookContext from "../../context/SportsbookContext";
import Welcome from '../Welcome/Welcome';
import UpComingMatches from '../UpComingMatches/UpComingMatches';
import Navbar from '../Navbar/Navbar';
import MatchList from '../MatchList/MatchList';
import Betslip from '../BetSlip/Betslip';
import MatchView from '../MatchView/MatchView';
import BetList from '../BetList/BetList';
import { v4 as uuidv4 } from 'uuid';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import BetsApiService from '../../services/bets-api-service';
import BalanceApiService from '../../services/balance-api-service';
import PrivateRoute from '../Utils/PrivateRoute';

class App extends React.Component {

  state = {
    user: null, 
    user_id: null,
    balance: null,
    bets: [],
    loggedIn: false,
    betslipDisplay: true, 
    sportListDisplay: false,
    selectedMatchId: "", 
    upcomingMatches: [],
    error: null
  }

  componentDidMount() {   
    // if user has an existing token, refresh login to get new token and balance
    if (TokenService.hasAuthToken()) {
      return this.refreshBalance()
      .then(res => res)
      .catch(error => this.setState({error}))
    }
  }     

  refreshBalance = () => {
    const{ user_name, user_id } = TokenService.readJwtToken();
    return BalanceApiService.getUserBalance(user_id)
      .then(balance => {
        this.setState({
          balance: balance.user_balance,
          user: user_name,
          loggedIn: true,
          user_id: user_id,
        })
      })
  };

  reloadBalance = () => {
    const{ user_id } = TokenService.readJwtToken();
    return BalanceApiService.reloadUserBalance(user_id)
      .then(balance => {
        console.log(balance)
        if (balance > 0) {
          this.setState({
            balance: balance
          })
        }
      }
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
      if ( newBets[i].betId === betId ) {
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
      if ( newBets[i].betId === betId)
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
      let confirmedBetIds = [];
      const{ user_id } = TokenService.readJwtToken();

      for (let i=0; i < bets.length; i++) {
        console.log(bets[i].betId)
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
            .then(res => {
              console.log(res)
              console.log(bets[i].betId)
             confirmedBetIds.push(bets[i].betId)
            })
            .catch(error => console.log(error))
            )
        }
      }

      return Promise.all(promises)
      .then(result  => {
        for (let i = 0; i < bets.length; i++) {
          if (confirmedBetIds.includes(bets[i].betId)) {
            bets.splice(i, 1)
          } 
        }
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
    /* when logging out, clear token and callbacks to the refresh api and idle auto logout */
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.props.history.push('/upcoming');
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
      upcomingMatches: this.state.upcomingMatches, 
      betHistory: this.state.betHistory,
      user_name: this.state.user,
      user_id: this.state.user_id,
    }

  return (
    <SportsbookContext.Provider value={contextValue}>
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
              {this.state.error? <div className="console_error">{this.state.error}</div>:null}
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
                <Route component={UpComingMatches}/>
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
    </SportsbookContext.Provider>
    );
  }
} 

export default withRouter(App);