import React, { Component } from 'react';
import Web3 from 'web3'
import EthSwap from '../../abis/EthSwap.json'
// import Token from '../../abis/Token.json'
import PattonU from '../../abis/PattonUToken.json'
import NavBar from '../../components/navBar';
import Swap from '../../components/swap';
import logo from '../../images/cryptologo.png';
import './tokenExchange.css';

class TokenExchange extends Component {


    async componentWillMount() {
        await this.loadWeb3()
        await this.loadLockchainData()
        console.log(window.web3)
    }

    // Generate info from contract
    async loadLockchainData() {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        console.log(this.state.acccount)
        const ethBalance = await web3.eth.getBalance(this.state.account)
        this.setState({ ethBalance: ethBalance })
        console.log(this.state.ethBalance)

        const networkId = await web3.eth.net.getId()
        const tokenData = PattonU.networks[networkId]
        if (tokenData) {
            const token = new web3.eth.Contract(PattonU.abi, tokenData.address)
            this.setState({ token: token })
            let tokenBalance = await token.methods.balanceOf(this.state.account).call()
            console.log(token)
            this.setState({ tokenBalance: tokenBalance.toString() })
        } else {
            window.alert('Token contract not deployed to detected network')
        }
        const ethSwapData = EthSwap.networks[networkId]
        if (ethSwapData) {
            const ethSwap = new web3.eth.Contract(EthSwap.abi, ethSwapData.address)
            // let test = await ethSwap.methods.buyTokens().send({ value: 1, from: this.state.account })
            this.setState({ ethSwap: ethSwap })
        } else {
            window.alert('EthSwap contract not deployed to detected network')
        }

        this.setState({ loading: false })
    }

    //Load existing Information
    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Etherum broswer detected. You should consider trying MetaMask')
        }
    }

    buyTokens = (etherAmount) => {
        this.setState({ loading: true })
        this.state.ethSwap.methods.buyTokens().send({ value: etherAmount, from: this.state.account }).on('transactionHash', (hash) => {
            this.setState({ loading: false })
        })
    }
    sellTokens = (tokenAmount) => {
        this.setState({ loading: true })
        this.state.token.methods.approve(this.state.ethSwap.address, tokenAmount).send({ from: this.state.account }).on('transactionHash', (hash) => {
            this.state.ethSwap.methods.sellTokens(tokenAmount).send({ from: this.state.account }).on('transactionHash', (hash) => {
                this.setState({ loading: false })
            })
        })
    }

    handleMethod = (e) => {
        this.setState({ method: e })
        console.log(this.state.method)
    }

    constructor(props) {
        super(props)
        this.state = {
            account: '',
            ethBalance: 0,
            token: {},
            ethSwap: {},
            tokenBalance: 0,
            method: 'buy',
            loading: true
        }
    }
    render() {
        //Show buy/sell exchange
        let content
        if (this.state.loading) {
            content = <p id="loader">Loading...</p>
        } else {
            content = <Swap
                ethBalance={this.state.ethBalance}
                tokenBalance={this.state.tokenBalance}
                buyTokens={this.buyTokens}
                sellTokens={this.sellTokens}
                method={this.state.method} />
        }
        return (
            <div>
                <NavBar account={this.state.account} />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <main role="main" className="col-lg-12 d-flex text-center">
                            <div className="content mr-auto ml-auto">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="/"
                                >
                                    <img src={logo} className="App-logo" alt="logo" />
                                </a>
                                <h1 className="mb-5">Token Exchange</h1>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <button onClick={(e) => this.handleMethod('buy')} className="btn btn-outline-secondary btn-lg">Buy</button>
                                    <h2>Or</h2>
                                    <button onClick={(e) => this.handleMethod('sell')} className="btn btn-outline-secondary btn-lg">Sell</button>

                                </div>
                                {content}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default TokenExchange;
