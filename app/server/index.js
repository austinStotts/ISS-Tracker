const express = require('express');
const bp = require('body-parser');
const mysql = require('mysql');
const Axios =  require('axios');
const app = express();

const DB = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '00000000',
  database : 'issPos'
});

app.use(bp.json({strict:false}));
app.use(express.static('public'));

app.get('/iss', (req, res) => {
  
});

app.post('/add', (requ, resp) => {
  Axios.get('http://api.open-notify.org/iss-now.json?')
  .then(res => {
    let lat = res.data.iss_position.latitude
    let lng = res.data.iss_position.longitude
    let time = res.data.timestamp
    const qry = `INSERT INTO location VALUES (0,${lat},${lng},${time})`
    DB.query(qry, (err) => {
      if(err) {
        console.log('err inserting into DB');
        resp.status(404).send()
      } else {
        resp.status(200).send({
          lat,lng,time
        })
      }
    })
  })
});

app.listen(3000, () => {
  console.log('Roger Roger');
});