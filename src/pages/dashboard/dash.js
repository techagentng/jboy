import './dash.css'
import React from 'react'

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
          <a href="?#" class="active">
            <span class="material-icons-sharp"> home </span>
            <h3>Home</h3>
          </a>
          <a href="?#">
            <span class="material-icons-sharp"> savings </span>
            <h3>Investment Plan</h3>
          </a>
          <a href="?#">
            <span class="material-icons-sharp"> group </span>
            <h3>Profile</h3>
          </a>
          <a href="?#">
            <span class="material-icons-sharp"> payments </span>
            <h3>Deposit</h3>
          </a>
          <a href="?#">
            <span class="material-icons-sharp">account_balance_wallet </span>
            <h3>Deposit History</h3>
            <span class="message-count">26</span>
          </a>
          <a href="?#">
            <span class="material-icons-sharp"> savings </span>
            <h3>Withdraw</h3>
          </a>
          <a href="?#">
            <span class="material-icons-sharp"> price_change </span>
            <h3>Withdraw History</h3>
          </a>
          <a href="?#">
            <span class="material-icons-sharp"> account_balance_wallet </span>
            <h3>Bonus</h3>
          </a>
          <a href="?#">
            <span class="material-icons-sharp"> account_balance_wallet </span>
            <h3>Penalty</h3>
          </a>
          <a href="?#">
            <span class="material-icons-sharp"> badge </span>
            <h3>Referrals</h3>
          </a>
          <a href="?#">
            <span class="material-icons-sharp"> lock </span>
            <h3>Change Password</h3>
          </a>
          <a href="?#">
            <span class="material-icons-sharp"> logout </span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>

      <main>
        <div class="upp">
          <h1>Dashboard</h1>
        </div>
        <div class="logged">
          <span class="material-icons-sharp"> contacts </span>
          <div class="dev">Welcome : <span>Emmanuel</span> </div> 
        </div>

        <div class="insights1">

        
          <div class="balance">
            <span class="material-icons-sharp"> savings </span>
            <div class="bal-amt">
              <h1>$100,000.00</h1>
              <h3 >Avaliable Balance</h3>
            </div>
          </div>

          <div class="deposit">
            <span class="material-icons-sharp"> savings </span>
            <div class="bal-amt">
              <h1>$0.0</h1>
              <h3 >Active Deposit</h3>
            </div>
          </div>
 

        </div>
        <div class="insights">

          <div class="referals">
            <span class="material-icons-sharp"> group </span>
            <div class="bal-amt">
              <h1>0</h1>
              <h3 >Total Referals</h3>
            </div>
          </div>

     
          <div class="earning">
            <span class="material-icons-sharp"> group </span>
            <div class="bal-amt">
              <h1>0</h1>
              <h3 >Total Earning</h3>
            </div>
          </div>

        
          <div class="referal">
          <h2>Referral Link</h2>
          <div class="ref">
            <button class="get-a" onclick="copyTxt()">Copy</button>
            <input type="text" name="" id="ref-txt" value="capacitybay-ref234"/>
            <button class="get-b">Get Banner</button>
          </div>
          <div class="copied">Ref Copied</div>
            
          </div>

         
        </div>


        <div class="insights3">

          <div class="sales">
            <iframe title="ifra" frameborder="0" scrolling="no" height="100%" width="100%" sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups" src="https://widget.nomics.com/assets/BTC/USD/"></iframe>
          </div>


        </div>
      </main>
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