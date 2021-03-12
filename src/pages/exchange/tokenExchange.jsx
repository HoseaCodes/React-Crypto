import React, { Component } from 'react';
import NavBar from '../../components/navBar';
import logo from '../../images/cryptologo.png';
import './tokenExchange.css';

class TokenExchange extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <main role="main" className="col-lg-12 d-flex text-center">
                            <div className="content mr-auto ml-auto">
                                <a
                                    href="http://www.dappuniversity.com/bootcamp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={logo} className="App-logo" alt="logo" />
                                </a>
                                <h1>Dapp University Starter Kit</h1>
                                <p>
                                    Edit <code>src/components/App.js</code> and save to reload.
                </p>
                                <a
                                    className="App-link"
                                    href="http://www.dappuniversity.com/bootcamp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LEARN BLOCKCHAIN <u><b>NOW! </b></u>
                                </a>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default TokenExchange;
