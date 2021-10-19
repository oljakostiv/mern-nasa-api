const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

mongoose.connect(config.get('mongoUri'));

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get('port') || 5000

// async function start() {
//     try {
//         await mongoose.connect(config.get('mongoUri'), {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true
//         })
//         app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
//     } catch (e) {
//         console.log('Server Error', e.message)
//         process.exit(1)
//     }
// }
//
// start()

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
        console.log(`App has been started on port ${PORT}...`);
});

