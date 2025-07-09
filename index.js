const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: './.env' })
const PORT = process.env.PORT
const app = express()

require('./database/dbConn');
app.use(express.json())
app.use('/', require('./routes/chatRoute'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})
