const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const trains = [
  { id: 1, name: 'Train A', departureTime: '10:00 AM' },
  { id: 2, name: 'Train B', departureTime: '11:30 AM' },

];

// Define your API endpoints here

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});