const express = require('express');
const bp = require('body-parser');
const app = express();

app.use(bp.json({strict:false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
});

app.post('/', (req, res) => {
});

app.listen(3000, () => {
  console.log('Roger Roger');
});