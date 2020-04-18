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
        <div className='menu_item user_controls' >
          {props.loggedIn? 
          (<>
              <div className='stacked_group'>
                <div className='user'>{props.user}</div>
                <div className='balance'>
                  {props.balance > 0 // Display reload option if balance is zero
                  ? <div>{`$${props.balance.toFixed(2)}`}<button className='refresh_button' onClick={() => props.refreshBalance()}><FontAwesomeIcon icon={faSync} size='xs' /></button></div>
                  : <button onClick={() => props.reloadBalance()}>Reload Balance</button>}
                </div>
              </div>
              <div className='stacked_group'>
                <Link className='history_link' to='/history'>Bet History</Link>
                <button className='logout_button' onClick={() => props.handleUserlogout()}>Logout</button>
              </div>
          </>)
          : <LoginOptions handleSetUser={props.handleSetUser} />}
        </div>
      </nav>
    </>
  );
}