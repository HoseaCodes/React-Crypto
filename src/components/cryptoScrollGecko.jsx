import React, { useState, useContext, useEffect, useCallback } from 'react';
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

    const getTiickers = useCallback(() => {
        cryptos.forEach(function (crypto) {
            const symbol = crypto.symbol.toUpperCase()
            tickers.push(symbol)
            tickers.push("$" + formatter.format(crypto.current_price))
            tickers.push(" | ")
        });
        setTicker(tickers);
    }, [cryptos, formatter, tickers]);


    useEffect(() => {
        getTiickers()
    }, [getTiickers]);

    return allTicker ? (
        <p style={{ whiteSpace: 'nowrap' }}>{allTicker.join(" ")}</p>
    ) : (
            <p style={{ visibility: 'hidden' }}>No Data</p>
        )

}
function GeckoCryptoPrices() {
    return (
        <div className="tickerWrapper">
            <Ticker speed={3}>
                {() => <GetPrices />}
            </Ticker>
        </div>
    )
}


export default GeckoCryptoPrices
