import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
  return(
    <>
      <div className="menu_item burger">Sports</div>
      <div className="menu_item">
        <div className="user_info">
          <div className="user_name">{props.user}</div>
          <div className="balance">{props.balance}</div>
        </div>
        <div className="menu_hamburger burger">|||</div>
      </div>
      <div className="menu_item burger">
        <div>Betslip</div>
        <div className="betslip_count">1</div>
      </div>
    </>
  );
}