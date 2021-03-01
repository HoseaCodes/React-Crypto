import React, { useState, useContext, useEffect } from 'react';
import Ticker from 'react-ticker';
import { GlobalState } from '../GlobalState';
import './style.css';

const GetPrices = () => {
    const state = useContext(GlobalState)
    const cryptos = state.coinMarketAPI.crypto[0]
    const [allTicker, setTicker] = useState('')
    var tickers = [];
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });


    useEffect(() => {
        // const timer = setInterval(() => {
        // while (tickers.length < 200) {

        cryptos.forEach(function (crypto) {
            tickers.push(crypto.symbol)
            tickers.push("$" + formatter.format(Math.round(crypto.quote.USD.price * 100) / 100))
            tickers.push(" | ")
        });
        // }
        setTicker(tickers);
        // }, 10000)
        // return () => clearInterval(timer)
    }, []);

    return allTicker ? (
        <p style={{ whiteSpace: 'nowrap' }}>{allTicker.join(" ")}</p>
    ) : (
            <p style={{ visibility: 'hidden' }}>No Data</p>
        )

}
function CryptoPrices() {
    return (
        <div className="tickerWrapper">
            <Ticker speed={3}>
                {() => <GetPrices />}
            </Ticker>
        </div>
    )
}


export default CryptoPrices
