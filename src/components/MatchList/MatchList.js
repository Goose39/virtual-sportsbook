import React from 'react';
import Sport from './Sport/Sport';
import './MatchList.css';

export default class MatchList extends React.Component {
  state = {
    mobile_active: false, 
  }
  
  toggleMobileMenu = () => {
    let change = !this.state.mobile_active

    this.setState({
      mobile_active: change,
    })
  }

  isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  render () {

    let sports;

    if (!this.isEmpty(this.props.matches)) {
      sports = Object.keys(this.props.matches)
                .map(sport => 
                  <Sport 
                    key={sport}
                    sport={sport} 
                    leagues={this.props.matches[sport].leagues}
                  /> )    
    } else sports = "No upcoming matches to display, check back later for updated match list"
     
    return(
      <>
        <div className="matchlist_burger menu_item" onClick={() => this.toggleMobileMenu()}>Sports</div>
        <section className={`match_list ${this.state.mobile_active? "mobile_active": ""}`}>
          {sports}
        </section>
      </>
    );
  }
  
}