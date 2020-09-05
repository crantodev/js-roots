const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 3000;

const routes = require('./routes');
app.use(routes);

app.listen(PORT, () => {
  console.log(`Up an runnig at ${PORT}`);
});