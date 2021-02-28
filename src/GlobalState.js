import React, { createContext } from 'react';
import CoinMarketAPI from './api/coinMarket';
import KeyAPI from './api/key';

export const GlobalState = createContext()


export const DataProvider = ({ children }) => {

    const state = {
        coinMarketAPI: CoinMarketAPI(),
        keyAPI: KeyAPI()
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
