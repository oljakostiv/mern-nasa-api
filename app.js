const express = require('express');
const config = require('./config/default.json');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(config.mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true});

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/collections', require('./routes/myCollections'));

const PORT = config.port || 5000

app.listen(PORT, (err) => {
    if (err) {
        console.log('Server Error', err);
    }
        console.log(`App has been started on port ${PORT}...`);
});

