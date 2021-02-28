import { useState, useEffect } from 'react';
import axios from 'axios'

function KeyAPI() {
    const [key, setKey] = useState([])

    const getKey = async () => {
        const url = "v1/key/info"
        const params = {
            headers: {
                'X-CMC_PRO_API_KEY': process.env.REACT_APP_COINMARKET_API,
            },
            json: true,
            gzip: true

        }
        const res = await axios.get(url, params)
        setKey(res.data.data)
    }
    useEffect(() => {
        getKey()
    }, [])

    return {
        key: [key, setKey]
    }


}

export default KeyAPI;