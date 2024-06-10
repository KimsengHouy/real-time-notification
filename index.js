const express = require('express');

const app = express();
const PORT = 3000;

app.get('/users-list', (req, res) => {
  // Get complete list of users
  const usersList = [];

  // Send the usersList as a response to the client
  res.send(usersList);
});

app.post('/real-time-notification', (req, res) => {
console.log(`Okay im sent`);
	res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
