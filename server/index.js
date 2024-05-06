const express = require('express');
const cors = require('cors');
const { host, database, password, user, port } = require('./config.json')

const app = express();
app.use(cors());
app.use(express.json());


















app.listen(port, () => {
    console.log("Server Started in port:" + port)
})