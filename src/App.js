import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        🖖 Live long and prosper.
        </div>

        <div className="bio">
        My name is Sreehari P Sreedhar, but everybody calls me Orectique. *Juan flies away*  Connect your Ethereum wallet and say hi!
        </div>

        <button className="waveButton" onClick={wave}>
          Vulcan Salute Me
        </button>
      </div>
    </div>
  );
}
