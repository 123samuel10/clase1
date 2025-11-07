const express = require('express');
const app = express();

app.get('/saludo', (req, res) => {
  res.json({ mensaje: 'Hola mundo desde Node.js + CI!' });
});

module.exports = app;
