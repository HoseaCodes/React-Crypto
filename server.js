require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

//Routes

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port, ${PORT}`)
})