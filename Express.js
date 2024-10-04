const express = require('express');
const app = express();

app.post('/telegram-webhook', (req, res) => {
  const update = req.body;
  const chatId = update.message.chat.id;

  // Process the update and send a response back to Telegram
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
