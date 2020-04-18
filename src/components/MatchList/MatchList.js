import React from 'react';
import Sport from './Sport/Sport';
import { Link } from 'react-router-dom';
import './MatchList.css';
import MatchesApiService from '../../services/matches-api-service';

export default class MatchList extends React.Component {
  state = {
    mobile_active: false, 
    error: null,
    matches: {} 
  }
  
  componentDidMount() {
    MatchesApiService.getMatches()
    .then(res => { 
      this.setState({
        matches: res
      })
    })
    .catch(error => this.setState({error: "Unable to get match list at this time"}));
  }

  toggleMobileMenu = () => {
    let change = !this.state.mobile_active

    this.setState({
      mobile_active: change,
    })
  }

  isEmpty = (obj) => {
    return JSON.stringify(obj) === '{}';
  }

  render () {
    let sports;

    if (!this.isEmpty(this.state.matches)) {
      sports = Object.keys(this.state.matches)
        .map(sport => 
          <Sport 
            key={sport}
            sport={sport} 
            leagues={this.state.matches[sport].leagues}
          />)
      } else sports = "No upcoming matches to display, check back later for updated match list"
     
    return(
      <>
        <button className="matchlist_burger menu_item" onClick={() => this.toggleMobileMenu()}>Sports</button>
        <section className={`match_list_sidebar ${this.state.mobile_active? "mobile_active": ""}`}>
        {!this.state.error
          ? <>
              <div className="upcoming_link"><Link to={`/upcoming`}>Starting Soon</Link></div>
              <div className="match_list">{sports}</div>
            </>
          : <p>{this.state.error}</p>
        }
        </section>
      </>
    );
  }
  
}