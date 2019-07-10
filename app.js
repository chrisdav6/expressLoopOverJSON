const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Use EJS Templating Engine
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.locals.dataFromJSON = require('./data.json');
  res.render('index');
});

//Start Server
app.listen(port, () => {
  console.log(`Server started on port number ${port}`);
});