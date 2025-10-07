const express = require('express');
const cors = require('cors');
const myql = require('mysql2/promise');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;


app.use(cors());
app.use(bodyParser.json());

const dbPool = myql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'api',
  port: 3307,
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});