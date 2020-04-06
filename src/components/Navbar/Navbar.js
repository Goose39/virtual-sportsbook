import React from 'react';
import LoginOptions from './LoginOptions/LoginOptions';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props) {
  let totalBets = props.bets.length;
  return(
    <>
      <nav>
        <div className="menu_item">
          {props.loggedIn? 
          (
            <div className="user_info">
              <div className="user_name">{props.user}</div>
              <div className="balance">${props.balance}</div>
              <Link to="/history">Bet History</Link>
            </div> 
          )
          : <LoginOptions />}
        </div>
        <div className="menu_item betslip_burger" onClick={() => props.toggleBetslip()}>
          <div>Betslip</div>
          {totalBets > 0? <div className="betslip_count">{totalBets}</div>:""}
        </div>
      </nav>
    </>
  );
}