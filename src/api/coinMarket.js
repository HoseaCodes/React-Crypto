import { useState, useEffect } from 'react';
import axios from 'axios'

function CoinMarketAPI() {
    const [crypto, setCrypto] = useState([])

    const getCrypto = async () => {
        const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
        const params = {
            qs: {
                'start': '1',
                'limit': '5000',
                'convert': 'USD'
            },
            headers: {
                'X-CMC_PRO_API_KEY': process.env.REACT_APP_COINMARKET_API,
            },
            json: true,
            gzip: true

        }
        const res = await axios.get(url, params)
        setCrypto(res.data.data)
    }
    useEffect(() => {
        getCrypto()
    }, [])

    return {
        crypto: [crypto, setCrypto]
    }


}

export default CoinMarketAPI;