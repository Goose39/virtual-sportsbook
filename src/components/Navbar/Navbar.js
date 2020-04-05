import React from 'react';
import LoginOptions from './LoginOptions/LoginOptions';
import './Navbar.css';

export default function Navbar(props) {
  let totalBets = props.bets.length;
  return(
    <nav>
      <div className="menu_item burger" onClick={() => {}}>Sports</div>
      <div className="menu_item">
        {props.loggedIn? (
          <>
            <div className="user_info">
              <div className="user_name">{props.user}</div>
              <div className="balance">${props.balance}</div>
            </div>
            <div className="menu_hamburger burger">|||</div>
          </> )
        : <LoginOptions />}
      </div>
      <div className="menu_item burger">
        <div>Betslip</div>
        {totalBets > 0? <div className="betslip_count" onClick={() => {}}>{totalBets}</div>:""}
      </div>
    </nav>
  );
}