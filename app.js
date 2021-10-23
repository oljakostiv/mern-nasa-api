const express = require('express');
const {PORT, mongoUri} = require('./config/variables');
const mongoose = require('mongoose');
const cors = require('cors');
const expressRateLimit = require('express-rate-limit');

mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true});

const app = express();

app.use(cors());
app.use(expressRateLimit({
    windowMs: 15 * 60 * 100,
    max: 1000
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/auth', require('./routes/auth.routes'));
// app.use('/api/collections', require('./routes/my-collections'));

app.listen(PORT, (err) => {
    if (err) {
        console.log('Server Error', err);
    }
        console.log(`App has been started on port ${PORT}...`);
});

