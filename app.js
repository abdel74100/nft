const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const app = express()
const nftRoutes = require('./routes/nft');

mongoose.connect('mongodb://localhost:27017/config',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(express.json());
app.use(cors());
app.use('/api/nft', nftRoutes);

module.exports = app