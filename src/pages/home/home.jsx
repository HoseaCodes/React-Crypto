import React from "react";
// import CryptoTable from "../../components/cryptoData";
import GeckoCryptoPrices from "../../components/cryptoScrollGecko";
import NewCryptoTable from "../../components/cryptoDataGecko";
import Footer from "../../components/footer";
import Header from "../../components/header";

const Home = (props) => {
    return (
        <React.Fragment>
            <Header props={props} />
            {/* <CryptoPrices /> */}
            {/* <CryptoTable /> */}
            {/* <GeckoCryptoPrices /> */}
            <NewCryptoTable />
            <Footer />
        </React.Fragment>
    )
}


export default Home;