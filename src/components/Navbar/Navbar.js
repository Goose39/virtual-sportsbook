import React from 'react';
import LoginOptions from './LoginOptions/LoginOptions';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props) {
  return(
    <>
      <nav>
        <div className="menu_item">
          {props.loggedIn? 
          (
            <div className="user_info">
              <div className="user_name">{props.user}</div>
              <div className="balance">{props.balance > 0? `$${props.balance }`: <a onClick={() => props.reloadBalance()}>Reload Balance</a>}</div>
              <Link to="/history">Bet History</Link>
            </div> 
          )
          : <LoginOptions />}
        </div>
      </nav>
    </>
  );
}