import React, { Component } from 'react'
import './App.css';
import Web3 from "web3";
import Home from './pages/home/home';
import Error from './pages/error/error';
import { DataProvider } from './GlobalState';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TokenExchange from './pages/exchange/tokenExchange';
import Voting from './pages/voting/voting';
import NFT from './pages/nft/nft';

class App extends Component {
  async componentWillMount() {
    await this.loadBlockchainData();
  }

  async loadBlockchainData(dispatch) {
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert("Please login with MetaMask");
    }
  }

  render() {
    return (
      <BrowserRouter>
        <DataProvider>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  loadBlockchainData={this.loadBlockchainData}
                />
              )}
            />
            <Route
              exact
              path="/tokenexchange"
              render={() => (
                <TokenExchange
                  loadBlockchainData={this.loadBlockchainData}
                />
              )}
            />
            <Route
              exact
              path="/voting"
              render={() => (
                <Voting
                />
              )}
            />
            <Route
              exact
              path="/nft"
              render={() => (
                <NFT
                />
              )}
            />
            <Error />
          </Switch>
        </DataProvider>
      </BrowserRouter>
    );
  }
}

export default App;
