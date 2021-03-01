import React from "react";
// import CryptoTable from "../../components/cryptoData";
import NewCryptoTable from "../../components/cryptoDataGecko";
import NavBar from '../../components/navBar';

const Home = () => {
    return (
        <React.Fragment>
            <NavBar />
            {/* <CryptoPrices /> */}
            {/* <CryptoTable /> */}
            <NewCryptoTable />
        </React.Fragment>
    )
}


export default Home;