import '../pages/dashboard/dash.css'
import React from 'react'
import Plans from '../components/plans'
import {Link} from 'react-router-dom'

export default function Dashboard(){
    return (
        <>
            <div class="container">
      <aside>
        <div class="top">
          <div class="logo">
            
            <h2>CareTrust<span class="danger">Finance</span></h2>
          </div>
          <div class="close" id="close-btn">
            <span class="material-icons-sharp"> close </span>
          </div>
        </div>

        <div class="sidebar">
          <Link href="??#" class="active">
            <span class="material-icons-sharp"> home </span>
            <h3>Home</h3>
          </Link>
          <Link href="??#">
            <span class="material-icons-sharp"> savings </span>
            <h3>Investment Plan</h3>
          </Link>
          <Link href="?#">
            <span class="material-icons-sharp"> group </span>
            <h3>Profile</h3>
          </Link>
          <Link href="?#">
            <span class="material-icons-sharp"> payments </span>
            <h3>Deposit</h3>
          </Link>
          <Link href="?#">
            <span class="material-icons-sharp">account_balance_wallet </span>
            <h3>Deposit History</h3>
            <span class="message-count">26</span>
          </Link>
          <Link href="?#">
            <span class="material-icons-sharp"> savings </span>
            <h3>Withdraw</h3>
          </Link>
          <Link href="?#">
            <span class="material-icons-sharp"> price_change </span>
            <h3>Withdraw History</h3>
          </Link>
          <Link href="?#">
            <span class="material-icons-sharp"> account_balance_wallet </span>
            <h3>Bonus</h3>
          </Link>
          <Link href="?#">
            <span class="material-icons-sharp"> account_balance_wallet </span>
            <h3>Penalty</h3>
          </Link>
          <Link href="?#">
            <span class="material-icons-sharp"> badge </span>
            <h3>Referrals</h3>
          </Link>
          <Link href="?#">
            <span class="material-icons-sharp"> lock </span>
            <h3>Change Password</h3>
          </Link>
          <Link href="?#">
            <span class="material-icons-sharp"> logout </span>
            <h3>Logout</h3>
          </Link>
        </div>
      </aside>

      <Plans/>
    </div>

    <div class="right">
      <div class="top">
        <button id="menu-btn">
          <span class="material-icons-sharp"> menu </span>
        </button>
        <div class="username">Emmanuel</div>
      </div>
    </div>
        </>
    )
}