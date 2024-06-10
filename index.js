const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.get('/users-list', (req, res) => {
  // Get complete list of users
  const usersList = [];

  // Send the usersList as a response to the client
  res.send(usersList);
});

app.use(bodyParser.json());

app.post('/real-time-notification', (req, res) => {
console.log(`Okay im sent`);
const requestData = req.body; 
    console.log(`Received request data: ${JSON.stringify(requestData)}`);
	let data = req.body.data;
	var b64string = data;
	var buf = Buffer.from(b64string, 'base64');
	console.log(`Received request data: ${buf}`);
	res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
