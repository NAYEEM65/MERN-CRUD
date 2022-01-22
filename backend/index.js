const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const posts = require('./routes/post');
const Cors = require('Cors');

const mongoDB_url =
    'mongodb+srv://Nayeem:Nayeem123@mcrudeapp.hn2pi.mongodb.net/mcrudeapp?retryWrites=true&w=majority';

const app = express();
app.use(bodyParser.json());
app.use(Cors());

app.use('/posts', posts);

app.get('/', (req, res) => {
    res.send({ projetc: 'MERN Crud' });
});

mongoose
    .connect(mongoDB_url)
    .then(() => {
        app.listen(process.env.PORT || 8000, (req, res) => {
            console.log(`Server is running on port 8000`);
        });
    })
    .catch((err) => console.log(err.message));
