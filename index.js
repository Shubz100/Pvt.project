const express = require('express');
const app = express();

app.use(express.json());

app.post('/telegram-webhook', (req, res) => {
  console.log('Received webhook request');
  console.log(req.headers);
  console.log(req.body);

  // Process the payload and send a response back to GitHub
  res.status(200).send('OK');
});

module.exports = app;
