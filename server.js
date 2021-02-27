require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


//Routes

app.get('/', (req, res) => {
    res.json({ msg: "Welcome" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port, ${PORT}`)
})