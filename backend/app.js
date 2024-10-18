require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
var cors = require('cors');
app.use(cors({origin:true,credentials:true}));
const users = require('./routes/api/users');
app.use('/api/users', users);
app.use(express.json({extended: false}));
const port = process.env.PORT || 8082;

const conn_str = process.env.MONGO_CONNECT;
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log('Mongoose DB connection successful');
})
.catch(err => {
    console.log(`Error connecting to Mongo DB: ${err}`);
})

