import React from "react";
// import CryptoTable from "../../components/cryptoData";
import GeckoCryptoPrices from "../../components/cryptoScrollGecko";
import NewCryptoTable from "../../components/cryptoDataGecko";
import NavBar from '../../components/navBar';
import Footer from "../../components/footer";

const Home = () => {
    return (
        <React.Fragment>
            <NavBar />
            {/* <CryptoPrices /> */}
            {/* <CryptoTable /> */}
            <GeckoCryptoPrices />
            <NewCryptoTable />
            <Footer />
        </React.Fragment>
    )
}


export default Home;