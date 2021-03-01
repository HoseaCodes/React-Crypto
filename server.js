require('dotenv').config()
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cors = require('cors');
const app = express();
const axios = require('axios')

app.use(express.json());
app.use(cors());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//Routes

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get("/api/listings", async (req, res) => {
    const url = "https://api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
    const params = {
        qs: {
            'start': '1',
            'limit': '5000',
            'convert': 'USD'
        },
        headers: {
            "X-CMC_PRO_API_KEY": process.env.REACT_APP_COINMARKET_API,
        },
        json: true,
        gzip: true
    };

    try {
        await axios(url, params).then(response => {
            res.json(response.data);
            console.log(response)
        });
    } catch (err) {
        res.send("Sorry the currency you are looking for is not available");
        console.log(err);
    }
});


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port, ${PORT}`)
})