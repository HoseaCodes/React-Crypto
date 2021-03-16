import React, { Component } from 'react';
import Web3 from 'web3'
import EthSwap from '../../abis/EthSwap.json'
import Token from '../../abis/Token.json'
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

    async loadLockchainData() {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })

        const ethBalance = await web3.eth.getBalance(this.state.account)
        this.setState({ ethBalance: ethBalance })

        const networkId = await web3.eth.net.getId()
        const tokenData = Token.networks[networkId]
        if (tokenData) {
            const token = new web3.eth.Contract(Token.abi, tokenData.address)
            this.setState({ token: token })
            let tokenBalance = await token.methods.balanceOf(this.state.account).call()
            this.setState({ tokenBalance: tokenBalance.toString() })
        } else {
            window.alert('Token contract not deployed to detected network')
        }
        const ethSwapData = EthSwap.networks[networkId]
        if (ethSwapData) {
            const ethSwap = new web3.eth.Contract(EthSwap.abi, ethSwapData.address)
            this.setState({ ethSwap: ethSwap })
        } else {
            window.alert('EthSwap contract not deployed to detected network')
        }

        this.setState({ loading: false })
    }

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

    constructor(props) {
        super(props)
        this.state = {
            account: '',
            ethBalance: 0,
            token: {},
            ethSwap: {},
            tokenBalance: 0,
            loading: true
        }
    }
    render() {
        let content
        if (this.state.loading) {
            content = <p id="loader">Loading...</p>
        } else {
            content = <Swap
                ethBalance={this.state.ethBalance}
                tokenBalance={this.state.tokenBalance}
                buyTokens={this.buyTokens} />
        }
        return (
            <div>
                <NavBar account={this.state.account} />
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
                                <h1>Token Exchange</h1>
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
