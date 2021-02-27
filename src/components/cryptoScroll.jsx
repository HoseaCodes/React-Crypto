import React, { useState, useContext, useEffect } from 'react';
import Ticker from 'react-ticker';
import { GlobalState } from '../GlobalState';
import './scroll.css';
const GetPrices = () => {
    const state = useContext(GlobalState)
    const cryptos = state.coinMarketAPI.crypto[0]
    const [allTicker, setTicker] = useState('')
    var tickers = [];
    const cryptosEnd = cryptos.length - 1;

    useEffect(() => {
        cryptos.forEach(function (crypto) {
            while (tickers !== cryptosEnd) {
                tickers.push(crypto.symbol)
                const price = Math.round(crypto.quote.USD.price * 100) / 100
                tickers.push("$" + price)
            }
        });
        setTicker(tickers);
    }, [tickers]);
    console.log(allTicker)

    return allTicker ? (
        <p style={{ whiteSpace: 'nowrap' }}>{allTicker.join(" ")}</p>
    ) : (
            <p style={{ visibility: 'hidden' }}>No Data</p>
        )

}
function CryptoPrices() {
    return (
        <div className="tickerWrapper">
            <Ticker>
                {() => <GetPrices />}
            </Ticker>
        </div>
    )
}


export default CryptoPrices
