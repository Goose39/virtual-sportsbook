import React from 'react'
import './BetHistory.css'

export default function BetHistory(props) {
  let bets = []
  // props.bets? bets = props.bets.map(bet => <tr className="bet">
  //                                           <td>bet.desc</td>
  //                                           <td>8/11</td>
  //                                           <td>$100</td>
  //                                           <td>$172.73</td>
  //                                           <td>Open</td>
  //                                         </tr>)
  return(
    <main role="main" className="match_view">
      <header>Betting History</header>
      <table class="history">
        <tr>
          <td>Details</td>
          <td>Price</td>
          <td>Stake</td>
          <td>Return</td>
          <td>Status</td>
        </tr>
        {bets}
      </table>
    </main>
  );
}
