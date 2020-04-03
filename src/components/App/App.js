import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import Welcome from '../Welcome/Welcome';
import Sportsbook from '../Sportsbook/Sportsbook';
import Navbar from '../Navbar/Navbar';
import generateMatch from '../../helpers/generateMatch';
import { sportsData } from "../../store";

class App extends React.Component {

  state = {
    user: "Guest", 
    balance: 1000,
    bets: [],
  }

  componentDidMount() {
    generateMatch(sportsData)
  }

  handleSetUser = (user, balance) => {
    this.setState({
      user: user,
      balance: balance
    });
  };

  render() {
  return (
    <>
      <header role="banner">
        <h1 class="app_name">Virtual Sportsbook</h1>
      </header>
      <nav>
        <Route
          path='/sport'
          render={() => <Navbar user={this.state.user} balance={this.state.balance}/>}
        />
      </nav>
      <main className='App'>
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
            component={Sportsbook}
          />
        </Switch>
      </main>
    </>
    );
  }
}

export default withRouter(App);