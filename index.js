const express = require('express');
const app = express();

app.use(express.json());

app.post('/telegram-webhook', (req, res) => {
  console.log('Received webhook request');
  try {
    const update = req.body;
    const chatId = update.message.chat.id;
    // Process the update and send a response back to Telegram
    res.status(200).send('OK');
  } catch (error) {
    console.error('Error processing webhook request:', error);
    res.status(500).send('Error processing request');
  }
});

app.use((req, res) => {
  console.log('404 error: Not Found');
  res.status(404).send('Not Found');
});

module.exports = app;
