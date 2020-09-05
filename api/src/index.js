const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 5000;

const routes = require('./routes');
app.use(routes);

app.listen(PORT, () => {
  console.log(`Up an runnig at ${PORT}`);
});