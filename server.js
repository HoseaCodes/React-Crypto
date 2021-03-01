require('dotenv').config()
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//Routes

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port, ${PORT}`)
})