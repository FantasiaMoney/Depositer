import React, { Component } from "react";
import "../App.css";
import ControlledTabs from "./ControlledTabs";
import ConnectWallet from './ConnectWallets'
class App extends Component {
  
  render() {
    
    return (
      <div className="connect text-center">
        <ConnectWallet/>
        <div
          className="card col-lg-12 ml-auto mr-auto"
          style={{ maxWidth: "320px" }}
        >
          <div></div>
          <h1 className="cardheader text-center">Rover Capital</h1>
          <ControlledTabs />
        </div>
      </div>
    );
  }
}

export default App;
