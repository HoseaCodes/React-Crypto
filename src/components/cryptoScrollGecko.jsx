import React, { useState, useContext, useEffect, useCallback } from 'react';
import Ticker from 'react-ticker';
import { GlobalState } from '../GlobalState';
import './style.css';

//Display coingecko API info in scrolling feature
const GetPrices = () => {
    const state = useContext(GlobalState)
    const cryptos = state.coinMarketAPI.crypto[0]
    const [allTicker, setTicker] = useState('')
    // var tickers = [];
    var tickers = React.useMemo(() => [], [])

    const formatter = React.useMemo(() => new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), [])


    const getTiickers = useCallback(() => {
        cryptos.forEach(function (crypto) {
            const symbol = crypto.symbol.toUpperCase()
            tickers.push(symbol)
            tickers.push(formatter.format(crypto.price_change_percentage_24h) + '%')
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
