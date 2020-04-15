import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import LoginOptions from './LoginOptions/LoginOptions';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props) {
  return(
    <>
      <nav>
        <div className="menu_item user_controls" >
          {props.loggedIn? 
          (<>
              <div className="stacked_group">
                <div className="user">{props.user}</div>
                <div className="balance">
                  {props.balance > 0
                  ? <div onClick={() => props.refreshBalance()}>{`$${props.balance} `}<FontAwesomeIcon icon={faSync} size="xs" /></div>
                  : <a onClick={() => props.reloadBalance()}>Reload Balance</a>}</div>
              </div>
              <div className="stacked_group">
                <Link className="history_link" to="/history">Bet History</Link>
                <div className="login_option" type="button" onClick={() => props.handleUserlogout()}>Logout</div>
              </div>
          </>)
          : <LoginOptions handleSetUser={props.handleSetUser} />}
        </div>
      </nav>
    </>
  );
}