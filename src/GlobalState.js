import React, { createContext, useState, useEffect } from 'react';
import CoinMarketAPI from './API/coinMarket';
import KeyAPI from './API/key';

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
