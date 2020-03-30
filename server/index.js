//Ensure MongoDB Community Service running
//Enter terminal commands first:
//npm install mongoose
//Start server:
//npm start

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => console.log('DB connected')
);
const connection = mongoose.connection;
connection.once(
    'open',
    () => { 
        console.log('DB connection established');
    }
);
const addRouter = require('./routes/contacts');
app.use('/contacts', addRouter);

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, 
    () => console.log(`Running on ${port}`)
);