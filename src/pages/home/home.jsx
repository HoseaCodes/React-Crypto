import React from "react";
import { Link } from "react-router-dom";
import CryptoTable from "../../components/cryptoData";
import CryptoPrices from '../../components/cryptoScroll';
import NavBar from '../../components/navBar';

const Home = () => {
    return (
        <React.Fragment>
            <NavBar />
            {/* <CryptoPrices /> */}
            <CryptoTable />
            <Link to='/'>Go Back Home</Link>
        </React.Fragment>
    )
}


export default Home;