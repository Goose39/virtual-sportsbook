import React from 'react';
import Sport from './Sport/Sport';
import './MatchList.css';

export default class MatchList extends React.Component {
  state = {
    mobile_active: false, 
  }
  
  toggleMobileMenu = () => {
    console.log("fires toggleMobileMenu")
    let change = !this.state.mobile_active

    this.setState({
      mobile_active: change,
    })
  }

  render () {
    let sports = Object.keys(this.props.matches)
                .map(sport => 
                  <Sport 
                    sport={sport} 
                    leagues={this.props.matches[sport].leagues}
                  /> )     

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