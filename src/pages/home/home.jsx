import React from "react";
import { Link } from "react-router-dom";
import CryptoChart from "../../components/cryptoChart";
import CryptoPrices from '../../components/cryptoScroll';
import NavBar from '../../components/navBar';

const Home = () => {
    return (
        <React.Fragment>
            <NavBar />
            <CryptoPrices />
            <CryptoChart />
            <Link to='/'>Go Back Home</Link>
        </React.Fragment>
    )
}


export default Home;