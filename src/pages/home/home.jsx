import React from "react";
import CryptoTable from "../../components/cryptoData";
import NavBar from '../../components/navBar';

const Home = () => {
    return (
        <React.Fragment>
            <NavBar />
            {/* <CryptoPrices /> */}
            <CryptoTable />
        </React.Fragment>
    )
}


export default Home;